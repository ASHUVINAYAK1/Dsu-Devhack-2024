import React, { createFactory } from "react";
import "./sponsorTilt.css";
import "../../styles/sponsors/background.css";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
// import Image from "next/image";

type Sponsor = {
  src: string;
  alt: string;
  link?: string;
  imageDimension?: string;
  scale?: string;
  class?: string;
};

type SponsorsGroup = {
  title?: Sponsor[];
  diamond?: Sponsor[];
  platinum?: Sponsor[];
  gold?: Sponsor[];
  silver?: Sponsor[];
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
    title: [],
    diamond: [],
    platinum: [],
    gold: [
      //   {
      //     src: "/sponsors_logos/Devfolio_Logo-White.svg",
      //     alt: "DEVFOLIO LOGO",
      //     link: "https://devfolio.co",
      //     class: "scale-[0.8] md:scale-[1.1]",
      //   },
      //   {
      //     src: "/sponsors_logos/Polygon_Logo-White.svg",
      //     alt: "POLYGON LOGO",
      //     link: "https://polygon.technology/",
      //     class: "scale-[0.8] md:scale-[1.1]",
      //   },
      //   {
      //     src: "/sponsors_logos/replit-light.png",
      //     alt: "REPLIT LOGO",
      //     link: "https://replit.com/",
      //     class: "scale-[0.75]",
      //   },
      //   {
      //     src: "/sponsors_logos/wolfram-lg.png",
      //     alt: "WOLFARM LOGO",
      //     link: "https://www.wolframalpha.com/",
      //     class: "scale-[0.90]",
      //   },
      //   {
      //     src: "/sponsors_logos/xyz-logo-white.svg",
      //     alt: "XYZ LOGO",
      //     link: "https://nic.xyz/",
      //     class: "scale-[0.5] md:scale-[0.6]",
      //   },
      //   {
      //     src: "/sponsors_logos/JD_logo_white.png",
      //     alt: "JDOODLE LOGO",
      //     link: "https://www.jdoodle.com/code-online-compiler-ide?utm_source=DUHacks&utm_medium=title&utm_campaign=Hackathon+Sponsorship",
      //     class: "scale-[0.9] md:scale-[0.8]",
      //   },
      //   {
      //     src: "/sponsors_logos/verbwire.svg",
      //     alt: "VERBWIRE LOGO",
      //     link: "https://www.verbwire.com/",
      //     class: "scale-[0.9] md:scale-[0.8]",
      //   },
    ],
    silver: [
      //   {
      //     src: "/sponsors_logos/beeceptor-white.svg",
      //     alt: "BEECEPTOR LOGO",
      //     link: "https://beeceptor.com/",
      //     class: "scale-[0.8]",
      //   },
      //   {
      //     src: "/sponsors_logos/Leading_Learner_2.png",
      //     alt: "LEADING LEARNER LOGO",
      //     link: "https://www.leading-learners.com/",
      //   },
    ],
    // title: [
    //   {
    //     src: "/sponsors_logos/Rosenfeld-white.webp",
    //     alt: "ROSENFSRCD LOGO",
    //     link: "https://rosenfeldmedia.com/duhacks",
    //   },
    //   {
    //     src: "/sponsors_logos/echo3D.jpg",
    //     alt: "ECHO3D LOGO",
    //     link: "https://www.echo3d.com/",
    //     class: "scale-[0.8] sm:scale-1",
    //   },
    //   {
    //     src: "/sponsors_logos/axure.svg",
    //     alt: "AXURE LOGO",
    //     link: "https://www.axure.com/",
    //     class: "scale-90 md:scale-125",
    //   },
    //   {
    //     src: "/sponsors_logos/loft-white.png",
    //     alt: "LOFT.SH LOGO",
    //     link: "https://www.loft.sh/",
    //     class: "w-1/3 scale-90 md:scale-125",
    //   },
    //   {
    //     src: "/sponsors_logos/slido.svg",
    //     alt: "SLIDO LOGO",
    //     link: "https://www.slido.com/",
    //     class: "w-1/3 scale-90 md:scale-125",
    //   },
    // ],
  };

  const categorySizes: { [key: string]: CategorySize } = {
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
  };

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
        className="fix-safari-tilt relative overflow-hidden mb-32 rounded-2xl glassy-effect mt-16 mx-16 "
      >
        <div className="relative flex items-center justify-center md:h-64 h-48 flex-col gap-3 rounded-2xl">
          <div className="flex w-full items-center justify-evenly">
            <motion.div
              variants={childVariants}
              className="md:text-1xl text-[1rem] text-purple-500 font-content font-bold m-1 mb-2"
            >
              Why Sponsor Us?
            </motion.div>
            <motion.p
              variants={childVariants}
              className="md:text-1xl text-[1rem] text-slate-50 font-content font-bold m-1 mb-2"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              quis aliquam deleniti sequi dicta id odit. Assumenda alias commodi
              fugit tenetur perspiciatis error, enim beatae doloremque rem! Ad,
              nostrum fugit?
            </motion.p>
          </div>

          {/* <div>
                <h4 className="md:text-xl  text-md text-center font-semibold text-white dark:text-white">
                  {title}
                </h4>
              </div> */}
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
            <p>Coming Soon...</p>
            {sponsorList.map((sponsor, index) => (
              <a href={sponsor.link ? sponsor.link : ""} target="_blank">
                <div
                  key={index}
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
                    alt=""
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
