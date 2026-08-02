"use client";

import Image from "next/image";
import { authors } from "@/lib/data";
import { useReveal } from "@/lib/hooks";

function InstagramIcon({ size = 13 }: { size?: number }) {
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
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ size = 13 }: { size?: number }) {
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
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function LattesIcon({ size = 13 }: { size?: number }) {
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
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

export default function AuthorsSection() {
  const { ref, visible } = useReveal(0.12);

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
              {/* Foto real destacada + nome */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 mb-5">
                <div
                  className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden flex-shrink-0"
                  style={{
                    border: "4px solid #8b5cf6",
                    boxShadow: "0 10px 28px rgba(139, 92, 246, 0.4)",
                    background: "linear-gradient(135deg, #5226b3, #3d1a8f)",
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
                  {(a.instagram || a.linkedin || a.lattes) && (
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-3">
                      {a.instagram && (
                        <a
                          href={a.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold text-pink-700 bg-pink-50 hover:bg-pink-100 transition-colors border border-pink-200/80"
                          aria-label={`Instagram de ${a.name}`}
                        >
                          <InstagramIcon size={13} />
                          <span>Instagram</span>
                        </a>
                      )}
                      {a.linkedin && (
                        <a
                          href={a.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 transition-colors border border-blue-200/80"
                          aria-label={`LinkedIn de ${a.name}`}
                        >
                          <LinkedinIcon size={13} />
                          <span>LinkedIn</span>
                        </a>
                      )}
                      {a.lattes && (
                        <a
                          href={a.lattes}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 transition-colors border border-emerald-200/80 shadow-xs"
                          aria-label={`Currículo Lattes CNPq de ${a.name}`}
                        >
                          <LattesIcon size={13} />
                          <span>Lattes CNPq</span>
                        </a>
                      )}
                    </div>
                  )}
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
    </section>
  );
}
