"use client";

import Image from "next/image";
import { FORM_URL, EDITAL_URL } from "@/lib/data";
import { ArrowRight, Download } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 60);
    return () => clearTimeout(t);
  }, []);

  const fadeStyle = (delay: number, extraY = 14) => ({
    opacity: show ? 1 : 0,
    transform: show ? "translateY(0)" : `translateY(${extraY}px)`,
    transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
  });

  return (
    <>
      {/* ══════════════════════════════════════════════
          NAVBAR — clean, sem links de fuga internos
          ══════════════════════════════════════════════ */}
      <header
        className="sticky top-0 z-50 bg-white"
        style={{
          borderBottom: "1px solid #e5e7eb",
          boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
        }}
      >
        <div
          className="container-site flex items-center justify-between"
          style={{ height: "64px" }}
        >
          {/* Logo + texto clicável que leva ao edital */}
          <a
            href={EDITAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 min-w-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 rounded-lg"
            aria-label="Resumos Legislação Santos 2026 | IBAM — Ver Edital"
            style={{ textDecoration: "none" }}
          >
            <Image
              src="/logo.png"
              alt="Logo Resumos Legislação Santos 2026"
              width={40}
              height={48}
              priority
              style={{ objectFit: "contain", height: "38px", width: "auto" }}
            />
            <span
              style={{
                fontFamily: "var(--font-plus-jakarta)",
                fontWeight: 700,
                fontSize: "clamp(0.78rem, 2.5vw, 0.95rem)",
                color: "#3d1a8f",
                lineHeight: 1.2,
              }}
              className="truncate"
            >
              Resumos Legislação Santos 2026
              <span style={{ color: "#8b5cf6", fontWeight: 800 }}> | IBAM</span>
            </span>
          </a>

          {/* Badge do edital — apenas em telas sm+ (eliminando sobreposição em celulares) */}
          <a
            href={EDITAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
            style={{
              color: "#3d1a8f",
              background: "#ede9fe",
              border: "1px solid #c4b5fd",
              fontFamily: "var(--font-plus-jakarta)",
              letterSpacing: "0.01em",
              whiteSpace: "nowrap",
            }}
            aria-label="Acessar o Edital nº 74/2026 oficial em nova aba"
          >
            Edital nº 74/2026 →
          </a>
        </div>
      </header>

      {/* ══════════════════════════════════════════════
          HERO — fundo roxo profundo
          Layout: logo à direita em desktop (igual Campinas)
          Mobile: logo centralizada em cima do texto
          ══════════════════════════════════════════════ */}
      <section
        id="hero"
        className="bg-hero"
        style={{ padding: "3.5rem 0" }}
      >
        <div className="container-site">

          {/* ── Grid principal: texto | logo ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",          /* mobile: 1 coluna */
              gap: "2.5rem",
              alignItems: "center",
            }}
            className="hero-grid"
          >
            {/* ─ Coluna TEXTO ─ */}
            <div>
              {/* Eyebrow pill */}
              <div style={{ marginBottom: "1.25rem", ...fadeStyle(0) }}>
                <span className="section-eyebrow-on-dark">
                  <span
                    className="dot-green"
                    style={{ display: "inline-block", marginRight: 6, verticalAlign: "middle" }}
                  />
                  Lançamento pós-edital
                </span>
              </div>

              {/* H1 */}
              <h1
                style={{
                  fontFamily: "var(--font-plus-jakarta)",
                  fontSize: "clamp(2rem, 5.5vw, 3.4rem)",
                  lineHeight: 1.1,
                  color: "#ffffff",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  marginBottom: "1.1rem",
                  ...fadeStyle(80, 18),
                }}
              >
                Domine a legislação de Santos{" "}
                <span className="text-gradient">sem perder tempo</span>
              </h1>

              {/* Subtítulo */}
              <p
                style={{
                  color: "#ddd6fe",
                  fontSize: "clamp(0.92rem, 2vw, 1.05rem)",
                  lineHeight: 1.72,
                  maxWidth: "540px",
                  marginBottom: "1.75rem",
                  ...fadeStyle(150),
                }}
              >
                <strong style={{ color: "#ffffff", fontWeight: 700 }}>
                  Resumos em PDF + Vídeoaulas com resolução de questões inéditas com foco 100% na banca IBAM.
                </strong>{" "}
                Tabelas comparativas, fluxogramas e esquemas visuais. Criado por quem vive a legislação na prática do serviço público.
              </p>

              {/* CTAs */}
              <div
                className="flex flex-col sm:flex-row gap-3"
                style={{ marginBottom: "1.75rem", ...fadeStyle(220) }}
              >
                <a
                  id="cta-hero-primary"
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
                  aria-label="Quero ser aprovado — Abrir formulário de compra"
                >
                  Quero ser aprovado!
                  <ArrowRight size={18} />
                </a>
                <a
                  id="cta-hero-sample"
                  href="/Amostra-Resumo-Santos.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
                  aria-label="Baixe sua amostra do resumo em PDF"
                >
                  <Download size={17} />
                  Baixe sua amostra
                </a>
              </div>

              {/* Prova social */}
              <p
                style={{
                  color: "#c4b5fd",
                  fontSize: "0.8rem",
                  marginBottom: "2rem",
                  opacity: show ? 0.9 : 0,
                  transition: "opacity 0.7s ease 320ms",
                }}
              >
                ✦ Elaborado por servidores públicos aprovados em concursos de Arquitetura
              </p>

            </div>

            {/* ─ Coluna LOGO grande ─ */}
            <div
              className="hero-logo-col"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                ...fadeStyle(100, 20),
              }}
            >
              <div
                style={{
                  position: "relative",
                  /* Círculo de brilho atrás da logo */
                }}
              >
                {/* Halo de luz suave atrás — mais sutil */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: "-30px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)",
                    filter: "blur(25px)",
                    zIndex: 0,
                  }}
                />
                <Image
                  src="/logo.png"
                  alt="Resumos Legislação Santos 2026 — Logo"
                  width={320}
                  height={380}
                  priority
                  style={{
                    objectFit: "contain",
                    width: "clamp(160px, 30vw, 320px)",
                    height: "auto",
                    position: "relative",
                    zIndex: 1,
                    filter: "drop-shadow(0 8px 28px rgba(139,92,246,0.3))",
                  }}
                />
              </div>
            </div>
          </div>

          {/* ── Faixa de métricas — largura TOTAL (debaixo do texto e da logo) ── */}
          <div
            style={{
              marginTop: "2.5rem",
              paddingTop: "1.75rem",
              borderTop: "1px solid rgba(255,255,255,0.12)",
              ...fadeStyle(300),
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "1rem",
              }}
              className="metrics-grid"
            >
              {[
                { val: "8",           label: "Resumos em PDF"   },
                { val: "100%",        label: "Foco banca IBAM"  },
                { val: "Vídeoaulas",  label: "Exclusivas"       },
                { val: "Questões",    label: "Inéditas"         },
              ].map((m) => (
                <div key={m.label} className="card-glass-on-brand text-center py-4 px-3">
                  <div
                    style={{
                      fontFamily: "var(--font-plus-jakarta)",
                      fontSize: "clamp(1.2rem, 3vw, 1.75rem)",
                      fontWeight: 800,
                      color: "#ffffff",
                      lineHeight: 1.1,
                      marginBottom: "5px",
                    }}
                  >
                    {m.val}
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "#ddd6fe", fontWeight: 600 }}>
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CSS inline para grid responsivo ── */}
      <style>{`
        @media (min-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr auto !important;
          }
          .hero-logo-col {
            order: 1;
          }
        }
        /* Mobile: logo aparece ACIMA do texto */
        @media (max-width: 767px) {
          .hero-logo-col {
            order: -1;
          }
          /* Métricas: 2 colunas no mobile */
          .metrics-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </>
  );
}
