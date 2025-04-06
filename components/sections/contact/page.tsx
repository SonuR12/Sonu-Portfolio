import React from "react";
import { SectionContainer } from "../SectionContainer";
import Image from "next/image";
import ContactInfo from "@/components/contactInfo/Info/contactInfo";
import LocationInfo from "@/components/contactInfo/location/locationInfo";

export const Contact = () => {
  return (
    <SectionContainer id="contact">
      <div className="section-contents mx-10 md:mx-16">
        <div className="card w-full px-[33px] py-[27px] z-10 flex flex-col gap-10">
          <ContactInfo />
          <LocationInfo />
        </div>
      </div>
      <>
        <Image
          src="/tech_stack_grid_dark.svg"
          alt="Background grid"
          width={569}
          height={373}
          className="hidden dark:md:block z-1 absolute -left-[135px] "
        />
        <Image
          src="/tech_stack_grid.svg"
          alt="Background grid"
          width={569}
          height={373}
          className="hidden dark:hidden md:block z-1 absolute -left-[125px] "
        />
      </>
    </SectionContainer>
  );
};
