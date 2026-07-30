"use client";

import Image from "next/image";
import { authors } from "@/lib/data";
import { useReveal } from "@/lib/hooks";

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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {authors.map((a, i) => (
            <div
              key={a.name}
              className={`card-white p-7 reveal reveal-d${i + 2} ${visible ? "is-visible" : ""}`}
            >
              {/* Foto real + nome */}
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden flex-shrink-0"
                  style={{
                    border: "3px solid #8b5cf6",
                    boxShadow: "0 8px 24px rgba(139, 92, 246, 0.35)",
                    background: "linear-gradient(135deg, #5226b3, #3d1a8f)",
                  }}
                >
                  <Image
                    src={a.image}
                    alt={`Foto de ${a.name}`}
                    fill
                    sizes="96px"
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                  />
                </div>
                <div>
                  <h3
                    className="mb-0.5"
                    style={{ fontFamily: "var(--font-plus-jakarta)", fontSize: "1.1rem", color: "#111827" }}
                  >
                    {a.name}
                  </h3>
                  <p style={{ fontSize: "0.78rem", color: "#6d35cc", fontWeight: 600 }}>{a.role}</p>
                  <p style={{ fontSize: "0.75rem", color: "#9ca3af", marginTop: "2px" }}>{a.organization}</p>
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: "1px", background: "#f3f4f6", marginBottom: "16px" }} />

              {/* Biografia completa */}
              <p
                style={{
                  fontSize: "0.85rem",
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
