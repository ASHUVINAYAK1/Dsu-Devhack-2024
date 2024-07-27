"use client";
import { useState } from "react";
import { Container } from "./Container";
import "../../styles/faq/background.css";

const duHacksFaq = [
  {
    question: <>What is DSU Dev Hacks 2024?</>,
    answer: (
      <>
        DSU Dev Hacks is a hackathon initiative of a private university in India to help various
        departments and private organizations find solutions to their pressing problems through students.
      </>
    ),
  },
  {
    question: <>When was DSU Dev Hacks started?</>,
    answer: (
      <>
        DSU Dev Hacks started in the year 2024.
      </>
    ),
  },
  {
    question: <>At which level is this hackathon conducted?</>,
    answer: (
      <>
        The DSU Dev Hacks Hackathon is conducted at the national level.
      </>
    ),
  },
  {
    question: <>How many members can participate in a team?</>,
    answer: (
      <>
        A team can have a minimum of 3 members and a maximum of 4 members.
      </>
    ),
  },
  {
    question: <>What are the eligibility criteria for participation?</>,
    answer: (
      <>
        The eligibility criteria include being a student of a recognized educational institution in India.
      </>
    ),
  },
  {
    question: <>What is the qualification to participate?</>,
    answer: (
      <>
        Participants must be currently enrolled in an undergraduate.
      </>
    ),
  },
  {
    question: <>Can participants attend online?</>,
    answer: (
      <>
        Yes, participants can attend online as the hackathon is conducted in both online and offline modes.
      </>
    ),
  },
  {
    question: <>What is the participation fee?</>,
    answer: (
      <>
        The participation in DSU Dev Hacks 2024 is completely free! There is no registration fee, allowing everyone to join without any financial constraints      </>
    ),
  },
  {
    question: <>Is this hackathon an online event or offline?</>,
    answer: (
      <>
        This hackathon is conducted in both modes, online and offline.
      </>
    ),
  },
  {
    question: <>What are the restrictions on team formation for the event?</>,
    answer: (
      <>
        All team members must belong to the same university or college, and a team can have a maximum of 4 members.
      </>
    ),
  },
  {
    question: <>What are the perks and benefits of participating in the hackathon?</>,
    answer: (
      <>
        Participants gain exposure to real-world problems, networking opportunities, and potential internships or job offers. Winners also receive cash prizes and certificates.
      </>
    ),
  },
  {
    question: <>What are the accommodation facilities for participants from outside the college?</>,
    answer: (
      <>
        Accommodation facilities are provided for participants coming from outside the host college. Details will be shared with the selected teams.
      </>
    ),
  },
  {
    question: <>I have a question related to the hackathon which is not listed above. What should I do?</>,
    answer: (
      <>
        Feel free to reach out to us. Just drop a mail to <strong><a href="mailto:dsudevhack@dsu.edu.in">dsudevhack@dsu.edu.in</a></strong>. You can also contact the organizer at <strong>TBD</strong>, <strong>+91-12345-67890</strong>.
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
                src="/assets/images/faq_boy2.png"
                alt="faq boy"
                width={400}
                height={400}
                className=" object-contain "
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
          key={String(i)}
          className={`mx-auto text-lg ${full ? "" : "max-w-2xl"}`}
        >
          {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
          <div
            className="flex w-full items-start justify-between py-6 text-left text-gray-400"
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
              className={`pr-12 duration-300 ease-in-out ${openIndex === i ? "" : "hidden"
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
