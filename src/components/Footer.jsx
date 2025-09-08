import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#FFF8F0] via-[#F5E6DA] to-[#EAD9CE] text-[#714329] py-12">
      <div className="max-w-7xl mx-auto px-6 md:flex md:justify-between md:items-start gap-10">


        <div className="mb-8 md:mb-0 max-w-sm">
          <Link to="/">
            <h1 className="text-3xl font-extrabold text-[#714329] tracking-wide">Trendo</h1>
          </Link>
          <p className="mt-3 text-sm text-[#714329]/80">
            Powering Your Lifestyle with Fashion, Furniture, Electronics & More.
          </p>
          <p className="mt-2 text-sm text-[#714329]/70">123 Trendy St, Style City, NY 10001</p>
          <p className="text-sm text-[#714329]/70">Email: support@trendo.com</p>
          <p className="text-sm text-[#714329]/70">Phone: (123) 456-7890</p>
        </div>


        <div className="mb-8 md:mb-0">
          <h3 className="text-lg font-semibold text-[#B08463]">Customer Service</h3>
          <ul className="mt-3 text-sm space-y-2">
            <li className="hover:text-[#714329] cursor-pointer">Contact Us</li>
            <li className="hover:text-[#714329] cursor-pointer">Shipping & Returns</li>
            <li className="hover:text-[#714329] cursor-pointer">FAQs</li>
            <li className="hover:text-[#714329] cursor-pointer">Order Tracking</li>
            <li className="hover:text-[#714329] cursor-pointer">Size Guide</li>
          </ul>
        </div>


        <div className="mb-8 md:mb-0">
          <h3 className="text-lg font-semibold text-[#B08463]">Follow Us</h3>
          <div className="flex space-x-5 mt-3 text-2xl text-[#714329]">
            <FaFacebook className="hover:text-[#B08463] cursor-pointer transition-colors" />
            <FaInstagram className="hover:text-[#B08463] cursor-pointer transition-colors" />
            <FaTwitterSquare className="hover:text-[#B08463] cursor-pointer transition-colors" />
            <FaPinterest className="hover:text-[#B08463] cursor-pointer transition-colors" />
          </div>
        </div>


        <div>
          <h3 className="text-lg font-semibold text-[#B08463]">Stay in the Loop</h3>
          <p className="mt-3 text-sm text-[#714329]/80">
            Subscribe for offers, free giveaways, and the latest trends.
          </p>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full p-3 rounded-l-lg bg-white border border-[#D0B9A7] text-[#714329] placeholder-[#A17C65] focus:outline-none focus:ring-2 focus:ring-[#B08463]"
            />
            <button
              type="submit"
              className="bg-[#714329] text-white px-5 rounded-r-lg font-semibold hover:bg-[#8E5B43] transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>


      <div className="mt-10 border-t border-[#D0B9A7]/50 pt-6 text-center text-sm text-[#714329]/80">
        <p>
          &copy; {new Date().getFullYear()} <span className="text-[#B08463] font-bold">Trendo</span>. All rights reserved.
        </p>
      </div>
    </footer>

  )
}

export default Footer