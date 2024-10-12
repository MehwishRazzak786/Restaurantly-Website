import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importing icons from react-icons


export default function Contact(){
    return(
        <section className="min-h-screen py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 font-serif shadow-2xl text-green-700">Get In Touch</h1>
        <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto mb-12">
          We&apos;re here to answer any questions or concerns you may have. Feel free to reach out to us using the form below or via the provided contact details. We&apos;d love to hear from you!
        </p>

        {/* Contact Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-2xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 font-serif shadow-2xl">Send Us a Message</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                  rows={4}
                  placeholder="Your Message"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-2xl">
            <h2 className="text-2xl font-semibold font-serif  text-gray-800 shadow-2xl mb-6 ">Contact Information</h2>
            <p className="text-gray-600 mb-4">
            Have questions or need help? You can also contact us directly through the following details.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>
                <strong>Phone:</strong> +1 (234) 466-9764
              </li>
              <li>
                <strong>Email:</strong> info@restaurantly.com
              </li>
              <li>
                <strong>Address:</strong> 137 Seacoast Avenue Karachi.
              </li>
            </ul>
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2 font-serif  text-gray-800">Follow Us</h2>
              <div className="flex space-x-8 mt-5">
                <a href="https://facebook.com" className="text-green-700 hover:text-green-800">
                  {/* social media icons */}
                  <FaFacebook size={30} /> 
                </a>
                <a href="https://twitter.com" className="text-green-700 hover:text-green-800">
                <FaTwitter size={30} /> 
                </a>
                <a href="https://WWW.instagram.com" className="text-green-700 hover:text-green-800">
                <FaInstagram size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}