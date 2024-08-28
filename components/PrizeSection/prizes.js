const cardContents = [
  // first winner prize
  {
    id: 0,
    texts: [
      "Cash prize of <span class='font-semibold text-6xl text-green-500'><br />&#8377 70,000</span>",
    ],
    textsBack: [
      "Industry Exposure",
      "Career Opportunities",
      "Networking",
      "Mentorship",
      "Winners Certificate",
      "Mementos",
    ],
    image: "/assets/images/winner.png",
    imgWidth: 160,
  },
  // second winner prize
  {
    id: 1,
    texts: [
      "Cash prize of <span class='font-semibold text-6xl text-green-500'><br />&#8377 40,000</span>",
    ],
    textsBack: [
      "Industry Exposure",
      "Career Opportunities",
      "Networking",
      "Mentorship",
      "Winners Certificate",
      "Mementos",
    ],
    image: "/assets/images/secondplace.png",
    imgWidth: 160,
  },

  // 3rd winner prize
  {
    id: 2,
    texts: [
      "Cash prize of <span class='font-semibold text-6xl text-green-500'><br />&#8377 20,000</span>",
    ],
    textsBack: [
      "Industry Exposure",
      "Career Opportunities",
      "Networking",
      "Mentorship",
      "Winners Certificate",
      "Mementos",
    ],
    image: "/assets/images/medal.png",
    imgWidth: 160,
  },

  //Best online participants
  {
    id: 3,
    texts: [
      "Cash prize of <span class='font-semibold text-6xl text-green-500'><br />&#8377 20,000</span>",
    ],
    textsBack: [
      "Industry Exposure",
      "Career Opportunities",
      "Networking",
      "Mentorship",
      "Winners Certificate",
      "Mementos",
    ],
    image: "/assets/images/best2.png",
    imgWidth: 150,
    // link: "https://www.verbwire.com/",
  },

  // {
  //   id: 4,
  //   texts: [
  //     "Track prize of <span class='font-semibold text-6xl text-green-500'><br />&#8377 40,000</span>",
  //   ],
  //   textsBack: [
  //     "<span class='font-semibold  text-purple-500'>Tentative categories</span>",
  //     "1. Best freshers team",
  //     "2. Most Innovative Solution",
  //     "3. Best Social Impact Project",
  //     "4. Best latest technology",
  //   ],
  //   image: "/assets/images/badge.png",

  //   imgWidth: 140,
  //   paddingTop: 5,
  // },

  // {
  //   id: 6,
  //   texts: [
  //     "Polygon Track Prize For Best Hack Built on Polygon",
  //     "<span class='text-4xl  text-green-500'><br />$200 Prize</span>",
  //   ],
  //   textsBack: [
  //     "Read about the bounty details and find code templates for Polygon <a href='https://replit.com/@devfolio/Polygon-Smart-Contract-Template?v=1#README.md' class = ' underline'>here</a>:",
  //   ],
  //   image: "/sponsors_logos/Polygon_Logo-White.svg",
  //   imgWidth: 160,
  //   paddingTop: 30,
  //   link: "https://polygon.technology",
  // },
  // {
  //   id: 7,
  //   texts: [
  //     "Ethereum Track price For Best Hack Built on Ethereum",
  //     "<span class='text-4xl text-green-500'><br />$100 Prize </span>",
  //   ],
  //   textsBack: ["Winner of this track receives $100 in prizes from ETHIndia."],
  //   image: "/sponsors_logos/ethindia-light.svg",
  //   imgWidth: 160,
  //   paddingTop: 30,
  // },
];

const cardTrackContents = [
  {
    id: 4,
    texts: [
      "Track prize of <span class='font-semibold text-6xl text-green-500'><br />&#8377 40,000</span>",
    ],
    textsBack: [
      // "<span class='font-semibold  text-purple-500'>Tentative categories</span>",
      // "1. Best freshers team",
      // "2. Most Innovative Solution",
      // "3. Best Social Impact Project",
      // "4. Best latest technology",
    ],
    image: "/assets/images/badge.png",

    imgWidth: 140,
    paddingTop: 5,
  },

  {
    id: 6,
    texts: [
      "Polygon Track Prize For Best Hack Built on Polygon",
      "<span class='text-4xl  text-green-500'><br />$200 Prize</span>",
    ],
    textsBack: [
      "Read about the bounty details and find code templates for Polygon <a href='https://replit.com/@devfolio/Polygon-Smart-Contract-Template?v=1#README.md' class = ' underline'>here</a>",
    ],
    image: "/sponsors_logos/Polygon_Logo-White.svg",
    imgWidth: 160,
    paddingTop: 30,
    link: "https://polygon.technology",
  },
  {
    id: 7,
    texts: [
      "Ethereum Track price For Best Hack Built on Ethereum",
      "<span class='text-4xl text-green-500'><br />$100 Prize </span>",
    ],
    textsBack: ["Winner of this track receives $100 in prizes from ETHIndia."],
    image: "/sponsors_logos/ethindia-light.svg",
    imgWidth: 160,
    paddingTop: 30,
  },
  {
    id: 5,
    texts: ["All participants will get DSU DevHacks certificates"],
    textsBack: [
      "Industry Exposure",
      "Career Opportunities",
      "Networking",
      "Certificate",
    ],
    image: "/assets/images/member-card.png",
    imgWidth: 110,
    paddingTop: 10,
    // link: "https://www.verbwire.com/",
  },
];

const benifitContents = [
  {
    id: 4,
    texts: [
      "Beeceptor will provide the winning team with a free 1-year Team Plan subscription valued at <span class='font-semibold  text-purple-500'>$240</span>",
      "Participants get a <span class='font-semibold  text-purple-500'>$25</span> credit towards the Team Plan to speed up their projects.",
    ],
    textsBack: [
      // "<span class='font-semibold  text-purple-500'>Tentative categories</span>",
      // "1. Best freshers team",
      // "2. Most Innovative Solution",
      // "3. Best Social Impact Project",
      // "4. Best latest technology",
    ],
    image: "/sponsors_logos/beeceptor-logo-block.png",

    imgWidth: 160,
    paddingTop: 20,
  },

  {
    id: 6,
    texts: [
      "Top 3 participants will receive certificates that can be redeemed for  Free 1-year subscription licenses of Axure RP Team Edition, valid for one user each valued at  <span class='font-semibold  text-purple-500'>$504</span> each",
    ],
    textsBack: [
      "Read about the bounty details and find code templates for Polygon <a href='https://replit.com/@devfolio/Polygon-Smart-Contract-Template?v=1#README.md' class = ' underline'>here</a>",
    ],
    image: "/sponsors_logos/axure.png",
    imgWidth: 160,
    paddingTop: 20,
  },
  {
    id: 7,
    texts: [
      "Free domain for 1-year validity for the top <span class='font-semibold text-purple-500'>300</span> participants.",
    ],
    textsBack: ["Winner of this track receives $100 in prizes from ETHIndia."],
    image: "/sponsors_logos/xyz-white-logo.svg",
    imgWidth: 120,
    paddingTop: 25,
  },
  {
    id: 7,
    texts: [
      "<span class='font-semibold text-purple-500'>$25</span> coupons for the top 6 participants.",
    ],
    textsBack: ["Winner of this track receives $100 in prizes from ETHIndia."],
    image: "/sponsors_logos/AoPS_Logo.png",
    imgWidth: 160,
    paddingTop: 30,
  },
  {
    id: 8,
    texts: [
      "Best use of AI & Verbwire API - Up to <span class='font-semibold text-purple-500'>$4000</span> in API Credits, for up to 15 teams",
      "Most innovative use of Verbwire API - Up to <span class='font-semibold text-purple-500'>$1000</span> in API Credits, for up to 5 teams",
    ],
    textsBack: ["Winner of this track receives $100 in prizes from ETHIndia."],
    image: "/sponsors_logos/verbwire.svg",
    imgWidth: 160,
    paddingTop: 30,
  },
];

export default { cardContents, cardTrackContents, benifitContents };
