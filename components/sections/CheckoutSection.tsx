"use client";

import { FORM_URL } from "@/lib/data";
import { ArrowRight, ShieldCheck, CreditCard, CheckCircle2, Star } from "lucide-react";
import { useReveal } from "@/lib/hooks";

export default function CheckoutSection() {
  const { ref, visible } = useReveal(0.15);

  return (
    <section
      id="garantia"
      ref={ref as React.Ref<HTMLElement>}
      className="bg-white-section"
      style={{ padding: "4.5rem 0" }}
    >
      <div className="container-site">
        {/* ── Header da seção ── */}
        <div className={`text-center mb-8 reveal ${visible ? "is-visible" : ""}`}>
          <span
            style={{
              display: "inline-block",
              background: "#dcfce7",
              color: "#14532d",
              border: "1px solid #86efac",
              padding: "5px 16px",
              borderRadius: "999px",
              fontSize: "0.72rem",
              fontWeight: 800,
              fontFamily: "var(--font-plus-jakarta)",
              letterSpacing: "0.1em",
            }}
          >
            ✦ Lançamento pós-edital
          </span>

          <h2
            className="text-center"
            style={{
              fontFamily: "var(--font-plus-jakarta)",
              fontSize: "clamp(1.5rem, 4vw, 2.1rem)",
              fontWeight: 800,
              color: "#111827",
              lineHeight: 1.18,
              marginTop: "1rem",
              marginBottom: "0.75rem",
              letterSpacing: "-0.01em",
            }}
          >
            Sua aprovação em Santos{" "}
            <span style={{ color: "#5226b3" }}>começa aqui.</span>
          </h2>

          <p
            className="text-center mx-auto"
            style={{
              color: "#4b5563",
              fontSize: "0.93rem",
              maxWidth: "480px",
              lineHeight: 1.7,
              textAlign: "center",
            }}
          >
            Garanta acesso à toda legislação municipal pelo valor promocional de lançamento.
          </p>
        </div>

        {/* ══════════════════════════════════════════
            CARDS DE PLANOS — 2 opções com alinhamento perfeito de botões
            ══════════════════════════════════════════ */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto items-stretch"
          style={{ marginBottom: "2rem" }}
        >
          {/* ── OPÇÃO 1: Curso de Legislação Municipal ── */}
          <div
            className={`card-brand flex flex-col justify-between reveal reveal-d1 ${visible ? "is-visible" : ""}`}
            style={{ padding: "clamp(1.5rem, 4vw, 2rem)", position: "relative", height: "100%" }}
          >
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-plus-jakarta)",
                  fontSize: "1.05rem",
                  fontWeight: 800,
                  color: "#111827",
                  marginBottom: "0.75rem",
                  lineHeight: 1.3,
                }}
              >
                Curso de Legislação Municipal
              </h3>

              <ul style={{ marginBottom: "1.25rem" }} className="space-y-2">
                {[
                  "8 Resumos em PDF esquematizados",
                  "Vídeoaulas com resolução de questões IBAM",
                  "Acesso à área de membros",
                  "Atualizações conforme retificações do edital",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" style={{ color: "#22c55e" }} />
                    <span style={{ fontSize: "0.82rem", color: "#4b5563", lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Preço */}
              <div style={{ marginBottom: "1.25rem" }}>
                <p style={{ fontSize: "0.8rem", color: "#6b7280", fontWeight: 600, marginBottom: "2px" }}>
                  De <span className="line-through text-red-500 font-bold">R$ 237,00</span> por
                </p>
                <div className="flex items-baseline gap-1.5 flex-wrap">
                  <span
                    style={{
                      fontFamily: "var(--font-plus-jakarta)",
                      fontSize: "clamp(2rem, 5vw, 2.6rem)",
                      fontWeight: 800,
                      color: "#3d1a8f",
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    R$ 189,60
                  </span>
                  <span style={{ fontSize: "0.85rem", color: "#5226b3", fontWeight: 700 }}>à vista</span>
                </div>
                <p style={{ fontSize: "0.78rem", color: "#6b7280", marginTop: "2px", marginBottom: "8px" }}>
                  ou parcelado no cartão
                </p>

                {/* Destaque do Cupom de Lançamento */}
                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold mt-1"
                  style={{
                    background: "#fefce8",
                    border: "1.5px dashed #eab308",
                    color: "#854d0e",
                    fontFamily: "var(--font-plus-jakarta)",
                  }}
                >
                  🏷️ Usando o cupom: <span style={{ color: "#a16207", fontWeight: 900, letterSpacing: "0.05em", background: "#fef9c3", padding: "2px 6px", borderRadius: "4px", border: "1px solid #fde047" }}>LANCAMENTO20</span>
                </div>
              </div>
            </div>

            {/* Botão alinhado no rodapé do card */}
            <div className="mt-auto pt-2">
              <a
                id="cta-checkout-curso"
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 w-full"
                aria-label="Quero ser aprovado — Curso de Legislação Municipal"
                style={{ fontSize: "0.95rem", padding: "0.9rem 1.5rem" }}
              >
                Quero ser aprovado!
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* ── OPÇÃO 2: Combo ── */}
          <div
            className={`card-brand flex flex-col justify-between reveal reveal-d2 ${visible ? "is-visible" : ""}`}
            style={{
              padding: "clamp(1.5rem, 4vw, 2rem)",
              position: "relative",
              border: "2px solid #8b5cf6",
              height: "100%",
            }}
          >
            {/* Badge destaque */}
            <div
              style={{
                position: "absolute",
                top: "-12px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "linear-gradient(135deg,#8b5cf6,#6d35cc)",
                color: "#ffffff",
                padding: "4px 16px",
                borderRadius: "999px",
                fontSize: "0.7rem",
                fontWeight: 800,
                fontFamily: "var(--font-plus-jakarta)",
                letterSpacing: "0.08em",
                whiteSpace: "nowrap",
              }}
            >
              <Star size={10} style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }} />
              Mais completo
            </div>

            <div>
              <h3
                style={{
                  fontFamily: "var(--font-plus-jakarta)",
                  fontSize: "1.05rem",
                  fontWeight: 800,
                  color: "#111827",
                  marginBottom: "0.75rem",
                  lineHeight: 1.3,
                  marginTop: "0.5rem",
                }}
              >
                Combo Legislação + Plano de Estudos ArqConcurso
              </h3>

              <ul style={{ marginBottom: "1.25rem" }} className="space-y-2">
                {[
                  "Tudo do Curso de Legislação Municipal incluído",
                  "Plano de Estudos personalizado ArqConcurso",
                  "Cronograma estratégico para a prova",
                  "Material complementar exclusivo",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" style={{ color: "#22c55e" }} />
                    <span style={{ fontSize: "0.82rem", color: "#4b5563", lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Preço — placeholder */}
              <div style={{ marginBottom: "1.25rem" }}>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#5226b3",
                    fontWeight: 700,
                    fontFamily: "var(--font-plus-jakarta)",
                  }}
                >
                  Consulte condições especiais
                </p>
                <p style={{ fontSize: "0.78rem", color: "#6b7280", marginTop: "4px" }}>
                  Parcelamento disponível no cartão
                </p>
              </div>
            </div>

            {/* Botão alinhado no rodapé do card */}
            <div className="mt-auto pt-2">
              <a
                id="cta-checkout-combo"
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 w-full"
                aria-label="Quero ser aprovado — Combo completo"
                style={{ fontSize: "0.95rem", padding: "0.9rem 1.5rem" }}
              >
                Quero ser aprovado!
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* ── Urgência discreta ── */}
        <p
          className={`text-center reveal ${visible ? "is-visible" : ""}`}
          style={{
            fontSize: "0.78rem",
            color: "#6b7280",
            fontStyle: "italic",
            marginBottom: "2rem",
          }}
        >
          Condição válida para o período de lançamento
        </p>

        {/* ══════════════════════════════════════════
            GARANTIA DE REEMBOLSO — destaque visual
            ══════════════════════════════════════════ */}
        <div
          className={`card-brand reveal reveal-d3 ${visible ? "is-visible" : ""}`}
          style={{
            maxWidth: "560px",
            margin: "0 auto 2rem",
            padding: "1.5rem",
            textAlign: "center",
            border: "2px solid #22c55e",
            background: "#f0fdf4",
          }}
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <ShieldCheck size={28} style={{ color: "#16a34a" }} />
          </div>
          <h3
            style={{
              fontFamily: "var(--font-plus-jakarta)",
              fontSize: "1.15rem",
              fontWeight: 800,
              color: "#14532d",
              marginBottom: "0.5rem",
            }}
          >
            Garantia de reembolso incondicional em até 7 dias
          </h3>
          <p style={{ fontSize: "0.88rem", color: "#4b5563", lineHeight: 1.65 }}>
            Se por qualquer motivo você não ficar satisfeito, pode solicitar o reembolso total
            dentro da plataforma Eduzz em até 7 dias. Sem burocracia.
          </p>
        </div>

        {/* ── Selos de confiança ── */}
        <div
          className={`reveal reveal-d4 ${visible ? "is-visible" : ""}`}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.25rem",
            flexWrap: "wrap",
          }}
        >
          {[
            { icon: <CreditCard size={18} style={{ color: "#5226b3" }} />, label: "Compra segura via Eduzz" },
            { icon: <ShieldCheck size={18} style={{ color: "#5226b3" }} />, label: "7 dias de garantia" },
          ].map((seal) => (
            <div
              key={seal.label}
              className="flex items-center gap-2 rounded-full"
              style={{
                background: "#f5f3ff",
                border: "1px solid #c4b5fd",
                padding: "0.5rem 1rem",
                fontSize: "0.78rem",
                fontWeight: 700,
                color: "#3d1a8f",
                fontFamily: "var(--font-plus-jakarta)",
              }}
            >
              {seal.icon}
              {seal.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
