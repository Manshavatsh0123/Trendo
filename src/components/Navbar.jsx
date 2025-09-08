import React, { useEffect, useRef, useState } from 'react'
import { FaCopyright } from 'react-icons/fa';
import { IoArrowBack, IoArrowForward, IoCartOutline, IoHandRight } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

const NavBar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();
  const openSideMenu = () => {
    sideMenuRef.current.classList.remove('translate-x-full');
  }
  const closeSideMenu = () => {
    sideMenuRef.current.classList.add('translate-x-full');
  }
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, [])
  return (
    <>

      <nav
        className={`w-full fixed top-0 left-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-500 
    ${isScroll
            ? "bg-gradient-to-r from-[#D0B9A7]/70 via-[#C89B83]/80 to-[#D0B9A7]/30 shadow-lg backdrop-blur-md text-white"
            : "bg-transparent backdrop-blur-sm text-[#714329]"
          }`}
      >

        <div className="flex items-center space-x-3">

          <div className="w-12 h-12 bg-[#714329] rounded-full flex items-center justify-center shadow-md">
            <span className="text-[#F9FAFB] text-lg font-bold">T</span>
          </div>
          <h1 className="text-2xl font-extrabold text-[#714329] tracking-wide">
            Trendo
          </h1>
        </div>


        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-10 rounded-full px-10 py-2 transition-all duration-300 ${isScroll ? "bg-transparent" : "bg-white/70 shadow-sm backdrop-blur-md"
            }`}
        >
          <li>
            <a
              className="text-gray-800 hover:text-black Ovo transition-colors"
              href="/"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-gray-800 hover:text-black Ovo transition-colors"
              href="/about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="text-gray-800 hover:text-black Ovo transition-colors"
              href="/products"
            >
              Products
            </a>
          </li>
          <li>
            <a
              className="text-gray-800 hover:text-black Ovo transition-colors"
              href="/contact"
            >
              Contact
            </a>
          </li>
        </ul>


        <div className="flex items-center gap-5">
          <Link to="/cart" className="relative">
            <IoCartOutline className="text-3xl text-[#714329]/80 hover:text-[#714329]" />
            <span className="absolute -top-2 -right-2 px-1.5 rounded-full bg-[#E07A5F] text-white text-xs w-5 h-5 flex items-center justify-center">
              0
            </span>
          </Link>
          <div>
            <SignedOut>
              <SignInButton className="hidden lg:flex items-center gap-2 px-8 py-2.5  bg-[#714329] text-white rounded-full text-sm md:text-base font-semibold border border-[#714329] shadow-md hover:bg-white hover:text-[#714329] hover:border-[#D0B9A7]/50 transition-all transform" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
          <button onClick={openSideMenu} className="block md:hidden">
            <IoArrowBack className="text-2xl text-gray-600 hover:text-black" />
          </button>
        </div>


        {/*-----Mobile Menu-----*/}

        <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-6 py-24 px-8 fixed top-0 right-0 w-64 h-screen z-50 
                    bg-gradient-to-b from-white via-rose-50 to-rose-100 shadow-2xl 
                    transform translate-x-full transition-transform duration-500 ease-in-out">


          <button onClick={closeSideMenu} className="absolute top-5 right-5 text-gray-600 hover:text-black text-2xl font-bold">
            ✕
          </button>

          <li>
            <a className="block px-4 py-3 rounded-xl text-lg  text-gray-800 Ovo" href="/" onClick={closeSideMenu}>
              Home
            </a>
          </li>
          <li>
            <a className="block px-4 py-3 rounded-xl text-lg  text-gray-800 Ovo" href="/about" onClick={closeSideMenu}>
              About
            </a>
          </li>
          <li>
            <a className="block px-4 py-3 rounded-xl text-lg  text-gray-800 Ovo" href="/products" onClick={closeSideMenu}>
              Products
            </a>
          </li>
          <li>
            <a className="block px-4 py-3 rounded-xl text-lg  text-gray-800 Ovo" href="/contact" onClick={closeSideMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar