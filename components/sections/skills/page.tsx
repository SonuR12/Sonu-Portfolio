import React from 'react'
import skills from "@/data/skills.json"
import { SectionContainer } from '../SectionContainer'
import { SectionHeader } from '../SectionHeader'
import Image from 'next/image'
import { Skill } from './skill'

const Skills = () => {
  return (
    <SectionContainer id='skills'>
      <div className='section-contents mx-[22px] md:mx-[116px]'>
        <SectionHeader plainText='👨‍💻 This is my' highlightText='Tech Stacks'/>
        <div className="card w-full px-[33px] py-[27px] flex flex-wrap flex-row justify-center items-center z-10 gap-[19px] md:gap-[33px]">
          {skills.map((skill, id )=>(
            <Skill key={id} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>
      <>
      <Image src="/tech_stack_grid_dark.svg" alt='Background grid' width={569} height={373} className='hidden dark:md:block z-1 absolute -left-[135px] ' />
      <Image src="/tech_stack_grid.svg" alt='Background grid' width={569} height={373} className='hidden dark:hidden md:block z-1 absolute -left-[125px] ' />
      </>
    </SectionContainer>
  )
}

export default Skills



