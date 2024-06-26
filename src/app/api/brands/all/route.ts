import { db } from '@/drizzle/db';
import { Brands, Category } from '@/drizzle/schema';
import { desc } from 'drizzle-orm';
import { NextResponse } from "next/server"; 

export async function GET(req: Request) {
    try {
        
        // Perform the database insertion using Drizzle ORM
        const result = await db.select().from(Brands).orderBy(desc(Brands.createdAt)).execute();

        return NextResponse.json({success:true,message:"successfully Get all Brands",data:result})
    } catch (error) {
        console.error('Error creating article:', error);
        return NextResponse.json({ error: 'Internal Server Error' });
    }
}