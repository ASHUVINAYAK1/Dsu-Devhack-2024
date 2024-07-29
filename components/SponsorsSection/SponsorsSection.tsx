"use client";

import SponsorCard from "./SponsorTilt";
import Marquee from "react-fast-marquee";
import "../../styles/sponsors/background.css";

function SponsorsSection() {
  const gold = [
    { id: 1, src: "/sponsors_logos/Devfolio_Logo-White.svg", alt: "DEVFOLIO LOGO" },
    { id: 2, src: "/sponsors_logos/Polygon_Logo-White.svg", alt: "POLYGON LOGO" },
    { id: 3, src: "/sponsors_logos/replit-light.png", alt: "REPLIT LOGO" },
    { id: 4, src: "/sponsors_logos/wolfram-lg.png", alt: "WOLFARM LOGO" },
    { id: 5, src: "/sponsors_logos/xyz-logo-white.svg", alt: "XYZ LOGO" },
  ];
  
  const platinum = [
    { id: 1, src: "/sponsors_logos/Devfolio_Logo-White.svg", alt: "DEVFOLIO LOGO" },
  ];
  
  const silver = [
    { id: 1, src: "/sponsors_logos/beeceptor-white.svg", alt: "BEECEPTOR LOGO" },
    { id: 2, src: "/sponsors_logos/Leading_Learner_2.png", alt: "LEADING LEARNER LOGO" },
  ];
  
  const bronze = [
    { id: 1, src: "/sponsors_logos/Rosenfeld.webp", alt: "ROSENFSRCD LOGO" },
    { id: 2, src: "/sponsors_logos/echo3D.jpg", alt: "ECHO3D LOGO" },
    { id: 3, src: "/sponsors_logos/axure.svg", alt: "AXURE LOGO" },
    { id: 4, src: "/sponsors_logos/loft-white.png", alt: "LOFT.SH LOGO" },
  ];
  
  return (
    <div className="mt-36 sm:mt-56">
      <h1 className="my-10 text-center text-white text-3xl sm:text-4xl md:text-4xl xl:text-5xl font-logo sponsorContainer1">
        Sponsors
      </h1>
      <div className="md:mt-24 mt-14">
        <h2 className="text-center m-auto md:my-8 my-4 text-white text-lg md:text-xl xl:text-2xl   md:w-1/6 w-1/2 font-semibold px-1 py-2 title-platinum rounded-md">
          Platinum Sponsors
        </h2>
        <Marquee speed={20} autoFill={true}>
          {platinum.map(({ id,src, alt }) => (
            <SponsorCard
              key={id}
              imageUrl={src}
              imageSize={"w-48 h-16 sm:w-72 sm:h-28"}
              hoverEffect={"hover-effect-emerald"}
              imageAlt={alt}
            />
          ))}
        </Marquee>

        <Marquee speed={40} direction={"right"} autoFill={true}>
          {platinum.map(({id, src, alt }) => (
            <SponsorCard
              key={id}
              imageUrl={src}
              imageSize={"w-48 h-16 sm:w-72 sm:h-24"}
              hoverEffect={"hover-effect-emerald"}
              imageAlt={alt}
            />
          ))}
        </Marquee>
        <h2 className="text-center m-auto md:my-8 my-4 text-white text-lg md:text-xl xl:text-2xl   md:w-1/6 w-1/2  font-semibold px-1 py-2 title-gold  rounded-md">
          Gold Sponsors
        </h2>

        <Marquee speed={60} autoFill={true}>
          {gold.map(({ id,src, alt }) => (
            <SponsorCard
              key={id}
              imageUrl={src}
              imageSize={"w-36 h-12 sm:w-80 sm:h-20"}
              hoverEffect={"hover-effect-gold"}
              imageAlt={alt}
            />
          ))}
        </Marquee>

        <h2 className="text-center m-auto md:my-8 my-4 text-white text-lg md:text-xl xl:text-2xl  md:w-1/6 w-1/2 font-semibold px-1 py-2 title-silver rounded-md">
          Silver Sponsors
        </h2>

        <Marquee speed={80} direction={"right"} autoFill={true}>
          {silver.map(({ id,src, alt }) => (
            <SponsorCard
              key={id}
              imageUrl={src}
              imageSize={"w-24 h-10 sm:w-64 sm:h-16"}
              hoverEffect={"hover-effect-silver"}
              imageAlt={alt}
            />
          ))}
        </Marquee>
        <h2 className="text-center m-auto md:my-8 my-4 text-white text-lg md:text-xl xl:text-2xl   md:w-1/6 w-1/2  font-semibold px-1 py-2 title-bronze rounded-md">
          Bronze Sponsors
        </h2>

        <Marquee speed={100} autoFill={true}>
          {bronze.map(({ id,src, alt }) => (
            <SponsorCard
              key={id}
              imageUrl={src}
              imageSize={"w-20 h-8 sm:w-40 sm:h-14"}
              hoverEffect={"hover-effect-bronze"}
              imageAlt={alt}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default SponsorsSection;
