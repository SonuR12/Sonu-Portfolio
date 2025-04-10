"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

interface Props {
  thumbnail: string;
  video: string;
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
  video,
  title,
  link,
  description,
  languageIcons,
}: Props) => {
  const [videoError, setVideoError] = useState(false);
  const hasVideo = video && !videoError;

  return (
    <CardContainer className="inter-var -mb-36">
      <CardBody className="group bg-white dark:bg-neutral-900 border border-black/10 dark:border-white/20 rounded-2xl p-5 md:p-[18px] h-fit w-full max-w-[428px] shadow-md hover:shadow-xl transition-all duration-200">
        
        {/* Thumbnail + Video */}
        <CardItem className="w-full aspect-video relative rounded-xl overflow-hidden">
          {/* Base Thumbnail for all views */}
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover"
            priority
          />

          {/* === Mobile View: show video if available === */}
          <div className="absolute top-0 left-0 w-full h-full block md:hidden">
            {hasVideo ? (
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                onError={() => setVideoError(true)}
              >
                <source src={video} type="video/mp4" />
              </video>
            ) : null}
          </div>

          {/* === Desktop Hover Effects === */}
          <div className="absolute top-0 left-0 w-full h-full hidden md:block">
            {hasVideo ? (
              <video
                className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                autoPlay
                muted
                loop
                playsInline
                onError={() => setVideoError(true)}
              >
                <source src={video} type="video/mp4" />
              </video>
            ) : (
              <div
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                  w-full h-full flex items-center justify-center 
                  bg-black bg-opacity-50 text-white text-sm font-semibold"
              >
                Preview Unavailable
              </div>
            )}
          </div>
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
        <CardItem
          as="p"
          className="line-clamp-2 text-sm text-neutral-600 dark:text-neutral-300 mt-2"
        >
          {description}
        </CardItem>

        {/* Language Icons */}
        <CardItem className="flex items-center gap-3 mt-4">
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
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};
