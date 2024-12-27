"use client"

import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to manage mobile menu visibility

  useEffect(() => {
    // Check if token exists in localStorage (or other storage)
    const token = localStorage.getItem("token"); // Adjust storage based on your app
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    // Remove token from localStorage (or other storage)
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    // Optionally, redirect to the login page
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-slate-800/90 py-4 shadow-lg z-20 fixed w-full">
      <div className="container mx-auto flex justify-between px-10 items-center">
        {/* Logo */}
        <div className="animate-ping text-white font-bold text-xs md:text-lg lg:text-xl">
          <Link href="/">Eventify</Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-gray-300 hover:text-white hover:bg-slate-900 px-2 py-2 rounded-md transition duration-200"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-300 hover:text-white hover:bg-slate-900 px-2 py-2 rounded-md transition duration-200"
          >
            About Us
          </Link>
          <Link
            href="/events"
            className="text-gray-300 hover:text-white hover:bg-slate-900 px-2 py-2 rounded-md transition duration-200"
          >
            Events
          </Link>
          <Link
            href="/artists"
            className="text-gray-300 hover:text-white hover:bg-slate-900 px-2 py-2 rounded-md transition duration-200"
          >
            Artists
          </Link>
          <Link
            href="/createEvents"
            className="text-gray-300 hover:text-white hover:bg-slate-900 px-2 py-2 rounded-md transition duration-200"
          >
            Create Event
          </Link>
          <Link
            href="/contact"
            className="text-gray-300 hover:text-white hover:bg-slate-900 px-2 py-2 rounded-md transition duration-200"
          >
            Contact Us
          </Link>
          <Link
            href="/login"
            className="block bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-lg transition duration-200"
          >
            Login
          </Link>
        </div>

        {/* Hamburger Icon for mobile screens */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-slate-800 px-4 py-2 space-y-6 ${isMobileMenuOpen ? "block" : "hidden"}`}
      >
        <Link
          href="/about"
          className="block text-gray-300 hover:text-white transition duration-200"
        >
          About Us
        </Link>
        <Link
          href="/events"
          className="block text-gray-300 hover:text-white transition duration-200"
        >
          Events
        </Link>
        <Link
          href="/artists"
          className="block text-gray-300 hover:text-white transition duration-200"
        >
          Artists
        </Link>
        <Link
          href="/createEvents"
          className="block text-gray-300 hover:text-white transition duration-200"
        >
          Create Event
        </Link>
        <Link
          href="/contact"
          className="block text-gray-300 hover:text-white transition duration-200"
        >
          Contact Us
        </Link>
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="block bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-lg transition duration-200"
          >
            Logout
          </button>
        ) : (
          <Link
            href="/login"
            className="block bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-lg transition duration-200"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
