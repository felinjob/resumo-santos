"use client";

import { useState } from "react";
import Image from "next/image";
import { authors, Author } from "@/lib/data";
import { useReveal } from "@/lib/hooks";
import { ZoomIn, X, Instagram, Linkedin } from "lucide-react";

export default function AuthorsSection() {
  const { ref, visible } = useReveal(0.12);
  const [selectedAuthor, setSelectedAuthor] = useState<Author | null>(null);

  return (
    <section
      id="autores"
      ref={ref as React.Ref<HTMLElement>}
      className="bg-brand-solid"
      style={{ padding: "4.5rem 0" }}
    >
      <div className="container-site">
        {/* Header */}
        <div className={`text-center mb-10 reveal ${visible ? "is-visible" : ""}`}>
          <span className="section-eyebrow-on-dark">Quem serão seus professores</span>
          <h2
            className="mt-4 mb-3 text-white"
            style={{
              fontFamily: "var(--font-plus-jakarta)",
              fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
            }}
          >
            Experiência real.{" "}
            <span className="text-gradient">Resultado comprovado.</span>
          </h2>
          <p style={{ color: "#c4b5fd", fontSize: "0.95rem", maxWidth: "420px", margin: "0 auto" }}>
            Elaborado por profissionais que vivem a legislação na prática do serviço público.
          </p>
          <div
            className="divider-brand mt-5"
            style={{ margin: "20px auto 0" }}
          />
        </div>

        {/* Cards de professores */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {authors.map((a, i) => (
            <div
              key={a.name}
              className={`card-white p-7 reveal reveal-d${i + 2} ${visible ? "is-visible" : ""}`}
            >
              {/* Foto real destacada (Clicável) + nome */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 mb-5">
                <div
                  className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden flex-shrink-0 cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-purple-500/40"
                  style={{
                    border: "4px solid #8b5cf6",
                    boxShadow: "0 10px 28px rgba(139, 92, 246, 0.4)",
                    background: "linear-gradient(135deg, #5226b3, #3d1a8f)",
                  }}
                  onClick={() => setSelectedAuthor(a)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Ver foto ampliada e perfil de ${a.name}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") setSelectedAuthor(a);
                  }}
                >
                  <Image
                    src={a.image}
                    alt={`Foto de ${a.name}`}
                    fill
                    unoptimized
                    style={{
                      objectFit: "cover",
                      objectPosition: a.name.includes("Raquel") ? "center 15%" : "center top",
                      filter: "contrast(1.05) brightness(1.02)",
                    }}
                  />
                  {/* Hover Overlay com ícone de Zoom */}
                  <div className="absolute inset-0 bg-purple-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="w-10 h-10 rounded-full bg-white/25 border border-white/40 flex items-center justify-center shadow-lg">
                      <ZoomIn size={20} className="text-white" />
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <h3
                    className="mb-1"
                    style={{
                      fontFamily: "var(--font-plus-jakarta)",
                      fontSize: "1.2rem",
                      fontWeight: 800,
                      color: "#111827",
                    }}
                  >
                    {a.name}
                  </h3>
                  <p style={{ fontSize: "0.82rem", color: "#6d35cc", fontWeight: 700, lineHeight: 1.35 }}>
                    {a.role}
                  </p>
                  <p style={{ fontSize: "0.78rem", color: "#9ca3af", marginTop: "4px" }}>
                    {a.organization}
                  </p>

                  {/* Redes Sociais Placeholders */}
                  <div className="flex items-center justify-center sm:justify-start gap-2.5 mt-3">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedAuthor(a);
                      }}
                      className="w-8 h-8 rounded-lg bg-purple-50 hover:bg-purple-100 text-purple-700 flex items-center justify-center transition-colors border border-purple-200/60"
                      title="Instagram"
                      aria-label="Instagram do professor"
                    >
                      <Instagram size={15} />
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedAuthor(a);
                      }}
                      className="w-8 h-8 rounded-lg bg-purple-50 hover:bg-purple-100 text-purple-700 flex items-center justify-center transition-colors border border-purple-200/60"
                      title="LinkedIn"
                      aria-label="LinkedIn do professor"
                    >
                      <Linkedin size={15} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: "1px", background: "#f3f4f6", marginBottom: "16px" }} />

              {/* Biografia completa */}
              <p
                style={{
                  fontSize: "0.86rem",
                  color: "#4b5563",
                  lineHeight: 1.65,
                  textAlign: "justify",
                }}
              >
                {a.bio}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          MINI CARD MODAL / LIGHTBOX DO PROFESSOR
          ══════════════════════════════════════════ */}
      {selectedAuthor && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedAuthor(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-2xl overflow-hidden border border-purple-100 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top accent bar */}
            <div
              className="absolute top-0 left-0 right-0 h-2.5"
              style={{ background: "linear-gradient(90deg, #8b5cf6, #5226b3)" }}
            />

            {/* Fechar botão */}
            <button
              onClick={() => setSelectedAuthor(null)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Fechar card do professor"
            >
              <X size={20} />
            </button>

            {/* Foto Ampliada */}
            <div
              className="relative w-36 h-36 mx-auto mb-4 rounded-2xl overflow-hidden shadow-xl"
              style={{
                border: "4px solid #8b5cf6",
                boxShadow: "0 12px 30px rgba(139, 92, 246, 0.35)",
                background: "linear-gradient(135deg, #5226b3, #3d1a8f)",
              }}
            >
              <Image
                src={selectedAuthor.image}
                alt={selectedAuthor.name}
                fill
                unoptimized
                style={{
                  objectFit: "cover",
                  objectPosition: selectedAuthor.name.includes("Raquel") ? "center 15%" : "center top",
                }}
              />
            </div>

            {/* Nome e Cargo */}
            <h3
              style={{
                fontFamily: "var(--font-plus-jakarta)",
                fontSize: "1.35rem",
                fontWeight: 800,
                color: "#111827",
                marginBottom: "4px",
              }}
            >
              {selectedAuthor.name}
            </h3>

            <p style={{ fontSize: "0.85rem", color: "#6d35cc", fontWeight: 700, lineHeight: 1.4 }}>
              {selectedAuthor.role}
            </p>

            <p style={{ fontSize: "0.78rem", color: "#6b7280", marginTop: "2px", marginBottom: "1rem" }}>
              {selectedAuthor.organization}
            </p>

            {/* Redes sociais com ícones */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold shadow-md hover:opacity-90 transition-opacity"
              >
                <Instagram size={14} />
                <span>Instagram</span>
              </a>

              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-blue-600 text-white text-xs font-bold shadow-md hover:bg-blue-700 transition-colors"
              >
                <Linkedin size={14} />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Resumo da Bio */}
            <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100 text-left">
              <p style={{ fontSize: "0.82rem", color: "#374151", lineHeight: 1.6 }}>
                {selectedAuthor.bio}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
