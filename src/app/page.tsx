import Image from "next/image";
import pizza from "../../public/images/pizza.webp";
import Link from "next/link";
import ImageSlider from "@/components/Slider";
import React from "react";


export default function Home() {
  return (
      <>
    <main className="flex justify-between items-center h-[calc(100vh - 80px)]">
      <div className="ml-24">
        <h1 className="text-5xl font-extrabold text-green-700 m-auto shadow-2xl">We do not cook,</h1>
        <h2 className="text-4xl leading-[4rem] font-bold shadow-2xl">we create your..</h2>
        <h2 className="text-5xl font-semibold text-red-700 italic shadow-2xl">emotions!</h2>
        <p className="max-w-md mt-6 text-gray-700">Welcome to <i><b>Restaurantly,</b></i>Your go-to place for delicious, hand-crafted meals that bring people together. Whether you&#39;re in the mood for a casual brunch or a gourmet dinner, we&#39;ve got you covered with fresh ingredients and exceptional flavors.</p>
        <div className="flex items-center mt-7 gap-5">
          <button className="p-2 border-2 border-zinc-700 rounded-lg w-40 font-bold text-black hover:bg-red-700 hover:text-white transition duration-300"><Link href='/menu'>Explore Our Menu</Link></button>
          <button className="p-2 border-2 border-zinc-700 rounded-lg w-40 font-semibold text-black hover:bg-green-700 hover:text-white">
            <Link href="/contact">Order Now!</Link></button>
       </div>
      </div>
      {/* Image */}
      <div>
        <Image className="mt-[-30px] w-[90%] h-lvh justify-center" src={pizza} alt="image"></Image>
      </div>
    </main>

      {/* Image Slider Section (Slider component below the main content) */}
      {/* Slider Section Below Main Content with Heading and Description */}
      <section className="mt-15 text-center ">
        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-green-700  mt-20 shadow-2xl">
          Explore Our Popular Dishes
        </h2>

        {/* Description */}
        <p className="max-w-xl mx-auto mt-7 text-gray-700">
          Take a look at some of our best and most popular dishes. From pizzas to burgers, 
          and fresh salads, our menu is crafted with passion to delight your taste buds. 
          Swipe through and find your next favorite meal!
        </p>

        {/* Image Slider */}
        <div className="mt-10 mb-20">
          <ImageSlider />
        </div>
      </section>
      </>
  );
}





