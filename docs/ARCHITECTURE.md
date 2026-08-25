# Arquitetura e contexto para IAs

## Propósito

Este repositório contém o portfólio público de Rodrigo Vieira Lima, direcionado a oportunidades CLT em desenvolvimento frontend. A prioridade é comunicar experiência profissional confirmada de modo objetivo, acessível, responsivo e fácil de manter.

## Mapa do sistema

```text
App
├── ParticleBackground  partículas decorativas desfocadas e contínuas
├── Header              navegação por âncoras, fixa, e alternância de tema
├── Hero                proposta de valor e CTAs
├── About               narrativa e habilidades
├── Experience          dados de carreira em timeline
├── Portfolio           estado vazio preparado para cases
└── Contact             formulário validado e mailto seguro
    └── useContactForm  schema Zod + React Hook Form
```

## Decisões

- `src/data/portfolio.ts` é a fonte única para experiências e skills. Alterar conteúdo lá antes de alterar a visualização.
- As seções compõem a página e não devem acessar APIs diretamente.
- `src/components/ui` concentra primitivos no padrão shadcn: composição, variantes CVA e `cn`.
- SCSS é global por escolha deliberada para uma landing compacta. Novos estilos devem usar o prefixo da seção/componente.
- O tema é controlado por `data-theme` no elemento `html`. A preferência segue o sistema no primeiro acesso e fica persistida como `theme`.
- A paleta de destaque é verde-petróleo, combinada com superfícies brancas e pretas. Os tokens ficam em `src/styles/globals.scss`.
- `ParticleBackground` é decorativo, usa `aria-hidden`, não responde ao cursor e respeita `prefers-reduced-motion`.
- A classe global `text-backdrop` é aplicada aos blocos textuais para desfocar as partículas abaixo deles e preservar a leitura.
- A grade de habilidades recebe `iconUrl` dos dados profissionais e renderiza logotipos decorativos, com o nome da tecnologia preservado no conteúdo.
- O formulário usa `mailto:`. Não inventar endpoint. Se houver backend, trocar a implementação de `onSubmit` no hook e manter o schema e os testes.

## Regras de evolução

1. Para um novo case, criar o tipo e dados em `src/data`, depois o componente de apresentação.
2. Escrever/atualizar testes antes ou junto da regra de interface alterada.
3. Manter HTML semântico, foco visível e contrastes adequados.
4. Nunca adicionar informação profissional não confirmada pelo currículo ou por Rodrigo.
5. Antes de entregar: `make check`.

## Qualidade

- Jest e Testing Library cobrem o conteúdo estrutural, disponibilidade CLT, alternância de tema e validação do formulário.
- Biome faz lint, formatação e organização de imports.
- Lefthook executa lint e testes no pre-commit. `make check` reúne lint, testes e build.
- Consulte `AGENTS.md` e `docs/REQUIREMENTS.md` para as regras completas de evolução.

## Limites

- Não há backend, analytics, CMS ou armazenamento de formulário.
- O retrato no hero é hoje uma composição gráfica com as iniciais `RV`. Ao receber o arquivo local da foto, substituí-la por um `img` com `alt="Rodrigo Vieira Lima"`, mantendo o layout e dimensões responsivas.
