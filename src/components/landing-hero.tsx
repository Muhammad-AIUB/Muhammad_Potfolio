import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import FadeUp from "@/animation/fade-up";
import { TbFileCv } from "react-icons/tb";

export default function LandingHero() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      animate={{
        transform: `translateY(${progress * 20}vh)`,
      }}
      transition={{ type: "spring", stiffness: 100 }}
      ref={ref}
      className=" flex max-h-[1000px] min-h-[calc(100vh-200px)] items-center px-6 sm:px-14 md:h-[calc(100vh-200px)] md:min-h-max md:px-20"
    >
      <div className="w-full">
        <div className="mx-auto max-w-7xl">
          <AnimatePresence>
            <FadeUp key="title-main" duration={0.6}>
              <h1 className="bg-accent bg-clip-text py-2 text-5xl font-bold text-transparent sm:text-6xl md:text-7xl xl:text-8xl">
                Muhammad Jubayer
              </h1>
              <span className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 md:text-3xl">
                Full-Stack Developer
              </span>
            </FadeUp>
            <FadeUp key="description" duration={0.6} delay={0.2}>
              <div className="mt-8 max-w-3xl text-base font-semibold text-zinc-900 dark:text-zinc-200 sm:text-base md:text-xl">
                I am a <span className="font-bold">Full-Stack Developer</span>{" "}
                skilled in building high-performance web applications using the{" "}
                <span className="font-semibold text-accent">MERN Stack</span>,{" "}
                <span className="font-semibold text-accent">Nest.js</span>, and{" "}
                <span className="font-semibold text-accent">Next.js</span>. I
                specialize in{" "}
                <span className="font-semibold text-accent">Node.js</span>,{" "}
                <span className="font-semibold text-accent">Express</span>,{" "}
                <span className="font-semibold text-accent">React</span>, and{" "}
                <span className="font-semibold text-accent">MongoDB</span>.
              </div>
            </FadeUp>
            <FadeUp key="description" duration={0.6} delay={0.4}>
              <button className="mt-7 inline-block rounded-full border border-accent px-8 py-3 text-base font-semibold text-accent transition-colors duration-150 hover:bg-accent/80 hover:text-white">
                <TbFileCv className="mr-2 inline-block" size={20} />
                Resume
              </button>
            </FadeUp>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
