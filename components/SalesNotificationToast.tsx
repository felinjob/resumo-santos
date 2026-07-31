"use client";

import { useEffect, useState } from "react";
import { ShoppingBag, X } from "lucide-react";

interface SalesNotification {
  name: string;
  location: string;
  item: string;
  timeAgo: string;
}

const mockNotifications: SalesNotification[] = [
  { name: "Mariana S.", location: "Santos / SP", item: "Combo Legislação + Plano 75 Dias", timeAgo: "há 4 minutos" },
  { name: "Lucas R. (Engenheiro)", location: "São Paulo / SP", item: "Curso de Legislação Municipal", timeAgo: "há 12 minutos" },
  { name: "Carolina M. (Arquiteta)", location: "Guarujá / SP", item: "Combo Legislação + Plano 75 Dias", timeAgo: "há 18 minutos" },
  { name: "Roberto F.", location: "Campinas / SP", item: "Curso de Legislação Municipal", timeAgo: "há 25 minutos" },
  { name: "Patricia K.", location: "Praia Grande / SP", item: "Combo Legislação + Plano 75 Dias", timeAgo: "há 32 minutos" },
];

export default function SalesNotificationToast() {
  const [currentIdx, setCurrentIdx] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const [closedPermanently, setClosedPermanently] = useState(false);

  useEffect(() => {
    if (closedPermanently) return;

    // Primeiro disparo após 8 segundos
    const initialTimer = setTimeout(() => {
      setCurrentIdx(0);
      setVisible(true);
    }, 8000);

    return () => clearTimeout(initialTimer);
  }, [closedPermanently]);

  useEffect(() => {
    if (currentIdx === null || closedPermanently) return;

    // Ocultar após 6 segundos visível
    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 6000);

    // Próximo disparo em 20 segundos
    const nextTimer = setTimeout(() => {
      setCurrentIdx((prev) => ((prev !== null ? prev + 1 : 0) % mockNotifications.length));
      setVisible(true);
    }, 22000);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(nextTimer);
    };
  }, [currentIdx, closedPermanently]);

  if (currentIdx === null || closedPermanently) return null;

  const current = mockNotifications[currentIdx];

  return (
    <div
      className={`fixed bottom-5 left-5 z-40 hidden md:flex items-center gap-3 p-3.5 pr-4 rounded-2xl bg-white text-gray-900 border border-purple-100 shadow-2xl transition-all duration-500 max-w-sm ${
        visible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-6 opacity-0 pointer-events-none"
      }`}
      style={{
        boxShadow: "0 10px 30px -5px rgba(61, 26, 143, 0.12), 0 4px 12px -2px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
        <ShoppingBag size={20} />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-1">
          <p className="text-xs font-bold text-gray-900 truncate">{current.name}</p>
          <span className="text-[0.65rem] text-gray-400 font-medium flex-shrink-0">{current.timeAgo}</span>
        </div>
        <p className="text-[0.72rem] text-emerald-600 font-bold truncate mt-0.5">{current.item}</p>
        <p className="text-[0.68rem] text-gray-400">{current.location}</p>
      </div>

      <button
        onClick={() => setClosedPermanently(true)}
        className="text-gray-300 hover:text-gray-500 p-1 flex-shrink-0"
        aria-label="Fechar notificação de vendas"
      >
        <X size={14} />
      </button>
    </div>
  );
}
