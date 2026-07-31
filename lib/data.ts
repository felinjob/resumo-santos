export const CHECKOUT_CURSO_URL = "https://chk.eduzz.com/E9OG65XGWB";
export const CHECKOUT_COMBO_URL = "https://chk.eduzz.com/y5ufxzc7";

export const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd-qQi14c5zF6aKfdsjREhU3i19z7KZq_tcLNztzQccHRFi6Q/viewform?usp=preview";

export const EDITAL_URL = "https://www.ibamsp-concursos.org.br/informacoes/179/";

export const SUPPORT_EMAIL = "raquelmoraispg@gmail.com";

export interface ScheduleItem {
  id: string;
  law: string;
  title: string;
  description: string;
  pdfDate: string;
  videoDate: string;
  pdfStatus: "released" | "upcoming";
  videoStatus: "released" | "upcoming";
}

export interface Author {
  name: string;
  role: string;
  organization: string;
  bio: string;
  initials: string;
  image: string;
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
    law: "Lei Complementar nº 1.196/2023 + Decreto 10.070/2023",
    title: "Licenciamento Ambiental Municipal",
    description: "Licenciamento Ambiental Municipal",
    pdfDate: "01/08",
    videoDate: "25/09",
    pdfStatus: "upcoming",
    videoStatus: "upcoming",
  },
  {
    id: "02",
    law: "Lei Complementar nº 1.181/2022",
    title: "Plano Diretor de Desenvolvimento e Expansão Urbana",
    description: "Plano Diretor de Desenvolvimento e Expansão Urbana",
    pdfDate: "12/08",
    videoDate: "28/09",
    pdfStatus: "upcoming",
    videoStatus: "upcoming",
  },
  {
    id: "03",
    law: "Lei Complementar nº 1.253/2024",
    title: "Organização da Administração Direta e Indireta",
    description: "Organização da Administração Direta e Indireta",
    pdfDate: "19/08",
    videoDate: "30/09",
    pdfStatus: "upcoming",
    videoStatus: "upcoming",
  },
  {
    id: "04",
    law: "Lei Complementar nº 1.314/2025",
    title: "Uso e Ocupação do Solo — Área Continental",
    description: "Uso e Ocupação do Solo — Área Continental",
    pdfDate: "26/08",
    videoDate: "02/10",
    pdfStatus: "upcoming",
    videoStatus: "upcoming",
  },
  {
    id: "05",
    law: "Lei nº 4.623/1984",
    title: "Estatuto dos Funcionários Públicos Municipais",
    description: "Estatuto dos Funcionários Públicos Municipais",
    pdfDate: "02/09",
    videoDate: "05/10",
    pdfStatus: "upcoming",
    videoStatus: "upcoming",
  },
  {
    id: "06",
    law: "Lei Complementar nº 1.025/2019",
    title: "Código de Edificações de Santos",
    description: "Código de Edificações de Santos",
    pdfDate: "09/09",
    videoDate: "07/10",
    pdfStatus: "upcoming",
    videoStatus: "upcoming",
  },
  {
    id: "07",
    law: "Lei Orgânica nº 1/1990",
    title: "Lei Orgânica do Município",
    description: "Lei Orgânica do Município de Santos",
    pdfDate: "16/09",
    videoDate: "10/10",
    pdfStatus: "upcoming",
    videoStatus: "upcoming",
  },
  {
    id: "08",
    law: "Lei Complementar nº 1.187/2022",
    title: "Uso e Ocupação do Solo — Área Insular",
    description: "Uso e Ocupação do Solo — Área Insular",
    pdfDate: "23/09",
    videoDate: "13/10",
    pdfStatus: "upcoming",
    videoStatus: "upcoming",
  },
];

export const authors: Author[] = [
  {
    name: "Raquel Morais",
    role: "Analista Judiciária – Apoio Especializado Arquitetura",
    organization: "TRF 3ª Região / SP",
    bio: "Arquiteta e Urbanista pela Universidade Federal do Rio de Janeiro (UFRJ) e Especialista em Políticas Públicas de Infraestrutura pela Escola Nacional de Administração Pública (ENAP), possui mais de 8 anos de experiência em concursos de arquitetura, incluindo o 1º lugar na banca IBAM (Pref. de Vassouras/RJ). Atuou na Prefeitura de Campinas junto à Secretaria Municipal de Finanças, e atualmente exerce o cargo de Analista Judiciária na Seção de Fiscalização de Obras e Serviços de Engenharia do Tribunal Regional Federal da 3ª Região (SP).",
    initials: "RM",
    image: "/autores/raquel.webp",
  },
  {
    name: "Valdinei Castro",
    role: "Arquiteto",
    organization: "Prefeitura de Campinas — Sec. de Habitação",
    bio: "Arquiteto e Urbanista pela Universidade Estadual de Maringá (UEM), Especialista em Mobilidade e Cidade Contemporânea pela Escola da Cidade (AEC/AU) e Mestre em Arquitetura e Urbanismo pela Universidade Federal de Santa Catarina (UFSC). Atua como Arquiteto na Prefeitura de Campinas junto à Secretaria Municipal de Habitação, na elaboração de projetos urbanísticos de Regularização Fundiária de Interesse Social.",
    initials: "VC",
    image: "/autores/valdinei.webp",
  },
];

export const benefits: Benefit[] = [
  {
    iconName: "UserCheck",
    title: "Testado e aprovado em Campinas 2025",
    description: "Mesma metodologia que colocou 5 alunos no Top 10 Geral e 4 nomeados na Prefeitura de Campinas.",
  },
  {
    iconName: "Clock",
    title: "Tabelas, fluxogramas e esquemas visuais",
    description: "Sem enrolação. Informação visual que gruda na memória e funciona na hora da prova. Direto ao ponto.",
  },
  {
    iconName: "Target",
    title: "Questões IBAM reais + inéditas em vídeo",
    description: "Videoaulas que simulam o estilo exato da banca para você não ser surpreendido no dia da prova.",
  },
];

export const metrics: Metric[] = [
  { value: "8", label: "Resumos em PDF", iconName: "FileText" },
  { value: "100%", label: "Foco banca IBAM", iconName: "Target" },
  { value: "Vídeoaulas", label: "Exclusivas", iconName: "Layers" },
  { value: "Questões", label: "Inéditas", iconName: "Download" },
];

export const guarantees = [
  {
    icon: "💳",
    title: "Compra segura via Eduzz",
    description: "PIX ou Cartão de Crédito",
  },
  {
    icon: "🔒",
    title: "Garantia de 7 dias",
    description: "Reembolso incondicional",
  },
  {
    icon: "📥",
    title: "Acesso na área de membros",
    description: "Conforme cronograma de entregas",
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  headline: string;
  image: string;
  text?: string;
  authorName?: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "Como funciona a entrega das vídeoaulas e resumos?",
    answer:
      "Os resumos em PDF são disponibilizados primeiro, conforme o cronograma de liberação. As vídeoaulas de resolução de questões são liberadas no ciclo posterior à entrega dos PDFs, seguindo o calendário oficial divulgado na área de membros.",
  },
  {
    question: "Como acesso a área de membros?",
    answer:
      "Após a confirmação da compra via Eduzz, você receberá um e-mail automático com os dados de login e senha para acessar a plataforma de alunos.",
  },
  {
    question: "Tenho garantia de reembolso?",
    answer:
      "SIM! Você tem 7 dias de garantia incondicional. Se não ficar satisfeito, pode solicitar o reembolso total dentro da plataforma Eduzz.",
  },
  {
    question: "Como funciona o pagamento via PIX?",
    answer:
      "Ao selecionar PIX como forma de pagamento na Eduzz, você receberá um QR Code para pagamento instantâneo. Após a confirmação do pagamento, sua conta na plataforma será liberada e o conteúdo será entregue conforme o cronograma gradual de liberação das aulas e resumos.",
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
    question: "Para quais cargos esse material é indicado?",
    answer:
      "Os resumos foram desenvolvidos para os cargos de Arquiteto e Engenheiro Civil previstos no Edital nº 74/2026 (SEPLA-RH Santos). A legislação cobrada é a mesma para ambos os cargos.",
  },
  {
    question: "Posso usar junto com outro curso preparatório?",
    answer:
      "Sim! Nosso material foca exclusivamente na legislação municipal — a parte que outros cursos raramente cobrem com profundidade. É um complemento ideal para qualquer preparação.",
  },
];

export const testimonials: Testimonial[] = [
  {
    authorName: "Thiago Darlan Silva Fonseca",
    headline: "Thiago Darlan Silva Fonseca — 5º Lugar Geral na Prefeitura de Campinas",
    image: "/depoimentos/thiago.jpeg",
  },
  {
    authorName: "Vanessa de Moraes",
    headline: "O curso me rendeu pontos na prova e me ajudou a ter uma boa classificação na Prefeitura de Campinas!",
    text: "Sou muito grata ao Valdinei e a Raquel pelo material completo que elaboraram para o concurso da Prefeitura de Campinas, que combinou vídeoaulas com exercícios no modelo da banca, preenchendo uma lacuna que havia em outros cursos para o concurso, a parte de legislação municipal! Com certeza o curso me rendeu pontos na prova e me ajudou a ter uma boa classificação na prefeitura de Campinas.",
    image: "/depoimentos/vanessa_novo.jpeg",
  },
  {
    headline: "O material de vocês foi fundamental pra eu conseguir a vaga!",
    image: "/depoimentos/depoimento-01.jpeg",
  },
  {
    headline: "Com certeza foi graças ao material de vocês!",
    image: "/depoimentos/depoimento-02.jpeg",
  },
  {
    headline: "Tava desanimado, mas acabei de assistir a aula e amei!",
    image: "/depoimentos/depoimento-03.jpeg",
  },
  {
    headline: "Esse apoio é muito importante: é a mão estendida e a palavra amiga.",
    image: "/depoimentos/depoimento-04.jpeg",
  },
  {
    headline: "O material de vocês tá rendendo aprovações!",
    image: "/depoimentos/depoimento-05.jpeg",
  },
  {
    headline: "O material de vocês tem me ajudado demais todos os dias!",
    image: "/depoimentos/depoimento-06.jpeg",
  },
  {
    headline: "Você e a Raquel são inspirações!",
    image: "/depoimentos/depoimento-07.jpeg",
  },
];
