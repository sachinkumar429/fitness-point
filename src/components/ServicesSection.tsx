"use client";

import { motion } from "framer-motion";
import { Dumbbell, Activity, Heart, Zap, UserCheck, Flame, Medal, Scale } from "lucide-react";

const services = [
  { icon: Scale, title: "Weight Loss Training", desc: "Burn fat and lose weight with customized cardio and diet plans." },
  { icon: Dumbbell, title: "Muscle Building", desc: "Build strength and size with targeted hypertrophy programs." },
  { icon: Heart, title: "Cardio Training", desc: "Improve endurance and heart health with premium cardio equipment." },
  { icon: UserCheck, title: "Personal Training", desc: "1-on-1 expert guidance tailored exactly to your fitness goals." },
  { icon: Activity, title: "Yoga Sessions", desc: "Enhance flexibility, core strength, and mental peace." },
  { icon: Flame, title: "Fat Loss Programs", desc: "High-intensity interval training (HIIT) to melt stubborn fat." },
  { icon: Zap, title: "Strength Training", desc: "Powerlifting and functional strength exercises for overall power." },
  { icon: Medal, title: "General Fitness", desc: "Maintain a healthy and active lifestyle with guided routines." },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-brand-red font-bold tracking-widest uppercase mb-2">Our Services</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase">
            What We Offer
          </h3>
          <div className="w-24 h-1 bg-brand-red mx-auto mt-6"></div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="bg-brand-gray/50 border border-brand-light-gray p-8 rounded-2xl hover:bg-brand-gray transition-all group hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(230,0,0,0.15)]"
            >
              <div className="bg-black/50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-red transition-colors border border-brand-light-gray group-hover:border-transparent">
                <service.icon className="w-8 h-8 text-brand-red group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-heading font-bold text-white mb-3 uppercase tracking-wide">
                {service.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
