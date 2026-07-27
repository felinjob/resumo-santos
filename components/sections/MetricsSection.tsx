"use client";

import { metrics } from "@/lib/data";
import { FileText, Target, Layers, Download } from "lucide-react";
import { useReveal } from "@/lib/hooks";

const iconMap: Record<string, React.ReactNode> = {
  FileText: <FileText size={28} />,
  Target: <Target size={28} />,
  Layers: <Layers size={28} />,
  Download: <Download size={28} />,
};

export default function MetricsSection() {
  const { ref, visible } = useReveal(0.2);

  return (
    <section
      id="metricas"
      ref={ref as React.Ref<HTMLElement>}
      className="py-16 relative"
      style={{ background: "linear-gradient(180deg, #130c2a 0%, #1a0f3c 50%, #130c2a 100%)" }}
    >
      {/* Linha decorativa topo */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(124,58,237,0.5), transparent)",
        }}
      />

      <div className="container-site">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {metrics.map((metric, i) => (
            <div
              key={metric.label}
              className="glass rounded-2xl p-6 text-center hover-lift"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.6s ease ${i * 120}ms, transform 0.6s ease ${i * 120}ms`,
              }}
            >
              {/* Ícone */}
              <div
                className="flex items-center justify-center w-14 h-14 rounded-xl mx-auto mb-4"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(91,33,182,0.2))",
                  border: "1px solid rgba(167,139,250,0.2)",
                  color: "#a78bfa",
                }}
              >
                {iconMap[metric.iconName]}
              </div>

              {/* Valor */}
              <div
                className="font-extrabold mb-1"
                style={{
                  fontFamily: "var(--font-plus-jakarta)",
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  color:
                    metric.value === "100%" || metric.value === "8"
                      ? "#c4b5fd"
                      : "#a78bfa",
                }}
              >
                {metric.value}
              </div>

              {/* Label */}
              <p
                className="text-sm font-medium leading-tight"
                style={{ color: "#94a3b8" }}
              >
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Linha decorativa fundo */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(124,58,237,0.3), transparent)",
        }}
      />
    </section>
  );
}
