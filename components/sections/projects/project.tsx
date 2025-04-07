import React from "react";
import Image from "next/image";

interface Props {
  thumbnail: string;
  title: string;
  link: {
    label: string;
    url: string;
  };
  description: string;
  languageIcons: string[];
}

export const Project = ({ thumbnail, title, link, description, languageIcons }: Props) => {
  return (
    <div className="group card flex flex-col items-stretch w-full max-w-[428.4px] p-5 md:p-[18px] gap-5 bg-white dark:bg-neutral-900 rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 ease-in-out overflow-hidden z-10">
      {/* Thumbnail */}
      <div className="w-full aspect-video relative rounded-xl overflow-hidden transition-transform duration-300">
        <Image src={thumbnail} alt={title} fill className="object-cover" />
      </div>

      {/* Title + Link */}
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-neutral-800 dark:text-white group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 hover:underline dark:text-blue-400"
        >
          {link.label}
        </a>
      </div>

      {/* Description */}
      <p className="line-clamp-2 text-sm text-neutral-600 dark:text-neutral-300">
        {description}
      </p>

      {/* Language Icons */}
      <div className="flex items-center gap-3 mt-auto">
        {languageIcons.map((icon, index) => (
          <div
            key={index}
            className="bg-white dark:bg-neutral-800 rounded-lg p-1 shadow-sm"
          >
            <Image
              src={icon}
              alt="Language Icon"
              width={24}
              height={24}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
