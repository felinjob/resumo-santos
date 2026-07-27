// lib/data.ts — dados estáticos da landing page Santos 2026

export const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd-qQi14c5zF6aKfdsjREhU3i19z7KZq_tcLNztzQccHRFi6Q/viewform?usp=preview";

export const EDITAL_URL = "https://www.ibamsp-concursos.org.br/informacoes/179/";

export interface ScheduleItem {
  id: string;
  law: string;
  title: string;
  description: string;
  date: string;
  month: string;
  status: "released" | "in-progress";
}

export interface Author {
  name: string;
  role: string;
  organization: string;
  credentials: string[];
  initials: string;
}

export interface Benefit {
  iconName: string;
  title: string;
  description: string;
}

export interface Metric {
  value: string;
  label: string;
  iconName: string;
  suffix?: string;
}

export const scheduleItems: ScheduleItem[] = [
  {
    id: "01",
    law: "LC nº 1.196/2023",
    title: "Licenciamento Ambiental Municipal",
    description: "Licenciamento Ambiental Municipal + Dec. 10.070/23",
    date: "31/08",
    month: "AGO",
    status: "released",
  },
  {
    id: "02",
    law: "LC nº 1.314/2025",
    title: "Uso e Ocupação do Solo",
    description: "Uso e Ocupação do Solo – Área Continental",
    date: "12/09",
    month: "SET",
    status: "in-progress",
  },
  {
    id: "03",
    law: "LC nº 1.253/2024",
    title: "Organização da Administração",
    description: "Organização da Administração Direta e Indireta",
    date: "19/09",
    month: "SET",
    status: "in-progress",
  },
  {
    id: "04",
    law: "LC nº 1.025/2019",
    title: "Código de Edificações de Santos",
    description: "Código de Edificações de Santos",
    date: "26/09",
    month: "SET",
    status: "in-progress",
  },
  {
    id: "05",
    law: "Lei nº 4.623/1984",
    title: "Estatuto dos Funcionários Públicos",
    description: "Estatuto dos Funcionários Públicos de Santos",
    date: "02/10",
    month: "OUT",
    status: "in-progress",
  },
  {
    id: "06",
    law: "LC nº 1.181/2022",
    title: "Plano Diretor de Santos",
    description: "Plano Diretor de Desenvolvimento e Expansão Urbana",
    date: "09/10",
    month: "OUT",
    status: "in-progress",
  },
  {
    id: "07",
    law: "Lei Orgânica nº 1/1990",
    title: "Lei Orgânica do Município",
    description: "Lei Orgânica do Município de Santos",
    date: "16/10",
    month: "OUT",
    status: "in-progress",
  },
  {
    id: "08",
    law: "LC nº 1.187/2022",
    title: "Uso e Ocupação — Insular",
    description: "Uso e Ocupação do Solo – Área Insular",
    date: "23/10",
    month: "OUT",
    status: "in-progress",
  },
];

export const authors: Author[] = [
  {
    name: "Raquel Morais",
    role: "Analista Judiciária – Apoio Especializado Arquitetura",
    organization: "TRF 3ª Região / SP",
    credentials: [
      "Arquiteta e Urbanista (UFRJ)",
      "Especialista em Políticas Públicas de Infraestrutura (ENAP)",
      "Aprovada em 3 concursos da Vunesp",
      "Avaliações imobiliárias (IPTU) — Sec. de Finanças de Campinas",
      "Fiscal de contratos de obras e engenharia",
    ],
    initials: "RM",
  },
  {
    name: "Valdinei Castro",
    role: "Arquiteto",
    organization: "Prefeitura de Campinas — Sec. de Habitação",
    credentials: [
      "Arquiteto e Urbanista (UEM)",
      "Especialista em Mobilidade e Cidade Contemporânea (Escola da Cidade)",
      "Mestre em Arquitetura e Urbanismo (UFSC)",
      "Projetos urbanísticos de Regularização Fundiária (REURB-S)",
    ],
    initials: "VC",
  },
];

export const benefits: Benefit[] = [
  {
    iconName: "Zap",
    title: "Chega de Perder Horas no Texto Bruto da Lei",
    description:
      "Transformamos artigos longos e burocráticos em esquemas visuais diretos. Você estuda o que realmente cai na prova da IBAM — sem enrolação.",
  },
  {
    iconName: "LayoutGrid",
    title: "Visual Thinking & Tabelas de Prazos",
    description:
      "Prazos de licenciamento, faixas envoltórias de vegetação, taxas e parâmetros urbanísticos organizados em tabelas comparativas para memorização rápida.",
  },
  {
    iconName: "Building2",
    title: "Mapeamento Prático do Exercício Profissional",
    description:
      "Feito por quem conhece o dia a dia da fiscalização, aprovação de projetos e legislação urbana no serviço público. Experiência real, não teoria vaga.",
  },
];

export const metrics: Metric[] = [
  { value: "8", label: "Resumos Estratégicos", iconName: "FileText" },
  { value: "100%", label: "Foco na Banca IBAM", iconName: "Target" },
  { value: "Visual", label: "Tabelas & Esquemas", iconName: "Layers" },
  { value: "Imediato", label: "Acesso & Atualizações", iconName: "Download" },
];

export const guarantees = [
  {
    icon: "💳",
    title: "Pagamento Seguro",
    description: "PIX ou Cartão de Crédito",
  },
  {
    icon: "📥",
    title: "Download Imediato",
    description: "Das leis já disponíveis",
  },
  {
    icon: "🔒",
    title: "Garantia de Atualização",
    description: "Conforme retificações do edital",
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  badge: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "Como e quando recebo os resumos?",
    answer:
      "O acesso é imediato após a compra. Você receberá os PDFs liberados e os próximos conforme nosso cronograma de entregas até a prova.",
  },
  {
    question: "Os resumos cobrem todo o conteúdo de legislação?",
    answer:
      "Sim, mapeamos as 8 principais legislações exigidas para os cargos no Edital nº 74/2026 da Prefeitura de Santos (Banca IBAM).",
  },
  {
    question: "Posso baixar e imprimir os PDFs?",
    answer:
      "Com certeza. Os arquivos são 100% liberados para download e formatados para leitura digital ou impressão A4.",
  },
  {
    question: "E se houver alterações no edital?",
    answer:
      "O material conta com garantia de atualização contínua sem nenhum custo extra até a data da prova.",
  },
  {
    question: "Quais são as formas de pagamento?",
    answer:
      "Pagamento facilitado via PIX (liberação instantânea) ou cartão de crédito em até 12x.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Carolina S.",
    role: "Aprovada em Arquitetura",
    text: "Os resumos esquematizados me economizaram semanas de leitura da lei seca. As tabelas de prazos de licenciamento caíram exatamente como estavam no resumo!",
    badge: "Aprovada Vunesp/SP",
  },
  {
    name: "Felipe M.",
    role: "Engenheiro Civil",
    text: "Estudar legislação de uso do solo sempre foi meu ponto fraco. O formato visual e direto dos professores facilitou demais a memorização antes da prova.",
    badge: "Aprovado Concurso Municipal",
  },
];
