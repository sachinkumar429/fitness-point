import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import BmiCalculator from "@/components/BmiCalculator";
import MembershipSection from "@/components/MembershipSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "name": "Fitness Point",
    "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    "@id": "https://fitnesspoint.com",
    "url": "https://fitnesspoint.com",
    "telephone": "+919474484833",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "10 Kabi, Kavi Jasimuddin Path, SAIL Co-operative, City Center",
      "addressLocality": "Durgapur",
      "addressRegion": "WB",
      "postalCode": "713216",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.5489,
      "longitude": 87.2917
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Thursday", "Friday"],
        "opens": "06:00",
        "closes": "20:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Wednesday",
        "opens": "06:30",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "06:00",
        "closes": "12:00"
      }
    ]
  };

  return (
    <>
      {/* Schema.org JSON-LD for Local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BmiCalculator />
      <MembershipSection />
      <TestimonialsSection />
      <GallerySection />
      <ContactSection />
    </>
  );
}
