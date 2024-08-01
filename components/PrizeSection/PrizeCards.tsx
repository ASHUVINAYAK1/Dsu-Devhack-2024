"use client";
import React, { useEffect, useState } from "react";
import "../../styles/prizesection.css";
import Tilt from "react-parallax-tilt";
import "../../styles/prizes/background.css";
import CardFlip from "react-card-flip";
import Image from "next/image";
import prizeData from "./prizes";

const Card = ({
  image,
  textsBack,
  texts,
  position,
  order,
  imgWidth,
  paddingTop = 2,
  link = "",
}: any) => {
  // console.log("imgWidth:", imgWidth);

  const [isFlipped, setIsFlipped] = useState(false);
  const [computedPaddingTop, setComputedPaddingTop] = useState<string | undefined>(undefined);

  let myMargin = "";
  useEffect(() => {
    if (paddingTop) {
      const handleResize = () => {
        const newPaddingTop =
          window.innerWidth >= 768
            ? `${parseInt(paddingTop) * 2}px`  
            : `${paddingTop}px`;                
        setComputedPaddingTop(newPaddingTop);
      };

      // Call the function to set initial value
      handleResize();

      // Add event listener to handle resize
      window.addEventListener('resize', handleResize);

      // Cleanup the event listener on component unmount
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [paddingTop]);


  // Set z-index class based on position
  switch (position) {
    case "1":
      myMargin = "mt-1";
      break;
    case "2":
      myMargin = "mt-36";
      break;
    default:
      myMargin = "mt-10";
      break;
  }

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`median cursor-pointer flex flex-col items-center justify-between ${order}`}
      onClick={handleFlip}
    >
      <CardFlip isFlipped={isFlipped} flipDirection="horizontal">
        {/* Front of the card */}
        {!isFlipped && (
          <div>
            <Tilt
              tiltMaxAngleX={2.5}
              tiltMaxAngleY={5}
              glareEnable
              tiltAngleYInitial={0}
              glareMaxOpacity={0.1}
              className="card card-front prize-card"
            >
              <div className={`circle circle-${order} bg-opacity-10 ${paddingTop}`}>
                {/* <a href={link} target="_blank"> */}
                  <Image
                    src={image}
                    alt="Prize"
                    width={imgWidth ? imgWidth : 200}
                    height={200}
                    loading="lazy"
                    style={{
                      paddingTop: computedPaddingTop,                  
                      objectFit: 'cover'
                    }}                    />
              </div>
              <div className="content flex-grow flex flex-col justify-evenly">
                <div className=" h-[220px]px-2">
                  {texts?.map((text: any, index: number) => (
                    <li
                      key={index}
                      className="text-white text-center list-none text-[12px] md:text-lg mb-1 mx-2"
                    >
                      <span dangerouslySetInnerHTML={{ __html: text }} />
                    </li>
                  ))}
                </div>
                <button
                  onClick={handleFlip}
                  className="my-4 w-1/2 m-auto px-5 py-2 text-sm"
                >
                  More
                </button>
              </div>
            </Tilt>
          </div>
        )}

        {isFlipped && (
          <div className="">
            <Tilt
              tiltMaxAngleX={2.5}
              tiltMaxAngleY={5}
              glareEnable
              tiltAngleYInitial={0}
              glareMaxOpacity={0.1}
              className="card card-back prize-card"
            >
              <div className="flex-grow flex flex-col justify-center items-start h-full px-5 py-10 text-center mx-2">
                {textsBack.map((text: any, index: number) => (
                  <li
                    key={index}
                    className="text-white text-[12px] md:text-lg mb-1 text-left"
                  >
                    <span dangerouslySetInnerHTML={{ __html: text }} />
                  </li>
                ))}
                <div className="content-back-btn mt-auto">
                  <button onClick={handleFlip} className="mt-auto px-5 py-2">
                    Go Back
                  </button>
                </div>
              </div>
            </Tilt>
          </div>
        )}
      </CardFlip>
    </div>
  );
};
const PrizeCards = () => {
  return (
    <>
      <div className="flex-col flex lg:justify-center">
      <div className="prizeContainer1">
          <div className="prizeContainer md:grid hidden grid-cols-1 sm:grid-cols-3 gap-3 lg:grid-cols-3 mb-10">
            {prizeData.cardContents.slice(0, 8).map((card: any, index: any) => (
              <Card
                key={card.id || index}
                texts={card.texts}
                textsBack={card.textsBack}
                position={index % 2 === 0 ? "2" : "1"}
                order={`order-${index + 1}`}
                image={card.image}
                imgWidth={card.imgWidth}
                paddingTop={card.paddingTop}
                link={card.link ? card.link : ""}
              />
            ))}
          </div>
        </div>
        <div className="prizeContainer grid md:hidden grid-cols-1 sm:grid-cols-3 gap-3 lg:grid-cols-3 mb-10">
          {prizeData.cardContents.slice(0, 8).map((card: any, index: any) => (
            <Card
              key={card.id || index} 
              texts={card.texts}
              textsBack={card.textsBack}
              position={index % 2 === 0 ? "2" : "1"}
              order={`order-${index + 1}`}
              image={card.image}
              imgWidth={card.imgWidth}
              paddingTop={card.paddingTop}
              link={card.link ? card.link : ""}
            />
          ))}
        </div>


        
      </div>
    </>
  );
};

export default PrizeCards;
