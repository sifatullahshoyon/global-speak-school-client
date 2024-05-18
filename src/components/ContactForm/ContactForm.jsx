import React from "react";
import PrimaryBtn from "../shared/Button/PrimaryBtn";

const ContactForm = () => {
  return (
    <div className=" py-8 space-y-3 font-sans ">
      {/* Input fields and the form started */}
      <form action="" className="space-y-6">
        <div className="flex gap-6 text-sm">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Your Name"
            className="w-full px-4 py-4 rounded-md border border-l-2 border-l-amber-500 focus:outline-amber-500  "
          />
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Your Name"
            className="w-full px-4 py-4 rounded-md border border-l-2 border-l-amber-500 focus:outline-amber-500  "
          />
        </div>
        <div className="space-y-2 text-sm">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Your subject"
            className="w-full px-4 py-4 rounded-md border border-l-2 border-l-amber-500 focus:outline-amber-500"
          />
        </div>
        <div className="space-y-2 text-sm">
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-7 rounded-md border border-l-2 border-l-amber-500 focus:outline-amber-500"
          ></textarea>
        </div>
        {/* Sign in Button */}
        <PrimaryBtn label="Send Message" />
      </form>
    </div>
  );
};

export default ContactForm;
