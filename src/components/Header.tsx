/*import Image from "next/image";
import logo from "../../public/images/logo.jpg";
import Link from "next/link";



export default function Header(){
    return(
        <header className="mt-4 flex justify-between items-center bg-white text-black h-16 px-4 shadow-2xl">
            {/* LOGO *
            <div className="flex justify-center items-center">
                <Image className="w-[60px] " src={logo} alt="image"></Image>
                <h1 className="text-4xl font-serif font-extrabold px-2 italic hover:text-green-700 hover:cursor-pointer">Restaurantly</h1>
            </div>
            {/* Links *
            <nav>
                <ul className="text-[19px] flex gap-10 mr-8 font-extrabold font-serif">
                    <li className=" hover:text-red-600"><Link href="/">Home</Link></li>
                    <li className="hover:text-red-600"><Link href="/about">About</Link></li>
                    <li className="hover:text-red-600"><Link href="/menu">Menu</Link></li>
                    <li className="hover:text-red-600"><Link href="/gallery">Gallery</Link></li>
                    <li className="hover:text-red-600"><Link href="/contact">Contact Us</Link></li>
                     
                </ul>
            </nav>
        </header>
    )
}

'use client';
import Image from "next/image";
import logo from "../../public/images/logo.jpg";
import Link from "next/link";
import { useEffect } from "react";

export default function Header() {
    // Function to toggle the mobile menu
    const toggleMenu = () => {
        const mobileMenu = document.getElementById("mobile-menu");
        if (mobileMenu) {
            mobileMenu.classList.toggle("hidden");
        }
    };

    // Adding event listener for menu toggle
    useEffect(() => {
        const menuToggle = document.getElementById("menu-toggle");
        if (menuToggle) {
            menuToggle.addEventListener("click", toggleMenu);
        }

        // Cleanup event listener on component unmount
        return () => {
            if (menuToggle) {
                menuToggle.removeEventListener("click", toggleMenu);
            }
        };
    }, []);

    return (
        <header className="mt-4 flex justify-between items-center bg-white text-black h-16 px-4 shadow-2xl">
            {/* LOGO *
            <div className="flex justify-center items-center">
                <Image className="w-[60px]" src={logo} alt="Restaurantly Logo" />
                <h1 className="text-4xl font-serif font-extrabold px-2 italic hover:text-green-700 hover:cursor-pointer">Restaurantly</h1>
            </div>
            {/* Mobile Menu Toggle Button *
            <div className="md:hidden">
                <button className="text-2xl" id="menu-toggle">
                    <span>&#9776;</span>
                </button>
            </div>
            {/* Links *
            <nav className="hidden md:block">
                <ul className="text-[19px] flex gap-10 mr-8 font-extrabold font-serif">
                    <li className="hover:text-red-600"><Link href="/">Home</Link></li>
                    <li className="hover:text-red-600"><Link href="/about">About</Link></li>
                    <li className="hover:text-red-600"><Link href="/menu">Menu</Link></li>
                    <li className="hover:text-red-600"><Link href="/gallery">Gallery</Link></li>
                    <li className="hover:text-red-600"><Link href="/contact">Contact Us</Link></li>
                </ul>
            </nav>
            {/* Mobile Links (Hidden by default, visible when toggled) *
            <nav className="md:hidden hidden" id="mobile-menu">
                <ul className="flex flex-col gap-4">
                    <li className="hover:text-red-600"><Link href="/">Home</Link></li>
                    <li className="hover:text-red-600"><Link href="/about">About</Link></li>
                    <li className="hover:text-red-600"><Link href="/menu">Menu</Link></li>
                    <li className="hover:text-red-600"><Link href="/gallery">Gallery</Link></li>
                    <li className="hover:text-red-600"><Link href="/contact">Contact Us</Link></li>
                </ul>
            </nav>
        </header>
    );
}*/

'use client';
import { useState } from "react"; // Import useState for managing menu toggle
import Image from "next/image";
import logo from "../../public/images/logo.jpg";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu open/close

  return (
    <header className="mt-4 flex justify-between items-center bg-white text-black h-16 px-4 shadow-2xl relative">
      {/* LOGO */}
      <div className="flex justify-center items-center">
        <Image className="w-[60px]" src={logo} alt="image" />
        <h1 className="text-4xl font-serif font-extrabold px-2 italic hover:text-green-700 hover:cursor-pointer">Restaurantly</h1>
      </div>

      {/* Hamburger Icon */}
      <div className="block md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Links */}
      <nav className={`absolute left-0 right-0 bg-white text-black transition-transform duration-300 ${menuOpen ? "top-16" : "top-[-300px]"}`}>
        <ul className="flex flex-col items-center py-4 space-y-2 font-extrabold font-serif">
          <li className="hover:text-red-600"><Link href="/">Home</Link></li>
          <li className="hover:text-red-600"><Link href="/about">About</Link></li>
          <li className="hover:text-red-600"><Link href="/menu">Menu</Link></li>
          <li className="hover:text-red-600"><Link href="/gallery">Gallery</Link></li>
          <li className="hover:text-red-600"><Link href="/contact">Contact Us</Link></li>
        </ul>
      </nav>

      {/* Desktop Links */}
      <nav className="hidden md:flex">
        <ul className="text-[19px] flex gap-10 mr-8 font-extrabold font-serif">
          <li className="hover:text-red-600"><Link href="/">Home</Link></li>
          <li className="hover:text-red-600"><Link href="/about">About</Link></li>
          <li className="hover:text-red-600"><Link href="/menu">Menu</Link></li>
          <li className="hover:text-red-600"><Link href="/gallery">Gallery</Link></li>
          <li className="hover:text-red-600"><Link href="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
}

