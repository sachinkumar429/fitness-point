"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Amrita Banerjee",
    role: "Member since 2024",
    review: "I lost around 10kg with proper yoga and fitness guidance. The trainers are extremely supportive and motivating. Best decision of my life!",
  },
  {
    name: "Rahul Sharma",
    role: "Regular Member",
    review: "Best budget-friendly gym in Durgapur with a very positive environment and excellent trainer support. The equipments are top-notch.",
  },
  {
    name: "Sneha Das",
    role: "Fitness Enthusiast",
    review: "Perfect place for beginners and fitness lovers. Friendly atmosphere and quality equipment. Highly recommend Fitness Point!",
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red rounded-full filter blur-[200px] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-brand-red font-bold tracking-widest uppercase mb-2">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase">
            What Our Members Say
          </h3>
          <div className="w-24 h-1 bg-brand-red mx-auto mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-[300px] md:h-[250px]">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                animate={{ 
                  opacity: activeIndex === idx ? 1 : 0, 
                  x: activeIndex === idx ? 0 : -50,
                  pointerEvents: activeIndex === idx ? "auto" : "none"
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-brand-gray/30 border border-brand-light-gray p-8 md:p-12 rounded-3xl text-center flex flex-col items-center justify-center backdrop-blur-sm"
              >
                <Quote className="text-brand-red w-12 h-12 mb-6 opacity-50" />
                <p className="text-xl md:text-2xl text-gray-200 font-medium italic mb-8 leading-relaxed">
                  "{testimonial.review}"
                </p>
                <div className="flex text-brand-red mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <h4 className="text-white font-bold uppercase tracking-wider">{testimonial.name}</h4>
                <p className="text-brand-red text-sm">{testimonial.role}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === idx ? "bg-brand-red w-8" : "bg-gray-600 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
