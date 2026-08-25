# Guia de desenvolvimento do portfólio

## Objetivo do produto

Este é o portfólio público de Rodrigo Vieira Lima, voltado a processos seletivos para contratação CLT em desenvolvimento frontend. A página deve permitir que recrutadores e lideranças técnicas identifiquem rapidamente a experiência profissional, competências e formas de contato.

## Fonte de verdade profissional

- `src/data/portfolio.ts` é a fonte única para empresas, cargos, períodos, resumos, destaques e habilidades.
- Não inclua experiências, resultados, métricas, projetos, certificações ou tecnologias que não estejam confirmados nesse arquivo ou pelo Rodrigo.
- Ao adicionar um case público, defina primeiro seu tipo e dados em `src/data/` e só depois crie sua apresentação.

## Linguagem e conteúdo

- Use português brasileiro, tom direto, profissional e verificável.
- Priorize clareza para recrutadores: cargo, contexto, responsabilidades, tecnologias e contato.
- O público principal são processos CLT. Não use linguagem de freelancing, venda de serviços ou promessas comerciais.
- Não afirme disponibilidade para oportunidades sem confirmação explícita do Rodrigo.
- Evite slogans, frases de impacto, superlativos e clichês como “transformar negócios”, “fazer acontecer” ou “criar algo relevante”.

## Arquitetura

```text
App
├── ParticleBackground  camada decorativa animada e inacessível ao leitor de tela
├── Header              navegação fixa e alternância de tema
├── Hero                posicionamento profissional e CTAs
├── About               resumo profissional e habilidades
├── Experience          timeline baseada em dados tipados
├── Portfolio           espaço preparado para cases públicos
└── Contact             formulário validado que abre mailto:
    └── useContactForm  schema Zod e integração com React Hook Form
```

## Interface e acessibilidade

- Use React com TypeScript estrito e SCSS global. Não introduza Tailwind.
- Mantenha componentes de interface em `src/components/ui/`, usando o padrão existente com CVA, Radix Slot e `cn`.
- O menu fica fixo no topo; preserve `scroll-padding-top` quando ajustar seu tamanho.
- Há temas claro e escuro. A preferência inicial segue o sistema, pode ser alterada no header e é salva em `localStorage` como `theme`.
- O tema usa branco, preto e verde-petróleo: no claro `#0d625d`; no escuro `#7fc8bf`. Não retorne ao verde-limão.
- O fundo contém apenas partículas desfocadas decorativas. Ele deve permanecer com `aria-hidden`, não capturar ponteiro e respeitar `prefers-reduced-motion`.
- Todo bloco textual exposto sobre o fundo deve usar a classe `text-backdrop`, que aplica desfoque adicional às partículas sem alterar seu conteúdo.
- A grade de habilidades usa logotipos decorativos do Simple Icons; mantenha o nome da tecnologia em texto e use apenas tecnologias confirmadas em `src/data/portfolio.ts`.
- Mantenha semântica HTML, foco visível, contraste suficiente e comportamento responsivo a partir de 760px.

## Formulário

- Não há backend, analytics ou armazenamento de dados.
- O formulário valida nome, e-mail e mensagem com Zod e abre o cliente de e-mail para `rodrigovlima06@gmail.com`.
- Não crie endpoint, persistência ou envio de terceiros sem uma decisão explícita.

## Qualidade obrigatória

- Atualize ou inclua testes ao alterar comportamento, conteúdo relevante ou fluxos de interface.
- Use Jest e Testing Library. Os testes atuais cobrem áreas principais, disponibilidade CLT, alternância de tema e validação do formulário.
- Antes de entregar, execute `make check` (lint, testes e build). Se o wrapper do pnpm estiver indisponível, execute os binários locais equivalentes e informe o motivo.
- O pre-commit executa `pnpm lint` e `pnpm test`; mantenha ambos aprovados.
- Formate e organize imports com Biome. Não use `any`.

## Documentação

- Consulte `docs/ARCHITECTURE.md` para a implementação atual.
- Consulte `docs/REQUIREMENTS.md` para requisitos de produto, conteúdo e qualidade.
- Consulte `.codex/skills/portfolio-frontend/SKILL.md` antes de executar mudanças de frontend neste projeto.
