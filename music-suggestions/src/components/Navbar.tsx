'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" text-white shadow-lg mt-6">
        <div className=" max-w-4xl bg-gray-800 mx-auto mt-4xl px-4 sm:px-6 lg:px-8 rounded-full gradient-border ">
         <style jsx>{`
        .gradient-border {
          position: relative;
          z-index: 1;
          background: transparent; /* Ensure no background gradient */
        }
        .gradient-border::before {
          content: '';
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          background: linear-gradient(
            45deg,
            #ef4444,
            #f97316,
            #22c55e,
            #3b82f6,
            #a855f7,
            #ec4899
          );
          background-size: 400%;
          border-radius: 10px;
          z-index: -1;
          animation: gradient 6s linear infinite;
          opacity: 0;
          transition: opacity 0.3s ease-in;
        }
        .gradient-border:hover::before {
          opacity: 1;
        }
        .gradient-border::after {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: #1f2937; /* Solid background for inner content */
          border-radius: 100px;
          z-index: -1;
        }
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 400% 50%;
          }
        }
      `}</style>
        <div className="flex items-center justify-between h-20 ">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold">
              MyApp
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="hover:bg-gray-700 px-3 py-2 rounded-full text-sm font-medium">
                Home
              </Link>
              <Link href="/about" className="hover:bg-gray-700 px-3 py-2 rounded-full text-sm font-medium">
                About
              </Link>
              <Link href="/services" className="hover:bg-gray-700 px-3 py-2 rounded-full text-sm font-medium">
                Services
              </Link>
              <Link href="/contact" className="hover:bg-gray-700 px-3 py-2 rounded-full text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link href="/about" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <Link href="/services" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              Services
            </Link>
            <Link href="/contact" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}