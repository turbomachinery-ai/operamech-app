import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import { conversations, messages, type Conversation, type Message, type InsertConversation, type InsertMessage } from "@shared/schema";
import { eq, desc } from "drizzle-orm";

const sqlite = new Database("database.sqlite");
const db = drizzle(sqlite);

// Create tables
sqlite.exec(`
  CREATE TABLE IF NOT EXISTS conversations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL DEFAULT 'New Conversation',
    created_at TEXT NOT NULL DEFAULT ''
  );
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    conversation_id INTEGER NOT NULL,
    role TEXT NOT NULL,
    content TEXT NOT NULL,
    topic TEXT,
    created_at TEXT NOT NULL DEFAULT ''
  );
`);

export interface IStorage {
  createConversation(data: InsertConversation): Conversation;
  getConversation(id: number): Conversation | undefined;
  listConversations(): Conversation[];
  createMessage(data: InsertMessage): Message;
  getMessages(conversationId: number): Message[];
}

export class DatabaseStorage implements IStorage {
  createConversation(data: InsertConversation): Conversation {
    return db.insert(conversations).values({
      ...data,
      createdAt: new Date().toISOString(),
    }).returning().get();
  }

  getConversation(id: number): Conversation | undefined {
    return db.select().from(conversations).where(eq(conversations.id, id)).get();
  }

  listConversations(): Conversation[] {
    return db.select().from(conversations).orderBy(desc(conversations.id)).all();
  }

  createMessage(data: InsertMessage): Message {
    return db.insert(messages).values({
      ...data,
      createdAt: new Date().toISOString(),
    }).returning().get();
  }

  getMessages(conversationId: number): Message[] {
    return db.select().from(messages).where(eq(messages.conversationId, conversationId)).all();
  }
}

export const storage = new DatabaseStorage();
