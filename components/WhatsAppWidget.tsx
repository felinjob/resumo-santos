"use client";

import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { SUPPORT_EMAIL } from "@/lib/data";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [dismissedTooltip, setDismissedTooltip] = useState(false);

  // E-mail / WhatsApp direct link (can be customized or open mailto / whatsapp)
  const whatsappUrl = `https://wa.me/5513999999999?text=${encodeURIComponent(
    "Olá! Gostaria de tirar uma dúvida sobre o material do Concurso de Santos 2026."
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end pointer-events-auto">
      {/* Tooltip Popup */}
      {!dismissedTooltip && !isOpen && (
        <div
          className="mb-3 p-3 rounded-2xl bg-white text-gray-800 text-xs shadow-xl border border-purple-100 flex items-start gap-2.5 max-w-[240px] animate-bounce-slow"
          style={{
            boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)",
          }}
        >
          <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1 flex-shrink-0 animate-ping" />
          <div className="flex-1">
            <p className="font-bold text-purple-900 leading-tight mb-0.5">Dúvidas sobre o material?</p>
            <p className="text-[0.72rem] text-gray-600 leading-snug">
              Fale conosco diretamente pelo e-mail ou suporte rápido!
            </p>
          </div>
          <button
            onClick={() => setDismissedTooltip(true)}
            className="text-gray-400 hover:text-gray-600 p-0.5"
            aria-label="Fechar aviso de suporte"
          >
            <X size={13} />
          </button>
        </div>
      )}

      {/* Botão Flutuante */}
      <a
        href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent("Dúvida — Concurso Santos 2026")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        style={{
          boxShadow: "0 4px 20px rgba(34, 197, 94, 0.4)",
          width: "52px",
          height: "52px",
        }}
        aria-label="Entre em contato com nosso suporte"
        title="Dúvidas sobre a compra? Fale conosco!"
      >
        <MessageCircle size={26} className="transition-transform duration-300 group-hover:rotate-12" />
      </a>
    </div>
  );
}
