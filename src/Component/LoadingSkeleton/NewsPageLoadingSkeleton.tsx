import NavbarLoadingSkeleton from "@/Component/Shared/NavbarLoadingSkeleton";
import { Skeleton } from "@/components/ui/skeleton";
// import { Grid, Paper, Skeleton } from "@mui/material";
import React, { Fragment } from "react";

export default function NewsPageLoadingSkeletonForPaper() {
  return (
    <Fragment>
      {/* <Skeleton variant="rectangular" sx={{ height: "100vh", backgroundColor: "#5c5b5b" }} /> */}
      <NavbarLoadingSkeleton /> 
      <div className="flex justify-center">
      <div className="w-full lg:w-11/12 xl:w-8/12 p-4 mb-4 bg-white shadow-md">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-8/12">
          
          <div className="mt-2 grid grid-cols-12 gap-1">
                {[0, 1, 2, 3].map((x) => (
                  <Fragment key={x}> 
                    <div className="col-span-12 sm:col-span-5 ">
                      <Skeleton className="h-[200px] w-[350px] bg-gray-700" />
                    </div>
                    <div className="col-span-0 sm:col-span-1 lg:col-span-0.5 xl:col-span-0.5"></div>
                    <div className="col-span-12 sm:col-span-6">
                      <Skeleton className="h-[20px] w-full bg-gray-700 mt-2" />
                      <Skeleton className="h-[20px] w-[120px] bg-gray-700 mt-2" />
                      <Skeleton className="h-[60px] w-full bg-gray-700 mt-2" />
                      <Skeleton className="h-[40px] w-[130px] bg-gray-700 mt-2 mb-5" />
                    </div>
                  </Fragment>
                ))}
              </div>
          </div>
        </div>
      </div>
    </div>
    </Fragment>
  );
}
