"use client";

import { useState, useEffect } from "react";
import { Menu, X, Dumbbell } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Plans", href: "#plans" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Dumbbell className="h-8 w-8 text-brand-red" />
            <span className="font-heading text-2xl font-bold uppercase tracking-wider">
              Fitness Point
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-brand-red transition-colors px-3 py-2 text-sm font-medium uppercase tracking-wide"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className="bg-brand-red hover:bg-brand-red-dark text-white px-6 py-2 rounded-full font-semibold transition-all shadow-[0_0_15px_rgba(230,0,0,0.5)] hover:shadow-[0_0_25px_rgba(230,0,0,0.8)] uppercase tracking-wide text-sm"
            >
              Join Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-brand-gray focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-dark/95 backdrop-blur-xl absolute top-full left-0 w-full shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-brand-gray">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-brand-red block px-3 py-3 rounded-md text-base font-medium uppercase text-center"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center block bg-brand-red text-white px-6 py-3 mt-4 rounded-md font-bold uppercase tracking-wider"
            >
              Join Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
