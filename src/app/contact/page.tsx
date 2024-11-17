"use client";

import { useState } from "react";
import { BiPhone, BiMap, BiEnvelope } from "react-icons/bi";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Message sent! Thank you for contacting us.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto grid grid-cols-1 gap-12 px-6 py-16 pt-12 md:grid-cols-2 md:px-16 md:pt-36 lg:px-20">
      {/* Left: Contact Form */}
      <div className="space-y-10">
        <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
        <p className="text-gray-600">
          Have any questions or inquiries? Please fill out the form below, and
          we'll get back to you as soon as possible.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-green-600 focus:ring-green-600"
              required
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-green-600 focus:ring-green-600"
              required
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-green-600 focus:ring-green-600"
              required
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-green-700 p-3 text-white transition duration-300 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Right: Contact Details */}
      <div className="space-y-10">
        <h2 className="text-3xl font-bold text-gray-800">Contact Details</h2>
        <p className="text-gray-600">
          We're here to assist you. Reach out to us via the details below or
          visit our office.
        </p>
        <div className="space-y-8">
          {/* Address */}
          <div className="flex items-center space-x-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <BiMap className="text-2xl text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Our Address
              </h3>
              <p className="text-gray-600">
                Rukan Permata Senayan Andriwina Blok C1, JL Tentara Pelajar No
                21, RT 1 RW 7, Grogol Utara Kebayoran Baru, Jakarta Selatan, DKI
                Jakarta 12210
              </p>
            </div>
          </div>
          {/* Email */}
          <div className="flex items-center space-x-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <BiEnvelope className="text-2xl text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Email</h3>
              <p className="text-gray-600">contact@goharvest.com</p>
            </div>
          </div>
          {/* Phone */}
          <div className="flex items-center space-x-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <BiPhone className="text-2xl text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
              <p className="text-gray-600">+62 812-3456-7890</p>
              <p className="text-gray-600">+62 812-3456-7890</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
