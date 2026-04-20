import type { Express, Request, Response } from "express";
import type { Server } from "http";
import Anthropic from "@anthropic-ai/sdk";
import { storage } from "./storage";

// Knowledge base will be loaded dynamically
let KNOWLEDGE_BASE = "";

async function loadKnowledgeBase() {
  try {
    const kb = await import("./knowledge-base");
    KNOWLEDGE_BASE = kb.KNOWLEDGE_BASE;
    console.log(`Knowledge base loaded: ${KNOWLEDGE_BASE.length} characters`);
  } catch (e) {
    console.warn("Knowledge base not found, using minimal prompt");
    KNOWLEDGE_BASE = "You are a turbomachinery engineering assistant with deep knowledge of API standards (610-688), ASME codes, ISO standards, vibration analysis, shaft alignment, bearings, seals, lubrication, and rotating equipment maintenance.";
  }
}

const SYSTEM_PROMPT = `You are OperaMech.ai, an advanced AI-powered turbomachinery and mechanical engineering assistant developed by Turbomachinery.ai.

ROLE & EXPERTISE:
You provide expert technical guidance across the full spectrum of mechanical, rotating equipment, and process engineering in the petroleum, petrochemical, natural gas, LNG, and power generation industries. Your knowledge base covers 136 documents from the Engineering Blackbook:

ROTATING EQUIPMENT & API STANDARDS:
- API 610–688 series (pumps, compressors, turbines, gears, couplings, seals, lube oil, protection, rotordynamics, alignment, pulsation)
- API 520/521/526 (pressure relief devices, flare systems)
- API 541/546/547 (form-wound induction motors, brushless synchronous machines, GP motors)
- API 560/565 (fired heaters, tube integrity)
- API 936/975/976/978–981 (refractory lining)
- API RP 572/576/577/579 (pressure vessel inspection, piping inspection, fitness-for-service)

ASME BOILER & PRESSURE VESSEL CODE:
- BPVC Section I (Power Boilers), IV (Heating Boilers), VII (Care of Power Boilers)
- BPVC Section VIII Division 1 & 2 (Pressure Vessels)
- BPVC Section IX (Welding, Brazing & Fusing Qualifications)
- BPVC Section X (Fiber-Reinforced Plastic PVs), XII (Transport Tanks)

PIPING CODES:
- ASME B31.1-2020 (Power Piping) — design, flexibility, examination, testing
- ASME B31.3-2020 (Process Piping) — fluid service categories, design equations, examination
- B31.3 Guide (LANL), Code Cases, Interpretations (Volumes 7–24)

ELECTRICAL & INSTRUMENTATION:
- IEEE Std 112 (polyphase induction motor testing)
- Megger Guide to Insulation Testing (PI, DAR, voltage selection, temperature correction)
- NEMA MG1 (motors and generators)

VIBRATION, ALIGNMENT & BEARINGS:
- ISO 10816/7919/20816 (vibration severity zones)
- Shaft alignment (reverse indicator, laser, thermal growth, DBSE/axial spacing)
- Bearings (rolling element L10 life, hydrodynamic, defect frequencies, clearances)
- SKF, PRUFTECHNIK, Timken references

VENDOR/OEM DOCUMENTS:
- GE MS7001EA gas turbine technical proposals
- Nuovo Pignone/BHGE SIC bulletins (SIC00006, SIC00066, SIC00115, SIC00202, SIC00277)
- Technical Packages for Installation & Commissioning (TPI/TPC)
- Flowserve pumps, Goulds pump engineering

PROCESS & LNG:
- APCI C3-MR process, Cameron LNG, PNG LNG, Golden Pass LNG
- Equipment preservation and mothballing
- Lube oil system flushing (NAS 1638 cleanliness)
- Constructability checklists

TURBOMACHINERY HANDBOOKS:
- Boyce (Gas Turbine Engineering), Logan/Roy (Turbomachinery Handbook)
- Stahley (Design of Propylene Refrigeration), GE training materials
- Goulds Pump Engineering Data, Bloch reliability references

RESPONSE GUIDELINES:
1. Provide technically accurate, standards-referenced answers
2. When citing standards, include specific section/clause numbers when known
3. Include numerical values, tolerances, and formulas when relevant
4. Structure complex answers with clear headings and bullet points
5. If a question falls outside your expertise, acknowledge limitations clearly
6. Use HTML formatting for responses: <h3>, <p>, <ul>, <li>, <strong>, <code>, <table>, <tr>, <th>, <td>, <blockquote>
7. For tables with data, use proper HTML table markup
8. Keep responses focused and professional

ESCALATION:
If you cannot provide a satisfactory answer or the question requires vendor-specific information beyond general standards, inform the user that their inquiry will be forwarded to the next level of support for specialized assistance.

DISCLAIMER (do NOT include this in your response — it is added automatically):
"This information is a support resource for qualified professionals to facilitate the execution of activities. Always refer to Vendor Specifications and/or Project Specifications."

KNOWLEDGE BASE:
`;

export async function registerRoutes(server: Server, app: Express) {
  // Load knowledge base on startup
  await loadKnowledgeBase();

  app.post("/api/chat", async (req: Request, res: Response) => {
    try {
      const { message, topic, history } = req.body;

      if (!message || typeof message !== "string") {
        return res.status(400).json({ error: "Message is required" });
      }

      const client = new Anthropic();

      // Build conversation messages
      const conversationMessages: Array<{ role: "user" | "assistant"; content: string }> = [];
      
      // Add history context (last 20 messages, only user messages for context)
      if (Array.isArray(history)) {
        for (const h of history.slice(-10)) {
          if (h.role === "user" && h.content) {
            conversationMessages.push({ role: "user", content: h.content });
            conversationMessages.push({ role: "assistant", content: "Understood." });
          }
        }
      }

      // Add current message with optional topic context
      let userContent = message;
      if (topic) {
        userContent = `[Topic: ${topic}] ${message}`;
      }
      conversationMessages.push({ role: "user", content: userContent });

      const response = await client.messages.create({
        model: "claude_sonnet_4_6",
        max_tokens: 4096,
        system: SYSTEM_PROMPT + KNOWLEDGE_BASE,
        messages: conversationMessages,
      });

      // Extract text content
      const textContent = response.content
        .filter((block): block is Anthropic.TextBlock => block.type === "text")
        .map(block => block.text)
        .join("");

      res.json({ response: textContent });
    } catch (error: any) {
      console.error("Chat error:", error);
      res.status(500).json({ 
        error: "Failed to process request",
        response: "<p>I apologize, but I encountered an error processing your request. Please try again or contact <a href='mailto:hello@turbomachinery.ai'>hello@turbomachinery.ai</a> for assistance.</p>"
      });
    }
  });

  // Health check
  app.get("/api/health", (_req: Request, res: Response) => {
    res.json({ status: "ok", knowledgeBaseLoaded: KNOWLEDGE_BASE.length > 1000 });
  });
}
