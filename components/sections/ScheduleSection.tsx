"use client";

import { scheduleItems, checkIsReleased, AMOSTRA_URL } from "@/lib/data";
import {
  CheckCircle2,
  Clock,
  Download,
  FileText,
  Video,
  Leaf,          // 01 — Licenciamento Ambiental
  Compass,       // 02 — Plano Diretor
  Landmark,      // 03 — Administração Pública
  Map,           // 04 — Uso e Ocupação (Continental)
  Users,         // 05 — Estatuto Funcionários Públicos
  HardHat,       // 06 — Código de Edificações
  Scale,         // 07 — Lei Orgânica
  Waves,         // 08 — Uso e Ocupação (Insular)
} from "lucide-react";
import { useReveal } from "@/lib/hooks";

/* ─── Ícone semântico por ID de resumo ───────────────────── */
const LAW_ICONS: Record<string, React.ReactNode> = {
  "01": <Leaf     size={22} color="rgba(255,255,255,0.95)" />,
  "02": <Compass  size={22} color="rgba(255,255,255,0.95)" />,
  "03": <Landmark size={22} color="rgba(255,255,255,0.95)" />,
  "04": <Map      size={22} color="rgba(255,255,255,0.95)" />,
  "05": <Users    size={22} color="rgba(255,255,255,0.95)" />,
  "06": <HardHat  size={22} color="rgba(255,255,255,0.95)" />,
  "07": <Scale    size={22} color="rgba(255,255,255,0.95)" />,
  "08": <Waves    size={22} color="rgba(255,255,255,0.95)" />,
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
        {id}
      </span>
    </div>
  );
}

/* ─── Badge de status inline ───────────────────── */
function StatusBadge({ status, date }: { status: "released" | "upcoming"; date: string }) {
  if (status === "released") {
    return (
      <span className="badge-green">
        <CheckCircle2 size={10} />
        🟢 Disponível
      </span>
    );
  }
  return (
    <span className="badge-yellow">
      <Clock size={10} />
      {date}
    </span>
  );
}

export default function ScheduleSection() {
  const { ref, visible } = useReveal(0.06);
  const releasedPdfs = scheduleItems.filter((i) => checkIsReleased(i.pdfDate, i.pdfStatus)).length;
  const total = scheduleItems.length;
  const pct = Math.round((releasedPdfs / total) * 100);

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
          <span className="section-eyebrow">Cronograma de liberação das aulas e resumos</span>
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
            <span style={{ color: "#5226b3" }}>liberação</span>
          </h2>
          <p style={{ color: "#4b5563", fontSize: "0.95rem", maxWidth: "520px", margin: "0 auto" }}>
            Acesse os resumos em PDF e as vídeoaulas de questões progressivamente na sua área de membros conforme o cronograma abaixo.
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
              {releasedPdfs}/{total} liberado{releasedPdfs !== 1 ? "s" : ""}
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

        {/* ── Legenda de colunas ── */}
        <div
          className={`reveal reveal-d2 ${visible ? "is-visible" : ""}`}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
            marginBottom: "1.25rem",
            flexWrap: "wrap",
          }}
        >
          <div className="flex items-center gap-2" style={{ fontSize: "0.78rem", color: "#5226b3", fontWeight: 700 }}>
            <FileText size={14} />
            <span>Resumo em PDF</span>
          </div>
          <div className="flex items-center gap-2" style={{ fontSize: "0.78rem", color: "#5226b3", fontWeight: 700 }}>
            <Video size={14} />
            <span>Vídeoaula / Questões</span>
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
            const isPdfReleased = checkIsReleased(item.pdfDate, item.pdfStatus);
            const isVideoReleased = checkIsReleased(item.videoDate, item.videoStatus);

            const effectivePdfStatus = isPdfReleased ? "released" : "upcoming";
            const effectiveVideoStatus = isVideoReleased ? "released" : "upcoming";

            return (
              <div
                key={item.id}
                className={`card-pdf${isPdfReleased ? " released" : ""} reveal reveal-d${Math.min(i + 1, 8)} ${visible ? "is-visible" : ""}`}
                style={{ padding: "1.1rem 1.2rem" }}
              >
                <div className="flex items-start gap-4">

                  {/* Thumbnail com ícone semântico */}
                  <PdfThumbnail id={item.id} released={isPdfReleased} />

                  {/* Conteúdo */}
                  <div style={{ flex: 1, minWidth: 0 }}>

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
                    <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#5226b3", marginBottom: "8px" }}>
                      {item.law}
                    </p>

                    {/* Status badges — PDF e Vídeo lado a lado */}
                    <div
                      className="flex items-center flex-wrap gap-2"
                      style={{ marginBottom: isPdfReleased ? "10px" : "0" }}
                    >
                      <div className="flex items-center gap-1.5">
                        <FileText size={12} style={{ color: "#5226b3" }} />
                        <StatusBadge status={effectivePdfStatus} date={item.pdfDate} />
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Video size={12} style={{ color: "#5226b3" }} />
                        <StatusBadge status={effectiveVideoStatus} date={item.videoDate} />
                      </div>
                    </div>

                    {/* Botão amostra — para o primeiro item do cronograma */}
                    {i === 0 && (
                      <a
                        href={AMOSTRA_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
                        aria-label="Baixe sua amostra em PDF da Lei Complementar 1.196/2023"
                        style={{ gap: "6px", marginTop: "8px" }}
                      >
                        <Download size={13} />
                        Baixe sua amostra
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
          * Datas de previsão sujeitas a alterações. As vídeoaulas de questões são liberadas no ciclo posterior à entrega dos PDFs.
        </p>
      </div>
    </section>
  );
}
