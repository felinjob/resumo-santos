"use client";

import { guarantees, FORM_URL } from "@/lib/data";
import { ArrowRight, ShieldCheck, CreditCard, Download } from "lucide-react";
import { useReveal } from "@/lib/hooks";

const guaranteeIcons = [
  <CreditCard key="c" size={20} style={{ color: "#5226b3" }} />,
  <Download   key="d" size={20} style={{ color: "#5226b3" }} />,
  <ShieldCheck key="s" size={20} style={{ color: "#5226b3" }} />,
];

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
        <div
          className={`card-brand mx-auto reveal ${visible ? "is-visible" : ""}`}
          style={{
            maxWidth: "600px",
            padding: "clamp(1.75rem, 5vw, 2.75rem)",
          }}
        >
          {/* Eyebrow */}
          <div className="text-center" style={{ marginBottom: "1.25rem" }}>
            <span
              style={{
                display: "inline-block",
                background: "#dcfce7",
                color: "#14532d",     /* verde escuro — WCAG AAA */
                border: "1px solid #86efac",
                padding: "5px 16px",
                borderRadius: "999px",
                fontSize: "0.72rem",
                fontWeight: 800,
                fontFamily: "var(--font-plus-jakarta)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              ✦ Condição especial · pré-venda pós-edital
            </span>
          </div>

          {/* Título */}
          <h2
            className="text-center"
            style={{
              fontFamily: "var(--font-plus-jakarta)",
              fontSize: "clamp(1.5rem, 4vw, 2.1rem)",
              fontWeight: 800,
              color: "#111827",
              lineHeight: 1.18,
              marginBottom: "0.75rem",
              letterSpacing: "-0.01em",
            }}
          >
            Sua Aprovação em Santos{" "}
            <span style={{ color: "#5226b3" }}>Começa Aqui.</span>
          </h2>

          {/* Subtítulo */}
          <p
            className="text-center"
            style={{
              color: "#4b5563",
              fontSize: "0.93rem",
              maxWidth: "420px",
              margin: "0 auto 1.75rem",
              lineHeight: 1.65,
            }}
          >
            Não deixe a Legislação Específica ser o seu ponto fraco. Garanta acesso a
            todos os <strong style={{ color: "#111827" }}>8 PDFs</strong> pelo valor
            promocional de lançamento.
          </p>

          {/* ── ÂNCORA DE PREÇO / CONDIÇÃO ─────────────────── */}
          <div
            style={{
              background: "#f5f3ff",
              border: "2px solid #c4b5fd",
              borderRadius: "14px",
              padding: "1.25rem 1.4rem",
              marginBottom: "1.5rem",
              textAlign: "center",
            }}
          >
            {/* Rótulo */}
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 800,
                color: "#5226b3",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontFamily: "var(--font-plus-jakarta)",
                marginBottom: "6px",
              }}
            >
              Oferta de Lançamento — Acesso Completo
            </p>

            {/* Preço em destaque */}
            <div
              className="flex items-baseline justify-center gap-1.5 flex-wrap"
              style={{ marginBottom: "6px" }}
            >
              <span
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#3d1a8f",
                  fontFamily: "var(--font-plus-jakarta)",
                }}
              >
                12x de
              </span>
              <span
                style={{
                  fontFamily: "var(--font-plus-jakarta)",
                  fontSize: "clamp(2.4rem, 6vw, 3.2rem)",
                  fontWeight: 800,
                  color: "#3d1a8f",   /* roxo muito escuro — WCAG AAA sobre #f5f3ff */
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                }}
              >
                R$ 19,90
              </span>
            </div>

            {/* Valor à vista */}
            <p
              style={{
                fontSize: "0.95rem",
                color: "#1e0a4a",
                fontWeight: 700,
                fontFamily: "var(--font-plus-jakarta)",
                marginBottom: "6px",
              }}
            >
              ou R$ 197,00 à vista no PIX
            </p>

            {/* Detalhe de pagamento */}
            <p
              style={{
                fontSize: "0.82rem",
                color: "#5226b3",
                fontWeight: 600,
              }}
            >
              💳 PIX (Acesso Imediato) · Cartão em até 12x
            </p>

            {/* Urgência discreta */}
            <p
              style={{
                marginTop: "8px",
                fontSize: "0.72rem",
                color: "#6b7280",
                fontStyle: "italic",
              }}
            >
              Condição válida para o período de pré-venda pós-edital
            </p>
          </div>

          {/* CTA principal */}
          <div
            className="flex justify-center"
            style={{ marginBottom: "0.75rem" }}
          >
            <a
              id="cta-checkout-primary"
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta"
              style={{
                fontSize: "1rem",
                padding: "1.05rem 2.25rem",
                width: "100%",
                maxWidth: "360px",
              }}
            >
              GARANTIR MEU ACESSO AGORA
              <ArrowRight size={18} />
            </a>
          </div>

          <p
            className="text-center"
            style={{
              fontSize: "0.73rem",
              color: "#6b7280",
              marginBottom: "1.75rem",
            }}
          >
            Clique para acessar o formulário seguro de compra
          </p>

          {/* Divider */}
          <div
            style={{
              height: "1px",
              background: "#e5e7eb",
              marginBottom: "1.4rem",
            }}
          />

          {/* ── Selos de garantia ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "0.75rem",
            }}
          >
            {guarantees.map((g, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 rounded-xl"
                style={{
                  background: "#f9fafb",
                  border: "1px solid #e5e7eb",
                  padding: "0.75rem",
                }}
              >
                <div
                  className="flex-shrink-0 flex items-center justify-center rounded-xl"
                  style={{ width: "36px", height: "36px", background: "#ede9fe" }}
                >
                  {guaranteeIcons[i]}
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      color: "#111827",
                      fontFamily: "var(--font-plus-jakarta)",
                      lineHeight: 1.2,
                    }}
                  >
                    {g.title}
                  </p>
                  <p style={{ fontSize: "0.7rem", color: "#6b7280", marginTop: "2px" }}>
                    {g.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
