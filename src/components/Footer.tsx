import { Dumbbell, MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-16 pb-8 border-t border-brand-gray relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Dumbbell className="h-8 w-8 text-brand-red" />
              <span className="font-heading text-2xl font-bold uppercase tracking-wider text-white">
                Fitness Point
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Fitness Point is one of the trusted and affordable fitness centers in Durgapur dedicated to helping people achieve their health and fitness goals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-brand-gray flex items-center justify-center text-gray-400 hover:bg-brand-red hover:text-white transition-all">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-brand-gray flex items-center justify-center text-gray-400 hover:bg-brand-red hover:text-white transition-all">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-brand-gray flex items-center justify-center text-gray-400 hover:bg-brand-red hover:text-white transition-all">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold uppercase tracking-wider text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#about" className="hover:text-brand-red transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-brand-red transition-colors">Services</a></li>
              <li><a href="#plans" className="hover:text-brand-red transition-colors">Membership Plans</a></li>
              <li><a href="#gallery" className="hover:text-brand-red transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-brand-red transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold uppercase tracking-wider text-white mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-red shrink-0" size={18} />
                <span>10 Kabi, Kavi Jasimuddin Path, SAIL Co-operative, City Center, Durgapur, West Bengal 713216</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-red shrink-0" size={18} />
                <span>+91 94744 84833</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-heading text-lg font-semibold uppercase tracking-wider text-white mb-6">Opening Hours</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <Clock className="text-brand-red shrink-0" size={18} />
                <div>
                  <p><span className="text-white font-medium">Mon, Tue, Thu, Fri:</span></p>
                  <p>6 AM – 12 PM, 4 PM – 8:30 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-brand-red shrink-0" size={18} />
                <div>
                  <p><span className="text-white font-medium">Wednesday:</span></p>
                  <p>6:30 AM – 12 PM, 4 PM – 6 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-brand-red shrink-0" size={18} />
                <div>
                  <p><span className="text-white font-medium">Sat - Sun:</span></p>
                  <p>6 AM – 12 PM</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-brand-gray pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Fitness Point. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
