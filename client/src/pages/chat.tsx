import { useState, useRef, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Send, RotateCcw, Home, Share2, ChevronDown } from "lucide-react";

const TOPICS = [
  { id: "alignment", label: "Alignment", icon: "⊕" },
  { id: "vibration", label: "Vibration Analysis", icon: "〰" },
  { id: "bearings", label: "Bearings", icon: "◎" },
  { id: "seals", label: "Seals", icon: "◉" },
  { id: "lubrication", label: "Lubrication", icon: "💧" },
  { id: "compressors", label: "Compressors", icon: "⟳" },
  { id: "pumps", label: "Pumps", icon: "⇌" },
  { id: "gas-turbines", label: "Gas Turbines", icon: "🔥" },
  { id: "steam-turbines", label: "Steam Turbines", icon: "♨" },
  { id: "preservation", label: "Preservation", icon: "🛡" },
  { id: "standards", label: "Standards", icon: "📋" },
  { id: "conversions", label: "Conversions", icon: "⇔" },
];

const DISCLAIMER = "This information is a support resource for qualified professionals to facilitate the execution of activities. Always refer to Vendor Specifications and/or Project Specifications.";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  topic?: string;
  timestamp: string;
}

// Neural network SVG logo (OperaMech style — center node with 6 surrounding nodes)
function OperaMechLogo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-label="OperaMech.ai logo">
      <circle cx="16" cy="16" r="3.5" fill="#0891b2" />
      <circle cx="5.5" cy="7" r="2" stroke="#0891b2" strokeWidth="1.2" />
      <circle cx="5.5" cy="25" r="2" stroke="#0891b2" strokeWidth="1.2" />
      <circle cx="26.5" cy="7" r="2" stroke="#0891b2" strokeWidth="1.2" />
      <circle cx="26.5" cy="25" r="2" stroke="#0891b2" strokeWidth="1.2" />
      <circle cx="16" cy="3" r="1.75" stroke="#0891b2" strokeWidth="1.2" />
      <circle cx="16" cy="29" r="1.75" stroke="#0891b2" strokeWidth="1.2" />
      <line x1="7" y1="8" x2="13.5" y2="14.5" stroke="#0891b2" strokeWidth="1" strokeLinecap="round" />
      <line x1="25" y1="8" x2="18.5" y2="14.5" stroke="#0891b2" strokeWidth="1" strokeLinecap="round" />
      <line x1="7" y1="24" x2="13.5" y2="17.5" stroke="#0891b2" strokeWidth="1" strokeLinecap="round" />
      <line x1="25" y1="24" x2="18.5" y2="17.5" stroke="#0891b2" strokeWidth="1" strokeLinecap="round" />
      <line x1="16" y1="4.75" x2="16" y2="12.5" stroke="#0891b2" strokeWidth="1" strokeLinecap="round" />
      <line x1="16" y1="19.5" x2="16" y2="27.25" stroke="#0891b2" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

function TypingIndicator() {
  return (
    <div className="flex items-start gap-3 px-4 py-2">
      <div className="w-8 h-8 rounded-full bg-[hsl(192,87%,37%)] flex items-center justify-center flex-shrink-0">
        <OperaMechLogo size={20} />
      </div>
      <div className="chat-bubble-assistant">
        <div className="typing-indicator flex gap-1.5 py-1">
          <span></span><span></span><span></span>
        </div>
      </div>
    </div>
  );
}

function MessageBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user";

  return (
    <div className={`flex items-start gap-3 px-4 py-1.5 ${isUser ? "flex-row-reverse" : ""}`}>
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[hsl(192,87%,37%)] to-[hsl(192,70%,28%)] flex items-center justify-center flex-shrink-0 shadow-sm">
          <OperaMechLogo size={20} />
        </div>
      )}
      <div className={`max-w-[80%] ${isUser ? "chat-bubble-user" : "chat-bubble-assistant"}`}>
        {isUser ? (
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
        ) : (
          <div className="assistant-content text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: message.content }} />
        )}
        {!isUser && (
          <div className="mt-3 pt-2 border-t border-[hsl(210,16%,90%)]">
            <p className="text-[10px] leading-snug text-[hsl(215,10%,55%)] italic">{DISCLAIMER}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Chat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [showTopics, setShowTopics] = useState(true);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMutation = useMutation({
    mutationFn: async (userMessage: string) => {
      const res = await apiRequest("POST", "/api/chat", {
        message: userMessage,
        topic: selectedTopic,
        history: messages.slice(-20).map(m => ({ role: m.role, content: m.role === "user" ? m.content : "" })),
      });
      return res.json();
    },
    onSuccess: (data: { response: string }) => {
      const assistantMsg: ChatMessage = {
        id: Date.now().toString() + "-a",
        role: "assistant",
        content: data.response,
        timestamp: new Date().toISOString(),
      };
      setMessages(prev => [...prev, assistantMsg]);
    },
    onError: () => {
      const errorMsg: ChatMessage = {
        id: Date.now().toString() + "-err",
        role: "assistant",
        content: "<p>I apologize, but I'm unable to process your request at this time. Please try again or contact <a href='mailto:hello@turbomachinery.ai' class='text-[hsl(192,87%,37%)] underline'>hello@turbomachinery.ai</a> for assistance.</p>",
        timestamp: new Date().toISOString(),
      };
      setMessages(prev => [...prev, errorMsg]);
    },
  });

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed || sendMutation.isPending) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: trimmed,
      topic: selectedTopic || undefined,
      timestamp: new Date().toISOString(),
    };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setShowTopics(false);
    sendMutation.mutate(trimmed);

    // Reset textarea height
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleNewChat = () => {
    setMessages([]);
    setSelectedTopic(null);
    setShowTopics(true);
    setInput("");
  };

  const handleTopicClick = (topicId: string) => {
    setSelectedTopic(topicId);
    const topic = TOPICS.find(t => t.id === topicId);
    if (topic) {
      setInput(`I need help with ${topic.label.toLowerCase()}`);
      inputRef.current?.focus();
    }
  };

  const handleShare = () => {
    const url = "https://www.turbomachinery.ai";
    if (navigator.share) {
      navigator.share({ title: "Turbomachinery.ai", url });
    } else {
      navigator.clipboard?.writeText(url);
    }
  };

  const handleTextareaInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    // Auto-resize
    const el = e.target;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 120) + "px";
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* ===== HEADER ===== */}
      <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-lg border-b border-[hsl(210,16%,88%)]" data-testid="header">
        <div className="flex items-center justify-between px-4 h-14 max-w-3xl mx-auto">
          <div className="flex items-center gap-3">
            <OperaMechLogo size={28} />
            <div>
              <h1 className="text-sm font-semibold text-foreground leading-tight">OperaMech.ai</h1>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] text-muted-foreground leading-none">Turbomachinery Assistant</span>
                <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-[hsl(192,87%,37%)]/10 text-[hsl(192,87%,37%)] leading-none">BETA</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleNewChat}
              className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-[hsl(210,18%,93%)] transition-colors"
              title="New conversation"
              data-testid="button-new-chat"
            >
              <RotateCcw size={16} className="text-muted-foreground" />
            </button>
            <a
              href="https://www.turbomachinery.ai"
              className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-[hsl(210,18%,93%)] transition-colors"
              title="Visit website"
              data-testid="link-home"
            >
              <Home size={16} className="text-muted-foreground" />
            </a>
            <button
              onClick={handleShare}
              className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-[hsl(210,18%,93%)] transition-colors"
              title="Share"
              data-testid="button-share"
            >
              <Share2 size={16} className="text-muted-foreground" />
            </button>
          </div>
        </div>
      </header>

      {/* ===== CHAT AREA ===== */}
      <main className="flex-1 overflow-y-auto chat-scroll" data-testid="chat-area">
        <div className="max-w-3xl mx-auto py-4">
          {/* Welcome screen */}
          {messages.length === 0 && (
            <div className="px-4 py-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[hsl(192,87%,37%)] to-[hsl(192,70%,28%)] mb-4 shadow-md">
                  <OperaMechLogo size={40} />
                </div>
                <h2 className="text-lg font-semibold text-foreground mb-1">OperaMech.ai</h2>
                <p className="text-sm text-muted-foreground max-w-md mx-auto">
                  AI-powered turbomachinery engineering assistant. Select a topic or ask any question about rotating equipment, standards, alignment, vibration analysis, and more.
                </p>
              </div>

              {/* Topic grid */}
              {showTopics && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-w-lg mx-auto" data-testid="topic-grid">
                  {TOPICS.map(topic => (
                    <button
                      key={topic.id}
                      onClick={() => handleTopicClick(topic.id)}
                      className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-[hsl(210,16%,88%)] bg-white hover:border-[hsl(192,87%,37%)] hover:bg-[hsl(192,87%,37%)]/5 transition-all text-left group"
                      data-testid={`button-topic-${topic.id}`}
                    >
                      <span className="text-base">{topic.icon}</span>
                      <span className="text-xs font-medium text-foreground group-hover:text-[hsl(192,87%,37%)]">{topic.label}</span>
                    </button>
                  ))}
                </div>
              )}

              {/* Sample questions */}
              <div className="mt-6 space-y-2 max-w-lg mx-auto">
                <p className="text-xs text-muted-foreground font-medium px-1">Try asking:</p>
                {[
                  "What are the API 686 alignment tolerances for a 3600 RPM pump?",
                  "Explain dry gas seal operating principles per API 614",
                  "What vibration severity levels apply per ISO 10816 for a centrifugal compressor?",
                ].map((q, i) => (
                  <button
                    key={i}
                    onClick={() => { setInput(q); inputRef.current?.focus(); }}
                    className="w-full text-left px-3 py-2 rounded-lg border border-dashed border-[hsl(210,16%,84%)] hover:border-[hsl(192,87%,37%)] hover:bg-[hsl(192,87%,37%)]/5 text-xs text-muted-foreground hover:text-foreground transition-all"
                    data-testid={`button-sample-${i}`}
                  >
                    "{q}"
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Messages */}
          {messages.map(msg => (
            <MessageBubble key={msg.id} message={msg} />
          ))}

          {/* Typing indicator */}
          {sendMutation.isPending && <TypingIndicator />}

          <div ref={chatEndRef} />
        </div>
      </main>

      {/* ===== TOPIC PILL (when topic selected) ===== */}
      {selectedTopic && messages.length > 0 && (
        <div className="flex justify-center py-1 bg-background border-t border-[hsl(210,16%,92%)]">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[hsl(192,87%,37%)]/10 text-[hsl(192,87%,37%)]">
            <span className="text-xs">{TOPICS.find(t => t.id === selectedTopic)?.icon}</span>
            <span className="text-[11px] font-medium">{TOPICS.find(t => t.id === selectedTopic)?.label}</span>
            <button onClick={() => setSelectedTopic(null)} className="ml-1 hover:opacity-70 text-xs">✕</button>
          </div>
        </div>
      )}

      {/* ===== INPUT BAR ===== */}
      <div className="border-t border-[hsl(210,16%,88%)] bg-white/90 backdrop-blur-lg" data-testid="input-bar">
        <div className="max-w-3xl mx-auto px-4 py-3">
          <div className="flex items-end gap-2 bg-[hsl(210,33%,96%)] rounded-2xl border border-[hsl(210,16%,88%)] focus-within:border-[hsl(192,87%,37%)] focus-within:ring-2 focus-within:ring-[hsl(192,87%,37%)]/20 transition-all px-4 py-2">
            <textarea
              ref={inputRef}
              value={input}
              onChange={handleTextareaInput}
              onKeyDown={handleKeyDown}
              placeholder="Ask about turbomachinery..."
              rows={1}
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground resize-none outline-none min-h-[24px] max-h-[120px] leading-relaxed"
              data-testid="input-message"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || sendMutation.isPending}
              className="w-8 h-8 rounded-full bg-[hsl(192,87%,37%)] text-white flex items-center justify-center flex-shrink-0 hover:bg-[hsl(192,70%,28%)] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              data-testid="button-send"
            >
              <Send size={14} />
            </button>
          </div>
          <p className="text-[9px] text-center text-muted-foreground mt-2">
            {DISCLAIMER}
          </p>
        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <footer className="text-center py-2 border-t border-[hsl(210,16%,92%)] bg-white">
        <p className="text-[10px] text-muted-foreground">© {new Date().getFullYear()} Turbomachinery.ai</p>
      </footer>
    </div>
  );
}
