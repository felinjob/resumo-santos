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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {authors.map((a, i) => (
            <div
              key={a.name}
              className={`card-white p-7 reveal reveal-d${i + 2} ${visible ? "is-visible" : ""}`}
            >
              {/* Foto real destacada (maior) + nome */}
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
                    sizes="128px"
                    style={{ objectFit: "cover", objectPosition: "center top" }}
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
