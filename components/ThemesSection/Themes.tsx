"use client";
import React from "react";
import "../../styles/themes.css";
import "../../styles/themes/background.css";
import Tilt from "react-parallax-tilt";
import Image from "next/image";

const themes = [
  {
    id: 1,
    title: "Sustainability",
    image: "/assets/images/sustain2.png",
  },
  {
    id: 2,
    title: "Healthcare",
    image: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Stethoscope.png",
  },
  {
    id: 3,
    title: "AI/ML",
    image: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Robot.png",
  },
  {
    id: 4,
    title: "Web3 + Blockchain",
    image: "/assets/images/web.png",
  },
  {
    id: 5,
    title: "IOT & Smart cities",
    image: "/assets/images/iot.png",
  },
  {
    id: 6,
    title: "Open Innovation",
    image: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Light%20Bulb.png",
  },
];

export default function Themes() {
  return (
    <>
      <h1 className="mt-36 sm:mt-56 text-center text-white text-3xl sm:text-4xl md:text-4xl xl:text-5xl font-logo">
        Themes
      </h1>

      <div className="flex justify-center mt-28">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 md:gap-x-8 md:gap-y-8 gap-3 themeContainer1">
          {themes.map(({ id, title, image }) => (
            <div key={id} className="max-w-md mx-auto md:w-64 md:h-full sm:w-44 w-40 h-full overflow-hidden">
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
            </div>
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
      <div className="relative flex md:h-64 h-48 flex-col gap-3 rounded-2xl p-7">
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
