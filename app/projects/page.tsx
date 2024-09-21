import React from "react";
import { GlobeComponent } from "../components/globe-component";
import BentoGridComponent from "../components/bento-grid-component";
import { StickyScrollComponent } from "../components/stick-scroll-component";

export default function Page() {
  return (
    <div className="">
      <GlobeComponent />
      <StickyScrollComponent />
    </div>
  );
}
