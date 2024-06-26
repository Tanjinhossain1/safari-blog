import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function NavbarLoadingSkeleton() { 
  return (
    <div className="grid grid-cols-12 gap-0">
    <div className="col-span-0 md:col-span-1 lg:col-span-[1.1] xl:col-span-2"></div>
    <div className="col-span-12 md:col-span-10 lg:col-span-[9.8] xl:col-span-8 m-0 p-0">
      <Skeleton className="mb-1 h-[70px] w-full" />
      <div className="w-full h-[40px] bg-gray-200 animate-pulse"></div>
    </div>
    <div className="col-span-0 md:col-span-1 lg:col-span-[1.1] xl:col-span-2"></div>
  </div>
  );
}

export default NavbarLoadingSkeleton;
