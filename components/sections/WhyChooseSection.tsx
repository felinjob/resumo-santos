"use client";

import { benefits } from "@/lib/data";
import { UserCheck, Clock, Target } from "lucide-react";
import { useReveal } from "@/lib/hooks";

const iconMap: Record<string, React.ReactNode> = {
  UserCheck: <UserCheck size={28} strokeWidth={2} />,
  Clock: <Clock size={28} strokeWidth={2} />,
  Target: <Target size={28} strokeWidth={2} />,
};

const iconColors = ["#8b5cf6", "#22c55e", "#6d35cc"];
const iconBgs = ["#ede9fe", "#dcfce7", "#f5f3ff"];

export default function WhyChooseSection() {
  const { ref, visible } = useReveal(0.12);

  return (
    <section
      id="diferenciais"
      ref={ref as React.Ref<HTMLElement>}
      className="bg-white-section"
      style={{ padding: "4.5rem 0" }}
    >
      <div className="container-site">
        {/* Header da Seção */}
        <div
          className={`text-center mb-10 reveal ${visible ? "is-visible" : ""}`}
        >
          <span className="section-eyebrow">Por que nossos resumos?</span>
          <h2
            className="mt-4 mb-3"
            style={{
              fontFamily: "var(--font-plus-jakarta)",
              fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
              color: "#1f2937",
              fontWeight: 800,
            }}
          >
            Por que nossos resumos são a{" "}
            <span style={{ color: "#6d35cc" }}>melhor escolha?</span>
          </h2>
          <p
            className="mx-auto"
            style={{ color: "#6b7280", maxWidth: "560px", fontSize: "0.95rem", lineHeight: 1.6 }}
          >
            Metodologia testada e aprovada por quem conquistou a vaga em concursos de altíssima concorrência.
          </p>
          <div className="divider-brand mt-5" />
        </div>

        {/* Cards de Diferenciais — 3 Colunas */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`card-white p-7 reveal reveal-d${i + 1} ${visible ? "is-visible" : ""}`}
            >
              {/* Ícone */}
              <div
                className="flex items-center justify-center w-14 h-14 rounded-2xl mb-5"
                style={{ backgroundColor: iconBgs[i], color: iconColors[i] }}
              >
                {iconMap[b.iconName] || <UserCheck size={28} />}
              </div>

              {/* Número decorativo */}
              <span
                className="text-xs font-bold mb-2 block"
                style={{ color: iconColors[i], letterSpacing: "0.1em" }}
              >
                0{i + 1}
              </span>

              <h3
                className="mb-3"
                style={{
                  fontFamily: "var(--font-plus-jakarta)",
                  fontSize: "1.05rem",
                  color: "#111827",
                  fontWeight: 800,
                  lineHeight: 1.3,
                }}
              >
                {b.title}
              </h3>
              <p style={{ color: "#6b7280", fontSize: "0.9rem", lineHeight: 1.7 }}>
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
