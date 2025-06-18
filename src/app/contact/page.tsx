'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus('idle');

    try {
      // Add document to Firestore
      await addDoc(collection(db, 'contacts'), {
        ...formData,
        timestamp: new Date().toISOString()
      });

      // Clear form and show success message
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setSubmitStatus('success');
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-gray-950 min-h-screen py-0">
      {/* Hero Section */}
      <div className="relative w-full flex flex-col items-center justify-center py-16 mb-8 bg-gradient-to-r from-blue-950/60 via-black/80 to-purple-900/60">
        <h1 className="text-5xl font-extrabold mb-4 text-white drop-shadow-lg text-center">Contact QuickContracts</h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto text-center mb-2">
          Let's build the future of web3 together. Reach out to discuss your project or ask us anything!
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
          {/* Contact Card with Image */}
          <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-blue-900/80 to-purple-900/80 rounded-3xl shadow-2xl p-8 relative overflow-hidden">
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-700/30 rounded-full blur-2xl" />
            <Image
              src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80"
              alt="Contact us illustration"
              width={220}
              height={220}
              className="rounded-full border-4 border-blue-500 shadow-xl object-cover mb-6"
              priority
            />
            <span className="text-lg text-blue-200 font-semibold text-center">We reply within 24 hours!</span>
          </div>

          {/* Contact Form Card */}
          <div className="md:col-span-2 bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-3xl shadow-2xl p-8">
            <h2 className="text-2xl font-bold mb-2 text-blue-400 text-center">Send Us a Message</h2>
            
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-900/50 border border-green-500 rounded-lg">
                <p className="text-green-300 text-center">
                  Thank you for reaching out! We will contact you as soon as possible.
                </p>
              </div>
            )}
            
            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-900/50 border border-red-500 rounded-lg">
                <p className="text-red-300 text-center">
                  Oops! Something went wrong. Please try again later.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-1" htmlFor="name">Name</label>
                <input className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" id="name" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
              </div>
              <div>
                <label className="block text-gray-300 mb-1" htmlFor="email">Email</label>
                <input className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" id="email" name="email" placeholder="you@email.com" required value={formData.email} onChange={handleChange} />
              </div>
              <div>
                <label className="block text-gray-300 mb-1" htmlFor="subject">Subject</label>
                <input className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" id="subject" name="subject" placeholder="How can we help you?" required value={formData.subject} onChange={handleChange} />
              </div>
              <div>
                <label className="block text-gray-300 mb-1" htmlFor="message">Message</label>
                <textarea className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" id="message" name="message" rows={5} placeholder="Type your message here..." required value={formData.message} onChange={handleChange} />
              </div>
              <button type="submit" className="mt-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2 px-6 rounded-lg transition-colors shadow-lg" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Details Card */}
          <div className="flex flex-col justify-center bg-gray-900/90 rounded-3xl p-8 shadow-2xl border border-gray-800 md:col-span-1">
            <h2 className="text-2xl font-bold mb-4 text-blue-400 flex items-center gap-2"><svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-400"><circle cx="14" cy="14" r="12" strokeOpacity=".3" /><path d="M14 8v8l5 3" /></svg>Contact Information</h2>
            <div className="mb-4 flex items-center gap-3">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-400"><path d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4.5" /><path d="M3 10.5V18a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7.5" /><path d="M16 2v4" /><path d="M8 2v4" /></svg>
              <a href="mailto:info@quickcontracts.dev" className="text-blue-300 hover:underline">info@quickcontracts.dev</a>
            </div>
            <div className="mb-4 flex items-center gap-3">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-400"><path d="M22 16.92V19a2 2 0 0 1-2 2h-1a19.72 19.72 0 0 1-8.63-3.13A19.5 19.5 0 0 1 3.13 9.63 19.72 19.72 0 0 1 0 1V0a2 2 0 0 1 2-2h2.09a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.36a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 7.07 7.07l1.27-1.27a2 2 0 0 1 2.11-.45c.76.32 1.55.55 2.36.68A2 2 0 0 1 22 16.92z" /></svg>
              <a href="tel:+1234567890" className="text-blue-300 hover:underline">+1 (234) 567-890</a>
            </div>
            <div className="mb-4 flex items-center gap-3">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-400"><path d="M17 21V19a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>
              <span className="text-gray-300">123 Web3 Avenue, Blockchain City, 10001</span>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2 text-blue-400 flex items-center gap-2"><svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-400"><circle cx="10" cy="10" r="8" strokeOpacity=".3" /><path d="M10 6v4l3 2" /></svg>Connect with us</h3>
              <div className="flex gap-4 mt-1">
                <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Twitter"><svg width="24" height="24" fill="currentColor" className="text-gray-400"><path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.6-.7-.02-1.36-.21-1.94-.53v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 0 1 2 19.54c-.32 0-.63-.02-.94-.06A12.13 12.13 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22.46 6z" /></svg></a>
                <a href="#" className="hover:text-blue-400 transition-colors" aria-label="LinkedIn"><svg width="24" height="24" fill="currentColor" className="text-gray-400"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.38v4.59h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" /></svg></a>
                <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Telegram"><svg width="24" height="24" fill="currentColor" className="text-gray-400"><path d="M22.99 3.43c-.27-.22-.65-.28-1.01-.16l-20 7.14c-.41.15-.7.52-.7.95 0 .43.29.8.7.95l4.98 1.78 2.09 6.56c.13.41.5.7.94.7h.01c.44 0 .82-.29.94-.7l2.09-6.56 4.98-1.78c.41-.15.7-.52.7-.95 0-.43-.29-.8-.7-.95zm-6.7 7.19l-2.29 7.19-2.29-7.19-5.41-1.93 17.4-6.22-5.41 1.93z" /></svg></a>
              </div>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Our Location</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Map */}
            <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345073466!2d144.95373731531897!3d-37.81720497975177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sBlockchain%20Centre!5e0!3m2!1sen!2sin!4v1647627753645!5w=600!h=450"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Address Details */}
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-2xl p-8 shadow-2xl flex flex-col justify-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">Office Address</h3>
                  <p className="text-gray-300">
                    Level 3, 838 Collins Street<br />
                    Melbourne, VIC 3000<br />
                    Australia
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">Working Hours</h3>
                  <p className="text-gray-300">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday - Sunday: Closed
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">Contact Info</h3>
                  <p className="text-gray-300">
                    Email: contact@quickcontracts.dev<br />
                    Phone: +61 3 9123 4567
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 