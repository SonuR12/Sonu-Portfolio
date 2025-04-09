"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Section from "@/components/sections/page";
import { Resume } from "@/components/Resume/page";

export default function Home() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   },);

  //   return () => clearTimeout(timer);
  // }, []);

  // if (isLoading) {
  //   return <div className="flex items-center justify-center h-screen">Loading...</div>;
  // }

  return (
    <div>
      <header className="flex justify-end -right-2 sm:right-0 sm:justify-center items-center fixed top-2 mx-auto w-full z-50">
        <Navbar />
      </header>

      <main>
        <Section />
      </main>

      {/* Resume Button */}
      <Resume />
    </div>
  );
}