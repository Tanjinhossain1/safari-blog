import React from "react";
// import { auth } from "@/auth";
import NavbarHelper from "./NavbarHelperComponent";
import { auth } from "@/auth/helpers";


async function Navbar() {
  const session = await auth();
  // const user = session?.user;
  console.log(session, "register  ", session);
   

  return (
   <NavbarHelper isLoginUser={{fullName:"tanjin"}}  />
  );
}
export default Navbar;