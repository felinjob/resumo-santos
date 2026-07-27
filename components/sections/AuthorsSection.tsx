"use client";

import { authors } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";
import { useReveal } from "@/lib/hooks";

const avatarStyles = [
  { bg: "linear-gradient(135deg,#8b5cf6,#5226b3)", shadow: "0 8px 20px rgba(139,92,246,0.35)" },
  { bg: "linear-gradient(135deg,#6d35cc,#3d1a8f)", shadow: "0 8px 20px rgba(109,53,204,0.35)" },
];

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
          <span className="section-eyebrow-on-dark">Quem preparou o material</span>
          <h2
            className="mt-4 mb-3 text-white"
            style={{
              fontFamily: "var(--font-plus-jakarta)",
              fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
            }}
          >
            Experiência Real.{" "}
            <span className="text-gradient">Resultado Comprovado.</span>
          </h2>
          <p style={{ color: "#c4b5fd", fontSize: "0.95rem", maxWidth: "420px", margin: "0 auto" }}>
            Elaborado por profissionais que vivem a legislação na prática do serviço público.
          </p>
          <div
            className="divider-brand mt-5"
            style={{ margin: "20px auto 0" }}
          />
        </div>

        {/* Cards de autores */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {authors.map((a, i) => (
            <div
              key={a.name}
              className={`card-white p-7 reveal reveal-d${i + 1} ${visible ? "is-visible" : ""}`}
            >
              {/* Avatar + nome */}
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-extrabold text-lg flex-shrink-0"
                  style={{
                    fontFamily: "var(--font-plus-jakarta)",
                    background: avatarStyles[i].bg,
                    boxShadow: avatarStyles[i].shadow,
                  }}
                >
                  {a.initials}
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

              {/* Credenciais */}
              <ul className="space-y-2.5">
                {a.credentials.map((c, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={15}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: "#8b5cf6" }}
                    />
                    <span style={{ fontSize: "0.85rem", color: "#4b5563", lineHeight: 1.5 }}>
                      {c}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
