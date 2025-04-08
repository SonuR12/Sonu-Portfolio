"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Text Animations
const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

// Image Animations
const imageAnimationVariants = {
  light: {
    hidden: { x: -300, rotate: -30, opacity: 0 },
    visible: {
      x: 0,
      rotate: 0,
      opacity: 1,
      transition: { delay: 0.2, duration: 0.8, ease: "easeOut" },
    },
  },
  dark: {
    hidden: { x: 300, rotate: 30, opacity: 0 },
    visible: {
      x: 0,
      rotate: 0,
      opacity: 1,
      transition: { delay: 0.6, duration: 0.8, ease: "easeOut" },
    },
  },
  profile: {
    hidden: { y: 400, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 1.1, duration: 0.8, ease: "easeOut" },
    },
    float: {
      y: [0, -6, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  },
};

const Hero = () => {
  return (
    <section className="relative flex items-center z-20 mx-auto md:gap-[37px] md:mx-10">
      {/* Text Section */}
      <div className="flex flex-col gap-[13px] md:gap-[34px] md:my-[58px] md:items-start items-center">
        <motion.h1
          className="text-center md:text-left text-2xl md:text-4xl font-semibold leading-snug"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={textVariants}
        >
          <span className="inline-block -ml-2">✌️</span> Hello, I&apos;m Sonu
          Rai, I&apos;m a{" "}
          <span className="md:inline block text-[27px] md:text-[45px] highlight mt-3 md:mt-0">
            Software Engineer
          </span>
        </motion.h1>

        <motion.p
          className="text-center text-sm mx-6 md:text-start md:mx-0 md:text-[22px]"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={textVariants}
        >
          I&apos;m passionate about building cool stuff, helping others, and
          always exploring new tech and ideas.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          custom={2}
          variants={textVariants}
        >
          <Link
            href="mailto:sonurai272004@gmail.com"
            className="group self-center bg-primary text-white p-2.5 rounded flex gap-2.5 items-center text-sm md:self-start md:text-xl/6 transition-all"
          >
            Let&apos;s connect
            <img
              src="/arrow_right_icon.svg"
              alt="Arrow right"
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>

      {/* Image Section */}
      <div className="relative hidden md:block min-w-[360px] h-[430px] z-10 mr-[6px] my-[8px] rounded-xl">
        <motion.div
          className="absolute right-0 -z-10"
          initial="hidden"
          animate="visible"
          variants={imageAnimationVariants.light}
        >
          <Image
            src="/profile_light_purple.png"
            alt="Light Profile"
            width={372}
            height={430}
            className="w-[372px] h-[430px]"
            priority
          />
        </motion.div>

        <motion.div
          className="absolute right-0 -z-10"
          initial="hidden"
          animate="visible"
          variants={imageAnimationVariants.dark}
        >
          <Image
            src="/profile_dark_purple.png"
            alt="Dark Profile"
            width={372}
            height={430}
            className="w-[372px] h-[430px]"
            priority
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate={["visible", "float"]}
          variants={imageAnimationVariants.profile}
        >
          <Image
            src="/profile_picture.png"
            alt="Profile Image"
            width={357}
            height={417}
            className="min-w-[360px] h-[412px] z-10 mr-[6px] my-[8px] rounded-xl"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
