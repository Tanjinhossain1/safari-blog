import React from "react";
import { auth } from "@/auth";
import NavbarHelper from "./NavbarHelperComponent";


async function Navbar() {
  const session = await auth();
  const user = session?.user;
  console.log(session, "register  ", session,user);
   

  return (  
   <NavbarHelper isLoginUser={user ? user : undefined}  /> 
  );
}
export default Navbar;
