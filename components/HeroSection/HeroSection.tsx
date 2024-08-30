"use client";
import React from "react";
import Content from "./Content";
import Reveal from "./Reaveal";
// import "../../styles/background.css";
import "../../styles/hero.css";
import Image from "next/image";
import Boy from "../../public/assets/images/img.png";
import CountUp from "react-countup";
import Notification from "../Notifications/Notification";

export default function HeroSection() {
  return (
    <div className="mb-10 md:mb-36 gradient-background w-screen sm:scale-150 sm:mt-48 -mt-10">
      <Notification />
      <div className="justify-center space-x-20 items-center flex flex-col-reverse md:flex-row">
        <div className="">
          <Content />
        </div>
        <Reveal>
          <div className="heroContainer1 text-center relative">
            <Image
              src={Boy}
              alt="Hero"
              width={400}
              height={400}
              priority
              className="object-contain -ml-10"
            />
            <div className="hidden md:flex absolute top-0 md:top-[-40px] right-[-50px] h-8 w-40 py-5  items-center md:justify-center ">
              <h1 className="text-xl font-light text-rose-500">
                <CountUp
                  start={0}
                  end={670}
                  duration={2}
                  className="font-semibold text-rose-500"
                  enableScrollSpy={false}
                />
              </h1>
              <p className="text-xl font-medium text-rose-500">+ </p>
              <span className="w-1"></span>
              <p className="text-base font-medium text-rose-500">Joined</p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
