// "use client";
import { RiGithubLine, RiLinkedinLine } from "react-icons/ri";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
function Card({ member }: any) {
  return (
    <Tilt
      tiltMaxAngleX={2.5}
      tiltMaxAngleY={5}
      glareEnable
      tiltAngleYInitial={0}
      glareMaxOpacity={0.1}
      className="fix-safari-tilt relative sm:w-64 w-40 overflow-hidden rounded-2xl "
    >
      <div className="relative flex items-center h-full flex-col gap-6 rounded-2xl sm:px-2 sm:py-8 px-1 py-4 glassy-div ">
        <div className={`flex items-center justify-center ${member.image ? "w-28 h-28 md:w-40 md:h-40" : ""} `}>
          {member.image ? (
            <Image
              className="w-full h-full object-cover rounded-xl"
              src={member.image}
              width={160}
              height={160}
              alt="TBD"
              loading="lazy"
            />
          ) : (
            <></>
          )}
        </div>

        <div className="flex flex-col items-center">
          <h4 className="sm:text-xl w-28 sm:w-auto flex items-center justify-center font-semibold text-zinc-900 dark:text-white">
            <span className="sm:text-lg text-sm text-center">
              {member.name}
            </span>
          </h4>
          <p className="mt-1 text-zinc-600 text-center dark:text-zinc-400 sm:text-md text-sm">
            <span dangerouslySetInnerHTML={{ __html: member.id }} />
          </p>
          <div className="text-sm flex gap-2 mt-3">
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiLinkedinLine />
              </a>
            )}
            {member.github && (
              <a href={member.github} target="_blank" rel="noopener noreferrer">
                <RiGithubLine />
              </a>
            )}
          </div>
        </div>
      </div>
    </Tilt>
  );
}

export default Card;
