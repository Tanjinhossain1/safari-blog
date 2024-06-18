import { Response } from 'express';
import { NextResponse } from 'next/server';

export const truncateText = (text: string, maxLength: number) => {
  if (text?.length <= maxLength) return text;
  return text?.slice(0, maxLength) + '...';
};



type IApiReponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string | null;
  meta?: {
    page: number;
    limit: number;
    total: number;
  };
  data?: T | null;
};

export type IGenericResponse<T> = {
  meta: {
    page: number;
    limit: number;
    total: number;
  };
  data: T;
};

export const sendResponse = <T>(res: any, data: IApiReponse<T>): void => {
  const responseData: IApiReponse<T> = {
    statusCode: data.statusCode,
    success: data.success,
    message: data.message || null,
    meta: data.meta || null || undefined,
    data: data.data || null || undefined,
  };

  res.json(responseData);
};


