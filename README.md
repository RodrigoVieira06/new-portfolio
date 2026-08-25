# Portfólio - Rodrigo Vieira Lima

Landing page pessoal de Rodrigo Vieira Lima, Desenvolvedor Frontend Sênior, direcionada a oportunidades CLT. O projeto apresenta sua trajetória profissional confirmada de forma clara, responsiva e fácil de evoluir.

## Stack

- React + Vite + TypeScript
- Componentes no padrão shadcn/ui (Radix Slot + CVA)
- SCSS para a camada visual
- React Hook Form + Zod no formulário de contato
- Jest + Testing Library para componentes e hooks críticos
- Biome, Lefthook e Conventional Commits para qualidade contínua

## Início rápido

Pré-requisito: Node.js 22+ e pnpm.

```bash
corepack enable
pnpm install
pnpm dev
```

O aplicativo abrirá em `http://localhost:5173`.

## Comandos

| Comando | Objetivo |
| --- | --- |
| `make install` | Instala dependências e hooks. |
| `make dev` | Inicia o servidor local. |
| `make test` | Executa testes unitários. |
| `make lint` | Analisa código com Biome. |
| `make build` | Gera build de produção. |
| `make check` | Executa lint, testes e build. |

## Estrutura

```text
src/
  components/     # Seções da landing e primitivos de interface
  data/           # Conteúdo profissional tipado
  hooks/          # Regras reutilizáveis (formulário de contato)
  lib/            # Utilitários
  styles/         # Tokens e estilos SCSS globais
  test/           # Configuração compartilhada dos testes
docs/             # Contexto arquitetural para pessoas e IAs
.codex/skills/    # Skills locais para continuidade e revisão
```

## Regras do projeto

- O conteúdo profissional vem de `src/data/portfolio.ts` e não deve ser inventado.
- A comunicação é direta e profissional, voltada a recrutadores e oportunidades CLT; não use slogans ou linguagem de venda.
- A interface mantém temas claro e escuro, com paleta branco, preto e verde-petróleo.
- O fundo usa partículas desfocadas apenas como elemento decorativo e respeita a preferência de redução de movimento.
- Toda mudança de comportamento ou conteúdo relevante deve incluir testes e passar em `make check`.

Consulte [os requisitos](docs/REQUIREMENTS.md), [a arquitetura](docs/ARCHITECTURE.md), [o guia de desenvolvimento](AGENTS.md) e [a skill local](.codex/skills/portfolio-frontend/SKILL.md).

## Contato

O formulário abre o cliente de e-mail do visitante para `rodrigovlima06@gmail.com`; por isso não exige backend nem armazena dados.

## Contribuição

Use Commits Convencionais, por exemplo: `feat(contact): validate email field`. O pre-commit executa lint e testes. Consulte [o guia de desenvolvimento](AGENTS.md) antes de adicionar novas seções.
