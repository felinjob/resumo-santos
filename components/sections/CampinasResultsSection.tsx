"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { testimonials, CHECKOUT_CURSO_URL } from "@/lib/data";
import { ZoomIn, X, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useReveal } from "@/lib/hooks";

export default function CampinasResultsSection() {
  const { ref, visible } = useReveal(0.12);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  /* ── Touch gesture states for mobile swipe ── */
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight" && lightboxIndex < testimonials.length - 1) {
        setLightboxIndex(lightboxIndex + 1);
      }
      if (e.key === "ArrowLeft" && lightboxIndex > 0) {
        setLightboxIndex(lightboxIndex - 1);
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightboxIndex, closeLightbox]);

  /* ── Touch swipe navigation logic ── */
  const minSwipeDistance = 40;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && lightboxIndex !== null && lightboxIndex < testimonials.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    }
    if (isRightSwipe && lightboxIndex !== null && lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    }
  };

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
              Resultados reais conquistados por nossos alunos no último concurso de Arquiteto da Prefeitura de Campinas (2025) — incluindo <strong style={{ color: "#3d1a8f" }}>5 alunos no Top 10 Geral</strong> e <strong style={{ color: "#3d1a8f" }}>4 alunos nomeados até agora</strong>.
            </p>
            <div className="divider-brand mt-5" />
          </div>

          {/* ══════════════════════════════════════════
              CARDS DOS DESTAQUES / BADGES DE CAMPINAS (3 DESTAQUES)
              ══════════════════════════════════════════ */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8 reveal reveal-d1 ${
              visible ? "is-visible" : ""
            }`}
          >
            {/* Destaque 1 */}
            <div
              className="p-5 rounded-2xl flex items-center gap-3.5"
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
                    fontSize: "0.98rem",
                    fontWeight: 800,
                    color: "#111827",
                    lineHeight: 1.2,
                  }}
                >
                  5 Alunos no Top 10 Geral
                </p>
                <p style={{ fontSize: "0.8rem", color: "#16a34a", fontWeight: 600, marginTop: "3px", lineHeight: 1.4 }}>
                  5 dos 10 primeiros colocados estudaram com a nossa metodologia
                </p>
              </div>
            </div>

            {/* Destaque 2 */}
            <div
              className="p-5 rounded-2xl flex items-center gap-3.5"
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
                🏛️
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-plus-jakarta)",
                    fontSize: "0.98rem",
                    fontWeight: 800,
                    color: "#111827",
                    lineHeight: 1.2,
                  }}
                >
                  4 Alunos Nomeados Até Agora
                </p>
                <p style={{ fontSize: "0.8rem", color: "#6d35cc", fontWeight: 600, marginTop: "3px", lineHeight: 1.4 }}>
                  4 convocados oficialmente no Diário Oficial
                </p>
              </div>
            </div>

            {/* Destaque 3 */}
            <div
              className="p-5 rounded-2xl flex items-center gap-3.5"
              style={{
                background: "#ffffff",
                border: "2px solid #93c5fd",
                boxShadow: "0 4px 16px rgba(59, 130, 246, 0.1)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-xl"
                style={{ background: "#dbeafe" }}
              >
                📊
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-plus-jakarta)",
                    fontSize: "0.98rem",
                    fontWeight: 800,
                    color: "#111827",
                    lineHeight: 1.2,
                  }}
                >
                  12 Alunos Classificados no Total
                </p>
                <p style={{ fontSize: "0.8rem", color: "#2563eb", fontWeight: 600, marginTop: "3px", lineHeight: 1.4 }}>
                  Desempenho comprovado em concurso público
                </p>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════
              PRINT DE THIAGO DARLAN (Tamanho normal, sem box, conectado à galeria)
              ══════════════════════════════════════════ */}
          <div
            className={`flex flex-col items-center justify-center text-center reveal reveal-d2 ${
              visible ? "is-visible" : ""
            }`}
          >
            {/* Foto em tamanho normal, totalmente visível sem cortes */}
            <div
              className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-md mb-3"
              style={{
                width: "100%",
                maxWidth: "320px",
                border: "1px solid rgba(229, 231, 235, 0.8)",
                background: "#111827",
              }}
              onClick={() => setLightboxIndex(0)}
              role="button"
              tabIndex={0}
              aria-label="Ver print de Thiago Darlan Silva Fonseca — 5º Lugar Geral"
              onKeyDown={(e) => { if (e.key === "Enter") setLightboxIndex(0); }}
            >
              <Image
                src="/depoimentos/thiago.jpeg"
                alt="Thiago Darlan Silva Fonseca — 5º Lugar Geral"
                width={320}
                height={480}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  objectFit: "contain",
                }}
                priority
                className="transition-transform duration-300 group-hover:scale-[1.02]"
              />
              {/* Overlay zoom */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-lg">
                  <ZoomIn size={20} className="text-white" />
                </div>
              </div>
            </div>

            {/* Nome completo e posição em fonte Plus Jakarta Sans sem emoji */}
            <p
              style={{
                fontFamily: "var(--font-plus-jakarta)",
                fontSize: "0.96rem",
                fontWeight: 800,
                color: "#111827",
                marginBottom: "2px",
              }}
            >
              Thiago Darlan Silva Fonseca
            </p>
            <p
              style={{
                fontFamily: "var(--font-plus-jakarta)",
                fontSize: "0.84rem",
                fontWeight: 700,
                color: "#5226b3",
                letterSpacing: "0.01em",
              }}
            >
              5º Lugar Geral — Prefeitura de Campinas
            </p>

            {/* Frase-ponte Campinas → Santos */}
            <p
              style={{
                fontSize: "0.84rem",
                color: "#6b7280",
                marginTop: "1.5rem",
                maxWidth: "520px",
                lineHeight: 1.6,
                fontStyle: "italic",
              }}
            >
              Campinas também cobrou legislação municipal.{" "}
              <strong style={{ color: "#3d1a8f", fontStyle: "normal" }}>
                Mesma metodologia, agora adaptada para Santos (Banca IBAM).
              </strong>
            </p>

            {/* CTA intermediário */}
            <a
              href={CHECKOUT_CURSO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
              style={{
                marginTop: "1.25rem",
                padding: "0.75rem 1.5rem",
                fontSize: "0.88rem",
                gap: "8px",
              }}
              aria-label="Quero esses resultados para Santos"
            >
              Quero esses resultados para Santos
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          LIGHTBOX MODAL CONECTADO À GALERIA COMPLETA
          ══════════════════════════════════════════ */}
      {lightboxIndex !== null && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.88)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            animation: "fadeIn 0.2s ease",
            padding: "1rem",
            userSelect: "none",
          }}
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          role="dialog"
          aria-modal="true"
          aria-label="Visualização do depoimento na galeria"
        >
          {/* INDICADOR DE POSIÇÃO */}
          <div
            style={{
              position: "absolute",
              top: "1.25rem",
              left: "50%",
              transform: "translateX(-50%)",
              background: "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "#ffffff",
              padding: "6px 16px",
              borderRadius: "999px",
              fontSize: "0.82rem",
              fontWeight: 600,
              letterSpacing: "0.03em",
              zIndex: 10,
              pointerEvents: "none",
              fontFamily: "var(--font-plus-jakarta)",
            }}
          >
            Print {lightboxIndex + 1} de {testimonials.length}
          </div>

          {/* Botão fechar (X) */}
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
              zIndex: 20,
              transition: "background 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.35)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.18)")}
          >
            <X size={22} style={{ color: "#ffffff" }} />
          </button>

          {/* BOTÃO LATERAIS DE NAVEGAÇÃO: ANTERIOR */}
          {lightboxIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(lightboxIndex - 1);
              }}
              aria-label="Imagem anterior"
              style={{
                position: "absolute",
                left: "1rem",
                top: "50%",
                transform: "translateY(-50%)",
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "rgba(0, 0, 0, 0.4)",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 20,
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0, 0, 0, 0.7)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0, 0, 0, 0.4)")}
            >
              <ChevronLeft size={28} />
            </button>
          )}

          {/* BOTÃO LATERAIS DE NAVEGAÇÃO: PRÓXIMA */}
          {lightboxIndex < testimonials.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(lightboxIndex + 1);
              }}
              aria-label="Próxima imagem"
              style={{
                position: "absolute",
                right: "1rem",
                top: "50%",
                transform: "translateY(-50%)",
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "rgba(0, 0, 0, 0.4)",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 20,
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0, 0, 0, 0.7)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0, 0, 0, 0.4)")}
            >
              <ChevronRight size={28} />
            </button>
          )}

          {/* Imagem do print em alta resolução */}
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
              key={lightboxIndex}
              src={testimonials[lightboxIndex].image}
              alt={testimonials[lightboxIndex].headline}
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
