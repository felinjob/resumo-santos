"use client";

import { useState } from "react";
import Image from "next/image";
import { authors, Author } from "@/lib/data";
import { useReveal } from "@/lib/hooks";
import { ZoomIn, X } from "lucide-react";

function InstagramIcon({ size = 15, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ size = 15, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

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
                      <InstagramIcon size={15} />
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
                      <LinkedinIcon size={15} />
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
          LIGHTBOX PORTRAIT DO PROFESSOR (DESTAQUE FOTOGRÁFICO)
          ══════════════════════════════════════════ */}
      {selectedAuthor && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn select-none"
          onClick={() => setSelectedAuthor(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-sm sm:max-w-md bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-purple-500/30 text-left flex flex-col"
            onClick={(e) => e.stopPropagation()}
            style={{ maxHeight: "88vh" }}
          >
            {/* Fechar botão */}
            <button
              onClick={() => setSelectedAuthor(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all hover:scale-105"
              aria-label="Fechar foto do professor"
            >
              <X size={18} />
            </button>

            {/* Foto Ampliada em Alta Qualidade / Retrato */}
            <div
              className="relative w-full aspect-[4/5] bg-gray-950 flex items-center justify-center overflow-hidden"
            >
              <Image
                src={selectedAuthor.image}
                alt={selectedAuthor.name}
                fill
                unoptimized
                priority
                style={{
                  objectFit: "cover",
                  objectPosition: selectedAuthor.name.includes("Raquel") ? "center 15%" : "center top",
                }}
              />

              {/* Sombra de gradiente inferior para legibilidade da legenda */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />

              {/* Legenda Glassmorphism sobreposta na base da foto */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 backdrop-blur-md bg-gray-950/60 border-t border-white/10 flex flex-col gap-2">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3
                      className="text-white font-extrabold text-lg sm:text-xl tracking-tight"
                      style={{ fontFamily: "var(--font-plus-jakarta)" }}
                    >
                      {selectedAuthor.name}
                    </h3>
                    <span className="text-[0.68rem] font-extrabold px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30 uppercase tracking-wider">
                      Professor(a)
                    </span>
                  </div>

                  <p className="text-xs font-bold text-purple-300 leading-snug">
                    {selectedAuthor.role}
                  </p>
                  <p className="text-[0.75rem] text-gray-400 mt-0.5 font-medium">
                    {selectedAuthor.organization}
                  </p>
                </div>

                {/* Botões sociais no próprio overlay da foto */}
                <div className="flex items-center gap-2.5 mt-2 pt-2 border-t border-white/10">
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-extrabold shadow-lg transition-all active:scale-95"
                  >
                    <InstagramIcon size={14} />
                    <span>Instagram</span>
                  </a>

                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-extrabold shadow-lg transition-all active:scale-95"
                  >
                    <LinkedinIcon size={14} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
