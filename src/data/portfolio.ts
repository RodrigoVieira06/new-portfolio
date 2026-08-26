import faeterjLogo from '../assets/education/faeterj.jpg'
import ifrjLogo from '../assets/education/ifrj.png'
import hitssLogo from '../assets/experience/hitss.png'
import levvaLogo from '../assets/experience/levva.png'
import nasajonLogo from '../assets/experience/nasajon.png'
import quayLogo from '../assets/experience/quay.png'
import lipcatLogo from '../assets/projects/lipcat.png'

export type Experience = {
  company: string
  role: string
  period: string
  summary: string
  highlights: string[]
  image: string
}

export type Project = {
  name: string
  context: string
  summary: string
  highlights: string[]
  image: string
}

export type Education = {
  institution: string
  course: string
  period?: string
  image: string
}

export type Skill = { name: string; category: string; iconUrl: string }

export const experiences: Experience[] = [
  {
    company: 'Hitss Brasil',
    role: 'Desenvolvedor Frontend Sênior',
    period: 'fev. 2025 — atual',
    image: hitssLogo,
    summary:
      'Estruturação e evolução de uma aplicação React em arquitetura multirepo e de microfrontends, desde as definições técnicas até a produção.',
    highlights: [
      'React, TypeScript, Vite Module Federation e Zustand',
      'BFFs em NestJS e FastAPI e integrações com APIs',
      'Biblioteca interna com Rspack e Storybook publicada no Nexus',
      'Mentoria, apresentações técnicas e demonstrações da solução',
    ],
  },
  {
    company: 'Levva',
    role: 'Desenvolvedor Frontend Pleno',
    period: 'out. 2024 — dez. 2024',
    image: levvaLogo,
    summary:
      'Desenvolvimento de um UI Kit interno com componentes reutilizáveis, distribuídos como pacotes NPM em uma estrutura gerenciada com Lerna.',
    highlights: [
      'React, TypeScript, Ant Design e Lerna',
      'Jest e React Testing Library',
      'Rollup, Storybook, ESLint e Prettier',
    ],
  },
  {
    company: 'QUAY',
    role: 'Desenvolvedor Frontend Pleno',
    period: 'ago. 2024 — out. 2024',
    image: quayLogo,
    summary:
      'Desenvolvimento de uma aplicação web de gestão de recursos humanos para a SOMA RH.',
    highlights: [
      'Angular 17, TypeScript e Ng Zorro',
      'Versionamento com Git e acompanhamento no Azure DevOps',
    ],
  },
  {
    company: 'Nasajon',
    role: 'Desenvolvedor Frontend Júnior',
    period: 'jan. 2022 — mai. 2024',
    image: nasajonLogo,
    summary:
      'Desenvolvimento e evolução de aplicações para automação de processos internos e sistemas de RH integrados a APIs.',
    highlights: [
      'Angular, TypeScript, JavaScript, SCSS, Webpack e Docker',
      'Flutter, Dart, Clean Architecture e testes unitários',
      'Internacionalização e organização multirepo',
    ],
  },
]

export const projects: Project[] = [
  {
    name: 'LIPCAT',
    context: 'Projeto independente',
    image: lipcatLogo,
    summary:
      'Desenvolvimento de uma aplicação web composta por landing page e sistema interno integrado a APIs.',
    highlights: [
      'React, Next.js e TypeScript',
      'Interfaces responsivas com Tailwind CSS e Material Design',
      'Internacionalização com i18n',
    ],
  },
]

export const education: Education[] = [
  {
    institution: 'FAETERJ-Rio',
    course: 'Tecnologia em Análise e Desenvolvimento de Sistemas',
    period: 'ago. 2017 — dez. 2022',
    image: faeterjLogo,
  },
  {
    institution: 'IFRJ',
    course: 'Ensino médio',
    image: ifrjLogo,
  },
]

export const skills: Skill[] = [
  ['React', 'Frontend', 'react'],
  ['TypeScript', 'Linguagem', 'typescript'],
  ['JavaScript', 'Linguagem', 'javascript'],
  ['Angular', 'Frontend', 'angular'],
  ['Next.js', 'Frontend', 'nextdotjs'],
  ['Zustand', 'Estado', 'react'],
  ['React Hook Form', 'Formulários', 'reacthookform'],
  ['Zod', 'Validação', 'zod'],
  ['Axios', 'Integração', 'axios'],
  ['HTML semântico', 'Web', 'html5'],
  ['CSS e SCSS', 'Estilos', 'sass'],
  ['Vite', 'Build', 'vite'],
  ['Jest e RTL', 'Testes', 'jest'],
  ['Storybook', 'Documentação', 'storybook'],
  ['FastAPI', 'BFF', 'fastapi'],
  ['NestJS', 'BFF', 'nestjs'],
  ['Docker', 'Infraestrutura', 'docker'],
  ['Flutter e Dart', 'Mobile', 'flutter'],
].map(([name, category, icon]) => ({
  name,
  category,
  iconUrl: `https://cdn.simpleicons.org/${icon}/0D625D`,
}))
