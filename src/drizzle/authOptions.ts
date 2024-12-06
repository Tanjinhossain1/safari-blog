// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { compare } from "bcryptjs";
// import { db } from "@/drizzle/db";
// import { users } from "@/drizzle/schema";
// import { eq } from "drizzle-orm";

// export const authOptions = {
//   secret: process.env.NEXTAUTH_SECRET,
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//       },
//       authorize: async (credentials) => {
//         const email = credentials?.email;
//         const password = credentials?.password;

//         if (!email || !password) {
//           throw new Error("Please provide both email and password");
//         }

//         const user = await db.select().from(users).where(eq(users.email, email));

//         if (!user[0]) {
//           throw new Error("Invalid email or password");
//         }

//         const isMatched = await compare(password, user[0].password);

//         if (!isMatched) {
//           throw new Error("Password did not match");
//         }

//         return {
//           id: user[0].id,
//           name: user[0].fullName,
//           email: user[0].email,
//           role: user[0].role,
//         };
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, user }:any) {
//       if (user) {
//         token.id = user.id;
//         token.role = user.role;
//       }
//       return token;
//     },
//     async session({ session, token }:any) {
//       session.user.id = token.id;
//       session.user.role = token.role;
//       return session;
//     },
//   },
//   pages: {
//     signIn: "/login",
//   },
// };

// export default NextAuth(authOptions);
