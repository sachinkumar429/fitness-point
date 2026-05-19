"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Monthly Plan",
    price: "₹1,200",
    period: "/month",
    features: ["Gym Access", "Basic Trainer Guidance", "Cardio Access", "Locker Room Access", "General Diet Plan"],
    recommended: false,
  },
  {
    name: "Quarterly Plan",
    price: "₹3,000",
    period: "/3 months",
    features: ["All Monthly Plan Features", "Dedicated Trainer Guidance", "Customized Diet Suggestions", "Weekly Progress Tracking", "Cardio & Weight Training"],
    recommended: true,
  },
  {
    name: "Premium Transformation",
    price: "₹10,000",
    period: "/year",
    features: ["All Quarterly Features", "1-on-1 Personal Training", "Advanced Diet & Nutrition", "Yoga Sessions Included", "Supplement Guidance", "Priority Support"],
    recommended: false,
  }
];

export default function MembershipSection() {
  return (
    <section id="plans" className="py-24 bg-black relative">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-brand-red rounded-full filter blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-brand-red font-bold tracking-widest uppercase mb-2">Pricing</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase">
            Membership Plans
          </h3>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Choose the perfect plan for your fitness journey. We offer budget-friendly memberships with premium facilities.
          </p>
          <div className="w-24 h-1 bg-brand-red mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className={`relative bg-[#050505] rounded-3xl p-8 border ${
                plan.recommended ? "border-brand-red shadow-[0_0_30px_rgba(230,0,0,0.2)] md:-translate-y-4" : "border-brand-gray"
              } hover:border-brand-red transition-all duration-300 group`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-red text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Recommended
                </div>
              )}

              <div className="text-center mb-8">
                <h4 className="text-xl font-heading font-bold text-white uppercase tracking-wide mb-2">
                  {plan.name}
                </h4>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-4xl font-heading font-extrabold text-white">{plan.price}</span>
                  <span className="text-gray-400 font-medium">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3">
                    <Check className="text-brand-red w-5 h-5 shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full text-center py-4 rounded-xl font-bold uppercase tracking-wider transition-all ${
                  plan.recommended
                    ? "bg-brand-red hover:bg-brand-red-dark text-white shadow-[0_0_15px_rgba(230,0,0,0.4)]"
                    : "bg-brand-gray hover:bg-brand-red text-white"
                }`}
              >
                Choose Plan
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
