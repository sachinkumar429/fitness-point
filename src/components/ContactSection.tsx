"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Send } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#050505] relative border-t border-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-brand-red font-bold tracking-widest uppercase mb-2">Get In Touch</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase">
            Contact Us
          </h3>
          <div className="w-24 h-1 bg-brand-red mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Details & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-brand-gray/50 p-8 rounded-2xl border border-brand-light-gray space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-brand-red/10 p-3 rounded-xl border border-brand-red/20">
                  <MapPin className="text-brand-red w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Our Location</h4>
                  <p className="text-gray-400">10 Kabi, Kavi Jasimuddin Path, SAIL Co-operative, City Center, Durgapur, West Bengal 713216</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-brand-red/10 p-3 rounded-xl border border-brand-red/20">
                  <Phone className="text-brand-red w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Phone Number</h4>
                  <p className="text-gray-400">+91 94744 84833</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-brand-red/10 p-3 rounded-xl border border-brand-red/20">
                  <Clock className="text-brand-red w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Opening Hours</h4>
                  <ul className="text-gray-400 space-y-1">
                    <li>Mon, Tue, Thu, Fri: 6 AM – 12 PM, 4 PM – 8:30 PM</li>
                    <li>Wednesday: 6:30 AM – 12 PM, 4 PM – 6 PM</li>
                    <li>Sat - Sun: 6 AM – 12 PM</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="h-[300px] rounded-2xl overflow-hidden border border-brand-light-gray">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.4849313936055!2d87.2941018!3d23.550117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f7720935574519%3A0xc3bba4d25fa0a1f7!2sFitness%20Point!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-black p-8 rounded-2xl border border-brand-light-gray relative overflow-hidden"
          >
            {/* Decorative glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red rounded-full filter blur-[100px] opacity-20"></div>

            <h4 className="text-2xl font-heading font-bold text-white uppercase mb-6">Send us a Message</h4>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">First Name</label>
                  <input type="text" className="w-full bg-brand-gray border border-brand-light-gray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-colors" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-brand-gray border border-brand-light-gray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-colors" required />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                <input type="email" className="w-full bg-brand-gray border border-brand-light-gray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-colors" required />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                <input type="tel" className="w-full bg-brand-gray border border-brand-light-gray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-colors" required />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-brand-gray border border-brand-light-gray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-colors resize-none" required></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={formStatus !== "idle"}
                className={`w-full py-4 rounded-lg font-bold uppercase tracking-wide flex items-center justify-center gap-2 transition-all ${
                  formStatus === "success" 
                    ? "bg-green-600 text-white" 
                    : formStatus === "submitting"
                    ? "bg-brand-red-dark text-gray-300 cursor-not-allowed"
                    : "bg-brand-red hover:bg-brand-red-dark text-white shadow-[0_0_15px_rgba(230,0,0,0.3)] hover:shadow-[0_0_25px_rgba(230,0,0,0.6)]"
                }`}
              >
                {formStatus === "idle" && <><Send size={20} /> Send Message</>}
                {formStatus === "submitting" && "Sending..."}
                {formStatus === "success" && "Message Sent!"}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
