import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from "next/server";
import { IGenericResponse, sendResponse } from '@/utils/utils';
import { db } from '@/drizzle/db';

export async function DELETE(req: Request) {
    try {
        // Parse the JSON body
        const { id }:any = { id: 2 }


        // console.log('body detail created', id);

        // if (!id) {
        //     return NextResponse.json({ error: 'Missing Id' });
        // }

        // Perform the database insertion using Drizzle ORM
        const result = await db.delete(id);

        return NextResponse.json({ success: true, message: "successfully Delete article", data: result })
    } catch (error) {
        console.error('Error creating article:', error);
        return NextResponse.json({ error: 'Internal Server Error' });
    }
}

