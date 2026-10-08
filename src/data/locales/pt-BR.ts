import type { LocaleContent } from "data/locales/types";

/**
 * Texto conforme `~/Documents/Career/Resume pt-br.pdf`. Erros de digitação do
 * PDF ("Fulltstack", "fasei inicial", "Hibrido") são corrigidos aqui.
 */
export const ptBR: LocaleContent = {
  htmlLang: "pt-BR",

  meta: {
    title: "Robson Melo de Souza — Desenvolvedor Full Stack",
    description:
      "Desenvolvedor de Software Full Stack especializado em integrações complexas, ERPs e arquiteturas escaláveis. Forte alinhamento com os setores AgTech e Telecom.",
  },

  nav: {
    about: "Sobre",
    "tech-stack": "Stack",
    experience: "Experiência",
    projects: "Projetos",
    contact: "Contato",
  },

  a11y: {
    mainNav: "Navegação principal",
  },

  profile: {
    greeting: "Olá, eu sou o",
    role: "Desenvolvedor Full Stack",
    tagline: "Integrações Complexas, ERPs e Arquiteturas Escaláveis",
    taglineHighlights: [
      "Integrações Complexas",
      "Arquitetura de ERPs",
      "Back-ends Escaláveis",
      "AgTech & Telecom",
    ],
    location: "Santa Maria/RS, Brasil",
    terminalTitle: "robson@fullstack: ~/perfil",
  },

  hero: {
    ctaWork: "Ver meu trabalho",
    ctaContact: "Entrar em contato",
    terminal: {
      role: "cargo",
      focus: "foco",
      domains: "domínios",
      domainsValue: "AgTech, Telecom, ERP",
      backend: "backend",
      databases: "bancos",
      async: "assíncrono",
      asyncValue: "mensageria com RabbitMQ",
      based: "base",
    },
  },

  about: {
    heading: "Sobre mim",
    paragraphs: {
      "what-i-build":
        "Desenvolvedor de Software Full Stack especializado na construção de integrações complexas, ERPs e arquiteturas escaláveis, com forte alinhamento aos setores AgTech e Telecom.",
      domains:
        "No Telecom, desenvolvi e mantive integrações de ponta a ponta para provedores de internet, MVNOs e Redes Neutras — contexto em que alta disponibilidade e consistência dos dados são essenciais. Também atuei no motor do ERP e na arquitetura do banco, resolvendo bugs críticos e entregando melhorias sistêmicas.",
      decoupling:
        "Muito disso se resume a desacoplamento. A adoção de filas e comunicação assíncrona com RabbitMQ reduziu drasticamente os gargalos de processamento em rotinas críticas: o que é lento e sujeito a falha sai do caminho da requisição, e a integração degrada com elegância em vez de derrubar o produto junto.",
      solopreneur:
        "No AgTech, atuei como solopreneur em uma parceria público-privada com a Embrapa, criando ferramentas de simulação e análise bioeconômica de pastagens que transformam dados agronômicos complexos em algo sobre o que dá para decidir. Antes disso, o trabalho remoto para empresas dos Estados Unidos e da Escócia me ensinou a entregar entre fusos e em uma segunda língua.",
    },
    highlights: {
      domains: { label: "Domínios", value: "AgTech · Telecom · ERP" },
      depth: { label: "Atuação", value: "Backend e arquitetura" },
      async: { label: "Assíncrono", value: "Mensageria RabbitMQ" },
      international: { label: "Remoto para", value: "EUA · Escócia" },
    },
  },

  techStack: {
    heading: "Stack",
    intro: "O que eu mais uso?",
    groups: {
      backend: "Backend e Arquitetura",
      frontend: "Frontend",
      databases: "Bancos de dados",
      innovation: "Ferramentas e Inovação",
    },
  },

  experience: {
    heading: "Experiência profissional",
    present: "Hoje",
    current: "Atual",
    roles: {
      "voalle-fullstack": {
        title: "Desenvolvedor Full Stack",
        location: "Brasil · Híbrido",
        focus:
          "Desenvolvimento e manutenção de integrações complexas de ponta a ponta para provedores de internet (ISP), MVNOs e Redes Neutras. Manutenção e evolução do motor do ERP e do banco de dados, garantindo alta disponibilidade e consistência dos dados. Implementação de filas e comunicação assíncrona com RabbitMQ, reduzindo drasticamente gargalos de processamento em rotinas críticas.",
      },
      "embrapa-solopreneur": {
        title: "Solopreneur",
        location: "Brasil · Remoto",
        focus:
          "Desenvolvimento de soluções de software voltadas ao setor AgTech, com destaque para projetos em parceria público-privada com a Embrapa. Criação de ferramentas de simulação e análise bioeconômica de pastagens, unindo dados complexos a interfaces interativas e escaláveis.",
      },
      "lotus-frontend": {
        title: "Desenvolvedor Frontend",
        location: "Estados Unidos · Remoto",
        focus:
          "Atuação na esteira de desenvolvimento completa para empresas norte-americanas, do refinamento de requisitos à garantia de qualidade (QA).",
      },
      trigandao: {
        title: "Desenvolvedor Frontend",
        location: "Escócia · Remoto",
        focus:
          "Colaboração com equipes internacionais no desenvolvimento de interfaces React e Next.js, com consumo de APIs via Axios, apoiando o lançamento de uma startup em sua fase inicial de financiamento.",
      },
    },
  },

  projects: {
    heading: "Projetos selecionados",
    intro: "Alguns projetos de minha autoria.",
    openLive: "Ver online",
    openCode: "Ver código",
    items: {
      ecomvision: {
        name: "Ecomvision",
        description:
          "Painel administrativo de vendas fullstack, com um panorama completo das informações de venda para decisões gerenciais — API, camada de dados e dashboard.",
        imageAlt:
          "Painel administrativo Ecomvision com gráficos de vendas e indicadores",
      },
      "calculadora-importacao": {
        name: "Calculadora do Imposto de Importação",
        description:
          "Extensão do Chrome que se injeta na interface de checkout da Shopee e do AliExpress para calcular o imposto de importação ali mesmo — uma integração no navegador com duas lojas de terceiros.",
        imageAlt:
          "Extensão da calculadora de imposto rodando dentro da página de uma loja",
      },
      "trigan-website": {
        name: "Site da Trigan",
        description:
          "Frontend do site público da Trigan: features e componentes em React com Next.js e TypeScript para renderização no servidor e consumo de API, trabalhando diretamente com o time de design e a liderança.",
        imageAlt: "Página inicial do site da Trigan",
      },
      "space-tours": {
        name: "Space Tours",
        description:
          "App em React que lê dados de lançamentos da SpaceX via Apollo/GraphQL, renderiza os registros e imprime um ticket para a viagem escolhida. Construído seguindo à risca um design fornecido.",
        imageAlt: "App Space Tours listando lançamentos de foguetes da SpaceX",
      },
    },
  },

  contact: {
    heading: "Vamos conversar",
    blurb:
      "Aberto a conversas sobre vagas fullstack, trabalhos de integração e consultoria em arquitetura.",
    location: "Santa Maria/RS, Brasil",
    languages: "Português (nativo) · Inglês (fluente, C2)",
    emailLabel: "Enviar e-mail para Robson Melo",
    socialLabels: {
      linkedin: "Perfil no LinkedIn",
      github: "Perfil no GitHub",
    },
  },

  localeSwitch: {
    legend: "Idioma",
  },
};
