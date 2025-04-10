import Image from "next/image";
import React from "react";
import Hero from "./hero";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="w-full relative overflow-hidden z-10 pt-30 md:pt-52"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-[795px] bg-repeat-x bg-[url('/top_bg_light.svg')] bg-[auto_auto] dark:hidden hidden md:block z-0" />
      <div className="absolute top-0 left-0 w-full h-[600px] bg-repeat-x bg-[url('/top_bg_mobile_light.svg')] bg-[auto_auto] dark:hidden md:hidden block z-0" />
      <div className="absolute top-0 left-0 w-full h-[795px] bg-repeat-x bg-[url('/top_bg_dark.svg')] bg-[auto_auto] hidden md:dark:block z-0" />
      <div className="absolute top-0 left-0 w-full min-h-[600px] bg-repeat-x bg-[url('/top_bg_mobile_dark.svg')] bg-[auto_auto] hidden dark:block dark:md:hidden z-0" />

      {/* <img
src="hero.svg"
        alt="Top dark mode background highlights"
        width={809}
        height={877}
        className="absolute top-0 left-0 w-full h-[600px] bg-repeat-x bg-[auto_auto] dark:hidden md:hidden block z-0 pointer-events-none"
      /> */}

      {/* Highlight SVGs */}
      <img
        src="/top_highlight.svg"
        alt="Top dark mode background highlights"
        width={809}
        height={877}
        className="absolute top-[-515px] hidden dark:md:block left-1/2 -translate-x-1/2 z-0 pointer-events-none"
      />
      <img
        src="/top_highlight_mobile.svg"
        alt="Top dark mode mobile highlights"
        width={429}
        height={465}
        className="absolute top-[-229px] hidden dark:block dark:md:hidden left-1/2 -translate-x-1/2 z-0 pointer-events-none"
      />

      {/* Icon Decorations */}
      <div className="relative max-w-screen-lg mx-auto z-10">
        {/* Icon 1: Rocket (from the left) */}
        <motion.div
          className="circle-icon absolute z-10 -top-32 left-[180px] md:-top-32 md:left-72"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/rocket_icon.svg"
            alt="Rocket Icon"
            height={30}
            width={30}
          />
        </motion.div>

        {/* Icon 2: Merge (from the top) */}
        <motion.div
          className="circle-icon absolute z-10 bg-opacity-[12%] top-[10px] left-2 md:-top-12 md:left-[610px]"
          initial={{ y: -120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/merge_icon.svg"
            alt="Merge Icon"
            height={30}
            width={30}
          />
        </motion.div>

        {/* Icon 3: Bracket (from the bottom) */}
        <motion.div
          className="circle-icon absolute z-10 bg-opacity-[12%] top-[160px] left-2 md:top-10 md:left-0"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/bracket_icon.svg"
            alt="Bracket Icon"
            height={30}
            width={30}
          />
        </motion.div>

        {/* Icon 4: GitHub (from the right) */}
        <motion.div
          className="circle-icon absolute z-10 bg-opacity-[12%] -top-[40px] left-4 md:top-[350px] md:left-56"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/github_icon.svg"
            alt="Github Icon"
            height={30}
            width={30}
          />
        </motion.div>

        {/* Icon 5: Electricity (from bottom) */}
        <motion.div
          className="circle-icon absolute z-10 bg-opacity-[12%] top-[350px] left-[570px]"
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/electricity_icon.svg"
            alt="Electricity Icon"
            height={30}
            width={30}
          />
        </motion.div>

        {/* Icon 6: Stack (from right) */}
        <motion.div
          className="circle-icon absolute z-10 bg-opacity-[12%] top-[170px] left-[960px]"
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/stack_icon.svg"
            alt="Stack Icon"
            height={30}
            width={30}
          />
        </motion.div>

        {/* Main Hero Content */}
        <main className="flex flex-col gap-[142px] relative z-20">
          <Hero />
        </main>
      </div>
    </section>
  );
};
