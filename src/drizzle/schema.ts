import { InferModel } from 'drizzle-orm';
import {
    jsonb,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from 'drizzle-orm/pg-core';
 
export const Articles = pgTable(
  'articles',
  {
    id: serial('id').primaryKey(),
    title: text('title').notNull(),
    category: text('category').notNull(),
    description: text('description').notNull(),
    image: text('image').notNull(),
    content: jsonb('content'),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
    updateAt: timestamp('updateAt').defaultNow().notNull(),
  }, 
); 

export const Category = pgTable(
  'category',
  {
    id: serial('id').primaryKey(),
    title: text('title').notNull().unique(),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
    updateAt: timestamp('updateAt').defaultNow().notNull(),
  }
) 