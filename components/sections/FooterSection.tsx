"use client";

import Image from "next/image";
import { FORM_URL, EDITAL_URL, SUPPORT_EMAIL } from "@/lib/data";
import { ExternalLink, Mail } from "lucide-react";

export default function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#1e0a4a",
        padding: "3.5rem 0 clamp(6rem, 12vw, 2.5rem)",
        borderTop: "1px solid rgba(139,92,246,0.2)",
      }}
    >
      <div className="container-site">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <Image
                src="/logo.png"
                alt="Logo Resumos Santos 2026"
                width={32}
                height={32}
                className="w-8 h-8 rounded-lg object-contain"
              />
              <span
                className="text-sm font-bold text-white"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Resumos Santos 2026
              </span>
            </div>
            <p style={{ color: "#a78bfa", fontSize: "0.8rem", lineHeight: 1.65, marginBottom: "1rem" }}>
              Material didático especializado para o concurso da Prefeitura de Santos
              (Edital nº 74/2026 – SEPLA-RH).
            </p>
            {/* Suporte ao Aluno */}
            <div
              className="p-3 rounded-xl flex items-start gap-2.5"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <Mail size={16} className="mt-0.5 flex-shrink-0" style={{ color: "#c4b5fd" }} />
              <div>
                <p style={{ fontSize: "0.75rem", color: "#ddd6fe", fontWeight: 700 }}>
                  Suporte ao Aluno
                </p>
                <p style={{ fontSize: "0.72rem", color: "#a78bfa" }}>
                  Dúvidas sobre sua compra ou acesso? Entre em contato pelo e-mail:
                </p>
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="font-semibold underline hover:text-purple-200 transition-colors"
                  style={{ fontSize: "0.75rem", color: "#ffffff" }}
                >
                  {SUPPORT_EMAIL}
                </a>
              </div>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
              Navegação
            </h4>
            <ul className="space-y-1.5">
              {[
                ["#hero", "Início"],
                ["#diferenciais", "Diferenciais"],
                ["#cronograma", "Cronograma"],
                ["#autores", "Professores"],
                ["#depoimentos", "Depoimentos"],
                ["#garantia", "Comprar"],
                ["#faq", "Dúvidas (FAQ)"],
              ].map(([href, label]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-300 rounded"
                    style={{ color: "#a78bfa" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#ddd6fe")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#a78bfa")}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links externos */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
              Links Úteis
            </h4>
            <ul className="space-y-1.5">
              {[
                [EDITAL_URL, "Edital nº 74/2026"],
                [FORM_URL, "Formulário de Compra"],
              ].map(([href, label]) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-300 rounded"
                    style={{ color: "#a78bfa" }}
                    aria-label={`${label} (abre em nova aba)`}
                  >
                    {label}
                    <ExternalLink size={11} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
            <div
              className="mt-4 inline-block px-3 py-1 rounded-full text-xs font-semibold"
              style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.3)", color: "#c4b5fd" }}
            >
              Banca: IBAM
            </div>
          </div>
        </div>

        {/* Linha */}
        <div style={{ height: "1px", background: "rgba(139,92,246,0.2)", marginBottom: "1.5rem" }} />

        {/* Copyright */}
        <p className="text-center text-xs" style={{ color: "#8b5cf6" }}>
          © {year} Resumos Legislação Santos 2026 · Material para uso pessoal de estudo
        </p>
      </div>
    </footer>
  );
}
