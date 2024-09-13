import React from "react";
import BentoGridComponent from "./bento-grid";
import { AnimatedPinDemo } from "@/app/components/animated-pin";
import { TracingBeam } from "@/app/components/ui/tracing-beam";
import { BackgroundBeamsWithCollision } from "@/app/components/ui/background-beams-with-collision";

export default function Page() {
  return (
    <div className="h-full w-full">
      {/* Background beam before BentoGridComponent */}
      <BackgroundBeamsWithCollision className="mb-8">
        <h2 className="text-4xl sm:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight flex flex-col">
          <div className="text-sm font-light tracking-wide relative mb-4">
            DYNAMIC WEB MAGIC WITH NEXT.JS
          </div>
          Welcome, I am
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            {/* Name with Gradient */}
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
              <span>Enrico Pratama</span>
            </div>

            {/* Full Stack Developer Text */}
            <div className="text-sm sm:text-xl font-light tracking-wide relative italic flex flex-col sm:flex-row sm:justify-center gap-1">
              <div>git
                a <span className="font-bold">Full Stack Developer</span>
              </div>
              based in Seattle, Washington.
            </div>
          </div>
        </h2>
      </BackgroundBeamsWithCollision>

      {/* Wrap content with TracingBeam */}
      <BentoGridComponent />
      <AnimatedPinDemo />
    </div>
  );
}
