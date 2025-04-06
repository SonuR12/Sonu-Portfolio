import React from 'react'

interface Props { name: string, icon:string}

export const Skill = ({icon, name}: Props) => {
  return (
    <div className='relative flex gap-2 p-2 border-primary border rounded-lg h-[46px] w-fit overflow-hidden'>
      <img src={icon} alt={`${name} icon`} />
      <p className='text-lg'>{name}</p>
    </div>
  )
}

