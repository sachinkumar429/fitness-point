import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fitness Point | Best Gym in Durgapur",
  description: "Fitness Point is a premium unisex gym in Durgapur offering weight loss, muscle building, yoga, and personal training. Join today to transform your body!",
  keywords: ["Best Gym in Durgapur", "Fitness Center in Durgapur", "Weight Loss Gym Durgapur", "Affordable Gym in Durgapur", "Unisex Gym in Durgapur"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} scroll-smooth antialiased dark`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-black text-white">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
