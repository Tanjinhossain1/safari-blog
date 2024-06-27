import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { db } from "./src/drizzle/db";
import { users } from "./src/drizzle/schema";
import { eq } from "drizzle-orm";
import { compare } from "bcryptjs"


export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: 'email' },
                password: { label: "Password", type: 'password' },
            },

            authorize: async (credentials) =>{
                const email = credentials?.email as string | undefined;
                const password = credentials?.password as string | undefined;

                if(!email || !password) {
                    throw new Error('Please provide both email and password')
                }

                const user:any = await db.select().from(users).where(eq(users.email, email))

                if(!user) {
                    throw new Error('Invalid email or password')
                }
                const isMatched = await compare(password,user.password)

                if(!isMatched) {
                    throw new Error('Password did not matched')
                }
                const userData = {
                    fullName:user.fullName,
                    email:user.email,
                    id:user.id,
                    role:user.role,
                }
                return  userData
            },
        })
    ]
})