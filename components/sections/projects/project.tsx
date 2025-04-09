"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

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

export const Project = ({
  thumbnail,
  title,
  link,
  description,
  languageIcons,
}: Props) => {
  return (
    <CardContainer className="inter-var -mb-36">
      <CardBody className="bg-white dark:bg-neutral-900 border border-black/10 dark:border-white/20 rounded-2xl p-5 md:p-[18px] h-fit w-full max-w-[428px] shadow-md hover:shadow-xl transition-all duration-200">
        {/* Thumbnail */}
        <CardItem className="w-full aspect-video relative rounded-xl overflow-hidden">
          <Image src={thumbnail} alt={title} fill className="object-cover" priority />
        </CardItem>

        {/* Title + Link */}
        <div className="flex justify-between items-center mt-4">
          <CardItem className="text-xl font-semibold text-neutral-800 dark:text-white">
            {title}
          </CardItem>
          <CardItem
            as={Link}
            href={link.url}
            target="_blank"
            className="text-sm text-blue-600 hover:underline dark:text-blue-400"
          >
            {link.label}
          </CardItem>
        </div>

        {/* Description */}
        <CardItem as="p" className="line-clamp-2 text-sm text-neutral-600 dark:text-neutral-300 mt-2">
          {description}
        </CardItem>

        {/* Language Icons */}
        <CardItem className="flex items-center gap-3 mt-4">
          {languageIcons.map((icon, index) => (
            <div key={index} className="bg-white dark:bg-neutral-800 rounded-lg p-1 shadow-sm">
              <Image
                src={icon}
                alt="Language Icon"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
          ))}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};
