import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from "next/server";
import { IGenericResponse, sendResponse } from '@/utils/utils';
import httpStatus from 'http-status';
import { eq, ilike, and, or, desc, asc } from 'drizzle-orm/expressions';
import { sql } from 'drizzle-orm';
import { IPaginationOptions, paginationHelpers } from '@/app/api/shared/helpers';
import { serverDb } from '../../../../../lib/db';

export async function DELETE(req: Request) {
    try {
        // Parse the JSON body
        const { id }:any = { id: 2 }


        // console.log('body detail created', id);

        // if (!id) {
        //     return NextResponse.json({ error: 'Missing Id' });
        // }

        // Perform the database insertion using Drizzle ORM
        const result = await serverDb.delete(id);

        return NextResponse.json({ success: true, message: "successfully Delete article", data: result })
    } catch (error) {
        console.error('Error creating article:', error);
        return NextResponse.json({ error: 'Internal Server Error' });
    }
}

