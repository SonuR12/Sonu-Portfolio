import { Clock, Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import React, { useState } from "react";
import Location from "../location/location";

const Info = () => {
  const [showText, setShowText] = useState({
    phone: true,
    mail: false,
    linkedin: false,
  });

  const toggleText = (key: string) => {
    setShowText((prev) => {
      if (prev[key as keyof typeof prev]) {
        return prev;
      }
  
      return {
        phone: false,
        mail: false,
        linkedin: false,
        [key]: true,
      };
    });
  };
  

  const contactItems = [
    {
      key: "phone",
      icon: <Phone size={24} />,
      text: "+91 9905757864",
    },
    {
      key: "mail",
      icon: <Mail size={24} />,
      text: "sonurai272004@gmail.com",
    },
    {
      key: "linkedin",
      icon: <Linkedin size={24} />,
      text: "SonuRai",
    },
    {
      key: "GitHub",
      icon: <Github size={24} />,
      text: "SonuR12",
    },
  ];

  return (
    <section className="flex flex-col gap-10 w-full lg:w-1/2 mt-48">
      {/* Top Info Boxes */}
      <div className="bg-gray-500/70 backdrop-blur-lg border border-gray-400 shadow-xl p-3 w-full flex gap-3 md:gap-10 rounded-lg">
        <div className="flex items-center gap-4 w-1/2">
          <div className="bg-indigo-700 p-2 rounded-full">
            <Clock size={24} />
          </div>
          <div className="leading-1">
            <h1 className="font-bold text-sm">Working Hours</h1>
            <span className="text-xs">Mon-Fri 9:00am to 6:00pm</span>
          </div>
        </div>
        <div className="w-px bg-white opacity-40 h-12 self-center" />
        <div className="flex items-center gap-4 w-1/2">
          <div className="bg-indigo-700 p-2 rounded-full">
            <Send size={24} />
          </div>
          <div className="leading-1">
            <h1 className="font-bold text-sm">Location</h1>
            <span className="text-xs">New Delhi</span>
          </div>
        </div>
      </div>

      {/* Contact Buttons */}
      <div className="flex flex-wrap gap-3">
        {contactItems.map(({ key, icon, text }) => {
          const isVisible = showText[key as keyof typeof showText];
          return (
            <div
              key={key}
              onClick={() => toggleText(key)}
              className={`cursor-pointer flex items-center bg-indigo backdrop-blur-lg border border-blue-900 shadow-xl w-fit p-1 rounded-full transition-all duration-300 ${
                isVisible ? "px-2" : "p-2"
              }`}
            >
              <div className="bg-indigo-700 p-2 rounded-full">{icon}</div>
              {isVisible && (
                <div
                  className="ml-2 text-indigo-600 text-sm transform transition-transform duration-300 translate-x-0 opacity-100"
                >
                  {text}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <Location />
    </section>
  );
};

export default Info;
