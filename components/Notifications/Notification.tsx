import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";

const Notification: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (marquee) {
      const contentWidth = marquee.scrollWidth;

      const clone = marquee.cloneNode(true) as HTMLElement;
      marquee.appendChild(clone);

      gsap.to(marquee, {
        x: `-${contentWidth}px`,
        duration: 26,
        ease: "linear",
        repeat: -1,
      });
    }
  }, []);

  return (
    <div className="relative overflow-hidden w-full h-7 bg-gradient-to-l from-purple-500 to-pink-500 text-white md:mt-[230px]">
      <div
        className="flex items-center whitespace-nowrap h-full"
        ref={marqueeRef}
      >
        <div className="flex-shrink-0 pr-8 text-[12px]">
          🔔 Exciting Update! DSU DevHack'24 Idea Submissions are Open! Let's
          Make Magic Use our{" "}
          <Link
            href="https://docs.google.com/presentation/d/1LGfCzBDcBt_yQQyhIgiLcjkmTkBOUsY1/edit?usp=drive_link&ouid=117836667679660512457&rtpof=true&sd=true"
            target="_blank"
            className="text-[11px] font-medium bg-black bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 rounded-sm px-[4px] py-[2px]"
          >
            Template
          </Link>{" "}
          for your Idea Submission!
        </div>
        <div className="flex-shrink-0 pr-8 text-[12px]">
          🔔 Exciting Update! DSU DevHack'24 Idea Submissions are Open! Let's
          Make Magic Use our{" "}
          <Link
            href="https://docs.google.com/presentation/d/1LGfCzBDcBt_yQQyhIgiLcjkmTkBOUsY1/edit?usp=drive_link&ouid=117836667679660512457&rtpof=true&sd=true"
            target="_blank"
            className="text-[11px] font-medium bg-black bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 rounded-sm px-[4px] py-[2px]"
          >
            Template
          </Link>{" "}
          for your Idea Submission!
        </div>
      </div>
    </div>
  );
};

export default Notification;
