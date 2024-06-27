"use server";

import { redirect } from "next/navigation";
import { hash } from "bcryptjs";
import { signIn } from "../../auth";
import { users } from "@/drizzle/schema";
import { db } from "@/drizzle/db";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

const login = async (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    console.log('email,password',email, password);
    try {
        await signIn("credentials", {
            redirect: false,
            callbackUrl: "/",
            email,
            password,
        });
        redirect("/");
    } catch (error) {
        const someError = error as any;
        return someError.cause;
    }
};

const register = async (formData: FormData) => {
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const role = formData.get("role") as string || "user";

    if (!fullName || !role || !email || !password) {
        throw new Error("Please fill all fields");
    }


    // existing user
    const existingUser = await db.select().from(users).where(eq(users.email, email))
        console.log('user exist   ', existingUser);
        // if (existingUser[0]) {
        // //    return <HomePage />
        // }
    const hashedPassword = await hash(password, 12);

    await db.insert(users).values({
        fullName,
        email,
        password: hashedPassword,
        role,
    });
    console.log(`User created successfully 🥂`);
    redirect("/login");
};

const fetchAllUsers = async () => {
    const allUser = await db.select().from(users).execute();
    return allUser;
};

export { register, login, fetchAllUsers };