# Arquitetura e contexto para IAs

## Propósito

Este repositório contém o portfólio público de Rodrigo Vieira Lima. A prioridade é comunicar senioridade frontend de modo objetivo, acessível, responsivo e fácil de manter.

## Mapa do sistema

```text
App
├── Header              navegação por âncoras
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
- O formulário usa `mailto:`. Não inventar endpoint. Se houver backend, trocar a implementação de `onSubmit` no hook e manter o schema e os testes.

## Regras de evolução

1. Para um novo case, criar o tipo e dados em `src/data`, depois o componente de apresentação.
2. Escrever/atualizar testes antes ou junto da regra de interface alterada.
3. Manter HTML semântico, foco visível e contrastes adequados.
4. Nunca adicionar informação profissional não confirmada pelo currículo ou por Rodrigo.
5. Antes de entregar: `make check`.

## Limites

- Não há backend, analytics, CMS ou armazenamento de formulário.
- O retrato no hero é hoje uma composição gráfica com as iniciais `RV`. Ao receber o arquivo local da foto, substituí-la por um `img` com `alt="Rodrigo Vieira Lima"`, mantendo o layout e dimensões responsivas.
