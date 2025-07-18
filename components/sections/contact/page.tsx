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
          <div className="relative section-contents overflow-hidden min-h-[700px] rounded-xl">
            {/* Animated Background Map */}
            <motion.div
              className="absolute inset-0 bg-gray-300 z-10"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.0542603934364!2d77.31781887506077!3d28.50801517573292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce6efe67e6393%3A0x988d6c9b56e0b3ca!2sg%2C%20120C%2C%20Saurabh%20Vihar%2C%20Molar%20Band%2C%20New%20Delhi%2C%20Delhi%20110044!5e0!3m2!1sen!2sin!4v1743954867036!5m2!1sen!2sin"
                className="w-full h-full opacity-100"
                frameBorder="0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
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
