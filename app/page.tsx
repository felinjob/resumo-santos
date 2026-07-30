import HeroSection from "@/components/sections/HeroSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import ScheduleSection from "@/components/sections/ScheduleSection";
import AuthorsSection from "@/components/sections/AuthorsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CheckoutSection from "@/components/sections/CheckoutSection";
import FaqSection from "@/components/sections/FaqSection";
import FooterSection from "@/components/sections/FooterSection";
import StickyMobileCta from "@/components/StickyMobileCta";

export default function Home() {
  return (
    <main className="relative">
      {/* 1. HeroSection (com faixa de métricas embutida) */}
      <HeroSection />

      {/* 2. WhyChooseSection (Por que nossos resumos são a melhor escolha? + Prova Social Campinas) */}
      <WhyChooseSection />

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

      {/* Sticky CTA Flutuante para Dispositivos Móveis */}
      <StickyMobileCta />
    </main>
  );
}
