import React, { useState } from 'react';
import Link from 'next/link';

const NavMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="fixed top-6 right-6 z-50 flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-black/90 hover:bg-black border-2 border-blue-500 shadow-2xl"
        aria-label="Open navigation menu"
        onClick={() => setOpen(true)}
      >
        <span className="block w-7 h-1 bg-white rounded mb-1" />
        <span className="block w-7 h-1 bg-white rounded mb-1" />
        <span className="block w-7 h-1 bg-white rounded" />
      </button>

      {/* Sidebar Navigation */}
      {open && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          {/* Sidebar */}
          <nav className="relative ml-auto w-64 h-full bg-gray-900 border-l border-gray-800 shadow-2xl flex flex-col p-8 animate-slide-in">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
              aria-label="Close navigation menu"
              onClick={() => setOpen(false)}
            >
              &times;
            </button>
            <ul className="flex flex-col gap-6 mt-12">
              <li>
                <Link href="/" className="text-white text-lg font-semibold hover:text-blue-400 transition-colors" onClick={() => setOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white text-lg font-semibold hover:text-blue-400 transition-colors" onClick={() => setOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white text-lg font-semibold hover:text-blue-400 transition-colors" onClick={() => setOpen(false)}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white text-lg font-semibold hover:text-blue-400 transition-colors" onClick={() => setOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
      <style jsx global>{`
        @keyframes slide-in {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slide-in 0.3s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </>
  );
};

export default NavMenu; 