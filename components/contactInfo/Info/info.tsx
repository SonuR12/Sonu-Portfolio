import { Clock, Send } from "lucide-react";
import Location from "../location/location";
import Contactlink from "./contact-link";

const Info = () => {

  return (
    <section className="flex flex-col gap-10 w-full lg:w-1/2 mt-48">
      {/* Top Info Boxes */}
      <div className="bg-gray-500/70 backdrop-blur-lg border border-gray-400 shadow-xl p-3 w-full flex flex-col sm:flex-row gap-3 md:gap-10 rounded-lg">
        <div className="flex items-center gap-4 w-full sm:w-1/2">
          <div className="bg-indigo-700 p-2 rounded-full">
            <Clock size={24} />
          </div>
          <div className="leading-1">
            <h1 className="font-bold text-sm">Working Hours</h1>
            <span className="text-xs">Mon-Fri 9:00am to 6:00pm</span>
          </div>
        </div>
        <div className="h-px w-full bg-white opacity-40 border-t border-violet-200 block sm:hidden" />
        <div className="w-px bg-white opacity-40 h-12 self-center hidden sm:block" />
        <div className="flex items-center gap-4 w-full sm:w-1/2">
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
     <Contactlink />

      <Location />
    </section>
  );
};

export default Info;
