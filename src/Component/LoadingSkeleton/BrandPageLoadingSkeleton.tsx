import React, { Fragment } from "react";
import { Skeleton } from "@/components/ui/skeleton"; // Assuming you have a custom Skeleton component
import NavbarLoadingSkeleton from "../Shared/NavbarLoadingSkeleton";

export default function BrandPageLoadingSkeleton() {
  return (
    <Fragment>
      <NavbarLoadingSkeleton />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-0 md:col-span-1 lg:col-span-1 xl:col-span-2"></div>
        <div className="col-span-12 md:col-span-10 lg:col-span-9 xl:col-span-8">
          <div className="p-4 mb-4 bg-white shadow-md">
            {
                [0,1,2,3,4,5,6,7,8].map(x=>{
                    return <Skeleton className="h-[40px] w-full  bg-gray-700 mb-2" key={x} />
                })
            }

           
              
               
          </div>
        </div>
        <div className="col-span-0 md:col-span-1 lg:col-span-1 xl:col-span-2"></div>
      </div>
    </Fragment>
  );
}
