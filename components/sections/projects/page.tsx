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
  }
  description: string;
  languageIcons: string[];
};

type AnimatedProject = ProjectType & {
  direction: "left" | "right" | "top" | "bottom";
};

export const Projects = () => {
  const [animatedProjects, setAnimatedProjects] = useState<AnimatedProject[]>([]);
  const [showProjects, setShowProjects] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Randomize directions
  useEffect(() => {
    const directions = ["left", "right", "top", "bottom"];
    const typedProjects = rawProjects as unknown as ProjectType[];

    const randomized: AnimatedProject[] = typedProjects.map((project) => ({
      ...project,
      direction: directions[Math.floor(Math.random() * directions.length)] as AnimatedProject["direction"],
    }));

    setAnimatedProjects(randomized);
  }, []);

  // Trigger project cards after intro animation (1s delay)
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setShowProjects(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const getMotionProps = (direction: AnimatedProject["direction"], delay: number) => {
    const variants = {
      left: { x: "-100vw", opacity: 0 },
      right: { x: "100vw", opacity: 0 },
      top: { y: "-100vh", opacity: 0 },
      bottom: { y: "100vh", opacity: 0 },
    };

    return {
      initial: variants[direction],
      animate: isInView ? { x: 0, y: 0, opacity: 1 } : {},
      transition: { type: "spring", stiffness: 60, damping: 15, delay },
    };
  };

  return (
    <SectionContainer id="projects">
      <div className="section-contents mx-6 md:mx-[64px]" ref={ref}>
        <SectionHeader plainText="👨‍💻 Some of my" highlightText="Best Works" />

        {/* Intro animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {showProjects && (
            <div className="lg:w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
              {animatedProjects.map((project, idx) => {
                const delay = Math.floor(idx / 3) * 0.4; // Row-based delay
                return (
                  <motion.div key={idx} {...getMotionProps(project.direction, delay)}>
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
