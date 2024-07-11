import React from "react";
import { auth } from "@/auth";
import NavbarHelper from "./NavbarHelperComponent";
import { fetchCategories } from "@/services/articleServices";


async function Navbar() {
  const session = await auth();
  const user = session?.user;
  console.log(session, "register  ", session,user);
   

  const Category = await fetchCategories();
  return (  
   <NavbarHelper category={Category?.data} isLoginUser={user ? user : undefined}  /> 
  );
}
export default Navbar;
