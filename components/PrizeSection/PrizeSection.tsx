import React from "react";
import RevealPrize from "./RevealPrize";
import PrizeCards from "./PrizeCards";
import "../../styles/prizes/background.css";

interface PrizeSectionProps {}

const Pillar: React.FC<{ height: number; bgColor: string; text: string }> = ({
  height,
  bgColor,
  text,
}) => {
  return (
    <RevealPrize height={height}>
      <div className="mt-24">
        <div className="z-10 text-gray-200 text-center">Pesa</div>
        <div
          className={`relative flex flex-col justify-center items-center ${bgColor}  rounded-md`}
          style={{ height: `${height}px` }}
        >
          <div className="bottom-0 w-20 h-full rounded-t-md text-2xl text-center mt-5 font-semibold text-gray-800 ">
            {text}
          </div>
        </div>
      </div>
    </RevealPrize>
  );
};

const PrizeSection: React.FC<PrizeSectionProps> = () => {
  return (
    <div className="mt-36 sm:mt-56">
      <h1 className="my-20 text-center text-white text-3xl sm:text-4xl md:text-4xl xl:text-5xl font-logo">
        Prizes
      </h1>
      <PrizeCards />
    </div>
  );
};

export default PrizeSection;
