"use client";
import React from "react";
import { SectionContainer } from "../SectionContainer";
import Image from "next/image";
import { SectionHeader } from "../SectionHeader";
import ContactInfo from "@/components/contactInfo/page";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <div id="contact" className="mx-4 sm:mx-10 md:mx-16 mt-20 mb-5 sm:my-20 md:mt-0 md:mb-10 flex items-center flex-col gap-20">
      <SectionHeader
        className="px-1 py-2 !text-center mx-10 md:mx-16"
        plainText=""
        highlightText="📬 Contact Information"
      />

      <motion.div
        
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <SectionContainer id="" className="relative bg-transparent">
          <div className="relative section-contents overflow-hidden min-h-[700px] w-[90vw] rounded-xl">
            {/* Animated Background Map */}
            <motion.div
              className="absolute inset-0 z-10 w-full h-full"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7012.151852116738!2d77.32088510409552!3d28.50736329025616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1790392082174!5m2!1sen!2sin"
                frameBorder="0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
                style={{ border: 0 }}
              />
            </motion.div>

            {/* Animated Contact Info Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0 }}
              viewport={{ once: true }}
              className="w-full p-4 sm:p-8 flex flex-col gap-10 rounded-xl relative z-20"
            >
              <ContactInfo />
            </motion.div>
          </div>

          {/* Background Grid Decorations */}
          <>
            <Image
              src="/svg/tech_stack_grid_dark.svg"
              alt="Background grid"
              width={569}
              height={373}
              className="hidden dark:md:block z-1 absolute -left-[135px]"
            />
            <Image
              src="/svg/tech_stack_grid.svg"
              alt="Background grid"
              width={569}
              height={373}
              className="hidden dark:hidden md:block z-10 absolute -left-[125px]"
            />
          </>
        </SectionContainer>
      </motion.div>
    </div>
  );
};
