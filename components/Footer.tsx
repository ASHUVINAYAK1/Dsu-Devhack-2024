"use client";
import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import "../styles/about/about.css";

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

  return (
    <footer className="mt-24 pt-5 lg:pt-8 pb-8 bg-black bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20">
      <div className="flex flex-col">
        <div className="text-center mb-4 sm:mb-6">
          <h2 className="text-gold-500 font-bold text-3xl lg:text-2xl">Connect with Us</h2>
        </div>
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

          <a href="https://www.linkedin.com/company/dsu-devhack/about" target="_black">
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
        <div className="flex flex-wrap justify-around font-bold">
          <div className="flex flex-col items-center text-sm space-y-4 mb-7">
            <h2 className="text-lg text-purple-400 font-semibold">Contact Us</h2>
            <div className="flex flex-col items-center sm:items-start">
              <a href="mailto:dsudevhack@dsu.edu.in" className="mb-2">Email: dsudevhack@dsu.edu.in</a>
              <p className="text-sm mb-2">Student coordinators</p>
              <a href="tel:8154852286">Patel Muhammad: +91 8154852286</a>
              <a href="tel:9939635206">Utkarsh Priye: +91 9939635206</a>
              <a href="tel:8299686568">Ritvik Vasundh: +91 8299686568</a>

            </div>
          </div>

          <div className="flex flex-col items-center text-sm space-y-4">
            <h2 className="text-lg text-purple-400 font-semibold">Hackathon Venue</h2>
            <div className="text-center items-start space-y-2">
              <p><strong>Dayananda Sagar University Harohalli </strong></p>
              <p></p>
              <p className="sm:text-left space-y-2">Bangalore, Karnataka 562112</p>
            </div>
            <a
              href="https://maps.app.goo.gl/UBETR1E3qbbqNDtY8"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-white text-gray-500 px-4 py-2 rounded hover:text-slate-100 hover:bg-purple-700"
            >
              Get Directions
            </a>
          </div>
        </div>


      </div>
    </footer>
  );
};

export default Footer;
