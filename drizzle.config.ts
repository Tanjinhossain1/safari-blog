import { defineConfig } from 'drizzle-kit';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  dialect: 'postgresql', // Ensure this matches your PostgreSQL database type
  schema: './src/drizzle/schema.ts', // Path to your schema definition files
  out: './drizzle', // Output directory for generated files
  dbCredentials: {
    host: process.env.POSTGRES_HOST || 'localhost', // Use the correct environment variable
    port: 5432, // PostgreSQL default port
    user: process.env.POSTGRES_USER || 'default', // Use the correct environment variable
    password: process.env.POSTGRES_PASSWORD || '', // Use the correct environment variable
    database: process.env.POSTGRES_DATABASE || 'verceldb', // Use the correct environment variable
    ssl: process.env.POSTGRES_URL!.includes('sslmode=require'), // Check SSL requirement
  },
});
