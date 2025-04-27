import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
// import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "HSM",
    href: "/projects",
    tags: [
      "Nextjs15",
      "Sanity.io",
      "Tailwindcss",
      "Typescript",
      "Framer Motion",
      "Zustand",
      "Clerk",
      "Stripe",
    ],
    image: {
      LIGHT: "/images/projects/hsm1.png",
      DARK: "/images/projects/hsm1.png",
    },
  },
  {
    index: 1,
    title: "Midwife",
    href: "/projects",
    tags: [
      "Nextjs",
      "Tailwindcss",
      "Typescript",
      "Shadcn UI",
      "Liveblocks",
      "Lexical Editor",
      "Clerk",
    ],
    image: {
      LIGHT: "/images/projects/mid2.png",
      DARK: "/images/projects/mid2.png",
    },
  },
  {
    index: 2,
    title: "TDHRC",
    href: "/projects",
    tags: ["Reactjs", "Vite", "Tailwindcss", "GSAP"],
    image: {
      LIGHT: "/images/projects/td1.png",
      DARK: "/images/projects/td1.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "HSM",
    // favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: [
      "/images/projects/hsm1.png",
      "/images/projects/hsm2.png",
      "/images/projects/hsm3.png",
      "/images/projects/hsm4.png",
    ],
    description:
      "Visualize JSON data format in form of a tree or graph. Application is made using Nextjs, Tailwindcss and Monaco Editor. Design image can be downloaded from this app.",
    liveWebsiteHref: "https://www.healthsystemsmatter.com/",
  },
  {
    name: "Midwife",
    imageUrl: [
      "/images/projects/mid1.png",
      "/images/projects/mid2.png",
      "/images/projects/mid3.png",
      "/images/projects/mid4.png",
      "/images/projects/mid5.png",
      "/images/projects/mid6.png",
    ],
    description:
      "Keep track of projects and tasks in different categories. Drag and drop card from tables. Assign user and priority to task and many more features. This app is made using Reactjs, Typescript, Tailwindcss and React-beautiful-dnd library.",

    liveWebsiteHref: "https://midwife-frontend-eight.vercel.app/",
  },
  {
    name: "TDHRC",

    imageUrl: [
      "/images/projects/td1.png",
      "/images/projects/td2.png",
      "/images/projects/td3.png",
    ],
    description:
      "Many short and fun games using Reactjs, Typescript and Tailwindcss with collaboration with other developers",
    sourceCodeHref: "https://github.com/BUMBAIYA/ManyGames",
    liveWebsiteHref: "https://manygames.vercel.app",
  },
  {
    name: "UnityAid",

    imageUrl: ["/images/projects/un.png", "/images/projects/undark.png"],
    description:
      "Many short and fun games using Reactjs, Typescript and Tailwindcss with collaboration with other developers",

    liveWebsiteHref: "https://splendorous-piroshki-b84b3d.netlify.app/",
  },
];
