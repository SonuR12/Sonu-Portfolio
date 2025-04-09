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
     <header className="flex justify-end sm:justify-center sticky top-2 z-[999]">
     <Resume />
        <Navbar />
      </header>

      <main className="-mt-11">
        <Section />
      </main>

      {/* Resume Button */}

    </div>
  );
}
