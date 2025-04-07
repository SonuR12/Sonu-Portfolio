import React from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const locations = [
  {
    country: "India",
    flag: "🇮🇳",
    address: "G-120, Saurabh Vihar, Jaitpur, Badarpur, New Delhi, South Delhi, New Delhi - 110044",
    phone: "+91 9905757864",
    map: "/map.png",
  },
];

const Location = () => {
  return (
    <section>
      <div className="grid gap-6">
        {locations.map((loc, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row justify-between items-start md:items-center gap-6 p-4 border border-gray-200 rounded-xl shadow-xl backdrop-blur-lg bg-white/60"
          >
            <div className="w-full sm:w-fit lg:w-40 xl:w-full">
              <h3 className="flex items-center gap-2 text-xl font-semibold text-indigo-900 mb-2">
                <span className="text-2xl">{loc.flag}</span>
                {loc.country}
              </h3>
              <p className="text-gray-600 lg:line-clamp-2">{loc.address}</p>
              <p className="text-gray-800 mt-2">{loc.phone}</p>
              <div className="border-t border-violet-200 my-4" />
              <Link href="/" className="text-primary font-medium flex items-center gap-1 hover:underline">
                Get Directions <ArrowUpRight size={16} />
              </Link>
            </div>

            {/* Pulse Circle Effect */}
            <div className="relative flex justify-center items-center min-w-[120px] md:min-w-[150px] mx-auto sm:mx-0">
              <span className="pulse-ring pulse-ring-1 border-indigo-300" />
              <span className="pulse-ring pulse-ring-2 border-indigo-200" />
              <span className="pulse-ring pulse-ring-3 border-indigo-100" />
              <Image
                height={100}
                width={100}
                src={loc.map}
                alt={`${loc.country} map`}
                className="relative z-10 rounded-full border-2 border-gray-200 py-2"
                priority
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Location;
