"use client";

import { benefits } from "@/lib/data";
import { UserCheck, Clock, Target, Award, Trophy } from "lucide-react";
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
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

        {/* ══════════════════════════════════════════
            BLOCO DE PROVA SOCIAL / RESULTADOS DE CAMPINAS
            ══════════════════════════════════════════ */}
        <div
          className={`card-brand reveal reveal-d4 ${visible ? "is-visible" : ""}`}
          style={{
            maxWidth: "840px",
            margin: "0 auto",
            padding: "clamp(1.75rem, 5vw, 2.75rem)",
            background: "linear-gradient(145deg, #f5f3ff 0%, #ffffff 100%)",
            border: "2px solid #c4b5fd",
            boxShadow: "0 8px 32px rgba(109, 53, 204, 0.08)",
            textAlign: "center",
          }}
        >
          {/* Badge / Tag superior */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider mb-4"
            style={{
              background: "#ede9fe",
              color: "#3d1a8f",
              border: "1px solid #c4b5fd",
              fontFamily: "var(--font-plus-jakarta)",
            }}
          >
            <Trophy size={14} className="text-amber-500" />
            Concurso de Campinas · Edital 01/2025
          </div>

          {/* Destaque Principal (Big Number) */}
          <div
            style={{
              fontFamily: "var(--font-plus-jakarta)",
              fontSize: "clamp(2.4rem, 6vw, 3.8rem)",
              fontWeight: 800,
              color: "#3d1a8f",
              lineHeight: 1,
              letterSpacing: "-0.03em",
              marginBottom: "0.5rem",
            }}
          >
            12 ALUNOS CLASSIFICADOS
          </div>

          {/* Subtítulo do Bloco */}
          <p
            className="mx-auto mb-8"
            style={{
              color: "#4b5563",
              fontSize: "0.95rem",
              maxWidth: "560px",
              lineHeight: 1.6,
              fontWeight: 500,
            }}
          >
            Resultados conquistados por nossos alunos no último concurso de Arquiteto da Prefeitura de Campinas (Edital 01/2025).
          </p>

          {/* Highlights pormenorizados (5º e 10º lugar) */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left"
          >
            {/* 5º Lugar */}
            <div
              className="p-4 rounded-xl flex items-center gap-3.5"
              style={{
                background: "#ffffff",
                border: "1.5px solid #bbf7d0",
                boxShadow: "0 2px 8px rgba(34, 197, 94, 0.08)",
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "#dcfce7", color: "#15803d" }}
              >
                🏆
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-plus-jakarta)",
                    fontSize: "0.95rem",
                    fontWeight: 800,
                    color: "#111827",
                    lineHeight: 1.25,
                  }}
                >
                  5º Lugar Geral
                </p>
                <p style={{ fontSize: "0.78rem", color: "#16a34a", fontWeight: 700, marginTop: "2px" }}>
                  Aluno Convocado e Nomeado
                </p>
              </div>
            </div>

            {/* 10º Lugar */}
            <div
              className="p-4 rounded-xl flex items-center gap-3.5"
              style={{
                background: "#ffffff",
                border: "1.5px solid #c4b5fd",
                boxShadow: "0 2px 8px rgba(139, 92, 246, 0.08)",
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "#ede9fe", color: "#5226b3" }}
              >
                🎯
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-plus-jakarta)",
                    fontSize: "0.95rem",
                    fontWeight: 800,
                    color: "#111827",
                    lineHeight: 1.25,
                  }}
                >
                  10º Lugar Geral
                </p>
                <p style={{ fontSize: "0.78rem", color: "#6d35cc", fontWeight: 700, marginTop: "2px" }}>
                  Classificado no Top 10
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
