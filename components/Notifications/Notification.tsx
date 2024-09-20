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
        duration: 40,
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
          🔔 Important Update! DSU DevHack'24 registrations are now closed. Thank you for your submissions! The results will be announced shortly. Stay tuned for updates!
        </div>
        <div className="flex-shrink-0 pr-8 text-[12px]">
          🔔 Important Update! DSU DevHack'24 registrations are now closed. Thank you for your submissions! The results will be announced shortly. Stay tuned for updates!
        </div>
      </div>
    </div>
  );
};

export default Notification;
