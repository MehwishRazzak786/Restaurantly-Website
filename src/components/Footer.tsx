'use client';
import Image from "next/image";
import logo from "../../public/images/logo.jpg";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row bg-red-700 justify-between items-center p-8 drop-shadow-xl space-y-8 md:space-y-0 md:space-x-10">
      {/* LOGO Section */}
      <div className="flex flex-col md:flex-row items-center">
        <Image className="w-[70px] h-[80px] rounded-[20%]" src={logo} alt="Restaurantly Logo" />
        <h1 className="text-3xl md:text-4xl font-serif font-extrabold px-3 text-white underline italic hover:text-green-700 hover:cursor-pointer text-center md:text-left mt-4 md:mt-0">
          Restaurantly
        </h1>
      </div>

      {/* Opening Hours Section */}
      <div className="text-center md:text-left">
        <h3 className="text-2xl md:text-3xl text-white font-serif font-bold italic underline mt-4">Opening Hours</h3>
        <p className="text-white mt-4">
          <span className="font-bold text-[18px] mr-2">Lunch</span>
          Monday - Saturday 12.00 - 14.45
        </p>
        <p className="text-white mt-1">
          <span className="font-bold text-[18px] mr-2">Dinner</span>
          Sunday - Thursday 17.30 - 00.00
          <br />
          Latest arrival time is 21:00
        </p>
        <p className="text-white mt-1 mb-10">
          <span className="font-bold text-[18px] mr-2">Dinner</span>
          Friday - Saturday 17.30 - 00.00
        </p>
      </div>

      {/* View Guides Section */}
      <div className="text-center md:text-left">
        <h3 className="text-2xl md:text-3xl text-white font-serif font-bold italic underline">View Guides</h3>
        <p className="text-white mt-4">Our Branches</p>
        <p className="text-white mt-1">Help & Support</p>
        <p className="text-white mt-1">Blog Posts</p>
        <p className="text-white mt-1">Return Policy</p>
        <p className="text-white mt-1">Terms Of Use</p>


      </div>
    </footer>
  );
}
