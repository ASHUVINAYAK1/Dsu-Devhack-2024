"use client";

import React, { useEffect } from "react";
import teamData from "./team";
import "../../styles/team.css";
import "../../styles/team/background.css";

import { motion, AnimatePresence } from "framer-motion";

import { useState } from "react";
import Card from "./MemberTilt";

function TeamSection3() {
  const [showTeam, setShowTeam] = useState("student");
  const [animate, setAnimate] = useState(false);

  const handleClick = (team: string) => {
    setAnimate(true);
    setShowTeam(team);
  };

  const teamButtons = [
    { team: "student", label: "StuCo" },
    { team: "organizer", label: "Core" },
    { team: "web", label: "Web" },
    { team: "sponsorship", label: "Sponsorship" },
    { team: "promotion", label: "Promotion" },
    { team: "design", label: "Design" },


  ];

  const teamMapping = {
    student: teamData.organizers,
    organizer: teamData.organizers,
    design: teamData.design_team,
    promotion: teamData.promotion_team,
    sponsorship: teamData.sponsorship_team,
    web: teamData.web_team,
  };

  const variants = {
    initial: {
      opacity: 0,
      scale: 0.8,
      rotate: 10,
    },
    animate: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      rotate: -10,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <div className="mt-36 sm:mt-40 w-screen">
        <h1 className="text-center text-white text-3xl sm:text-4xl md:text-4xl xl:text-5xl font-logo mt-40">
          Organizing  Team
        </h1>

        <div className="sm:w-full sm:flex sm:items-center sm:justify-center mt-10">
          <div className="text-center container1 container2  teamContainer1 sm:text-lg text-sm navigation">
            {teamButtons.map((button) => (
              <button
                key={button.team}
                onClick={() => handleClick(button.team)}
                className={`m-1 ${
                  showTeam === button.team ? "rounded-xl active" : ""
                } px-2 py-1 rounded-md font-semibold`}
              >
                {button.label}
              </button>
            ))}
            <div className={`animation ${showTeam} bg-gradient-to-l  from-purple-500  to-pink-500`} />
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={showTeam}
            className="flex flex-wrap justify-center items-center pt-20 gap-10 sm:px-20  lg:px-96"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
          >
            {showTeam === "student" ? (
              <>
                <div className="flex flex-row flex-wrap gap-4 items-center justify-center">
                  {teamData.organizers.map((member, index) =>
                      <motion.div
                        key={member.key}
                        variants={variants}
                      >
                        <Card member={member} />
                      </motion.div>
                    )
                  }
                </div>
              </>
            ) : showTeam === "design" ? (
              <>
                {teamData.design_team.map((member, index) => (
                  <motion.div
                    key={member.key}
                    variants={variants}
                  >
                    <Card member={member} />
                  </motion.div>
                ))}
              </>
            ) : showTeam === "sponsorship" ? (
              <>
                {teamData.sponsorship_team.map((member, index) => (
                  <motion.div
                    key={member.key}
                    variants={variants}
                  >
                    <Card member={member} />
                  </motion.div>
                ))}
              </>
            ) :showTeam === "promotion" ? (
              <>
                {teamData.promotion_team.map((member, index) => (
                  <motion.div
                    key={member.key}
                    variants={variants}
                  >
                    <Card member={member} />
                  </motion.div>
                ))}
              </>
            ): showTeam === "web" ? (
              <>
                {teamData.web_team.map((member, index) => (
                  <motion.div
                    key={member.key}
                    variants={variants}
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

export default TeamSection3;
