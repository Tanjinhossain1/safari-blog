import { NextRequest, NextResponse } from "next/server";
import { IGenericResponse, sendResponse } from '@/utils/utils';
import {  ilike, and, or, desc, asc } from 'drizzle-orm/expressions';
import { IPaginationOptions, paginationHelpers } from '@/app/api/shared/helpers';
import { CreateArticles } from "../../../../../lib/schema";
import { serverDb } from "../../../../../lib/db";
import { sql } from "drizzle-orm";

import * as schema from "@/lib/schema";

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
        const result = await serverDb.insert(CreateArticles).values({
            title,
            category,
            description,
            image,
            content,
        });

        return NextResponse.json({ success: true, message: "successfully created article", data: result })
    } catch (error) {
        console.error('Error creating article:', error);
        return NextResponse.json({ error: 'Internal Server Error' });
    }
}

export async function GET(req: NextRequest) {
    try {
        // const { searchParams } = new URL(req.url);

        // const filters = {
        //     searchTerm: searchParams.get('searchTerm'),
        //     id: searchParams.get('id'),
        //     academicFacultyId: searchParams.get('academicFacultyId'),
        // };

        // const options = {
        //     limit: parseInt(searchParams.get('limit') || '10', 10),
        //     page: parseInt(searchParams.get('page') || '1', 10),
        //     // sortBy: searchParams.get('sortBy') || 'createdAt',
        //     // sortOrder: searchParams.get('sortOrder') || 'asc',
        // };
        const total = await serverDb.select().from(CreateArticles)
        // Perform the database query using Drizzle ORM
        // const { data, meta } = await getAll(filters, options);

        return NextResponse.json({
            statusCode: 200,
            success: true,
            message: 'Get All Article successfully',
            // meta,
            // data,
            total
        });
    } catch (error) {
        console.error('Error fetching articles:', error);
        return NextResponse.json({ error: 'Internal Server Error' });
    }
}
const getAll = async (
    filters: any,
    options: IPaginationOptions
): Promise<IGenericResponse<any[]>> => {
    const { limit, page, skip } = paginationHelpers.calculatePagination(options);
    const { searchTerm } = filters;
    const whereConditions = [];

    if (searchTerm) {
        const searchConditions = ['title', 'category'].map((field: any) =>
            ilike(field, `%${searchTerm}%`)
        );
        whereConditions.push(or(...searchConditions));
    }

    // const orderBy: any = options.sortBy;

    const articles = await serverDb
        .select()
        .from(CreateArticles)
        .where(and(...whereConditions))
        .offset(skip)
        .limit(limit);
        // .orderBy(asc(CreateArticle.createdAt))
        // .orderBy(orderBy);
    //   .orderBy(orderBy)
    //   .all();

    console.log('Search   ', articles)
    
    const total = await serverDb.select().from(CreateArticles)
     
    return {
        meta: {
            total: total.length,
            page,
            limit,
        },
        data: articles,
    };
};
