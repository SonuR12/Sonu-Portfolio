import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="relative flex items-center z-20 mx-auto md:gap-[37px] md:mx-10">
      <div className="flex flex-col gap-[13px] md:gap-[34px] md:my-[58px] md:items-start items-center">
      <h1 className="text-center md:text-left text-2xl md:text-4xl font-semibold leading-snug">
          <span className="inline-block -ml-2">✌️</span> Hello, I'm Sonu Rai, I'm a {""}
          <span className="md:inline block text-[27px] md:text-[45px] highlight mt-3 md:mt-0">
            Software Engineer
          </span>
        </h1>
        <p className="text-center text-sm mx-6 md:text-start md:mx-0 md:text-[22px]">
          I'm passionate about building cool stuff, helping others, and always
          exploring new tech and ideas.
        </p>
        <Link href="mailto:sonurai272004@gmail.com" className="self-center bg-primary text-white p-2.5 rounded flex gap-2.5 items-center text-sm md:self-start md:text-xl/6">Let's Hire me<img src="/arrow_right_icon.svg" alt="Arrow right" /></Link>
      </div>
      <div>
        <Image src="/profile_light_purple.png" alt="light Profile Image" height={430} width={372} className="hidden md:block w-[372px] h-[430px] absolute right-0 -z-10" />
        <Image src="/profile_dark_purple.png" alt="dark Profile Image" height={430} width={372} className="hidden md:block w-[372px] h-[430px] absolute right-0 -z-10" />
        <Image src="/profile_picture.png" alt="Profile Image" height={417} width={357} className="hidden md:block min-w-[360px] h-[412px] z-10 mr-[6px] my-[8px] rounded-xl" />
      </div>
    </section>
  );
};

export default Hero;
