import { Input } from "@/components/ui/input";

export default function MailForm() {
  return (
    <div className="text-[#2E1065] bg-white w-full max-w-[500px] p-6 rounded-2xl">
      {/* Heading */}
      <h2 className="text-4xl font-bold">Ask A Question</h2>
      <p className="text-gray-500 mt-2">
        If you have any questions, you can contact me. <br />
        Please, fill out the form below.
      </p>

      {/* Form Fields */}
      <form className="mt-8 space-y-6">
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
        <button
          type="submit"
          className="flex items-center gap-2 bg-[#6b2edc] text-white px-3 py-3 rounded-xl hover:bg-[#4d1ca7] hover:cursor-pointer transition-all shadow-lg"
        >
          Submit Now
          <span className="bg-white px-4 py-2 rounded-xl text-[#2E1065]">
            →
          </span>
        </button>
      </form>
    </div>
  );
}
