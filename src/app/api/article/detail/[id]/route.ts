import { db } from "@/drizzle/db";
import { Articles } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
         
        const articleId = searchParams.get('id');
        console.log('id   ',searchParams, articleId);
        const data = await db.select().from(Articles).where(eq(Articles.id, Number(articleId)))


        return NextResponse.json({
            statusCode: 200,
            success: true,
            message: 'Get Details Article successfully', 
            data,
        });
    } catch (error) {
        console.error('Error fetching articles:', error);
        return NextResponse.json({ error: 'Internal Server Error' });
    }
}