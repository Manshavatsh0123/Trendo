
import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "8f8221cc-093c-4cbc-87d6-f57e1cc13d5a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("Something went wrong. Try again.");
    }
  };

  return (
    <div
      id="contact"
      className="w-full px-6 sm:px-[12%] py-20 scroll-mt-20 bg-gradient-to-b from-[#F8F3EF] to-[#EFE6E1]"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-[#714329] mb-4">
          Let’s Connect!
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-3">
          Have a question, project idea, or just want to say hello?  
          We’d love to hear from you!
        </p>
        <p className="text-gray-500 text-sm max-w-2xl mx-auto leading-relaxed">
          At <span className="font-semibold text-[#714329]">Zaptro</span>, we
          believe in building strong connections. Drop us a message and let’s
          create something amazing together.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto mt-10 space-y-6 bg-white p-8 rounded-2xl shadow-xl border border-[#E5D7CF]"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            required
            name="name"
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#B08463] outline-none text-gray-700 text-base transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            name="email"
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#B08463] outline-none text-gray-700 text-base transition"
          />
        </div>

        <textarea
          placeholder="Your Message"
          required
          name="message"
          rows={6}
          className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#B08463] outline-none text-gray-700 text-base transition resize-none"
        ></textarea>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 py-3 px-10 bg-[#714329] text-white font-semibold rounded-full mx-auto hover:bg-[#B08463] transition duration-300 shadow-md"
        >
          Send Message
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
