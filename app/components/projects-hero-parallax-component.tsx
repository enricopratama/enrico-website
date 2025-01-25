"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export function HeroParallaxComponent() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Husky Coding Project UW",
    link: "https://hcp-uw.vercel.app/",
    thumbnail: "/projects/HCP.png",
  },
  {
    title: "Analyzing Netflix",
    link: "https://analyzingnetflix.shinyapps.io/analyzingNetflix/",
    thumbnail: "/projects/analyzingNetflix.png",
  },
  {
    title: "Echosystem",
    link: "https://echosystem-485df.web.app/",
    thumbnail: "/projects/echosystem.png",
  },
  {
    title: "Digitec One",
    link: "https://digitec.one/",
    thumbnail: "/projects/digitecOne.png",
  },
  {
    title: "Music Personality Test",
    link: "https://music-personality-test.web.app/",
    thumbnail: "/projects/MPT.png",
  },

  {
    title: "DAMKAR API",
    link: "/",
    thumbnail: "/projects/damkar.jpeg",
  },
  {
    title: "GOSY",
    link: "https://devgosy.gonusa.id/AdminConfigs",
    thumbnail: "/projects/gosy.jpeg",
  },
  {
    title: "Keraton Website",
    link: "https://keraton.vercel.app",
    thumbnail: "/projects/keraton.png",
  },
  {
    title: "ISAUW Website",
    link: "https://isauw.org",
    thumbnail: "/projects/isauw.png",
  },
  {
    title: "Resumate",
    link: "https://info441-aut24-group4.onrender.com/",
    thumbnail: "/projects/resumate.png",
  },
];
