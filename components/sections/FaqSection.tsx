"use client";

import { useState } from "react";
import { faqItems } from "@/lib/data";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useReveal } from "@/lib/hooks";

export default function FaqSection() {
  const { ref, visible } = useReveal(0.1);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      id="faq"
      ref={ref as React.Ref<HTMLElement>}
      className="bg-light"
      style={{ padding: "4.5rem 0" }}
    >
      <div className="container-site">
        {/* Header */}
        <div className={`text-center mb-10 reveal ${visible ? "is-visible" : ""}`}>
          <span className="section-eyebrow">Tire Suas Dúvidas</span>
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
            Perguntas <span style={{ color: "#5226b3" }}>Frequentes</span>
          </h2>
          <p style={{ color: "#4b5563", fontSize: "0.95rem", maxWidth: "460px", margin: "0 auto" }}>
            Respostas claras para as principais dúvidas sobre os resumos e o acesso ao material.
          </p>
          <div className="divider-brand mt-5" />
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3.5">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`card-white overflow-hidden reveal reveal-d${i + 1} ${
                  visible ? "is-visible" : ""
                }`}
                style={{
                  border: isOpen ? "1.5px solid #8b5cf6" : "1.5px solid #e5e7eb",
                  boxShadow: isOpen
                    ? "0 4px 20px rgba(139, 92, 246, 0.12)"
                    : "0 2px 8px rgba(0, 0, 0, 0.03)",
                  transition: "all 0.25s ease",
                  borderRadius: "14px",
                }}
              >
                <button
                  onClick={() => toggle(i)}
                  id={`faq-question-${i}`}
                  aria-controls={`faq-answer-${i}`}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 rounded-xl"
                  style={{
                    background: isOpen
                      ? "linear-gradient(90deg, #f5f3ff 0%, #ffffff 100%)"
                      : "#ffffff",
                    cursor: "pointer",
                    border: "none",
                  }}
                >
                  <span
                    className="flex items-center gap-3 font-bold"
                    style={{
                      fontFamily: "var(--font-plus-jakarta)",
                      fontSize: "0.98rem",
                      color: isOpen ? "#3d1a8f" : "#111827",
                      lineHeight: 1.4,
                    }}
                  >
                    <HelpCircle
                      size={20}
                      className="flex-shrink-0"
                      style={{ color: isOpen ? "#8b5cf6" : "#6b7280" }}
                      aria-hidden="true"
                    />
                    {item.question}
                  </span>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all"
                    style={{
                      background: isOpen ? "#ede9fe" : "#f3f4f6",
                    }}
                  >
                    <ChevronDown
                      size={18}
                      className="transition-transform duration-300"
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        color: isOpen ? "#5226b3" : "#6b7280",
                      }}
                      aria-hidden="true"
                    />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-labelledby={`faq-question-${i}`}
                    className="px-5 pb-5 pt-2 text-sm leading-relaxed border-t"
                    style={{
                      borderColor: "#ede9fe",
                      color: "#374151",
                      backgroundColor: "#ffffff",
                      fontSize: "0.92rem",
                    }}
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
