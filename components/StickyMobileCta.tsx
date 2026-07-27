"use client";

import { useEffect, useState } from "react";
import { FORM_URL } from "@/lib/data";
import { ArrowRight, Zap } from "lucide-react";

export default function StickyMobileCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 380) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:hidden bg-slate-950/90 backdrop-blur-md border-t border-purple-500/30 shadow-2xl transition-all duration-300"
      role="region"
      aria-label="Ação rápida de compra"
    >
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        <div>
          <span className="block text-[0.65rem] uppercase tracking-wider font-extrabold text-green-400 font-display flex items-center gap-1">
            <Zap size={10} className="fill-current" /> Pós-Edital 2026
          </span>
          <span className="block text-xs font-bold text-white font-display">
            12x de <strong className="text-purple-300 text-sm">R$ 19,90</strong>
          </span>
        </div>

        <a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cta text-xs py-2.5 px-4 font-bold rounded-xl flex items-center gap-1.5 shadow-lg shadow-green-600/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
          aria-label="Garantir meu acesso aos resumos agora"
          style={{ minHeight: "44px" }}
        >
          GARANTIR ACESSO
          <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
}
