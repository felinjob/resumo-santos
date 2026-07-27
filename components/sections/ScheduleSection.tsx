"use client";

import { scheduleItems } from "@/lib/data";
import {
  CheckCircle2,
  Clock,
  Download,
  Leaf,          // 01 — Licenciamento Ambiental
  Map,           // 02 — Uso e Ocupação (Continental)
  Landmark,      // 03 — Administração Pública
  HardHat,       // 04 — Código de Edificações
  Users,         // 05 — Estatuto Funcionários Públicos
  Compass,       // 06 — Plano Diretor
  Scale,         // 07 — Lei Orgânica
  Waves,         // 08 — Uso e Ocupação (Insular)
} from "lucide-react";
import { useReveal } from "@/lib/hooks";

/* ─── Ícone semântico por ID de resumo ───────────────────── */
const LAW_ICONS: Record<string, React.ReactNode> = {
  "01": <Leaf   size={22} color="rgba(255,255,255,0.95)" />,
  "02": <Map    size={22} color="rgba(255,255,255,0.95)" />,
  "03": <Landmark size={22} color="rgba(255,255,255,0.95)" />,
  "04": <HardHat size={22} color="rgba(255,255,255,0.95)" />,
  "05": <Users  size={22} color="rgba(255,255,255,0.95)" />,
  "06": <Compass size={22} color="rgba(255,255,255,0.95)" />,
  "07": <Scale  size={22} color="rgba(255,255,255,0.95)" />,
  "08": <Waves  size={22} color="rgba(255,255,255,0.95)" />,
};

/* ─── Thumbnail visual com ícone semântico ───────────────── */
function PdfThumbnail({ id, released }: { id: string; released: boolean }) {
  return (
    <div
      style={{
        width: "58px",
        aspectRatio: "3/4",
        borderRadius: "10px",
        background: released
          ? "linear-gradient(145deg,#15803d 0%,#22c55e 100%)"
          : "linear-gradient(145deg,#3d1a8f 0%,#5226b3 55%,#6d35cc 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        position: "relative",
        overflow: "hidden",
        boxShadow: released
          ? "0 4px 12px rgba(22,163,74,0.35)"
          : "0 4px 12px rgba(82,38,179,0.35)",
      }}
    >
      {/* Brilho interno */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.2) 0%, transparent 65%)",
        }}
      />
      {/* Ícone semântico */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {LAW_ICONS[id]}
      </div>
      {/* Número */}
      <span
        style={{
          position: "relative",
          zIndex: 1,
          fontFamily: "var(--font-plus-jakarta)",
          fontSize: "0.58rem",
          fontWeight: 800,
          color: "rgba(255,255,255,0.7)",
          marginTop: "5px",
          letterSpacing: "0.04em",
        }}
      >
        PDF {id}
      </span>
    </div>
  );
}

export default function ScheduleSection() {
  const { ref, visible } = useReveal(0.06);
  const released = scheduleItems.filter((i) => i.status === "released").length;
  const total    = scheduleItems.length;
  const pct      = Math.round((released / total) * 100);

  return (
    <section
      id="cronograma"
      ref={ref as React.Ref<HTMLElement>}
      className="bg-light"
      style={{ padding: "4.5rem 0" }}
    >
      <div className="container-site">

        {/* ── Header ── */}
        <div className={`text-center mb-10 reveal ${visible ? "is-visible" : ""}`}>
          <span className="section-eyebrow">Calendário de Entregas</span>
          <h2
            style={{
              fontFamily: "var(--font-plus-jakarta)",
              fontSize: "clamp(1.65rem, 4vw, 2.5rem)",
              color: "#111827",
              marginTop: "1rem",
              marginBottom: "0.75rem",
              fontWeight: 800,
            }}
          >
            Cronograma de{" "}
            <span style={{ color: "#5226b3" }}>Liberação dos 8 PDFs</span>
          </h2>
          <p style={{ color: "#4b5563", fontSize: "0.95rem", maxWidth: "440px", margin: "0 auto" }}>
            Acesse os resumos progressivamente na sua área de membros conforme o cronograma abaixo.
          </p>
          <div className="divider-brand mt-5" />
        </div>

        {/* ── Barra de progresso ── */}
        <div
          className={`card-white reveal reveal-d1 ${visible ? "is-visible" : ""}`}
          style={{ maxWidth: "480px", margin: "0 auto 2rem", padding: "1.1rem 1.4rem" }}
        >
          <div className="flex items-center justify-between" style={{ marginBottom: "10px" }}>
            <span
              style={{
                fontSize: "0.82rem",
                fontWeight: 700,
                color: "#374151",
                fontFamily: "var(--font-plus-jakarta)",
              }}
            >
              Progresso de liberação
            </span>
            <span className="badge-green">
              <span className="dot-green" />
              {released}/{total} liberado{released !== 1 ? "s" : ""}
            </span>
          </div>
          <div style={{ height: "10px", borderRadius: "999px", background: "#e5e7eb", overflow: "hidden" }}>
            <div
              style={{
                width: visible ? `${pct}%` : "0%",
                height: "100%",
                borderRadius: "999px",
                background: "linear-gradient(90deg,#8b5cf6,#22c55e)",
                transition: "width 1.1s ease 0.5s",
              }}
            />
          </div>
        </div>

        {/* ══════════════════════════════════════════
            GRID 2 col desktop / 1 col mobile
            ══════════════════════════════════════════ */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 440px), 1fr))",
            gap: "1rem",
          }}
        >
          {scheduleItems.map((item, i) => {
            const isReleased = item.status === "released";

            return (
              <div
                key={item.id}
                className={`card-pdf${isReleased ? " released" : ""} reveal reveal-d${Math.min(i + 1, 8)} ${visible ? "is-visible" : ""}`}
                style={{ padding: "1.1rem 1.2rem" }}
              >
                <div className="flex items-start gap-4">

                  {/* Thumbnail com ícone semântico */}
                  <PdfThumbnail id={item.id} released={isReleased} />

                  {/* Conteúdo */}
                  <div style={{ flex: 1, minWidth: 0 }}>

                    {/* Badge + data */}
                    <div
                      className="flex items-center justify-between flex-wrap gap-2"
                      style={{ marginBottom: "6px" }}
                    >
                      {isReleased ? (
                        <span className="badge-green">
                          <CheckCircle2 size={10} />
                          🟢 LIBERADO
                        </span>
                      ) : (
                        <span className="badge-yellow">
                          <Clock size={10} />
                          🟡 EM BREVE · {item.date}
                        </span>
                      )}
                      {isReleased && (
                        <span style={{ fontSize: "0.7rem", color: "#6b7280", fontWeight: 600 }}>
                          Disponível desde {item.date}
                        </span>
                      )}
                    </div>

                    {/* Título */}
                    <h3
                      style={{
                        fontFamily: "var(--font-plus-jakarta)",
                        fontSize: "0.98rem",
                        fontWeight: 800,
                        color: "#111827",
                        lineHeight: 1.25,
                        marginBottom: "3px",
                      }}
                    >
                      {item.title}
                    </h3>

                    {/* Lei */}
                    <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#5226b3", marginBottom: "4px" }}>
                      {item.law}
                    </p>

                    {/* Ementa */}
                    <p
                      style={{
                        fontSize: "0.78rem",
                        color: "#6b7280",
                        lineHeight: 1.55,
                        marginBottom: isReleased ? "10px" : 0,
                      }}
                    >
                      {item.description}
                    </p>

                    {/* Botão amostra — apenas para LC 1.196/2023 */}
                    {isReleased && (
                      <a
                        href="/amostra-lc1196.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline-brand"
                        style={{ gap: "6px" }}
                      >
                        <Download size={13} />
                        Baixar Amostra Grátis
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p
          className={`text-center mt-7 reveal ${visible ? "is-visible" : ""}`}
          style={{ fontSize: "0.75rem", color: "#9ca3af" }}
        >
          * Datas de previsão sujeitas a alterações. Materiais liberados conforme produção.
        </p>
      </div>
    </section>
  );
}
