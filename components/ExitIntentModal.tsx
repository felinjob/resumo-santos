"use client";

import { useEffect, useState } from "react";
import { X, Download, ShieldCheck, ArrowRight } from "lucide-react";
import { AMOSTRA_URL, CHECKOUT_CURSO_URL } from "@/lib/data";

export default function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    // Detect mouse leaving the viewport at top
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10 && !hasTriggered) {
        setIsOpen(true);
        setHasTriggered(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasTriggered]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
      onClick={() => setIsOpen(false)}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-lg p-6 sm:p-8 bg-white rounded-3xl shadow-2xl text-center overflow-hidden border border-purple-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Gradient Banner */}
        <div
          className="absolute top-0 left-0 right-0 h-3"
          style={{ background: "linear-gradient(90deg, #16a34a, #8b5cf6, #5226b3)" }}
        />

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Fechar pop-up"
        >
          <X size={20} />
        </button>

        {/* Header Icon */}
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100 shadow-inner">
          <Download size={32} />
        </div>

        <span className="inline-block px-3 py-1 mb-2 text-xs font-bold text-emerald-700 bg-emerald-50 rounded-full">
          Gabarite a Legislação de Santos 2026
        </span>

        <h3
          className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-2 leading-tight"
          style={{ fontFamily: "var(--font-plus-jakarta)" }}
        >
          Espere! Baixe a amostra antes de sair.
        </h3>

        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
          Comprove a qualidade do nosso material. Baixe agora um trecho com resumos, tabelas de prazos e esquemas visuais da legislação de Santos.
        </p>

        <div className="flex flex-col gap-3">
          <a
            href={AMOSTRA_URL}
            download="Amostra-Resumo-Santos.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full py-3.5 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.02]"
          >
            <Download size={18} />
            Baixar amostra
          </a>

          <a
            href={CHECKOUT_CURSO_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full py-3 px-6 bg-purple-50 hover:bg-purple-100 text-purple-900 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors"
          >
            Ou garanta seu acesso com 7 dias de garantia
            <ArrowRight size={14} />
          </a>
        </div>

        <div className="flex items-center justify-center gap-1.5 mt-4 text-[0.72rem] text-gray-400">
          <ShieldCheck size={14} className="text-emerald-500" />
          <span>Sem compromisso · Baixe em 1 segundo</span>
        </div>
      </div>
    </div>
  );
}
