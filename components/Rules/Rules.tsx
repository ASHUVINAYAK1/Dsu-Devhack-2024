"use client";
import React from "react";
import "../../styles/themes.css";
import "../../styles/themes/background.css";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import Link from "next/link";

const themes = [
  {
    id: 1,
    title: "Online Shortlisted Teams",
    image: "/assets/images/online-education.png",
    url: "https://drive.google.com/file/d/1v-c04x6-LnzqcyZqH08WQC8ReBHgplEt/view?usp=drivesdk"
  },
  {
    id: 2,
    title: "Off-line Shortlisted Teams",
    image: "/assets/images/offline.png",
    url: "https://drive.google.com/file/d/140qLit6UDNVh7CphpZwcEDqcnqdEdpmr/view?usp=drivesdk"
  },
  {
    id: 3,
    title: "Event Schedule",
    image: "/assets/images/calendar.png",
    url: "https://docs.google.com/document/d/1gtSBTbEzXDQ5BwLconA-9Igwr6k50BCo/edit?usp=drivesdk&ouid=117836667679660512457&rtpof=true&sd=true"
  },
  {
    id: 4,
    title: "Code of Conduct",
    image: "/assets/images/judgment.png",
    url: "/"
  },
];

export default function Rules() {
  return (
    <>
      {/* <h1 className="mt-36 text-center text-white text-3xl sm:text-4xl md:text-4xl xl:text-5xl font-logo">
        Themes
      </h1> */}

      <div className="flex justify-center mt-12 md:mt-28 mb-20 md:mb-60">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 md:gap-x-8 md:gap-y-8 gap-3 themeContainer1">
          {themes.map(({ id, title, image, url }) => (
            <Link href={url} target="_blank" key={id} className="max-w-md mx-auto md:w-64 md:h-full sm:w-44 w-40 h-full overflow-hidden">
              <Card
                title={title}
                icon={
                  <Image
                    src={image}
                    alt={title}
                    loading="lazy"
                    width={170}
                    height={170}
                    className="object-cover"
                  />
                }
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

function Card(props: any) {
  const { title, icon } = props;
  return (
    <Tilt
      tiltMaxAngleX={2.5}
      tiltMaxAngleY={5}
      glareEnable
      tiltAngleYInitial={0}
      glareMaxOpacity={0.1}
      className="fix-safari-tilt relative overflow-hidden rounded-2xl glassy-effect p-px"
    >
      <div className="relative flex h-56 md:h-72 flex-col gap-3 rounded-2xl p-7">
        <div className="flex items-center justify-center">{icon}</div>

        <div>
          <h4 className="md:text-xl text-md text-center font-semibold text-white dark:text-white">
            {title}
          </h4>
        </div>
      </div>
    </Tilt>
  );
}
