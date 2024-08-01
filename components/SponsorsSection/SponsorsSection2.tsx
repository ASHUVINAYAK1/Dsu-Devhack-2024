import React from "react";
import "./sponsorTilt.css";
import "../../styles/sponsors/background.css";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

type Sponsor = {
  id: number;
  src: string;
  alt: string;
  link?: string;
  imageDimension?: string;
  scale?: string;
  class?: string;
};

type SponsorsGroup = {
  platform: Sponsor[];
  title?: Sponsor[];
  diamond?: Sponsor[];
  platinum?: Sponsor[];
  gold?: Sponsor[];
  silver?: Sponsor[];
  community?:Sponsor[];


};

type CategorySize = {
  imgSize: string;
  scale?: string;
};

export default function SponsorsSection2() {
  const handleClick = (link: string) => {
    window.open(link, "_blank");
  };

  const childVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };
  const sponsors: SponsorsGroup = {
    platform: [
      {
        id: 1,
        src: "/sponsors_logos/Devfolio_Logo-White.svg",
        alt: "DEVFOLIO LOGO",
        link: "https://devfolio.co",
        class: "scale-[0.8] md:scale-[1.1]",
      },
    ],
    title: [],
    diamond: [],
    platinum: [],
    gold: [
      {
        id: 2,
        src: "/sponsors_logos/Polygon_Logo-White.svg",
        alt: "POLYGON LOGO",
        link: "https://polygon.technology/",
        class: "scale-[0.8] md:scale-[1.1]",
      },
      {
        id: 3,
        src: "/sponsors_logos/ethindia-light.svg",
        alt: "REPLIT LOGO",
        link: "https://ethindia.co/",
        class: "scale-[0.75]",
      },
    ],
    silver: [],
    community:[],
  };

  const categorySizes: { [key: string]: CategorySize } = {
    platform: {
      imgSize:
        "h-[100px] w-[340px]  md:px-8 px-4 py-1 md:h-[200px] md:w-[800px] ",
    },

    title: {
      imgSize:
        "h-[100px] w-[340px]  md:px-8 px-4 py-1 md:h-[200px] md:w-[800px] ",
    },

    platinum: { imgSize: "w-48 h-16 sm:h-full sm:w-full" },
    diamond: { imgSize: "w-48 h-16 sm:h-full sm:w-full" },
    gold: {
      imgSize: "h-[120px] w-[250px] px-2 py-1 md:h-[160px] md:w-[500px]",
    },
    silver: {
      imgSize: "h-[80px] w-[250px] px-2 py-1 md:h-[140px] md:w-[420px]",
    },
    community: {
      imgSize: "h-[80px] w-[250px] px-2 py-1 md:h-[140px] md:w-[420px]",
    }
  };

  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="mt-36 sm:mt-56">
      <h1 className="my-10 text-center text-white text-3xl sm:text-4xl md:text-4xl xl:text-5xl font-logo sponsorContainer1">
        Sponsors
      </h1>
      <Tilt
        tiltMaxAngleX={2.5}
        tiltMaxAngleY={5}
        glareEnable
        tiltAngleYInitial={0}
        glareMaxOpacity={0.1}
        className="fix-safari-tilt relative overflow-hidden mb-32 rounded-2xl glassy-effect sm:mt-10 mt-16 mx-16 tilt-why-sponsor"
      >
        <div className="relative flex items-center justify-center flex-col gap-3 rounded-2xl">
          <div className="flex flex-col w-full items-center justify-evenly p-10 title-why-sponser-container">
            <motion.div
              variants={childVariants}
              className="md:text-3xl text-3xl text-purple-500 font-content font-bold m-1 mb-2"
            >
              Why Sponsor Us?
            </motion.div>
            <motion.p
              variants={childVariants}
              className="md:text-1xl text-[1rem] text-slate-50 font-content font-semibold m-1 mb-2"
            >
              •{" "}
              <span
                className={`font-bold ${
                  isMobile ? "text-white" : "text-purple-500"
                }`}
              >
                Access Top Talent
              </span>
              {!isMobile &&
                ": Connect with over 150+ innovative minds from across the nation, representing the next generation of tech leaders."}
              <br />•{" "}
              <span
                className={`font-bold ${
                  isMobile ? "text-white" : "text-purple-500"
                }`}
              >
                Brand Visibility
              </span>
              {!isMobile &&
                ": Showcase your company to a highly engaged audience of developers, designers, and tech enthusiasts."}
              <br />•{" "}
              <span
                className={`font-bold ${
                  isMobile ? "text-white" : "text-purple-500"
                }`}
              >
                Product Exposure
              </span>
              {!isMobile &&
                ": Introduce your latest technologies or APIs to potential users and gather valuable feedback."}
              <br />•{" "}
              <span
                className={`font-bold ${
                  isMobile ? "text-white" : "text-purple-500"
                }`}
              >
                Recruitment Opportunities
              </span>
              {!isMobile &&
                ": Identify and engage with skilled candidates for internships or full-time positions."}
              <br />•{" "}
              <span
                className={`font-bold ${
                  isMobile ? "text-white" : "text-purple-500"
                }`}
              >
                Corporate Social Responsibility
              </span>
              {!isMobile &&
                ": Demonstrate your commitment to education and innovation in the tech community."}
              <br />•{" "}
              <span
                className={`font-bold ${
                  isMobile ? "text-white" : "text-purple-500"
                }`}
              >
                Market Research
              </span>
              {!isMobile &&
                ": Gain insights into emerging trends and technologies through direct interaction with participants."}
              <br />•{" "}
              <span
                className={`font-bold ${
                  isMobile ? "text-white" : "text-purple-500"
                }`}
              >
                Networking
              </span>
              {!isMobile &&
                ": Connect with other industry leaders, academic institutions, and potential business partners."}
              <br />•{" "}
              <span
                className={`font-bold ${
                  isMobile ? "text-white" : "text-purple-500"
                }`}
              >
                Innovation Pipeline
              </span>
              {!isMobile &&
                ": Witness groundbreaking ideas that could lead to future collaborations or acquisitions."}
              <br />•{" "}
              <span
                className={`font-bold ${
                  isMobile ? "text-white" : "text-purple-500"
                }`}
              >
                Media Coverage
              </span>
              {!isMobile &&
                ": Benefit from increased visibility through event-related press and social media exposure."}
              <br />
              <br />
              <>
                <span className="font-bold text-purple-500">SPOTLIGHT:</span>{" "}
                Our Recent Success{" "}
                <span className="font-bold text-purple-500 text-[1.1rem]">
                  InterContinental InnovoQuest - 24
                </span>{" "}
                We recently hosted a groundbreaking 36-hour hackathon in
                collaboration with LeTourneau University, Texas, USA on March
                1st-3rd, 2024 showcasing our ability to organize high-impact,
                international tech events.
                <br />
                <br />
                <span className="font-bold text-purple-500">
                  Key Highlights:
                </span>
                <br />•{" "}
                <span className="font-bold text-purple-500">Participants:</span>{" "}
                400+ innovators, including 20 teams from LeTourneau University,
                Texas
                <br />•{" "}
                <span className="font-bold text-purple-500">
                  Prize Pool:
                </span>{" "}
                ₹50,000 Cash Pool
                <br />•{" "}
                <span className="font-bold text-purple-500">
                  Chief Guest:
                </span>{" "}
                Mr. Johnson Jose (Director at Google)
              </>
            </motion.p>

            <button
              onClick={() => handleClick("https://drive.google.com/file/d/1znefUyJ0GjJXS1bi4tSvBoGIofqodrQA/view?usp=sharing")}
              className={`mt-10 ${" mt-6 rounded-xl bg-gradient-to-l from-purple-500 to-pink-500 text-white"} py-2 px-5 rounded-md font-semibold transition-colors duration-300`}
            >
              Download Sponsorship Brochure
            </button>
          </div>
        </div>
      </Tilt>

      {Object.entries(sponsors).map(([category, sponsorList]) => (
        <div key={category} className={`${category}SponsorContainer`}>
          <h2
            className={`text-center m-auto md:my-20 my-10 text-white text-lg md:text-xl xl:text-2xl md:w-1/6 w-1/2 font-semibold px-1 py-2 title-${category.toLowerCase()} rounded-md`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}{" "}
            {category === "title" ? "Sponsor" : "Sponsors"}
          </h2>
          <div className="flex flex-wrap justify-center md:px-20">
            {/* <p>Coming Soon...</p> */}
            {
              sponsorList.length === 0 && <p className="text-white text-center">Coming Soon...</p>
            }
            {sponsorList.map((sponsor) => (
              <a key={sponsor.id} href={sponsor.link ? sponsor.link : ""} target="_blank">
                <div
                  className={`m-4 glassy-div bg-cover bg-center flex items-center justify-center no-repeat rounded-2xl md:p-5 p-1 hover-effect-${category} ${
                    sponsor.link ? "cursor-pointer" : "cursor-default"
                  } ${categorySizes[category]?.imgSize}`}
                  onClick={
                    sponsor.link
                      ? () => {
                          handleClick(sponsor.link!);
                        }
                      : () => {}
                  }
                >
                  <img
                    alt={sponsor.alt}
                    src={`${sponsor.src}`}
                    className={`
                ${sponsor.class ? sponsor.class : "h-full w-full "}`}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
