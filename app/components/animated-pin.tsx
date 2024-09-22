"use client";
import React, { useEffect, useState } from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";
import { motion } from "framer-motion";

export function AnimatedPinDemo() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const techStackIsauw = [
    {
      id: 1,
      name: "Next JS",
      image: "/logos/nextjslogo.webp",
    },
    {
      id: 2,
      name: "TypeScript",
      image: "/logos/https://cdn.worldvectorlogo.com/logos/typescript.svg",
    },
    {
      id: 3,
      name: "JavaScript",
      image: "/logos/JavaScript-logo.png",
    },

    {
      id: 4,
      name: "Tailwind CSS",
      image: "/logos/tailwindcss.png",
    },
  ];

  const techStackEchosystem = [
    {
      id: 1,
      name: "React JS",
      image: "/logos/reactLogo-2.png",
    },
    {
      id: 2,
      name: "Firebase",
      image: "/logos/firebaselogo.png",
    },
    {
      id: 3,
      name: "JavaScript",
      image: "/logos/JavaScript-logo.png",
    },
    {
      id: 4,
      name: "Node JS",
      image: "/logos/nodeLogo.jpg",
    },
    {
      id: 5,
      name: "Figma",
      image: "/logos/figmaLogo.png",
    },
  ];

  return (
    <div className="mt-16 md:mt-24 mx-auto mb-16">
      <HeroHighlight>
        {/* Radial gradient for the container to give a faded look */}
        <div className="h-[15rem] md:h-[20rem]">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
          >
            Explore some of these{" "}
            <Highlight className="text-black italic dark:text-white">
              highlighted
            </Highlight>{" "}
            personal projects
          </motion.h1>
        </div>
        <div className="h-[30rem] md:h-[20rem] w-full flex items-center justify-center">
          <div className="flex flex-wrap mx-auto justify-center max-h-full gap-40 md:gap-0">
            <PinContainer title="/isauw.org" href="https://isauw.org">
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-full">
                <Image
                  src="/projects/keraton.png"
                  width={500}
                  height={500}
                  alt="linear board demo"
                  className="flex flex-1 w-full rounded-lg mb-4 h-[10rem]"
                />
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-neutral-600 ">
                  ISAUW Website
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-neutral-500 text-md">
                    Indonesian Student Association&#39;s website, where I
                    contribute as the Lead Website Developer, with 4 other devs.
                  </span>
                </div>
                <div className="flex flex-row items-center justify-between mt-2 w-full gap-2">
                  <AnimatedTooltip items={techStackIsauw} />
                  <span className="ml-16 text-md text-neutral-600">
                    Live Site <i className="bi bi-cursor-fill ml-2"></i>
                  </span>
                </div>
              </div>
            </PinContainer>
            <PinContainer
              title="/echosystem.app"
              href="https://echosystem-485df.web.app"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-full ">
                <Image
                  src="/projects/echosystem.png"
                  width={300}
                  height={300}
                  alt="linear board demo"
                  className="flex flex-1 w-full rounded-lg mb-4 h-[10rem]"
                />
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-neutral-600 ">
                  Echosystem
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-neutral-500 text-md">
                    Check out Echosystem, a web app aimed at empowering local
                    artists, hosting masterclass and community hub for both
                    audiences and artists.
                  </span>
                </div>
                <div className="flex flex-row items-center justify-between mt-2 w-full gap-2">
                  <AnimatedTooltip items={techStackEchosystem} />
                  <span className="ml-10 text-md text-neutral-600">
                    Live Site <i className="bi bi-cursor-fill ml-2"></i>
                  </span>
                </div>
              </div>
            </PinContainer>
          </div>
        </div>
      </HeroHighlight>
    </div>
  );
}
