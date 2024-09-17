"use client";
import React, { useEffect, useState } from "react";
import { PinContainer } from "./ui/3d-pin";

export function AnimatedPinDemo() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="mt-4 mx-auto">
      <div className="text-center">A small selection of my recent projects</div>
      <div className="h-[25rem] w-full flex items-center justify-center ">
        <div className="flex flex-wrap mx-auto justify-center max-h-full">
          <PinContainer title="/isauw.org" href="https://isauw.org">
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-neutral-600 ">
                ISAUW Website
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-neutral-500 text-md">
                  Check out one of my contribution as a Website Developer Lead
                  for Indonesian Student Association Website.
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
            </div>
          </PinContainer>
          <PinContainer
            title="/ui.aceternity.com"
            href="https://twitter.com/mannupaaji"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-neutral-600 ">
                Aceternity UI
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-neutral-500 text-md">
                  Customizable Tailwind CSS and Framer Motion Components.
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
            </div>
          </PinContainer>
        </div>
      </div>
    </div>
  );
}
