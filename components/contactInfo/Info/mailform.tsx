"use client";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export default function MailForm() {
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="text-[#2E1065] mailform backdrop-blur-lg bg-white/50 w-full max-w-[500px] h-full max-h-[800px] px-6 py-8 rounded-2xl border-1 border-gray-200 shadow-xl"
    >
      {/* Heading */}
      <div className="py-2">
        <h2 className="text-4xl font-bold">Ask A Question</h2>
        <p className="text-gray-500 mt-2">
          If you have any questions, you can contact me. <br />
          Please, fill out the form below.
        </p>
      </div>

      {/* Form Fields */}
      <form className="mt-8 space-y-6 py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 text-sm font-medium">First Name</label>
            <Input type="text" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Last Name</label>
            <Input type="text" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Phone Number</label>
            <Input
              type="number"
              className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Your Email</label>
            <Input type="email" />
          </div>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Message</label>
          <textarea
            rows={4}
            className="w-full border-b border-[#2E1065] bg-transparent focus:outline-none focus:border-[#2E1065] resize-none"
            placeholder="Your message..."
          />
        </div>

        {/* Submit Button */}
        <div className="py-2">
          <button
            type="submit"
            className="flex items-center gap-2 bg-gradient-to-br from-[#6748FF] via-[#5a3ee0] to-[#4c32c7] hover:brightness-110 text-white px-3 py-3 rounded-xl hover:bg-indigo-800 hover:cursor-pointer transition-all shadow-lg"
          >
            Submit Now
            <span className="bg-white px-4 py-2 rounded-xl text-[#2E1065]">
              →
            </span>
          </button>
        </div>
      </form>
    </motion.div>
  );
}
