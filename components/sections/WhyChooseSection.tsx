"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { benefits } from "@/lib/data";
import { UserCheck, Clock, Target, Trophy, ZoomIn, X, Quote } from "lucide-react";
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
              SPOTLIGHT THIAGO DARLAN (5º LUGAR GERAL)
              ══════════════════════════════════════════ */}
          <div
            className={`card-brand reveal reveal-d4 ${visible ? "is-visible" : ""} mb-10`}
            style={{
              maxWidth: "880px",
              margin: "0 auto 2.5rem",
              padding: "clamp(1.5rem, 4vw, 2.5rem)",
              background: "linear-gradient(145deg, #ffffff 0%, #f5f3ff 100%)",
              border: "2px solid #8b5cf6",
              boxShadow: "0 10px 36px rgba(139, 92, 246, 0.12)",
              borderRadius: "24px",
            }}
          >
            {/* Badge superior */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-extrabold tracking-wide uppercase mb-5"
              style={{
                background: "#dcfce7",
                color: "#14532d",
                border: "1px solid #86efac",
                fontFamily: "var(--font-plus-jakarta)",
              }}
            >
              <Trophy size={14} className="text-emerald-600" />
              🏆 5º LUGAR GERAL · CONVOCADO E NOMEADO
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Lado Esquerdo: Print do WhatsApp Clicável */}
              <div className="lg:col-span-5 flex justify-center">
                <div
                  className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-lg"
                  style={{
                    width: "100%",
                    maxWidth: "300px",
                    aspectRatio: "4/5",
                    border: "3px solid #8b5cf6",
                    background: "#111827",
                  }}
                  onClick={() => setIsLightboxOpen(true)}
                  role="button"
                  tabIndex={0}
                  aria-label="Ver print do depoimento de Thiago Darlan em alta resolução"
                  onKeyDown={(e) => { if (e.key === "Enter") setIsLightboxOpen(true); }}
                >
                  <Image
                    src="/depoimentos/thiago.jpeg"
                    alt="Print do depoimento do Thiago Darlan — 5º Lugar Geral"
                    fill
                    sizes="300px"
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Overlay zoom */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-11 h-11 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-lg">
                      <ZoomIn size={22} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Lado Direito: Citação e Nome */}
              <div className="lg:col-span-7 text-left">
                <div className="flex items-center gap-2 mb-3 text-purple-600">
                  <Quote size={24} style={{ color: "#8b5cf6" }} />
                  <span
                    style={{
                      fontFamily: "var(--font-plus-jakarta)",
                      fontSize: "0.85rem",
                      fontWeight: 800,
                      color: "#6d35cc",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Depoimento em Destaque
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-plus-jakarta)",
                    fontSize: "clamp(1.15rem, 3vw, 1.4rem)",
                    fontWeight: 800,
                    color: "#111827",
                    lineHeight: 1.25,
                    marginBottom: "1rem",
                  }}
                >
                  Thiago Darlan — Arquiteto Aprovado na Prefeitura de Campinas
                </h3>

                <blockquote
                  style={{
                    color: "#374151",
                    fontSize: "0.92rem",
                    lineHeight: 1.65,
                    fontStyle: "italic",
                    borderLeft: "3px solid #8b5cf6",
                    paddingLeft: "1rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  &ldquo;O material de estudo foi fundamental para minha aprovação na Prefeitura de Campinas. A organização do conteúdo, a objetividade na abordagem da legislação e a qualidade das vídeoaulas e apostilas tornaram a preparação muito mais fácil e eficiente. Isso sem falar dos exercícios e dicas direcionados para a banca, que também foram uma mão na roda. A clareza do Valdinei e da Raquel nas vídeoaulas também fez toda a diferença durante os estudos e contribuiu muito para o meu resultado. Valeu super a pena!&rdquo;
                </blockquote>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════
              MÉTRICAS COMPLEMENTARES (12 CLASSIFICADOS + TOP 10)
              ══════════════════════════════════════════ */}
          <div
            className={`card-brand reveal reveal-d5 ${visible ? "is-visible" : ""}`}
            style={{
              maxWidth: "840px",
              margin: "0 auto",
              padding: "clamp(1.75rem, 5vw, 2.5rem)",
              background: "#ffffff",
              border: "1.5px solid #e5e7eb",
              textAlign: "center",
            }}
          >
            {/* Big Stat */}
            <div
              style={{
                fontFamily: "var(--font-plus-jakarta)",
                fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
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
              className="mx-auto mb-6"
              style={{
                color: "#4b5563",
                fontSize: "0.92rem",
                maxWidth: "540px",
                lineHeight: 1.6,
                fontWeight: 500,
              }}
            >
              Resultados conquistados por nossos alunos no último concurso de Arquiteto da Prefeitura de Campinas.
            </p>

            {/* Highlights (5º e 10º lugar) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-5 text-left">
              {/* 5º Lugar */}
              <div
                className="p-4 rounded-xl flex items-center gap-3.5"
                style={{
                  background: "#f0fdf4",
                  border: "1.5px solid #bbf7d0",
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
                  background: "#f5f3ff",
                  border: "1.5px solid #c4b5fd",
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

            {/* Nota de privacidade LGPD */}
            <p
              style={{
                fontSize: "0.76rem",
                color: "#9ca3af",
                fontStyle: "italic",
              }}
            >
              * Nomes preservados em conformidade com a LGPD e privacidade dos alunos.
            </p>
          </div>
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
