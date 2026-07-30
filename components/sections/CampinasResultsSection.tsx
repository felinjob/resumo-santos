"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { Trophy, ZoomIn, X, Quote, Award } from "lucide-react";
import { useReveal } from "@/lib/hooks";

export default function CampinasResultsSection() {
  const { ref, visible } = useReveal(0.12);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const closeLightbox = useCallback(() => setIsLightboxOpen(false), []);

  useEffect(() => {
    if (!isLightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [isLightboxOpen, closeLightbox]);

  return (
    <>
      <section
        id="resultados-campinas"
        ref={ref as React.Ref<HTMLElement>}
        className="bg-light"
        style={{ padding: "4.5rem 0" }}
      >
        <div className="container-site">
          {/* Header da Seção com Big Stat no topo */}
          <div
            className={`text-center mb-10 reveal ${visible ? "is-visible" : ""}`}
          >
            <span className="section-eyebrow">Resultados Comprovados · Edital 01/2025</span>

            {/* Big Stat no topo */}
            <h2
              style={{
                fontFamily: "var(--font-plus-jakarta)",
                fontSize: "clamp(2.2rem, 5.5vw, 3.6rem)",
                fontWeight: 800,
                color: "#3d1a8f",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                marginTop: "1rem",
                marginBottom: "0.75rem",
              }}
            >
              12 ALUNOS CLASSIFICADOS
            </h2>

            <p
              className="mx-auto"
              style={{ color: "#4b5563", maxWidth: "600px", fontSize: "1rem", lineHeight: 1.6 }}
            >
              Resultados reais conquistados por nossos alunos no último concurso de Arquiteto da Prefeitura de Campinas — incluindo <strong style={{ color: "#3d1a8f" }}>2 alunos entre os 10 primeiros lugares</strong>.
            </p>
            <div className="divider-brand mt-5" />
          </div>

          {/* ══════════════════════════════════════════
              CARDS DOS 2 PRIMEIROS TOP 10 (5º e 10º Lugar)
              ══════════════════════════════════════════ */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10 reveal reveal-d1 ${
              visible ? "is-visible" : ""
            }`}
          >
            {/* 5º Lugar */}
            <div
              className="p-5 rounded-2xl flex items-center gap-4"
              style={{
                background: "#ffffff",
                border: "2px solid #bbf7d0",
                boxShadow: "0 4px 16px rgba(34, 197, 94, 0.1)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-xl"
                style={{ background: "#dcfce7" }}
              >
                🏆
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-plus-jakarta)",
                    fontSize: "1rem",
                    fontWeight: 800,
                    color: "#111827",
                    lineHeight: 1.2,
                  }}
                >
                  5º Lugar Geral
                </p>
                <p style={{ fontSize: "0.82rem", color: "#16a34a", fontWeight: 700, marginTop: "3px" }}>
                  Aluno Convocado e Nomeado
                </p>
              </div>
            </div>

            {/* 10º Lugar */}
            <div
              className="p-5 rounded-2xl flex items-center gap-4"
              style={{
                background: "#ffffff",
                border: "2px solid #c4b5fd",
                boxShadow: "0 4px 16px rgba(139, 92, 246, 0.1)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-xl"
                style={{ background: "#ede9fe" }}
              >
                🎯
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-plus-jakarta)",
                    fontSize: "1rem",
                    fontWeight: 800,
                    color: "#111827",
                    lineHeight: 1.2,
                  }}
                >
                  10º Lugar Geral
                </p>
                <p style={{ fontSize: "0.82rem", color: "#6d35cc", fontWeight: 700, marginTop: "3px" }}>
                  Classificado no Top 10
                </p>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════
              SPOTLIGHT CARD — THIAGO DARLAN (5º LUGAR)
              ══════════════════════════════════════════ */}
          <div
            className={`card-white reveal reveal-d2 ${visible ? "is-visible" : ""}`}
            style={{
              maxWidth: "880px",
              margin: "0 auto 1.5rem",
              padding: "clamp(1.5rem, 4vw, 2.5rem)",
              background: "#ffffff",
              border: "2px solid #ede9fe",
              boxShadow: "0 8px 32px rgba(109, 53, 204, 0.08)",
              borderRadius: "24px",
            }}
          >
            {/* Badge superior */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold tracking-wide uppercase mb-5"
              style={{
                background: "#dcfce7",
                color: "#14532d",
                border: "1px solid #86efac",
                fontFamily: "var(--font-plus-jakarta)",
              }}
            >
              <Award size={14} className="text-emerald-600" />
              Depoimento em Destaque · 5º Colocado
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Lado Esquerdo: Print do WhatsApp proporcional (clicável para zoom) */}
              <div className="lg:col-span-5 flex justify-center">
                <div
                  className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-md"
                  style={{
                    width: "100%",
                    maxWidth: "260px",
                    aspectRatio: "4/5",
                    border: "2.5px solid #8b5cf6",
                    background: "#111827",
                  }}
                  onClick={() => setIsLightboxOpen(true)}
                  role="button"
                  tabIndex={0}
                  aria-label="Ver print do depoimento do Thiago Darlan em alta resolução"
                  onKeyDown={(e) => { if (e.key === "Enter") setIsLightboxOpen(true); }}
                >
                  <Image
                    src="/depoimentos/thiago.jpeg"
                    alt="Print do depoimento do Thiago Darlan — 5º Lugar Geral"
                    fill
                    sizes="260px"
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Overlay zoom */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-lg">
                      <ZoomIn size={20} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Lado Direito: Citação do Thiago */}
              <div className="lg:col-span-7 text-left">
                <div className="flex items-center gap-2 mb-2 text-purple-600">
                  <Quote size={22} style={{ color: "#8b5cf6" }} />
                  <span
                    style={{
                      fontFamily: "var(--font-plus-jakarta)",
                      fontSize: "0.82rem",
                      fontWeight: 800,
                      color: "#6d35cc",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Thiago Darlan — 5º Lugar Geral
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-plus-jakarta)",
                    fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)",
                    fontWeight: 800,
                    color: "#111827",
                    lineHeight: 1.3,
                    marginBottom: "0.85rem",
                  }}
                >
                  Arquiteto Aprovado e Nomeado na Prefeitura de Campinas
                </h3>

                <blockquote
                  style={{
                    color: "#374151",
                    fontSize: "0.9rem",
                    lineHeight: 1.65,
                    fontStyle: "italic",
                    borderLeft: "3px solid #8b5cf6",
                    paddingLeft: "0.9rem",
                  }}
                >
                  &ldquo;O material de estudo foi fundamental para minha aprovação na Prefeitura de Campinas. A organização do conteúdo, a objetividade na abordagem da legislação e a qualidade das vídeoaulas e apostilas tornaram a preparação muito mais fácil e eficiente. Isso sem falar dos exercícios e dicas direcionados para a banca, que também foram uma mão na roda. A clareza do Valdinei e da Raquel nas vídeoaulas também fez toda a diferença durante os estudos e contribuiu muito para o meu resultado. Valeu super a pena!&rdquo;
                </blockquote>
              </div>
            </div>
          </div>

          {/* Nota de privacidade LGPD */}
          <p
            className="text-center"
            style={{
              fontSize: "0.76rem",
              color: "#9ca3af",
              fontStyle: "italic",
            }}
          >
            * Nomes preservados em conformidade com a LGPD e privacidade dos alunos.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          LIGHTBOX MODAL PARA THIAGO DARLAN
          ══════════════════════════════════════════ */}
      {isLightboxOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.85)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            animation: "fadeIn 0.2s ease",
            padding: "1rem",
          }}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Depoimento de Thiago Darlan em alta resolução"
        >
          <button
            onClick={closeLightbox}
            aria-label="Fechar lightbox"
            style={{
              position: "absolute",
              top: "1.25rem",
              right: "1.25rem",
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.18)",
              border: "1px solid rgba(255,255,255,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 10,
            }}
          >
            <X size={22} style={{ color: "#ffffff" }} />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "90vw",
              maxHeight: "85vh",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
            }}
          >
            <Image
              src="/depoimentos/thiago.jpeg"
              alt="Thiago Darlan — 5º Lugar Geral"
              width={800}
              height={1000}
              style={{
                width: "auto",
                height: "auto",
                maxWidth: "90vw",
                maxHeight: "85vh",
                objectFit: "contain",
                borderRadius: "16px",
              }}
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
