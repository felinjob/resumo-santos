import HeroSection from "@/components/sections/HeroSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import ScheduleSection from "@/components/sections/ScheduleSection";
import AuthorsSection from "@/components/sections/AuthorsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CheckoutSection from "@/components/sections/CheckoutSection";
import FaqSection from "@/components/sections/FaqSection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <main>
      {/* 1. HeroSection */}
      <HeroSection />

      {/* 2. BenefitsSection */}
      <BenefitsSection />

      {/* 3. ScheduleSection */}
      <ScheduleSection />

      {/* 4. AuthorsSection */}
      <AuthorsSection />

      {/* 5. TestimonialsSection */}
      <TestimonialsSection />

      {/* 6. CheckoutSection (Oferta principal) */}
      <CheckoutSection />

      {/* 7. FaqSection (Captura de indecisos / destruição de objeções) */}
      <FaqSection />

      {/* 8. FooterSection */}
      <FooterSection />
    </main>
  );
}
