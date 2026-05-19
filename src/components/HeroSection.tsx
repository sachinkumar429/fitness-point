"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowRight, Play } from "lucide-react";

const quotes = [
  "Transform Your Body, Transform Your Life",
  "Your Fitness Journey Starts Here",
  "Train Hard. Stay Strong.",
  "Build Consistency. Build Confidence."
];

export default function HeroSection() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Main Content */}
          <div className="text-left space-y-8 pt-10">
            <div className="h-20 sm:h-24 md:h-32 flex items-end">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentQuoteIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold uppercase text-white leading-tight"
                >
                  <span className="block text-brand-red mb-2 text-xl sm:text-2xl font-sans font-semibold tracking-widest uppercase">
                    Welcome to Fitness Point
                  </span>
                  {quotes[currentQuoteIndex]}
                </motion.h1>
              </AnimatePresence>
            </div>
            
            <p className="text-gray-300 text-lg sm:text-xl max-w-xl leading-relaxed">
              Durgapur's premium unisex gym. Join the best community, get expert guidance, and transform yourself into the strongest version of you.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#plans" className="bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(230,0,0,0.5)] hover:shadow-[0_0_30px_rgba(230,0,0,0.8)] uppercase tracking-wide flex items-center gap-2">
                Join Now <ArrowRight size={20} />
              </a>
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-full font-bold transition-all uppercase tracking-wide flex items-center gap-2">
                <Play size={20} className="fill-current" /> Free Trial
              </button>
              <a href="tel:+919474484833" className="hidden sm:flex bg-brand-gray hover:bg-white hover:text-black text-white px-8 py-4 rounded-full font-bold transition-all uppercase tracking-wide items-center gap-2 border border-brand-light-gray">
                <Phone size={20} /> Call Now
              </a>
            </div>
          </div>

          {/* Stats / Interactive Element */}
          <div className="hidden lg:flex flex-col items-end justify-center space-y-6">
            <StatCard value="2000+" label="Happy Members" delay={0.2} />
            <StatCard value="10+" label="Years Experience" delay={0.4} />
            <StatCard value="500+" label="Transformations" delay={0.6} />
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-0"></div>
    </section>
  );
}

function StatCard({ value, label, delay }: { value: string, label: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      className="bg-black/40 backdrop-blur-md border border-brand-light-gray/50 p-6 rounded-2xl w-64 text-center transform hover:scale-105 transition-transform shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
    >
      <div className="text-4xl font-heading font-bold text-brand-red mb-1">{value}</div>
      <div className="text-gray-300 font-medium uppercase tracking-wider text-sm">{label}</div>
    </motion.div>
  );
}
