"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { testimonials } from "@/lib/data";
import { ChevronDown, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { useReveal } from "@/lib/hooks";

export default function TestimonialsSection() {
  const { ref, visible } = useReveal(0.1);
  const [expanded, setExpanded] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  /* ── Touch gesture states for mobile swipe ── */
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const visibleItems = expanded ? testimonials.slice(1) : testimonials.slice(1, 4);
  const hasMore = testimonials.length > 4;

  /* ── Lightbox keyboard handler ── */
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
        id="depoimentos"
        ref={ref as React.Ref<HTMLElement>}
        className="bg-white-section"
        style={{ padding: "4.5rem 0" }}
      >
        <div className="container-site">
          {/* Header */}
          <div className={`text-center mb-10 reveal ${visible ? "is-visible" : ""}`}>
            <span className="section-eyebrow">Quem já usou aprova</span>
            <h2
              style={{
                fontFamily: "var(--font-plus-jakarta)",
                fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                color: "#111827",
                marginTop: "1rem",
                marginBottom: "0.75rem",
                fontWeight: 800,
              }}
            >
              Resultados de quem estudou{" "}
              <span style={{ color: "#5226b3" }}>conosco</span>
            </h2>
            <p style={{ color: "#4b5563", fontSize: "0.95rem", maxWidth: "460px", margin: "0 auto" }}>
              Depoimentos reais de alunos que utilizaram nossa metodologia em concursos de Arquitetura e Engenharia.
            </p>
            <div className="divider-brand mt-5" />
          </div>

          {/* ══════════════════════════════════════════
              GRID DE GALERIA — Imagens diretas (sem cards/texto)
              ══════════════════════════════════════════ */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
              gap: "1.25rem",
              maxWidth: "980px",
              margin: "0 auto",
              alignItems: "center",
            }}
          >
            {visibleItems.map((t, i) => (
              <div
                key={i}
                className={`rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 reveal reveal-d${Math.min(
                  i + 1,
                  8
                )} ${visible ? "is-visible" : ""}`}
                style={{
                  boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
                  border: "1px solid rgba(229, 231, 235, 0.8)",
                  background: "#ffffff",
                }}
                onClick={() => setLightboxIndex(testimonials.findIndex((item) => item.image === t.image))}
                role="button"
                tabIndex={0}
                aria-label={`Ver print do depoimento: ${t.headline}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter") setLightboxIndex(testimonials.findIndex((item) => item.image === t.image));
                }}
              >
                {/* Imagem do print direto */}
                <div style={{ position: "relative", width: "100%", aspectRatio: "16/10", background: "#111827" }}>
                  <Image
                    src={t.image}
                    alt={t.headline}
                    fill
                    sizes="(max-width: 640px) 100vw, 320px"
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Overlay de hover com botão de zoom */}
                  <div
                    className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center"
                  >
                    <div
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-11 h-11 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-lg"
                    >
                      <ZoomIn size={22} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Legenda com headline */}
                <div style={{ padding: "0.65rem 0.85rem" }}>
                  <p
                    style={{
                      fontSize: "0.78rem",
                      color: "#374151",
                      fontWeight: 600,
                      lineHeight: 1.4,
                      fontFamily: "var(--font-plus-jakarta)",
                    }}
                  >
                    &ldquo;{t.headline}&rdquo;
                  </p>
                  {t.authorName && (
                    <p
                      style={{
                        fontSize: "0.7rem",
                        color: "#5226b3",
                        fontWeight: 700,
                        marginTop: "3px",
                      }}
                    >
                      — {t.authorName}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* ── Botão "Ver mais depoimentos reais" (Sem contador) ── */}
          {!expanded && hasMore && (
            <div className="text-center" style={{ marginTop: "2.5rem" }}>
              <button
                onClick={() => setExpanded(true)}
                className="btn-outline-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
                style={{
                  padding: "0.85rem 1.75rem",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  gap: "8px",
                }}
              >
                Ver mais depoimentos reais
                <ChevronDown size={18} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          LIGHTBOX MODAL COM NAVEGAÇÃO EM GALERIA (TELA CHEIA)
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
          aria-label="Visualização de depoimento na galeria"
        >
          {/* INDICADOR DE POSIÇÃO (Topo Centro) */}
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

          {/* BOTÃO LATERAIS DE NAVEGAÇÃO: ANTERIOR (Oculto no 1º print) */}
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

          {/* BOTÃO LATERAIS DE NAVEGAÇÃO: PRÓXIMA (Oculto no último print) */}
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
              height={600}
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

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </>
  );
}
