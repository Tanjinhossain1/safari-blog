import { NextRequest, NextResponse } from "next/server";
import { IGenericResponse, sendResponse } from '@/utils/utils';
// import { ilike, and, or, desc, asc } from 'drizzle-orm/expressions';
import { IPaginationOptions, paginationHelpers } from '@/app/api/shared/helpers';
import { db } from "@/drizzle/db";
import { Articles } from "@/drizzle/schema";
import { and, count, desc, ilike, or } from "drizzle-orm";

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
        const result = await db.insert(Articles).values({
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
        const { searchParams } = new URL(req.url);

        const filters = {
            searchTerm: searchParams.get('searchTerm'),
            id: searchParams.get('id'),
            category: searchParams.get('category'),
            latestDevice: searchParams.get('latestDevice'),
            all: searchParams.get('all'),
            brands: searchParams.get('brands'),
            showInNews: searchParams.get('showInNews'),
        };

        const options = {
            limit: parseInt(searchParams.get('limit') || '10', 10),
            page: parseInt(searchParams.get('page') || '1', 10),
            // sortBy: searchParams.get('sortBy') || 'createdAt',
            // sortOrder: searchParams.get('sortOrder') || 'asc',
        };
        const total = (await db.select().from(Articles))
        // Perform the database query using Drizzle ORM
        const { data, meta } = await getAll(filters, options);

        return NextResponse.json({
            statusCode: 200,
            success: true,
            message: 'Get All  Article successfully',
            meta,
            data,
            // total
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
    const { searchTerm, category, latestDevice, all,brands,showInNews  } = filters;
    const whereConditions = [];

    if (category) {
        const searchConditions = ilike(Articles["category"], `%${category}%`)

        whereConditions.push(searchConditions);
    }
    if (showInNews) {
        const searchConditions = ilike(Articles["showInNews"], `%${showInNews}%`)

        whereConditions.push(searchConditions);
    }
    if (latestDevice) {
        const searchConditions = ilike(Articles["latestDevice"], `%${latestDevice}%`)

        whereConditions.push(searchConditions);
    }
    if (brands) {
        const searchConditions = ilike(Articles["brands"], `%${brands}%`)

        whereConditions.push(searchConditions);
    }
    if (searchTerm) {
        const searchConditions = ['title', 'category', 'description'].map((field) =>
            ilike((Articles as any)[field], `%${searchTerm}%`)
        );

        whereConditions.push(or(...searchConditions));
    }

    // const orderBy: any = options.sortBy;

    const articles = all === "all" ? await db
        .select()
        .from(Articles)
        .where(and(...whereConditions))
        .orderBy(desc(Articles.id))
        : await db
            .select()
            .from(Articles)
            .where(and(...whereConditions))
            .orderBy(desc(Articles.id))
            .offset(skip)
            .limit(limit);
    // .orderBy(asc(CreateArticle.createdAt))
    // .orderBy(orderBy);
    //   .orderBy(orderBy)
    //   .all();

    const total = await db.select({
        count: count(),
    }).from(Articles).where(and(...whereConditions)).execute().then((res) => res[0].count)

    return {
        meta: {
            total,
            page,
            limit,
        },
        data: articles,
    };
};
