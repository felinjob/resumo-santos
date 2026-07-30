import HeroSection from "@/components/sections/HeroSection";
import MetricsSection from "@/components/sections/MetricsSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import ScheduleSection from "@/components/sections/ScheduleSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import AuthorsSection from "@/components/sections/AuthorsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CheckoutSection from "@/components/sections/CheckoutSection";
import FaqSection from "@/components/sections/FaqSection";
import FooterSection from "@/components/sections/FooterSection";
import StickyMobileCta from "@/components/StickyMobileCta";

export default function Home() {
  return (
    <main className="relative">
      {/* 1. HeroSection */}
      <HeroSection />

      {/* 2. MetricsSection */}
      <MetricsSection />

      {/* 3. BenefitsSection ("Por que nossos resumos?") */}
      <BenefitsSection />

      {/* 4. ScheduleSection (Cronograma de liberação) */}
      <ScheduleSection />

      {/* 5. WhyChooseSection (12 Classificados + Spotlight Thiago 5º Lugar) */}
      <WhyChooseSection />

      {/* 6. AuthorsSection (Quem serão seus professores) */}
      <AuthorsSection />

      {/* 7. TestimonialsSection (Prints de Depoimentos - iniciando por Vanessa) */}
      <TestimonialsSection />

      {/* 8. CheckoutSection (Oferta Eduzz) */}
      <CheckoutSection />

      {/* 9. FaqSection */}
      <FaqSection />

      {/* 10. FooterSection */}
      <FooterSection />

      {/* Sticky CTA Flutuante para Dispositivos Móveis */}
      <StickyMobileCta />
    </main>
  );
}
