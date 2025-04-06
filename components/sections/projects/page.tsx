import React from "react";
import { SectionContainer } from "../SectionContainer";
import { SectionHeader } from "../SectionHeader";
import Image from "next/image";
import projects from "@/data/projects.json";
import { Project } from "./project";

export const Projects = () => {
  return (
    <SectionContainer id="projects">
      <div className="section-contents mx-6 md:mx-[64px]">
        <SectionHeader plainText="👨‍💻 Some of my" highlightText="Best Works" />
        <div className="lg:w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {projects.map((project, id) => (
            <Project
              key={id}
              thumbnail={project.thumbnail}
              title={project.title}
              link={project.link}
              description={project.description}
              languageIcons={project.languageIcons}
            />
          ))}
        </div>
      </div>
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

        {/* <Image src="/tech_stack_grid.svg" alt='Background grid' width={569} height={373} className='hidden dark:hidden md:block z-1 absolute -left-[125px] ' /> */}
      </>
    </SectionContainer>
  );
};
