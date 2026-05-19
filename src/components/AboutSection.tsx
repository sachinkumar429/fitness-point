"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  const features = [
    "Friendly gym environment",
    "Dedicated expert trainers",
    "Budget-friendly memberships",
    "Weight loss & muscle gain programs",
    "Yoga and fitness guidance",
    "Beginner-friendly support",
  ];

  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative z-10 border border-brand-gray shadow-[0_0_40px_rgba(230,0,0,0.15)]">
              <img 
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop" 
                alt="Gym Equipment and Atmosphere" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-red rounded-full filter blur-[100px] opacity-20 z-0"></div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-brand-red font-bold tracking-widest uppercase mb-2">About Us</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase leading-tight mb-6">
                Your Fitness Transformation <br/> Starts Here
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                <strong className="text-white">Fitness Point</strong> is one of the trusted and affordable fitness centers in Durgapur dedicated to helping people achieve their health and fitness goals. 
                Whether your goal is weight loss, muscle gain, yoga, strength training, or overall fitness transformation, Fitness Point provides a motivating and supportive environment for everyone.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-red w-6 h-6 shrink-0" />
                  <span className="text-gray-200 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-brand-gray">
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <span className="block text-3xl font-heading font-bold text-white">4.9<span className="text-brand-red text-xl">⭐</span></span>
                  <span className="text-sm text-gray-400">Google Rating</span>
                </div>
                <div className="h-12 w-px bg-brand-gray"></div>
                <div className="text-center">
                  <span className="block text-3xl font-heading font-bold text-white">20+</span>
                  <span className="text-sm text-gray-400">Google Reviews</span>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
