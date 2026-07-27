"use client";

import { testimonials } from "@/lib/data";
import { Quote, Star } from "lucide-react";
import { useReveal } from "@/lib/hooks";

export default function TestimonialsSection() {
  const { ref, visible } = useReveal(0.1);

  return (
    <section
      id="depoimentos"
      ref={ref as React.Ref<HTMLElement>}
      className="bg-white-section"
      style={{ padding: "4.5rem 0" }}
    >
      <div className="container-site">
        {/* Header */}
        <div className={`text-center mb-10 reveal ${visible ? "is-visible" : ""}`}>
          <span className="section-eyebrow">Quem Já Usou Aprova</span>
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
            Resultados de Quem Estudou <span style={{ color: "#5226b3" }}>conosco</span>
          </h2>
          <p style={{ color: "#4b5563", fontSize: "0.95rem", maxWidth: "460px", margin: "0 auto" }}>
            Veja a opinião de concurseiros que utilizaram nossa metodologia em concursos de Arquitetura e Engenharia.
          </p>
          <div className="divider-brand mt-5" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`card-brand p-6 relative flex flex-col justify-between reveal reveal-d${i + 1} ${
                visible ? "is-visible" : ""
              }`}
            >
              <div>
                {/* Estrelas + Quote icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <Quote size={24} style={{ color: "#ddd6fe" }} />
                </div>

                {/* Depoimento texto */}
                <p
                  style={{
                    color: "#374151",
                    fontSize: "0.92rem",
                    lineHeight: 1.65,
                    fontStyle: "italic",
                    marginBottom: "1.25rem",
                  }}
                >
                  "{t.text}"
                </p>
              </div>

              {/* Autor */}
              <div
                className="flex items-center justify-between pt-3 border-t"
                style={{ borderColor: "#ede9fe" }}
              >
                <div>
                  <h4
                    style={{
                      fontFamily: "var(--font-plus-jakarta)",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      color: "#111827",
                    }}
                  >
                    {t.name}
                  </h4>
                  <p style={{ fontSize: "0.75rem", color: "#6b7280" }}>{t.role}</p>
                </div>
                <span className="badge-green text-xs" style={{ padding: "3px 9px" }}>
                  {t.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
