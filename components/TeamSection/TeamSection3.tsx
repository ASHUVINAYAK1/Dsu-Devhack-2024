"use client";

import React, { useState } from "react";
import teamData from "./team";
import "../../styles/team.css";
import "../../styles/team/background.css";

import { motion, AnimatePresence } from "framer-motion";

import Card from "./MemberTilt";

type TeamKey = "student" | "organizer" | "web" | "sponsorship" | "promotion" | "design" | "technical" | "drafting" | "Facuty_Coordinator" | "Faculty";

type TeamMember = {
  key: number;
  id: string;
  name?: string;
  linkedin: string;
  github: string;
  image: string;
};

type TeamData = {
  [key in TeamKey]: TeamMember[];
};

function TeamSection3() {
  const [showTeam, setShowTeam] = useState<TeamKey>("student");
  const [animate, setAnimate] = useState(false);

  const handleClick = (team: TeamKey) => {
    setAnimate(true);
    setShowTeam(team);
  };

  const teamButtons = [
    { team: "student", label: "Student Committee" },
    { team: "organizer", label: "Faculty Committee" },
    // { team: "web", label: "Web" },
    // { team: "sponsorship", label: "Sponsorship" },
    // { team: "promotion", label: "Promotion" },
    // { team: "design", label: "Design" },
    // { team: "technical", label: "Technical" },
    // { team: "drafting", label: "Drafting" },
    // { team: "Facuty_Coordinator", label: "Faculty Coordinator" },
    // { team: "Faculty", label: "Faculty" },
  ];

  const teamMapping: TeamData = {
    student: teamData.core,
    organizer: teamData.coordinators,
    design: teamData.design_team,
    promotion: teamData.promotion_team,
    sponsorship: teamData.sponsorship_team,
    web: teamData.web_team,
    technical: teamData.technical_team,
    drafting: teamData.drafting_team,
    Facuty_Coordinator: teamData.Facuty_Coordinator,
    Faculty: teamData.Faculty,
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
    <div className="mt-36 sm:mt-40 w-screen">
      <h1 className="text-center text-white text-3xl sm:text-4xl md:text-4xl xl:text-5xl font-logo mt-40">
        Organizing Team
      </h1>

      <div className="sm:w-full sm:flex sm:items-center sm:justify-center mt-10">
        <div className="text-center container1 container2 teamContainer1 sm:text-lg text-sm navigation">
          {teamButtons.map((button, index) => (
            <button
              key={button.team}
              onClick={() => handleClick(button.team as TeamKey)}
              className={`m-1 px-2 py-1 rounded-md font-semibold ${
                showTeam === button.team ? "rounded-xl active" : ""
              }`}
              style={{ position: 'relative' }}
            >
              {button.label}
            </button>
          ))}
          <div className={`animation ${showTeam}`} />
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={showTeam}
          className="flex flex-wrap justify-center items-center pt-20 gap-10 sm:px-20 lg:px-96"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
        >
          {teamMapping[showTeam]?.map((member) => (
            <motion.div
              key={member.key}
              variants={variants}
            >
              <Card member={member} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default TeamSection3;
