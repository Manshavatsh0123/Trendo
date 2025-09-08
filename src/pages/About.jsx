import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8F3EF] to-[#EFE6E1] py-12 px-6 lg:px-20">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-10 space-y-10 border border-[#E5D7CF]">
        
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#714329]">
          About <span className="text-[#B08463]">Zaptro</span>
        </h1>

       
        <p className="text-gray-700 text-lg leading-relaxed text-center">
          Welcome to{" "}
          <span className="font-semibold text-[#714329]">Zaptro</span>, your
          one-stop destination for{" "}
          <span className="text-[#B08463]">cutting-edge tech</span> and
          lifestyle products. From smart gadgets to everyday essentials, we’re
          here to make your shopping journey seamless, stylish, and reliable.
        </p>

        
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#714329]">
            Our Mission
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            At Zaptro, our mission is simple:{" "}
            <span className="font-semibold text-[#B08463]">
              to bring innovation closer to you
            </span>
            . We connect people with quality products that blend technology,
            design, and affordability — delivered with speed and care.
          </p>
        </div>

        
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#714329]">
            Why Choose Zaptro?
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Premium products curated for quality and style</li>
            <li>Fast, secure, and reliable delivery</li>
            <li>Friendly customer support always ready to help</li>
            <li>Simple returns and a smooth shopping experience</li>
          </ul>
        </div>

        
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#714329]">
            Our Vision
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            We envision a future where shopping isn’t just convenient but{" "}
            <span className="font-semibold text-[#B08463]">
              an experience to enjoy
            </span>
            . At Zaptro, we stay ahead of trends, offering products that are
            practical, modern, and elevate everyday living.
          </p>
        </div>

        
        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold text-[#714329] mb-3">
            Join the Zaptro Family
          </h3>
          <p className="text-gray-700 mb-6">
            Whether you’re a gadget lover, a trendsetter, or just exploring —{" "}
            <span className="text-[#B08463]">Zaptro has something for you</span>.
          </p>
          <Link to={"/products"}>
            <button className="px-8 py-3 bg-[#714329] text-white font-semibold rounded-2xl shadow-lg hover:bg-[#B08463] transition duration-300">
              Start Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
