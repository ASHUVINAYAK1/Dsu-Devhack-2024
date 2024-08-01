"use client";
import React, { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection/HeroSection";
import BackToTop from "@/components/Backtotop";

const PrizeSection = dynamic(() => import('@/components/PrizeSection/PrizeSection'), {
  loading: () => <p>Loading...</p>,
});
const Faq = dynamic(() => import('@/components/Faq/Faq'), {
  loading: () => <p>Loading...</p>,
});
const Themes = dynamic(() => import('@/components/ThemesSection/Themes'), {
  loading: () => <p>Loading...</p>,
});
const TeamSection = dynamic(() => import('@/components/TeamSection/TeamSection'), {
  loading: () => <p>Loading...</p>,
});
const TeamSection3 = dynamic(() => import('@/components/TeamSection/TeamSection3'), {
  loading: () => <p>Loading...</p>,
});
const Timeline2 = dynamic(() => import('@/components/Timeline/Timeline2'), {
  loading: () => <p>Loading...</p>,
});
const About = dynamic(() => import('@/components/About/About'), {
  loading: () => <p>Loading...</p>,
});
const SponsorsSection2 = dynamic(() => import('@/components/SponsorsSection/SponsorsSection2'), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
 
  // const handleScrollSection = (
  //   about, themes, schedule, sponsors, prizes, team, faq
  // ) => {
  //   const scrollPosition = window.scrollY;

  //   if (scrollPosition >= 0 && scrollPosition < about) {
  //     setActiveSection("home");
  //   } else if (scrollPosition >= about && scrollPosition < themes) {
  //     setActiveSection("about");
  //   } else if (scrollPosition >= themes && scrollPosition < schedule) { 
  //     setActiveSection("themes");
  //   } else if (scrollPosition >= schedule && scrollPosition < sponsors) {
  //     setActiveSection("schedule");
  //   } else if (scrollPosition >= sponsors && scrollPosition < prizes) {
  //     setActiveSection("sponsors");
  //   } else if (scrollPosition >= prizes && scrollPosition < team) {
  //     setActiveSection("prizes");
  //   } else if (scrollPosition >= team && scrollPosition < faq) {
  //     setActiveSection("team");
  //   } else if (scrollPosition >= faq) {
  //     setActiveSection("faq");
  //   } else {
  //     setActiveSection("");
  //   }
  // };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const about = document.getElementById("about");
  //     const prizes = document.getElementById("prizes");
  //     const themes = document.getElementById("themes");
  //     const schedule = document.getElementById("schedule");
  //     const sponsors = document.getElementById("sponsors");
  //     const team = document.getElementById("team");
  //     const faq = document.getElementById("faq");

  //     if (about && themes && schedule && sponsors && prizes && team && faq) {
  //       const aboutOffset = about.offsetTop;
  //       const themesOffset = themes.offsetTop;
  //       const scheduleOffset = schedule.offsetTop;
  //       const sponsersOffset = sponsors.offsetTop;
  //       const prizesOffset = prizes.offsetTop;
  //       const teamOffset = team.offsetTop;
  //       const faqOffset = faq.offsetTop;

  //       handleScrollSection(
  //         aboutOffset,
  //         themesOffset,
  //         scheduleOffset,
  //         sponsersOffset,
  //         prizesOffset,
  //         teamOffset,
  //         faqOffset
  //       );
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [activeSection]);

  return (
    <main className="overflow-x-hidden relative bg-grey-900">
      <BackToTop/>
      <Navbar activeSection={activeSection}/>
      <HeroSection />
      <div id="about">
        <br />
        <About />
      </div>
      <div id="prizes">
        <br />
        <PrizeSection />
      </div>
      <div id="themes">
        <br />
        <Themes />
      </div>
      <div id="schedule">
        <br />
        <Timeline2 />
      </div>
      <div id="sponsors">
        <br />
        <SponsorsSection2/>
      </div>
      <div id="panel">
        <br />
        <TeamSection />
      </div>
      <div id="team2">
        <br />
        <TeamSection3 />
      </div>
      <div className="mb-24" id="faq">
        <br />
        <Faq />
      </div>
      <Footer />
    </main>
  );
}
