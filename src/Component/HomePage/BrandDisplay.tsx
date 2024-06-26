"use client"
import { BrandTypes } from '@/types/category';
import { Container, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function BrandDisplayComponent({brands}:{brands:BrandTypes[]}) {
    const history = useRouter();
  return (
    brands &&
        brands.map((data: BrandTypes) => {
          return (
            <Container onClick={()=> history.push(`/article/brand-wise/${data.title}`) } sx={{display:"flex",justifyContent:"space-between",borderBottom:"1px solid lightgray",p:1,cursor:"pointer"}} key={data?.id}>
              <Typography sx={{fontWeight:600}}>{data?.title}</Typography>
              <Typography><ArrowForwardIosIcon /></Typography>
            </Container>
          );
        })
  )
}
