import type { LucideIcon } from 'lucide-react'
import { Code2, Database, Layers3, ServerCog, TestTube2 } from 'lucide-react'

export type Experience = {
  company: string
  role: string
  period: string
  summary: string
  highlights: string[]
  accent: string
}
export type Skill = { name: string; category: string; icon: LucideIcon }
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
  { name: 'React', category: 'Interfaces', icon: Code2 },
  { name: 'TypeScript', category: 'Linguagem', icon: Code2 },
  { name: 'Microfrontends', category: 'Arquitetura', icon: Layers3 },
  { name: 'FastAPI & BFF', category: 'Integrações', icon: ServerCog },
  { name: 'Zustand', category: 'Estado', icon: Database },
  { name: 'Jest & RTL', category: 'Qualidade', icon: TestTube2 },
]
