/**
 * Fonte única de conteúdo do portfólio.
 *
 * Tudo que aparece na página vem daqui: para atualizar textos, projetos ou
 * experiências basta editar este arquivo. Os componentes apenas renderizam.
 *
 * Conteúdo baseado no perfil do LinkedIn (export de out/2026) e nos repositórios
 * dos projetos (D3, D9, D11, Maestro v2, Nexus API). Projetos internos: sem URLs,
 * IPs ou segredos de infraestrutura.
 */

export interface Project {
  /** Identificador usado como âncora na seção de detalhes. */
  slug: string;
  /** Rótulo curto exibido acima do título (empresa / período / contexto). */
  context: string;
  title: string;
  /** Resumo curto exibido no card. */
  description: string;
  /** Tags principais exibidas no card. */
  tags: string[];
  /** Destaca o card com fundo verde. Use em no máximo um projeto. */
  featured?: boolean;
  /** Pontos de destaque exibidos na seção de detalhes. */
  highlights: string[];
  /** Stack completa exibida na seção de detalhes. */
  stack: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface Skill {
  title: string;
  items: string[];
}

export const profile = {
  name: 'Pedro Gabriel da Silva',
  shortName: 'pedro',
  headline: 'Software Engineer · Backend · IA · Automação',
  description:
    'Pedro Gabriel da Silva — Software Engineer | Backend, AI & Automation | Node.js, TypeScript, Python & PHP | RAG & Observability.',
  location: 'Ourinhos, SP · Brasil',
  email: 'pedrog_silva@outlook.com',
  linkedin: 'https://www.linkedin.com/in/pedro-gabriel-da-silva-4b5a83215',
  github: 'https://github.com/PedroGabrielS',
  hero: {
    titleStart: 'Transformo operações',
    titleAccent: 'complexas',
    titleEnd: 'em software confiável.',
    intro:
      'Há mais de quatro anos construo backends, integrações e automações para ambientes de alta complexidade. Hoje aplico IA e observabilidade a operações críticas de telecomunicações na Brasil TecPar.',
  },
  about:
    'Uno arquitetura backend, observabilidade e IA aplicada para reduzir ruído operacional, encurtar o tempo de resolução de incidentes e tornar decisões técnicas mais rápidas, contextualizadas e seguras.',
} as const;

/** Projetos em ordem de destaque: os mais recentes primeiro. */
export const projects: Project[] = [
  {
    slug: 'maestro',
    context: 'Brasil TecPar · 2026 — atual',
    title: 'Maestro — agente de IA para o NOC',
    description:
      'Plataforma de AIOps que correlaciona incidentes, gera dossiês por IA e oferece um agente conversacional para o NOC. Atuei da definição técnica à arquitetura RAG.',
    tags: ['NestJS', 'TypeScript', 'Gemini', 'Qdrant', 'RAG'],
    featured: true,
    highlights: [
      'Recebe webhooks do Zabbix e agrega incidentes em janelas de correlação por OLT/PON ou por interface de PE.',
      'Gera um dossiê consolidado por incidente com IA e mantém os dossiês indexados para busca semântica.',
      'Agente NOC conversacional com function calling: o modelo escolhe ferramentas (equipamento, alarmes ativos, métricas do Zabbix, ordens de serviço, busca de incidentes), executa em paralelo com timeout e responde com contexto da conversa.',
      'Recebe novas OS do Maximo, recupera dossiês semelhantes e devolve instruções técnicas via SOAP, com auditoria completa.',
      'Painel de feature toggles, gestão de API keys, controle de uso de IA, prompts versionados e integração com Netcool e traps.',
    ],
    stack: [
      'NestJS 11',
      'TypeScript',
      'Google Gemini',
      'MongoDB/Mongoose',
      'Qdrant',
      'BullMQ/Redis',
      'PostgreSQL + Prisma',
      'SSH2/Telnet',
      'Swagger',
      'Jest',
      'Docker',
    ],
  },
  {
    slug: 'd3',
    context: 'Brasil TecPar · NOC/OSS',
    title: 'D3 — microsserviço de alarmística',
    description:
      'Substituto interno do IBM Netcool/OMNIbus e Impact: ingestão, deduplicação, enriquecimento e agregação de alarmes em incidentes, com despacho de eventos de negócio.',
    tags: ['NestJS', 'Fastify', 'PostgreSQL', 'RabbitMQ'],
    highlights: [
      'Recebe eventos e alarmes de rede via webhook do Zabbix e desduplica por eventId com upsert idempotente.',
      'Enriquece com inventário (D9), coleta de PON/ONU (D11) e dados de cliente, e aplica regras de agregação para formar incidentes.',
      'Despacha eventos de negócio (alarm.opened, alarm.closed, alarm.escalated) para visualização e ticketing.',
      'Módulo dedicado a alarmes FTTH com classificação automática de causa e cálculo de impacto a partir de snapshots de PON.',
      'Filas quorum com dead-letter e roteamento por tópico, reconciliação e escalonamento agendados, decisões registradas em ADRs.',
    ],
    stack: [
      'Node.js 24',
      'TypeScript 5',
      'NestJS 11 + Fastify',
      'PostgreSQL 16 + Prisma',
      'RabbitMQ 4',
      'Terminus',
      'Joi',
      'Swagger',
      'Jest',
      'Docker Compose',
      'SonarQube',
    ],
  },
  {
    slug: 'nexus-api',
    context: 'Brasil TecPar · Plataforma Nexus',
    title: 'Nexus API — operação do NOC',
    description:
      'Backend central da plataforma de operações do NOC, com alarmes enriquecidos, ordens de serviço, escalonamento, plantões, topologia e tempo real.',
    tags: ['NestJS', 'PostgreSQL', 'Socket.IO', 'JWT'],
    highlights: [
      'Alarmes e enriquecimento, ordens de serviço, escalonamento com políticas, regras, exceções e despacho.',
      'Gestão de equipes, escalas e transferência de plantão; comunicação e banners de status.',
      'Eventos massivos com topologia, OSPF com histórico de links, heatmap, auditoria de PON e análise de risco.',
      'Wiki em grafo, fórum, changelog, GMUD e documentos com controle de acesso; integração com Grafana, D11 e Maestro.',
      'Autenticação JWT com perfis e permissões granulares, WebSocket para atualização em tempo real e modelo com cerca de 95 entidades.',
    ],
    stack: [
      'NestJS 10',
      'TypeScript',
      'PostgreSQL + Prisma 5',
      'Socket.IO',
      'JWT + bcrypt',
      'Terminus',
      'Winston',
      'SendGrid/Nodemailer',
      'Google APIs',
      'Swagger',
      'Jest',
      'Docker',
    ],
  },
  {
    slug: 'd9',
    context: 'Brasil TecPar · Integrações',
    title: 'D9 — inventário e ordens de serviço',
    description:
      'Camada de cache e integração sobre o IBM Maximo que expõe ativos, OLTs, ordens de serviço e escalonamentos de forma rápida aos sistemas do NOC.',
    tags: ['NestJS', 'TypeORM', 'DB2', 'Redis'],
    highlights: [
      'Sincroniza novas OS ativas e dispara webhooks idempotentes para o Maestro.',
      'Valida OS com veredito automatizado e trata imagens de worklog.',
      'Gerencia credenciais de acesso (TACACS, chaves SSH com fingerprint e renovação com timeout).',
      'Consolida conexões e sinais ópticos de clientes; relatórios e análises assistidas por IA.',
      'Swagger com collection Postman gerada automaticamente.',
    ],
    stack: [
      'NestJS 11',
      'TypeScript',
      'TypeORM + IBM DB2',
      'PostgreSQL',
      'MySQL',
      'SQLite',
      'Redis',
      'node-ssh',
      'Netcool',
      'RADIUS',
      'Google Gemini',
      'Jest',
      'Docker',
    ],
  },
  {
    slug: 'd11',
    context: 'Brasil TecPar · Rede de acesso',
    title: 'D11 — coletor e automação de OLTs',
    description:
      'Serviço em Go que conversa diretamente com OLTs de cinco fabricantes via SNMP, SSH e Telnet para consulta ativa de PONs, configuração de traps e métricas.',
    tags: ['Go', 'SNMP', 'SSH', 'InfluxDB'],
    highlights: [
      'Drivers por fabricante (Huawei, ZTE, FiberHome, Datacom e Parks) registrados em um registry, com transporte SSH isolado dos drivers.',
      'Consulta ativa de PONs disparada por alarmes do Zabbix: jobs assíncronos, deduplicação por evento, serialização por OLT e snapshot de ONUs.',
      'Verificação e configuração automática de destinos de trap por fabricante, com resolução de região via cadastro de CNL/UF.',
      'Auditoria de cada operação com mascaramento de segredos; API keys de leitura e escrita separadas com comparação em tempo constante.',
      'Coleta periódica de métricas de PON para InfluxDB e testes de transcrição com saídas reais anonimizadas.',
    ],
    stack: ['Go 1.26', 'gosnmp', 'x/crypto (SSH)', 'pgx + goose', 'PostgreSQL', 'InfluxDB', 'Docker Compose'],
  },
  {
    slug: 'netcool',
    context: 'Brasil TecPar · Netcool/Impact',
    title: 'Sinais que viram ação',
    description:
      'Políticas no IBM Netcool/Impact e regras de qualificação de alarmes para reduzir ruído operacional e priorizar incidentes críticos.',
    tags: ['Netcool/Impact', 'Webhooks', 'Grafana', 'Zabbix'],
    highlights: [
      'Criação, manutenção e otimização de políticas de correlação, normalização, deduplicação e enriquecimento de eventos.',
      'Regras de qualificação de alarmes que ampliam a visibilidade sobre eventos críticos.',
      'Integrações via APIs REST, webhooks e processamento de eventos entre Grafana, Zabbix, IBM Maximo e o ecossistema NOC/OSS.',
    ],
    stack: ['IBM Netcool/Impact', 'Grafana', 'Zabbix', 'IBM Maximo', 'APIs REST', 'Webhooks'],
  },
];

/** Linha do tempo profissional, do mais recente ao mais antigo. */
export const experiences: Experience[] = [
  {
    company: 'Brasil TecPar',
    role: 'Software Engineer · Desenvolvedor NOC/OSS',
    period: 'fev 2026 — atual',
    location: 'Ourinhos, SP',
    highlights: [
      'Soluções de automação, IA, integração e observabilidade para operações críticas de telecomunicações, com foco em redução do MTTR e qualificação de alarmes.',
      'Projeto Maestro: da definição técnica à implementação dos principais componentes, incluindo a arquitetura RAG.',
      'Microsserviço D3 de alarmística (substituto do Netcool), D9 (inventário/Maximo), D11 (automação de OLTs) e Nexus API.',
      'Serviços backend e automações com NestJS, TypeScript e Python; integrações com Grafana, Zabbix, IBM Maximo e Netcool/Impact.',
    ],
  },
  {
    company: 'DevSquad',
    role: 'Full Stack Software Developer',
    period: 'jul 2025 — fev 2026',
    location: 'Utah, EUA · remoto',
    highlights: [
      'APIs REST completas com autenticação, validação, middlewares e logs estruturados.',
      'Otimização de rotinas assíncronas e processamento de grandes volumes com jobs em batch.',
      'Stack TALL (Tailwind, Alpine.js, Laravel, Livewire), Vue.js e React; integrações com APIs da OpenAI.',
    ],
  },
  {
    company: 'Webmania',
    role: 'Analista de desenvolvimento',
    period: 'abr 2025 — jun 2025',
    location: 'Ourinhos, SP',
    highlights: [
      'Sistemas em PHP e Laravel; bots de automação em Python (Selenium, PyAutoGUI).',
      'Pipelines de CI/CD e suporte técnico de alta complexidade.',
    ],
  },
  {
    company: 'Alares Internet',
    role: 'Analista e Desenvolvedor de Sistemas',
    period: 'dez 2023 — abr 2025',
    location: 'Ourinhos, SP',
    highlights: [
      'APIs, regras de negócio e integrações com Node.js/NestJS e Laravel (jobs, queues, schedules).',
      'Logs e observabilidade com Elasticsearch; MySQL, PostgreSQL, MongoDB, Firebase e Redis.',
      'Módulos que aumentaram a taxa de assinaturas de serviços da empresa.',
    ],
  },
  {
    company: 'Webby Internet',
    role: 'Estagiário → Analista e Desenvolvedor de Sistemas Jr',
    period: 'mai 2022 — dez 2023',
    location: 'Ourinhos, SP',
    highlights: [
      'Backend com Laravel (APIs, jobs, queues, migrations) e microsserviços em Python com FastAPI.',
      'Frontend com Angular, integrações, testes e documentação.',
    ],
  },
  {
    company: 'Expecto System · Secretaria de Serviços Urbanos',
    role: 'Estágios em desenvolvimento e sistemas da informação',
    period: 'mar 2021 — abr 2022',
    location: 'Ourinhos, SP',
    highlights: ['Primeiras experiências com desenvolvimento e suporte a sistemas.'],
  },
];

export const education: Education[] = [
  {
    institution: 'FATEC Ourinhos',
    degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
    period: '2020 — 2023',
  },
];

export const skills: Skill[] = [
  { title: 'Backends escaláveis', items: ['NestJS', 'Node.js', 'TypeScript', 'Python', 'PHP/Laravel'] },
  { title: 'Automação e integrações', items: ['APIs REST', 'Webhooks', 'Filas', 'Jobs em batch', 'CI/CD'] },
  { title: 'Observabilidade operacional', items: ['Netcool/Impact', 'Grafana', 'Zabbix', 'Maximo', 'Elasticsearch'] },
  { title: 'IA com contexto', items: ['RAG', 'Embeddings', 'Busca semântica', 'LLMs'] },
];
