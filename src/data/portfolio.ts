export type Experience = {
  company: string
  role: string
  period: string
  summary: string
  highlights: string[]
  accent: string
}
export type Skill = { name: string; category: string; iconUrl: string }
export const experiences: Experience[] = [
  {
    company: 'Hitss Brasil',
    role: 'Desenvolvedor Frontend Sênior',
    period: 'fev. 2025 - atual',
    accent: 'H',
    summary:
      'Estruturei uma plataforma React de microfrontends do desenho técnico à produção.',
    highlights: [
      'Vite Module Federation e multirepo',
      'Design system interno publicado no Nexus',
      'Mentoria e apresentações técnicas',
    ],
  },
  {
    company: 'Levva',
    role: 'Desenvolvedor Frontend Pleno',
    period: 'out. 2024 - dez. 2024',
    accent: 'L',
    summary: 'Construí um UI Kit reutilizável e distribuído em pacotes NPM.',
    highlights: [
      'React, Ant Design e Lerna',
      'Rollup, Storybook e testes com RTL',
    ],
  },
  {
    company: 'QUAY',
    role: 'Desenvolvedor Frontend Pleno',
    period: 'ago. 2024 - out. 2024',
    accent: 'Q',
    summary: 'Desenvolvi uma aplicação de gestão de RH para a SOMA RH.',
    highlights: ['Angular 17, TypeScript e Ng Zorro', 'Git e Azure DevOps'],
  },
  {
    company: 'Nasajon',
    role: 'Desenvolvedor Frontend Júnior',
    period: 'jan. 2022 - mai. 2024',
    accent: 'N',
    summary:
      'Evoluí aplicações de automação e produtos de RH integrados a APIs.',
    highlights: [
      'Angular, SCSS, Webpack e Docker',
      'Flutter, Clean Architecture e multirepo',
    ],
  },
  {
    company: 'LIPCAT',
    role: 'Desenvolvedor Frontend Júnior',
    period: 'mai. 2024 - ago. 2024',
    accent: 'L',
    summary:
      'Entreguei landing page e sistema interno responsivos, conectados a APIs.',
    highlights: [
      'React, Next.js e TypeScript',
      'Tailwind, Material Design e i18n',
    ],
  },
]
export const skills: Skill[] = [
  {
    name: 'React',
    category: 'Interfaces',
    iconUrl: 'https://cdn.simpleicons.org/react/0D625D',
  },
  {
    name: 'TypeScript',
    category: 'Linguagem',
    iconUrl: 'https://cdn.simpleicons.org/typescript/0D625D',
  },
  {
    name: 'Angular',
    category: 'Interfaces',
    iconUrl: 'https://cdn.simpleicons.org/angular/0D625D',
  },
  {
    name: 'Next.js',
    category: 'Framework',
    iconUrl: 'https://cdn.simpleicons.org/nextdotjs/0D625D',
  },
  {
    name: 'Vite',
    category: 'Build',
    iconUrl: 'https://cdn.simpleicons.org/vite/0D625D',
  },
  {
    name: 'Jest',
    category: 'Testes',
    iconUrl: 'https://cdn.simpleicons.org/jest/0D625D',
  },
  {
    name: 'Docker',
    category: 'Infraestrutura',
    iconUrl: 'https://cdn.simpleicons.org/docker/0D625D',
  },
  {
    name: 'Flutter',
    category: 'Mobile',
    iconUrl: 'https://cdn.simpleicons.org/flutter/0D625D',
  },
]
