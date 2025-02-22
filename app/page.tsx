"use client";
import React, { useEffect, useState } from "react";
import BentoGridComponent from "./components/bento-grid-component";
import { AnimatedPinDemo } from "@/app/components/animated-pin";
import { BackgroundBeamsWithCollision } from "@/app/components/ui/background-beams-with-collision";
import { Button } from "./components/ui/moving-border";
import "bootstrap-icons/font/bootstrap-icons.css";
import { FlipWords } from "./components/ui/flip-words";
import { HeroParallaxComponent } from "./components/projects-hero-parallax-component";
import SignupFormDemo from "./components/signup-form-demo";

export default function Page() {
  const words = [
    "Full Stack Developer",
    "Software Engineer",
    "Tech Enthusiast",
  ];

  const [showModal, setShowModal] = useState(false);

  // handler to disable scrolling when modal is open
  // and close modal when clicked outside or "esc" is clicked
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden"; // disallow scrolling if modal is open
    }

    // const handleEsc = (event) => {
    //   if (event.key === "Escape") {
    //     setShowSuccessModal(false);
    //     setShowErrorModal(false);
    //   }
    // };
    // window.addEventListener("keydown", handleEsc);

    // return () => {
    //   document.body.style.overflow = "auto";
    //   window.removeEventListener("keydown", handleEsc);
    // };
  });
  return (
    <>
      {showModal && <SignupFormDemo />}
      <div className="h-full w-full">
        <BackgroundBeamsWithCollision className="mb-8">
          <h2 className="text-4xl sm:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight flex flex-col leading-6 lg:leading-none">
            Welcome, I am
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              {/* Name with Gradient */}
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                <span>Enrico Pratama</span>
              </div>

              <div className="text-sm sm:text-xl font-light tracking-wide relative italic flex flex-col sm:flex-row sm:justify-center">
                <div>
                  a
                  <FlipWords words={words} className="font-bold" />
                </div>
                based in Seattle, Washington.
              </div>
              <div className="mt-4 md:mt-0">
                <Button
                  borderRadius="1.75rem"
                  className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                  onClick={() => {
                    setShowModal(false); // TODO: change this to true on prod
                  }}
                >
                  <div className="font-bold tracking-normal text-[15px] align-baseline">
                    Contact Me <i className="bi bi-cursor-fill ml-2"></i>
                  </div>
                </Button>
              </div>
            </div>
          </h2>
        </BackgroundBeamsWithCollision>

        <BentoGridComponent />
        <HeroParallaxComponent />
        <AnimatedPinDemo />
      </div>
    </>
  );
}
