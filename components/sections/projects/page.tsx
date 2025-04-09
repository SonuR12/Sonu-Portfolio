"use client";

import React, { useEffect, useRef, useState } from "react";
import { SectionContainer } from "../SectionContainer";
import { SectionHeader } from "../SectionHeader";
import Image from "next/image";
import rawProjects from "@/data/projects.json" assert { type: "json" };
import { Project } from "./project";
import { motion, useInView } from "framer-motion";

// Typing
type ProjectType = {
  thumbnail: string;
  title: string;
  link: {
    label: string;
    url: string;
  };
  description: string;
  languageIcons: string[];
};

export const Projects = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [showProjects, setShowProjects] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Load project data
  useEffect(() => {
    setProjects(rawProjects as unknown as ProjectType[]);
  }, []);

  // Delay showing projects after intro animation
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setShowProjects(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  // Animation properties (scale in from center)
  const getMotionProps = (delay: number) => {
    return {
      initial: { scale: 0.5, opacity: 0 },
      animate: isInView ? { scale: 1, opacity: 1 } : {},
      transition: { type: "spring", stiffness: 80, damping: 14, delay },
    };
  };

  return (
    <SectionContainer id="projects">
      <div className="section-contents mx-6 md:mx-[64px]" ref={ref}>
        <SectionHeader plainText="👨‍💻 Some of my" highlightText="Best Works" />

        {/* Section fade-in */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {showProjects && (
            <div className="lg:w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
              {projects.map((project, idx) => {
                const delay = idx * 0.5;
                return (
                  <motion.div key={idx} {...getMotionProps(delay)}>
                    <Project
                      thumbnail={project.thumbnail}
                      title={project.title}
                      link={project.link}
                      description={project.description}
                      languageIcons={project.languageIcons}
                    />
                  </motion.div>
                );
              })}
            </div>
          )}
        </motion.div>
      </div>

      {/* Backgrounds */}
      <>
        <Image
          src="/projects_highlight.svg"
          alt="Background project"
          width={558}
          height={558}
          className="absolute -z-10 hidden md:block left-1/2 -translate-x-1/2 translate-y-1/2"
        />
        <Image
          src="/projects_highlight_mobile.svg"
          alt="Mobile Background project"
          width={558}
          height={558}
          className="absolute -z-10 md:hidden left-1/2 -translate-x-1/2 translate-y-1/2"
        />
      </>
    </SectionContainer>
  );
};
