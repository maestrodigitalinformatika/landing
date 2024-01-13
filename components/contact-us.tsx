import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

export default function ContactUs() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6">
            <div className="flex items-center mb-2">
              <FaMapMarkerAlt className="mr-2 text-blue-500" />
              <h3 className="text-lg font-semibold">Address</h3>
            </div>
            <p>Raya Kendung Sememi, Surabaya, East Java, Indonesia</p>
          </div>
          <div className="bg-white rounded-lg p-6">
            <div className="flex items-center mb-2">
              <FaPhone className="mr-2 text-blue-500" />
              <h3 className="text-lg font-semibold">Phone</h3>
            </div>
            <p><a href="https://wa.me/6282231532679">+62 822-3153-2679 (Yowanda)</a></p>
          </div>
          <div className="bg-white rounded-lg p-6">
            <div className="flex items-center mb-2">
              <FaEnvelope className="mr-2 text-blue-500" />
              <h3 className="text-lg font-semibold">Email</h3>
            </div>
            <p><a href="mailto:byayoan@it.student.pens.ac.id">byayoan@it.student.pens.ac.id</a></p>
          </div>
          <div className="bg-white rounded-lg p-6">
            <div className="flex items-center mb-2">
              <FaClock className="mr-2 text-blue-500" />
              <h3 className="text-lg font-semibold">Opening Hours</h3>
            </div>
            <p>Monday to Friday: 9:00 AM - 5:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
};
