import { db } from '@/drizzle/db';
import { Articles } from '@/drizzle/schema';
import { NextResponse } from "next/server"; 

export async function POST(req: Request) {
    try {
        // Parse the JSON body
        const body = await req.json()
        
        const { title, category, description, image, content,latestDevice,brands,deviceName,showInNews  } = body;

        console.log('body detail created', body, title, category, description, image, deviceName, content,showInNews );

        if (!title || !category || !description || !image || !content) {
            return NextResponse.json({ error: 'Missing required fields' });
        }
        
        // Perform the database insertion using Drizzle ORM
        const result = await db.insert(Articles).values({
            title,
            category,
            description,
            image,
            content,
            latestDevice,
            brands,
            deviceName,
            showInNews
        });

        return NextResponse.json({success:true,message:"successfully created article",data:result})
    } catch (error) {
        console.error('Error creating article:', error);
        return NextResponse.json({ error: 'Internal Server Error' });
    }
}
