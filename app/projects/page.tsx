import React from "react";
import { StickyScrollComponent } from "../components/stick-scroll-component";
import { WorldMapDemo } from "../components/world-map-demo";

// TODO: make sure to fix worldMapDemo so that it only renders once it's full loaded (can use loader)
export default function Page() {
  return (
    <div className="">
      <WorldMapDemo />
      <StickyScrollComponent />
    </div>
  );
}
