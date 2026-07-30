"use client";

import { useEffect, useState } from "react";
import { FORM_URL } from "@/lib/data";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function StickyMobileCta() {
  const [isPastHero, setIsPastHero] = useState(false);
  const [isCheckoutVisible, setIsCheckoutVisible] = useState(false);

  useEffect(() => {
    // 1. Scroll listener para detectar quando passou da dobra principal (Hero)
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setIsPastHero(true);
      } else {
        setIsPastHero(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // 2. IntersectionObserver para ocultar a barra quando a seção Checkout estiver visível
    const checkoutEl = document.getElementById("garantia");
    let observer: IntersectionObserver | null = null;

    if (checkoutEl) {
      observer = new IntersectionObserver(
        ([entry]) => {
          setIsCheckoutVisible(entry.isIntersecting);
        },
        { threshold: 0.15 } // Dispara quando 15% do checkout estiver na tela
      );
      observer.observe(checkoutEl);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (observer && checkoutEl) {
        observer.unobserve(checkoutEl);
      }
    };
  }, []);

  // Exibir apenas se passou do Hero E NÃO está na seção de Checkout
  const isVisible = isPastHero && !isCheckoutVisible;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 sm:hidden transition-all duration-400 ease-out ${
        isVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-full opacity-0 pointer-events-none"
      }`}
      style={{
        background: "rgba(26, 10, 62, 0.92)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderTop: "1px solid rgba(139, 92, 246, 0.3)",
        boxShadow: "0 -4px 20px rgba(0, 0, 0, 0.25)",
        padding: "0.55rem 1rem",
      }}
      role="region"
      aria-label="Ação rápida de compra em dispositivo móvel"
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        {/* Lado esquerdo — Texto discreto com preço */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-1">
            <ShieldCheck size={12} className="text-emerald-400 flex-shrink-0" />
            <span
              className="text-[0.68rem] font-bold text-purple-200 tracking-wide uppercase"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Edital nº 74/2026
            </span>
          </div>
          <p className="text-xs font-semibold text-white leading-tight">
            12x <span className="font-extrabold text-emerald-400">R$ 19,90</span>{" "}
            <span className="text-[0.7rem] text-purple-300 font-normal">ou R$ 197</span>
          </p>
        </div>

        {/* Lado direito — Botão CTA compacto e refinado */}
        <a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cta text-xs py-2 px-3.5 font-extrabold rounded-xl flex items-center gap-1.5 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 flex-shrink-0"
          aria-label="Quero ser aprovado"
          style={{
            minHeight: "38px",
            fontSize: "0.78rem",
            background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
          }}
        >
          Quero ser aprovado!
          <ArrowRight size={13} />
        </a>
      </div>
    </div>
  );
}
