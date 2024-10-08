import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import CountdownTimer from "./CountdownTimer";
import "../../styles/hero.css";
import { FaDiscord } from "react-icons/fa";

const Content: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const h1Variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,

      transition: {
        type: "easeIn",
        duration: 1.1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 },
  };

  const controls = useAnimation();
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    controls.start("visible");
  }, [controls, isInView]);
  return (
    <motion.div
      ref={ref}
      className="content max-w-[400px] m-auto text-center flex flex-col justify-center items-center space-y-4 md:p-4 p-5"
      initial="hidden"
      animate="visible"
      variants={h1Variants}
    >
      <div>
        <motion.div className="" variants={childVariants} animate="visible">
          <motion.div
            variants={childVariants}
            animate="visible"
            className="text-white w-[490px] font-poppins m-auto md:mt-4 mt-2 mb-5 md:text-[1.1rem] text-[1.1rem] sm:text-lg leading-tight"
          >
            <span className="text-purple-500 w-[490px] font-poppins font-bold m-auto md:mt-4 mt-2 mb-5 md:text-[1.2rem] text-[1.2rem] sm:text-lg leading-3">
              Dayananda Sagar University
            </span>
            <br />
            Department of Computer Science & Eng
            <span className="hidden md:inline font-poppins leading-3">ineering</span>
            <br />
            <span className="text-xs leading-tight">Harohalli, Bengaluru </span>
            <br />
            <span className="text-[18px] leading-tight text-[#41cddf] font-semibold">DSU ACM </span>
            Presents
          </motion.div>

          <motion.div
            variants={childVariants}
            className="md:text-3xl text-3xl text-white tracking-wider font-logo font-extrabold m-1 mb-2"
          >
            DSU DevHack
          </motion.div>
          <a
            href="https://discord.gg/rs3dPP5PcM"
            target="_blank"
            className="inline-flex flex-row items-center bg-blue-600 text-white px-3 py-[2px] rounded gap-1"
          >
            <FaDiscord />
            <span className="text-white">Discord</span>
          </a>

          <motion.div
            variants={childVariants}
            className="md:text-1xl text-[1rem] text-purple-500 font-content font-bold m-1 mb-2"
          >
            27th - 28th Sept 2024
          </motion.div>
          {/* <br /> */}
        </motion.div>
        <motion.p
          variants={childVariants}
          animate="visible"
          className=" text-white max-w-[360px] font-poppins m-auto md:mt-1 md:text-[1.1rem]"
        >
          Compete to Win Big:{" "}
          <span className="orange-logo md:mt-1 md:text-[1.1rem] font-poppins">
            ₹2 Lakh Cash Prize.
          </span>
          <br />
          <span className="orange-logo md:mt-1 md:text-[1.1rem] font-poppins">
            3 Lakh+ Pool Prize{" "}
          </span>
          Awaits!
        </motion.p>
      </div>
      <motion.div className="text-md text-white">
        <CountdownTimer />
        
      </motion.div>
      <div className="">
        <div
          className="apply-button"
          data-hackathon-slug="dsudevhack"
          data-button-theme="dark-inverted"
        />
      </div>
    </motion.div>
  );
};

export default Content;
