"use client";
import React, { useEffect, useState, useRef } from "react";
import "@/styles/about/about.css";
import CountUp from "react-countup";
import "../../styles/about/background.css";
import { motion, useAnimation, useInView } from "framer-motion";
import "../../styles/colors.css";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import dsuImage from "../../public/assets/images/dsu.png";
import soeImage from "../../public/assets/images/soe.png";
import naacImage from "../../public/assets/images/naac.png";

const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [countersAnimated, setCountersAnimated] = useState(false);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    if (isInView1) {
      controls1.start("visible");
    }
    if (isInView2) {
      controls2.start("visible");
    }

    // Set countersAnimated to true when the page loads to animate once
    if (!countersAnimated) {
      setCountersAnimated(true);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isInView1, isInView2, controls1, controls2, countersAnimated]);

  return (
    <>
      <div className="w-screen flex-col sm:px-14 md:px-40 lg:px-40 mt-16 xl:px-80 ">
        <div className="px-2">
          <Tilt
            tiltMaxAngleX={2.5}
            tiltMaxAngleY={5}
            glareEnable
            tiltAngleYInitial={0}
            glareMaxOpacity={0.1}
            className="fix-safari-tilt relative overflow-hidden mb-32 rounded-2xl glassy-effect p-px "
          >
            <div className="relative flex items-center justify-center md:h-64 h-48 flex-col gap-3 rounded-2xl">
              <div className="flex w-full items-center justify-evenly">
                <Image
                  src={dsuImage}
                  width={100}
                  height={100}
                  loading="lazy"
                  placeholder="blur" 
                  alt="DSU DevHacks"
                  className="md:w-[10rem] md:h-[10rem] w-[5rem] h-[rem] object-cover object-center"
                />
                <Image
                  src={naacImage}
                  width={180}
                  height={100}
                  loading="lazy"
                  placeholder="blur" 
                  alt="DSU DevHacks"
                  className="md:w-[15rem] md:h-[10rem] w-[7rem] h-[rem] sm:w-[90px] object-cover object-center"
                />
                <Image
                  src={soeImage}
                  width={200}
                  height={150}
                  loading="lazy"
                  placeholder="blur"
                  alt="DSU DevHacks"
                  className="md:w-[15rem] md:h-[20rem] w-[8rem] h-[rem] sm:w-[90px] object-cover object-center"
                />
              </div>
            </div>
          </Tilt>
        </div>
        <h1 className="text-center text-white text-3xl sm:text-4xl md:text-4xl xl:text-5xl font-logo">
          What is DSU DevHacks ?
        </h1>
        <div className="mt-24 flex flex-col sm:flex-row w-full items-center justify-center gap-5 px-5">
          <div className="basis-1/3 border-2 rounded-2xl w-full p-5 glassy-effect aboutContainer1  ">
            <h1 className="text-4xl my-2 font-semibold blue-logo">
              {countersAnimated && (
                <CountUp
                  start={0}
                  end={6}
                  duration={4}
                  className="font-bold blue-logo"
                  enableScrollSpy={false}
                />
              )}
              +
            </h1>
            <p className="text-slate-200">Themes</p>
          </div>
          <div className="basis-1/3 border-2 rounded-2xl  w-full p-5 glassy-effect">
            <h1 className="text-4xl my-2 font-semibold text-rose-500">
              {countersAnimated && (
                <CountUp
                  start={0}
                  end={36}
                  duration={4}
                  className="font-bold text-rose-500"
                  enableScrollSpy={false}
                />
              )}
              +
            </h1>
            <p className="text-slate-200 ">Hours of Hacking</p>
          </div>
          <div className="basis-1/3 border-2 rounded-2xl  w-full p-5 glassy-effect">
            <h1 className="text-[1.6rem] my-2 font-semibold text-purple-500">
              Online/Offline
            </h1>
            <p className="text-slate-200 ">Hybrid Mode</p>
          </div>
          <div className="basis-1/3 border-2 rounded-2xl  w-full p-5 glassy-effect">
            <h1 className="text-4xl my-2 font-semibold orange-logo">
              ₹ &nbsp;
              <span className="font-bold orange-logo">0</span>
            </h1>
            <p className="text-slate-200 ">Free Registrations</p>
          </div>
          <div className="basis-1/3 border-2 rounded-2xl  w-full p-5 glassy-effect">
            <h1 className="text-4xl my-2 font-semibold  text-green-500">
              {countersAnimated && (
                <CountUp
                  start={0}
                  end={3}
                  duration={4}
                  enableScrollSpy={false}
                  className="font-bold text-green-500"
                />
              )}
            </h1>
            <p className="text-slate-200 ">Team Size</p>
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row w-full items-center justify-center gap-5 px-5 mt-5 container1 container2">
          <div className="basis-1/2 border-2 rounded-2xl sm:h-[26rem] w-full p-5 overflow-hidden glassy-effect flex items-center justify-center ">
            <p className="text-slate-200 text-lg sm:text-[1rem] sm:mt-3">
              <span className="font-extrabold text-[1.2rem] text-purple-500">
                DSU DEVHACK 2024
              </span>{" "}
              is a national-level hackathon pushing the boundaries of innovation
              in AI, ML, IoT, Blockchain, Cybersecurity, and Cloud Computing at{" "}
              <span className="font-extrabold text-[1.1rem] text-purple-500">
                DSU Harohalli, Banglore, Karnataka.
              </span>{" "}
              🛠️
              <br />
              <br />
              This event gathers brilliant minds nationwide to create
              revolutionary solutions. It provides a platform for developers,
              designers, and enthusiasts to transform ideas, showcase skills,
              and network. 🤝
              <br />
              <br />
              <span className="font-bold">
                Your keyboard is your sword, your idea is your challenge, code
                is your vision, and DSU DevHacks is your stage! 🚨
              </span>
              See you all in the hackathon!🔍💻
            </p>
          </div>
          <div className="basis-1/2 border-2 h-[26rem] rounded-2xl w-full p-4 sm:h-[26rem] glassy-effect flex items-center justify-center">
            <motion.div
              ref={ref1}
              variants={{
                hidden: { opacity: 0, scale: 1 },
                visible: { opacity: 1, scale: 1 },
              }}
              initial="hidden"
              animate={controls1}
              transition={{ type: "easeIn", duration: 1.2, delay: 0 }}
              className="my-5 h-52 w-full sm:h-80 rounded-2xl "
              style={{
                backgroundImage: "url('/team_members/dsu_about.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>
        </div>
        <h1 className="text-center text-white text-3xl mt-40 sm:text-4xl md:text-4xl xl:text-5xl font-logo">
          Why Participate ?
        </h1>
        <div className="flex flex-col-reverse sm:flex-row w-full items-center justify-center gap-5 px-5 mt-24 container1 container2">
          <div className="basis-1/2 border-2 h-[26rem] rounded-2xl w-full p-4 sm:h-[26rem] glassy-effect flex items-center justify-center">
            <motion.div
              ref={ref2}
              variants={{
                hidden: { opacity: 0, scale: 1 },
                visible: { opacity: 1, scale: 1 },
              }}
              initial="hidden"
              animate={controls2}
              transition={{ type: "easeIn", duration: 1.2, delay: 0 }}
              className="my-5 h-52 w-full sm:h-80 rounded-2xl "
              style={{
                backgroundImage: "url('/team_members/dsu_about2.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>
          <div className="basis-1/2 border-2 rounded-2xl sm:h-[26rem] w-full p-5 overflow-hidden glassy-effect flex items-center justify-center">
            <p className="text-slate-200 text-lg sm:text-[1rem] sm:mt-3">
              • <span className={`font-bold ${isMobile ? 'text-white' : 'text-purple-500'}`}>Mini-Events and Workshop</span> {isMobile ? '' : ': Industry Expert Workshops on 23rd - 24rth Sept 2024 Sessions on latest tech stack'} <br />
              • <span className={`font-bold ${isMobile ? 'text-white' : 'text-purple-500'}`}>Showcase Your Skills</span> {isMobile ? '' : ': Demonstrate your coding prowess and innovative thinking on a national stage.'} <br />
              • <span className={`font-bold ${isMobile ? 'text-white' : 'text-purple-500'}`}>Win Big</span> {isMobile ? '' : ': Compete for a prize pool of ₹3 Lakh+, including a grand prize of ₹70,000!'} <br />
              • <span className={`font-bold ${isMobile ? 'text-white' : 'text-purple-500'}`}>Network with Professionals</span> {isMobile ? '' : ': Connect with tech leaders and fellow developers from across the country.'} <br />
              • <span className={`font-bold ${isMobile ? 'text-white' : 'text-purple-500'}`}>Refreshing Breaks</span> {isMobile ? '' : ': Fun activities like gaming, trivia contests and more!'} <br />
              • <span className={`font-bold ${isMobile ? 'text-white' : 'text-purple-500'}`}>Tech Talks</span> {isMobile ? '' : ': Engaging presentations on the latest technology trends.'} <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;