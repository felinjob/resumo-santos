import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Resumos Legislação Santos 2026 | Gabarite a Prova da IBAM",
  description:
    "8 Resumos estratégicos em PDF para o concurso de Santos 2026 (Edital nº 74/2026 – SEPLA-RH). Tabelas comparativas, fluxogramas e foco 100% no perfil de cobrança da Banca IBAM. Elaborado por servidores públicos aprovados.",
  keywords: [
    "concurso Santos 2026",
    "SEPLA-RH Santos",
    "IBAM concurso",
    "legislação Santos",
    "resumos arquitetura concurso",
    "edital 74/2026",
  ],
  openGraph: {
    title: "Resumos Legislação Santos 2026 | Gabarite a Prova da IBAM",
    description:
      "8 PDFs estratégicos com tabelas, fluxogramas e foco 100% no estilo IBAM. Elaborado por servidores aprovados.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
