import React from "react";
import { HeroSection } from "./heroSection/page";
import { Contact } from "./contact/page";
import Skills from "./skills/page";
import { Projects } from "./projects/page";

export default function Layout() {
  return (
    <div className="flex flex-col gap-40">
      <HeroSection />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
