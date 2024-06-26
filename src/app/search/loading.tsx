import CategoryLoadingSkeleton from "@/Component/LoadingSkeleton/CategoryPageLoadingPage";
import React, { Fragment } from "react";

export default function loading() {
  return (
    <Fragment>
      <CategoryLoadingSkeleton isBrandWise />
    </Fragment>
  );
}
