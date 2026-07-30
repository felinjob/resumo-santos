import HeroSection from "@/components/sections/HeroSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import ScheduleSection from "@/components/sections/ScheduleSection";
import CampinasResultsSection from "@/components/sections/CampinasResultsSection";
import AuthorsSection from "@/components/sections/AuthorsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CheckoutSection from "@/components/sections/CheckoutSection";
import FaqSection from "@/components/sections/FaqSection";
import FooterSection from "@/components/sections/FooterSection";
import StickyMobileCta from "@/components/StickyMobileCta";

export default function Home() {
  return (
    <main className="relative">
      {/* 1. HeroSection (com os 4 boxes de métricas/destaque) */}
      <HeroSection />

      {/* 2. WhyChooseSection ("Por que nossos resumos são a melhor escolha?" — 3 diferenciais) */}
      <WhyChooseSection />

      {/* 3. ScheduleSection (Cronograma de liberação em ciclos) */}
      <ScheduleSection />

      {/* 4. CampinasResultsSection (12 ALUNOS CLASSIFICADOS + 2 no Top 10 + Depoimento Thiago 5º Lugar) */}
      <CampinasResultsSection />

      {/* 5. AuthorsSection (Quem serão seus professores) */}
      <AuthorsSection />

      {/* 6. TestimonialsSection (Prints de Depoimentos WhatsApp — iniciando por Vanessa Rodrigues) */}
      <TestimonialsSection />

      {/* 7. CheckoutSection (Oferta principal Eduzz) */}
      <CheckoutSection />

      {/* 8. FaqSection (Dúvidas frequentes) */}
      <FaqSection />

      {/* 9. FooterSection */}
      <FooterSection />

      {/* Sticky CTA Flutuante para Dispositivos Móveis */}
      <StickyMobileCta />
    </main>
  );
}
