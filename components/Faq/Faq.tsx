"use client";
import { useState } from "react";
import { Container } from "./Container";
import "../../styles/faq/background.css";

const duHacksFaq = [
  {
    id: 1,
    question: <>What is DSU Dev Hacks 2024?</>,
    answer: (
      <>
        DSU Dev Hacks is a hackathon initiative of a private university in India to help various
        departments and private organizations find solutions to their pressing problems through students.
      </>
    ),
  },
  {
    id: 2,
    question: <>At which level is this hackathon conducted?</>,
    answer: (
      <>
        The DSU Dev Hacks Hackathon is conducted at the national level.
      </>
    ),
  },
  {
    id: 3,
    question: <>How many members can participate in a team?</>,
    answer: (
      <>
        A team can have a only of 3 members.
      </>
    ),
  },
  {
    id: 4,
    question: <>What is the qualification to participate?</>,
    answer: (
      <>
        Participants must be currently enrolled in an undergraduate Engineering program.
      </>
    ),
  },
  {
    id: 5,
    question: <>Can participants attend online?</>,
    answer: (
      <>
        Yes, participants can attend online as the hackathon is conducted in both online and offline modes.
      </>
    ),
  },
  {
    id: 6,
    question: <>What is the participation fee?</>,
    answer: (
      <>
        The participation in DSU Dev Hacks 2024 is completely free!
      </>
    ),
  },
  {
    id: 7,
    question: <>Is this online hackathon or offline hackathon?</>,
    answer: (
      <>
        It is a hybrid hackathon and preferred offline.
      </>
    ),
  },
  {
    id: 8,
    question: <>What are the restrictions on team formation for the event?</>,
    answer: (
      <>
        All team members must belong to the same university or college, and a team can have exactly 3 members.
      </>
    ),
  },
  {
    id: 9,
    question: <>What are the perks and benefits of participating in the hackathon?</>,
    answer: (
      <>
        Participants gain exposure to real-world problems, networking opportunities, and potential internships or job offers. Winners also receive cash prizes and certificates.
      </>
    ),
  },
  {
    id: 10,
    question: <>I have a question related to the hackathon which is not listed above. What should I do?</>,
    answer: (
      <>
        Feel free to reach out to us. Just drop a mail to <strong><a href="mailto:dsudevhack@dsu.edu.in">dsudevhack@dsu.edu.in</a></strong>. You can also contact the student coordinator at <strong>+91-8154852286</strong>.
      </>
    ),
  },
];


export default function FAQ() {
  return (
    <div className="mt-36 sm:mt-24" id="faq">
      <Container>
        <div className="mt-32 flex flex-col gap-12 lg:flex-row p-2 ">
          <div className="text-center lg:w-5/12 lg:pl-12 lg:text-left  flex flex-col">
            <div className="md:my-16 my-8 text-white text-xl sm:text-2xl md:text-4xl">
              <h2 className="text-2xl font-bold text-white dark:text-white md:text-3xl lg:text-4xl font-logo">
                Have a query ?
              </h2>
            </div>

            <p className="mt-2 font text-white dark:text-gray-300 ">
              Join with DevHack and experience the breeze of hackathon with us.
            </p>
            <div className="faqContainer1 relative">
              {/* <div className="flex justify-center"> */}

              <img
                src="/assets/images/faqboy.png"
                alt="faq boy"
                width={400}
                height={400}
                className="object-contain"
                 loading="lazy"
                  />
              {/* </div> */}
            </div>
          </div>
          <div className="lg:w-7/12 ">
            <Disclosures />
          </div>
        </div>
      </Container>
    </div>
  );
}

export function Disclosures({ full = false }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index: any) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800 cursor-pointer">
      {duHacksFaq.map((item, i) => (
        <div
        key={item.id}
        className={`mx-auto text-lg ${full ? "" : "max-w-2xl"}`}
        >
          {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
          <div
            className={`flex w-full items-start rounded-t-lg justify-between py-6 text-left px-2 mt-2 text-gray-400 glassy-effect${openIndex === i ? "" : "hidden"
              }`}
            onClick={() => handleToggle(i)}
          >
            <span className="font-medium text-white dark:text-white">
              {item.question}
            </span>
            <span className="ml-6 flex h-7 items-center">
              {/* rome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
              <svg
                className={`arrow-down h-6 w-6 transform duration-300 ${openIndex === i ? "rotate-180" : "rotate-0"
                  }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </div>
          {openIndex === i && (
            <div
              className={`pr-12 duration-300 ease-in-out rounded-b-lg mb-4 px-2 glassy-effect${openIndex === i ? "" : "hidden"
                }`}
            >
              <p className="pb-6 text-base text-white dark:text-gray-400">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
