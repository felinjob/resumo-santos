"use client";

import { Check, X } from "lucide-react";
import { useReveal } from "@/lib/hooks";

export default function TargetAudienceSection() {
  const { ref, visible } = useReveal();

  const forYou = [
    "Quer economizar mais de 100 horas de leitura maçante da Lei Seca pura.",
    "Busca memorizar prazos, competências e artigos com esquemas e tabelas visuais.",
    "Vai prestar o concurso para Arquiteto ou Engenheiro Civil em Santos (IBAM).",
    "Precisa de um material direto ao ponto, atualizado conforme o Edital nº 74/2026.",
    "Quer treinar com questões focadas no perfil específico da Banca IBAM.",
  ];

  const notForYou = [
    "Prefere ler centenas de páginas de PDFs cinzas e desformatados de leis puras.",
    "Tem meses de sobra e tempo ilimitado para fazer seus próprios resumos do zero.",
    "Já domina todas as pegadinhas históricas da Banca IBAM em legislação de Santos.",
    "Não pretende prestar o concurso para a Prefeitura de Santos em 2026.",
  ];

  return (
    <section
      ref={ref as React.Ref<HTMLElement>}
      className="bg-white-section"
      style={{ padding: "4.5rem 0" }}
    >
      <div className="container-site">
        {/* Header */}
        <div className={`text-center mb-12 reveal ${visible ? "is-visible" : ""}`}>
          <span className="section-eyebrow">Qualificação</span>
          <h2
            style={{
              fontFamily: "var(--font-plus-jakarta)",
              fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
              color: "#111827",
              marginTop: "0.75rem",
              marginBottom: "0.75rem",
              fontWeight: 800,
            }}
          >
            Este material é para você?
          </h2>
          <p style={{ color: "#4b5563", fontSize: "0.95rem", maxWidth: "520px", margin: "0 auto" }}>
            Veja se o método do Resumos Santos se encaixa exatamente no seu momento de estudos.
          </p>
          <div className="divider-brand mt-5" />
        </div>

        {/* Grid de Comparação */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Card SIM (Para Você) */}
          <div
            className={`rounded-2xl p-6 sm:p-8 reveal reveal-d1 ${visible ? "is-visible" : ""}`}
            style={{
              background: "linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%)",
              border: "2px solid #bbf7d0",
              boxShadow: "0 4px 20px rgba(34, 197, 94, 0.08)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                style={{ background: "#16a34a" }}
              >
                <Check size={20} />
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-plus-jakarta)",
                  fontSize: "1.2rem",
                  fontWeight: 800,
                  color: "#14532d",
                }}
              >
                Este material É para você se:
              </h3>
            </div>

            <ul className="space-y-4">
              {forYou.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "#dcfce7", color: "#16a34a" }}
                  >
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span style={{ fontSize: "0.9rem", color: "#1f2937", lineHeight: 1.5, fontWeight: 500 }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card NÃO (Não é Para Você) */}
          <div
            className={`rounded-2xl p-6 sm:p-8 reveal reveal-d2 ${visible ? "is-visible" : ""}`}
            style={{
              background: "linear-gradient(180deg, #fef2f2 0%, #ffffff 100%)",
              border: "1.5px solid #fecaca",
              boxShadow: "0 4px 20px rgba(239, 68, 68, 0.05)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                style={{ background: "#ef4444" }}
              >
                <X size={20} />
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-plus-jakarta)",
                  fontSize: "1.2rem",
                  fontWeight: 800,
                  color: "#7f1d1d",
                }}
              >
                NÃO é para você se:
              </h3>
            </div>

            <ul className="space-y-4">
              {notForYou.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "#fee2e2", color: "#ef4444" }}
                  >
                    <X size={12} strokeWidth={3} />
                  </div>
                  <span style={{ fontSize: "0.9rem", color: "#4b5563", lineHeight: 1.5 }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
