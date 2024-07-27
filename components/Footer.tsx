"use client";
import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";

import {
  FaDiscord,
  FaInstagram,
  FaLinkedinIn,
  FaMailBulk,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaMapSigns,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const SOCIALS = {
    instagram: "https://instagram.com/duhacks2022?igshid=YmMyMTA2M2Y=",
    discord: "https://discord.gg/T2fzD8c2j2",
    linkedin: "https://www.linkedin.com/company/duhacks/",
    twitter: "https://twitter.com/DuHacks?t=CPjNJmQX1JxhIHb_YI0Tuw&s=09",
    email: "mailto:contact@duhacks.tech",
    mail: "contact@duhacks.tech",
  };

  return (
    <footer className="mt-24 pt-5 lg:pt-8 pb-2 lg:pb-8 bg-black bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20">
      <div className="flex flex-col">
        <div className="lg:hidden flex justify-center mb-7 font-bold" />

        <div className="flex justify-center text-sm lg:text-3xl space-x-4 mb-9">
          <a href="https://discord.com/invite/Hz5UxnUNBV" target="_black">
            <span className="sr-only">Discord</span>
            <FaDiscord />
          </a>
          <div className=" border-r-2 transform rotate-12 " />
          <a href="https://x.com/dsu_devhack24" target="_black">
            <span className="sr-only">Twitter</span>
            <FaXTwitter />
          </a>
          <div className=" border-r-2 transform rotate-12" />

          <a href="https://www.linkedin.com/in/dsu-devhack/" target="_black">
            <span className="sr-only ">LinkedIn</span>
            <FaLinkedinIn />
          </a>
          <div className=" border-r-2 transform rotate-12" />

          <a href="https://www.youtube.com/@DSUDevHack" target="_black">
            <span className="sr-only">YouTube</span>
            <FaYoutube />
          </a>
          <div className=" border-r-2 transform rotate-12" />

          <a href="https://www.instagram.com/dsudevhack/" target="_black">
            <span className="sr-only">Instagram</span>
            <FaInstagram />
          </a>
          <div className="border-r-2 transform rotate-12" />
          <a href="https://maps.app.goo.gl/UBETR1E3qbbqNDtY8" target="_blank">
            <span className="sr-only">Location</span>
            <FaMapMarkerAlt />
          </a>
        </div>
        <div className="lg:hidden flex justify-center mb-7 font-bold" />

        <div className="flex justify-center text-sm space-x-4 mb-0">
          <a href="mailto:dsudevhack@dsu.edu.in">Email</a>
          <a className="pl-4" href="tel:8154852286">
          Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
