import Image from "next/image";
import React from "react";
import Hero from "./hero";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="w-full relative overflow-hidden z-10 pt-40 md:pt-60"
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
        {/* Icon 1: Rocket */}
        <div className="circle-icon absolute z-10 -top-32 left-[180px] md:-top-32 md:left-72">
          <Image
            src="/rocket_icon.svg"
            alt="Rocket Icon"
            height={30}
            width={30}
          />
        </div>

        <div className="circle-icon absolute z-10 bg-opacity-[12%] top-[10px] left-2 md:-top-12 md:left-[610px]">
          <Image
            src="/merge_icon.svg"
            alt="Merge Icon"
            height={30}
            width={30}
          />
        </div>

        {/* Icon 2: Bracket */}
        <div className="circle-icon absolute z-10 bg-opacity-[12%] top-[160px] left-2 md:top-10 md:left-0">
          <Image
            src="/bracket_icon.svg"
            alt="Bracket Icon"
            height={30}
            width={30}
          />
        </div>

        {/* Icon 3: GitHub */}
        <div className="circle-icon absolute z-10 bg-opacity-[12%] -top-[40px] left-4 md:top-[350px] md:left-52">
          <Image
            src="/github_icon.svg"
            alt="Github Icon"
            height={30}
            width={30}
          />
        </div>

        {/* Icon 4: Electricity */}
        <div className="circle-icon absolute z-10 bg-opacity-[12%] top-[350px] left-[570px]">
          <Image
            src="/electricity_icon.svg"
            alt="Electricity Icon"
            height={30}
            width={30}
          />
        </div>
        <div className="circle-icon absolute z-10 bg-opacity-[12%] top-[170px] left-[960px]">
          <Image
            src="/stack_icon.svg"
            alt="Stack Icon"
            height={30}
            width={30}
          />
        </div>

        {/* Main Hero Content */}
        <main className="flex flex-col gap-[142px] relative z-20">
          <Hero />
        </main>
      </div>
    </section>
  );
};
