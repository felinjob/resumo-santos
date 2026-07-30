"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { ZoomIn, X } from "lucide-react";
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
            className={`grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8 reveal reveal-d1 ${
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
              PRINT DO THIAGO DARLAN (Sem box gigante / Sem textos transcritos)
              ══════════════════════════════════════════ */}
          <div
            className={`flex flex-col items-center justify-center text-center mb-8 reveal reveal-d2 ${
              visible ? "is-visible" : ""
            }`}
          >
            <div
              className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-md mb-3"
              style={{
                width: "100%",
                maxWidth: "320px",
                aspectRatio: "16/10",
                border: "1px solid rgba(229, 231, 235, 0.8)",
                background: "#111827",
              }}
              onClick={() => setIsLightboxOpen(true)}
              role="button"
              tabIndex={0}
              aria-label="Ver print de Thiago Darlan — 5º Lugar Geral"
              onKeyDown={(e) => { if (e.key === "Enter") setIsLightboxOpen(true); }}
            >
              <Image
                src="/depoimentos/thiago.jpeg"
                alt="Thiago Darlan — 5º Lugar Geral"
                fill
                sizes="320px"
                style={{ objectFit: "cover", objectPosition: "center top" }}
                className="transition-transform duration-300 group-hover:scale-105"
              />
              {/* Overlay zoom */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-lg">
                  <ZoomIn size={20} className="text-white" />
                </div>
              </div>
            </div>

            {/* Apenas o nome */}
            <p
              style={{
                fontFamily: "var(--font-plus-jakarta)",
                fontSize: "0.92rem",
                fontWeight: 800,
                color: "#111827",
              }}
            >
              Thiago Darlan — 5º Lugar Geral
            </p>
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
