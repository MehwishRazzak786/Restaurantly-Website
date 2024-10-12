import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function About() {
    return (
        <>
            <section className="relative h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/about.jpg')" }}>
                {/* Background Blur Effect */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-6 md:px-12 lg:px-24">
                    <h1 className="text-4xl font-bold mb-4 font-serif mt-20">About Us</h1>
                    <p className="text-lg mb-6 max-w-3xl text-center">
                        Welcome to <span className="text-green-500 font-semibold">Restaurantly</span>, where every meal tells a story of passion, freshness, and flavor.
                        Whether you&#39;re ordering online or dining in, we're here to provide an unforgettable culinary journey.
                    </p>
                    <p className="text-lg mb-6 max-w-3xl text-center">
                        At Restaurantly, we are driven by our love for food. We pride ourselves on serving dishes made from the finest ingredients, carefully crafted to satisfy every craving.
                        From comforting classics to innovative gourmet experiences, our menu has something for everyone.
                    </p>
                    <p className="text-lg max-w-3xl text-center">
                        Our talented chefs and welcoming staff are dedicated to ensuring that your experience, whether online or in person, exceeds your expectations.
                        We invite you to join us and savor the moments that bring people together through great food.
                    </p>
                    <button className="mt-8 px-5 py-3 bg-green-700 hover:bg-green-800 text-lg font-semibold rounded-full transition duration-300">
                        <Link href='/menu'>Explore Our Menu</Link>
                    </button>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-100">
                <h2 className="text-4xl font-extrabold text-center mb-8 text-green-700 shadow-2xl font-serif">Our Story</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left Side Content */}
                    <div className="flex flex-col justify-center">
                        <h3 className="text-2xl font-semibold mb-4 font-serif shadow-2xl">Our Journey</h3>
                        <p className="text-lg text-gray-700">
                            It all started with a simple idea: to create a space where people could come together to enjoy delicious food. From our humble beginnings,
                            we've grown into a beloved dining destination, dedicated to serving our community and sharing our passion for food with the world.
                        </p>
                        <h3 className="text-2xl font-extrabold mb-4 mt-6 font-serif shadow-2xl">Our Values</h3>
                        <p className="text-lg text-gray-700">
                            At Restaurantly, we believe in using only the freshest, locally sourced ingredients to create dishes that are not only tasty but also sustainable.
                            Our commitment to quality and integrity is at the heart of everything we do, ensuring a memorable experience for every guest.
                        </p>
                    </div>
                    {/* Right Side Image */}
                    <div className="flex justify-center">
                        <Image src="/images/chefs.jpg" alt="Our Story" width={500} height={600} className=" max-w-md rounded-lg shadow-lg" />
                    </div>
                </div>
            </section>
        </>
    );
}
