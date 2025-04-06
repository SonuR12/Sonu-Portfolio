"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Section from "@/components/sections/page";
import { HeroSection } from "@/components/sections/heroSection/page";
import Hero from "@/components/sections/heroSection/hero";

function hii() {
  console.log("hello");
}

export default function Home() {
  return (
    <div>
      <header className="flex justify-end -right-2 sm:right-0 sm:justify-center items-center fixed top-2 mx-auto w-full z-50">
        <Navbar />
      </header>

      <main>
        <Section />
      </main>
    </div>
  );
}
