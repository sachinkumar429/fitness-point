"use client";

import { useState } from "react";
import { Calculator } from "lucide-react";
import { motion } from "framer-motion";

export default function BmiCalculator() {
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [status, setStatus] = useState<string>("");

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    if (height && weight) {
      const h = parseFloat(height) / 100;
      const w = parseFloat(weight);
      const bmiValue = w / (h * h);
      setBmi(parseFloat(bmiValue.toFixed(1)));

      if (bmiValue < 18.5) setStatus("Underweight");
      else if (bmiValue >= 18.5 && bmiValue <= 24.9) setStatus("Normal Weight");
      else if (bmiValue >= 25 && bmiValue <= 29.9) setStatus("Overweight");
      else setStatus("Obese");
    }
  };

  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-brand-red font-bold tracking-widest uppercase mb-2">Check Your Body</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase leading-tight mb-6">
              Calculate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-red-dark">BMI</span>
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Body Mass Index (BMI) is a measure of body fat based on height and weight that applies to adult men and women. Use our calculator to determine your category.
            </p>

            <form onSubmit={calculateBMI} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Height (cm)</label>
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="e.g. 175"
                    className="w-full bg-brand-gray border border-brand-light-gray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Weight (kg)</label>
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="e.g. 70"
                    className="w-full bg-brand-gray border border-brand-light-gray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-colors"
                    required
                  />
                </div>
              </div>
              <button 
                type="submit"
                className="w-full bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-lg font-bold transition-all uppercase tracking-wide flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(230,0,0,0.3)] hover:shadow-[0_0_25px_rgba(230,0,0,0.6)]"
              >
                <Calculator size={20} /> Calculate Now
              </button>
            </form>

            {bmi && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 p-6 bg-brand-gray border border-brand-light-gray rounded-lg flex items-center justify-between"
              >
                <div>
                  <p className="text-gray-400 text-sm">Your BMI is</p>
                  <p className="text-4xl font-heading font-bold text-white">{bmi}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 text-sm">Status</p>
                  <p className={`text-xl font-bold uppercase ${
                    status === "Normal Weight" ? "text-green-500" : 
                    status === "Underweight" ? "text-yellow-500" : "text-brand-red"
                  }`}>
                    {status}
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Table Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#050505] p-8 rounded-2xl border border-brand-light-gray"
          >
            <h4 className="text-2xl font-heading font-bold text-white uppercase mb-6">BMI Chart</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-gray-300">
                <thead className="text-sm uppercase bg-brand-gray text-white">
                  <tr>
                    <th className="px-6 py-4 rounded-tl-lg">BMI</th>
                    <th className="px-6 py-4 rounded-tr-lg">Weight Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-light-gray">
                  <tr className="hover:bg-brand-gray/50 transition-colors">
                    <td className="px-6 py-4 font-medium">Below 18.5</td>
                    <td className="px-6 py-4 text-yellow-500 font-bold">Underweight</td>
                  </tr>
                  <tr className="hover:bg-brand-gray/50 transition-colors">
                    <td className="px-6 py-4 font-medium">18.5 - 24.9</td>
                    <td className="px-6 py-4 text-green-500 font-bold">Normal Weight</td>
                  </tr>
                  <tr className="hover:bg-brand-gray/50 transition-colors">
                    <td className="px-6 py-4 font-medium">25.0 - 29.9</td>
                    <td className="px-6 py-4 text-orange-500 font-bold">Overweight</td>
                  </tr>
                  <tr className="hover:bg-brand-gray/50 transition-colors">
                    <td className="px-6 py-4 font-medium rounded-bl-lg">30.0 and Above</td>
                    <td className="px-6 py-4 text-brand-red font-bold rounded-br-lg">Obese</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
