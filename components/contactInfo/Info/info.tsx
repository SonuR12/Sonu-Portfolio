import { Clock, Mail, Phone } from 'lucide-react'
import React from 'react'

const Info = () => {
  return (
    <section className="flex flex-col gap-10 w-full lg:w-1/2">
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl font-bold text-[#2E1065] w-10 leading-[3rem]">
        Contact Information
      </h1>
      <span className="text-base ">
        Have questions or feedback? We're here to help and ensure you
        have a smooth and enjoyable experience.
      </span>
    </div>

    <div className="bg-gray-500 p-3 w-full flex gap-3 md:gap-10 rounded-lg working">
      {/* 1 */}
      <div className="flex items-center gap-4 w-1/2 boxes">
        <div className="bg-violet-700 p-2 rounded-full">
          <Clock size={24} />
        </div>
        <div className="leading-1">
          <h1 className="font-bold text-sm">Working Hours</h1>
          <span className="text-xs">Mon-Fri 9:00am to 6:00pm</span>
        </div>
      </div>

      <div className="w-px bg-white opacity-40 h-12 self-center bar" />

      {/* 2 */}
      <div className="flex items-center gap-4 w-1/2 boxes">
        <div className="bg-violet-700 p-2 rounded-full">
          <Mail size={24} />
        </div>
        <div className="leading-1">
          <h1 className="font-bold text-sm">Location</h1>
          <span className="text-xs">New Delhi</span>
        </div>
      </div>
    </div>

    <div className="flex items-center gap-1 bg-indigo-400 w-fit p-1 rounded-full">
      <div className="bg-violet-700 p-2 rounded-full">
        <Phone size={24} />
      </div>
      <div className="px-2">+91 9905757864</div>
    </div>
  </section>
  )
}

export default Info
