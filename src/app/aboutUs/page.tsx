import React, { Fragment } from "react";
import Navbar from "@/Component/Shared/Navbar";
import AboutUsComponent from "./_components/AboutUs";

export default function AboutUs() {
  return (
    <Fragment>
      <Navbar />
       <AboutUsComponent />
    </Fragment>
  );
}
