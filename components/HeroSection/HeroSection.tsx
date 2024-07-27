"use client";
import React from "react";
import Content from "./Content";
import Reveal from "./Reaveal";
// import "../../styles/background.css";
import "../../styles/hero.css";

export default function HeroSection() {
  return (
    <div className="mb-10 md:mb-36 gradient-background w-screen sm:scale-150 sm:mt-48 -mt-10">
      <div className="justify-center space-x-20 items-center flex flex-col-reverse md:flex-row">
        <div className="">
          <Content />
        </div>
        <Reveal>
          <div className="heroContainer1 text-center">
            <img
              src="/assets/images/img.png"
              alt="Hero"
              width={400}
              height={400}
              className="object-contain -ml-10"
            />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
