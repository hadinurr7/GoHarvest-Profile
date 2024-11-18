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
    <div className="container mx-auto px-6 py-16 pt-12 md:px-16 md:pt-20 lg:px-20">
      {/* Map Section */}
      <div className="mb-12 h-[350px] w-full overflow-hidden rounded-lg shadow-lg lg:h-[400px]">
        <h2 className="text-4xl font-bold text-gray-800 text-center p-6">Find Us</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.7065997248398!2d106.784652!3d-6.220149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1c334bdef1d%3A0x539e644b2a3d1e0c!2sRukan%20Permata%20Senayan!5e0!3m2!1sen!2sid!4v1699879384935!5m2!1sen!2sid"
          width="100%"
          height="100%"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Form and Details */}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[2fr,1fr]">
        {/* Left: Contact Form */}
        <div className="space-y-10 lg:pr-8">
          <h2 className="text-4xl font-bold text-gray-800">Get in Touch</h2>
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
          <h2 className="text-4xl font-bold text-gray-800">Contact Details</h2>
          <p className="text-gray-600">
            We're here to assist you. Reach out to us via the details below or
            visit our office.
          </p>
          <div className="space-y-8">
            {/* Address Section */}
            <div className="flex items-start space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <BiMap className="text-2xl text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Our Address</h3>
                <p className="text-gray-600">
                  Rukan Permata Senayan Andriwina Blok C1, JL Tentara Pelajar No
                  21, Grogol Utara Kebayoran Baru, Jakarta Selatan, DKI Jakarta
                  12210
                </p>
              </div>
            </div>

            {/* Email Section */}
            <div className="flex items-start space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <BiEnvelope className="text-2xl text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600">contact@goharvest.com</p>
              </div>
            </div>

            {/* Phone Section */}
            <div className="flex items-start space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <BiPhone className="text-2xl text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                <p className="text-gray-600">+62 812-3456-7890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
