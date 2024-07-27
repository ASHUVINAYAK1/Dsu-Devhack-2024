"use client";
import React, { useEffect } from "react";
import "@/styles/about/about.css";
import CountUp from "react-countup";
import "../../styles/about/background.css";
import { motion, useAnimation, useInView } from "framer-motion";
import "../../styles/colors.css";

const About = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);
  return (
    <>
      <div className="w-screen flex-col sm:px-14 md:px-40 lg:px-40 xl:px-80 mt-36 sm:mt-56">
        <h1 className="text-center text-white text-3xl sm:text-4xl md:text-4xl xl:text-5xl font-logo">
          What is DSU DevHacks ?
        </h1>
        <div className="mt-24 flex flex-col sm:flex-row w-full items-center justify-center gap-5 px-5" >
          <div className="basis-1/3 border-2 rounded-2xl w-full p-5 glassy-effect aboutContainer1  ">
            <h1 className="text-4xl my-2 font-semibold blue-logo">
              <CountUp
                start={0}
                end={8}
                duration={4}
                className="font-bold blue-logo"
                enableScrollSpy={true}
              />
              +
            </h1>
            <p className="text-slate-200">Themes</p>
          </div>
          <div className="basis-1/3 border-2 rounded-2xl  w-full p-5 glassy-effect">
            <h1 className="text-4xl my-2 font-semibold text-rose-500">
              <CountUp
                start={0}
                end={36}
                duration={4}
                className="font-bold text-rose-500"
                enableScrollSpy={true}
              />
              +
            </h1>
            <p className="text-slate-200 ">Hours of Hacking</p>
          </div>
          <div className="basis-1/3 border-2 rounded-2xl  w-full p-5 glassy-effect">
            <h1 className="text-4xl my-2 font-semibold text-purple-500">
              <CountUp
                start={100}
                end={200}
                duration={4}
                enableScrollSpy={true}
                className="font-bold text-purple-500"
              />
              +
            </h1>
            <p className="text-slate-200 ">Hybrid mode</p>
          </div>
          <div className="basis-1/3 border-2 rounded-2xl  w-full p-5 glassy-effect">
            <h1 className="text-4xl my-2 font-semibold orange-logo">
              ₹ &nbsp;
              <CountUp
                start={0}
                end={0}
                duration={0}
                enableScrollSpy={true}
                className="font-bold orange-logo"
              />
            </h1>
            <p className="text-slate-200 ">Free registrations</p>
          </div>
          <div className="basis-1/3 border-2 rounded-2xl  w-full p-5 glassy-effect">
            <h1 className="text-4xl my-2 font-semibold  text-green-500">
              3 -&nbsp;
              <CountUp
                start={1}
                end={4}
                duration={4}
                enableScrollSpy={true}
                className="font-bold text-green-500"
              />
            </h1>
            <p className="text-slate-200 ">Team Size</p>
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row w-full items-center justify-center gap-5 px-5 mt-5 container1 container2">
          <div className="basis-1/2 border-2 rounded-2xl sm:h-96 w-full p-5 overflow-hidden glassy-effect ">
            <p className="text-slate-200 text-lg sm:text-[1rem] sm:mt-3">
              <span className="font-bold text-purple-500">DSU DEVHACK 2024</span> is a national-level hackathon pushing the boundaries of innovation in AI, ML, IoT, Blockchain, Cybersecurity, and Cloud Computing. 🛠️
              <br />
              <br />
              This event gathers brilliant minds nationwide to create revolutionary solutions. It provides a platform for developers, designers, and enthusiasts to transform ideas, showcase skills, and network. 🤝
              <br />
              <br />
              <p className="font-bold">
                Your keyboard is your sword, your idea is your challenge, code is your vision, and DSU DevHacks is your stage! 🚨
              </p>
              <br />
              See you all in the hackathon!🔍💻
            </p>
          </div>
          <div className="basis-1/2 border-2 h-96 rounded-2xl w-full p-4 sm:h-96 glassy-effect">
            <motion.div
              ref={ref}
              variants={{
                hidden: { opacity: 0, scale: 1 },
                visible: { opacity: 1, scale: 1 },
              }}
              initial="hidden"
              animate={controls}
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
      </div>
    </>
  );
};

export default About;


