import { NextApiRequest, NextApiResponse } from 'next';
import { serverDB } from '@/drizzle/db';  // Assuming you have initialized your db connection
import { CreateArticle } from '@/drizzle/schema';
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        // Parse the JSON body
        const body = await req.json()
        
        const { title, category, description, image, content } = body;

        console.log('body detail created', body, title, category, description, image, content);

        if (!title || !category || !description || !image || !content) {
            return NextResponse.json({ error: 'Missing required fields' });
        }

        // Perform the database insertion using Drizzle ORM
        const result = await serverDB.insert(CreateArticle).values({
            title,
            category,
            description,
            image,
            content,
        });

        return NextResponse.json({success:true,message:"successfully created article",data:result})
    } catch (error) {
        console.error('Error creating article:', error);
        return NextResponse.json({ error: 'Internal Server Error' });
    }
}
export async function GET(req: Request) {
    try {
        
        // Perform the database insertion using Drizzle ORM
        const result = await serverDB.query.CreateArticle.findMany()

        return NextResponse.json({success:true,message:"successfully Get all article",data:result})
    } catch (error) {
        console.error('Error creating article:', error);
        return NextResponse.json({ error: 'Internal Server Error' });
    }
}
