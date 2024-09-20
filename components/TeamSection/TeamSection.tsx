"use client";

import React, { useEffect } from "react";
import judgeData from "./judge";
import "../../styles/team.css";
import "../../styles/team/background.css";

import { motion, AnimatePresence } from "framer-motion";

import { useState } from "react";
import Card from "./MemberTilt";

function TeamSection() {
  const [showTeam, setShowTeam] = useState("Jury");
  const [animate, setAnimate] = useState(false);

  const handleClick = (team: string) => {
    setAnimate(true);
    setShowTeam(team);
  };

  const teamButtons = [
    { team: "Jury", label: "Jury" },
    { team: "Mentor", label: "Mentor" },
  ];

  const teamMapping = {
    Jury: judgeData.Judge,
    Mentor: judgeData.Mentor,
  };

  return (
    <>
      <div className="mt-36 sm:mt-40 w-screen">
        <h1 className="text-center text-white text-3xl sm:text-4xl md:text-4xl xl:text-5xl font-logo mt-40">
          Pannel Members
        </h1>

        <div className="sm:w-full sm:flex sm:items-center sm:justify-center mt-10">
          <div className="text-center container1 container2 teamContainer1 sm:text-lg text-sm navigation relative">
            {teamButtons.map((button) => (
              <button
                key={button.team}
                onClick={() => handleClick(button.team)}
                className={`m-1 ${
                  showTeam === button.team
                    ? "rounded-xl bg-gradient-to-l from-purple-500 to-pink-500 text-white"
                    : ""
                } px-7 py-1 rounded-md font-semibold transition-colors duration-300`}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={showTeam}
            className="flex flex-wrap justify-center items-center pt-20 gap-10 sm:px-20 lg:px-96"
            initial={{
              opacity: 0,
              x: 300,
            }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ ease: "easeIn", duration: 0.4 }}
          >
            {showTeam === "Jury" ? (
              <>
                <div className="flex flex-row flex-wrap gap-4 items-center justify-center">
                  {judgeData.Judge.map((member, index) => (
                    <motion.div
                      key={member.key}
                      initial={{ opacity: 0, y: 0 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 0 }}
                    >
                      <Card member={member} />
                    </motion.div>
                  ))}
                </div>
              </>
            ) : showTeam === "Mentor" ? (
              <>
                {judgeData.Mentor.map((member) => (
                  <motion.div
                    key={member.key}
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 0 }}
                  >
                    <Card member={member} />
                  </motion.div>
                ))}
              </>
            ) : null}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

export default TeamSection;
