"use client" 
import { useRouter } from "next/navigation";
import { useEffect } from "react";
 
export default function RedirectPageComponent({page}:{page:string}) {
  const router = useRouter();

  // You can also redirect from within the component based on certain conditions
  useEffect(() => {
    
      router.push(`${page}`);
    
  }, [router,page]);
  return (
    <>
     <div></div>
    </>
  );
}
