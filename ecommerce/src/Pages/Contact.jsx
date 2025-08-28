import React from 'react';
import BackButton from '../components/BackButton'

const Contact = () => {
  return (
    <div className="bg-orange-100 p-5 text-gray-800">
        <BackButton />
      
      <section className=" bg-orange-200 shadow-xl py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold  mb-4">Contact Us</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          We'd love to hear from you. Whether you have a question about orders, shipping, or anything else — our team is here to help!
        </p>
      </section>

      
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
         
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="mb-4 text-gray-700">
              Reach out to us via phone, email, or the contact form. We usually respond within 24 hours.
            </p>
            <div className="space-y-4">
              <p><strong>Phone:</strong> +91 7976694298</p>
              <p><strong>Email:</strong> ikskrishna.com</p>
              <p><strong>Address:</strong> Jodhpur , Rajasthan </p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6 bg-orange-200  p-6 rounded-lg shadow-xl">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gray-800 text-white py-2 px-6 rounded hover:bg-gray-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default Contact;
