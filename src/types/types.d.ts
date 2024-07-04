// types.d.ts or wherever you define custom types
import { User } from 'next-auth';

declare module 'next-auth' {
  interface User {
    fullName?: string; // Adjust the type as per your schema
    role?: string; // Add other custom fields if needed
  }
}
