---
name: portfolio-frontend
description: Mantém o portfólio de Rodrigo Vieira Lima alinhado aos currículos confirmados, à apresentação de sua trajetória e aos padrões de qualidade do projeto.
triggers:
  - "portfólio"
  - "portfolio"
  - "currículo"
  - "frontend"
  - "tema"
  - "componentes"
  - "testes"
---

# Portfólio de Rodrigo Vieira Lima

Responda em português brasileiro. Trabalhe de forma objetiva: implemente, teste e relate o resultado.

## Leitura obrigatória

Antes de alterar o projeto, leia nesta ordem:

1. `AGENTS.md`
2. `docs/REQUIREMENTS.md`
3. `docs/ARCHITECTURE.md`
4. `src/data/portfolio.ts` quando a mudança tocar conteúdo profissional
5. `package.json`, `Makefile`, `biome.json`, `jest.config.cjs` e `lefthook.yml` quando a mudança tocar qualidade, scripts ou dependências

## Objetivo

O site apresenta quem Rodrigo é profissionalmente, sua trajetória e os trabalhos que desenvolveu. Visitantes devem conseguir identificar experiência, responsabilidades, tecnologias e contato sem precisar interpretar linguagem de marketing.

## Regras de conteúdo

- `src/data/portfolio.ts` é a fonte de verdade para histórico profissional e habilidades.
- `docs/personal/Profile.pdf` é uma referência documental complementar; consolide no arquivo tipado qualquer informação selecionada antes de exibi-la.
- Não invente empresas, cargos, datas, resultados, métricas, projetos, certificações ou tecnologias.
- Escreva em português brasileiro, de forma direta e verificável.
- Evite slogans, clichês, superlativos, promessas e tom de venda/freelancing.
- Não direcione a apresentação a processos seletivos nem a transforme em anúncio de disponibilidade ou oferta de serviços.

## Regras técnicas

- Stack: React, Vite, TypeScript estrito, SCSS, Zod, React Hook Form, Jest e Testing Library.
- Use componentes TSX e props tipadas. Não use `any`.
- Preserve `src/components/ui` para primitivos e `src/data` para dados profissionais.
- SCSS é global e usa prefixos de componente/seção. Não introduza Tailwind.
- O header é fixo; mudanças nele devem preservar a compensação de âncora.
- Temas usam `data-theme` no `html`, preferência do sistema no primeiro acesso e persistência em `localStorage` como `theme`.
- A abertura inicial é controlada por `useOpeningSequence`: aguarde um segundo entre título, retrato, descrição e página completa, bloqueando a rolagem até o fim. Cada bloco revelado deve ter sua própria animação de entrada. Sempre pule a espera e o bloqueio se `prefers-reduced-motion` estiver ativo.
- A paleta usa branco, preto e os tons da marca: verde vivo `#00ea90`, verde secundário `#0ca579` e cinzas `#6b6b6b` e `#c1c1c1`, com variantes de contraste por tema.
- O header usa `src/assets/logo/logo-rv.png` no tema claro e `src/assets/logo/logo-rv-monochrome.png` no tema escuro. Ambos são PNGs transparentes com apenas o símbolo geométrico da marca.
- Organize imagens locais por finalidade. `src/assets/brand/` preserva os arquivos-fonte da identidade, `src/assets/logo/` contém as variantes usadas pela interface e `src/assets/personal/` as fotos pessoais; ao chegar uma nova categoria, crie uma subpasta semântica em `src/assets/` e não deixe assets na raiz.
- O retrato do Hero usa `src/assets/personal/personalPhoto.jpg` com `alt="Rodrigo Vieira Lima"`. Ele deve preencher o card sem gradiente ou texto, com recorte responsivo e orientação original. Pré-carregue e decodifique a foto antes de sua animação, declarando suas dimensões intrínsecas. Reserve a altura final do texto para evitar saltos entre os estágios. Visualmente, o retrato fica antes do texto sem alterar a ordem semântica; o LinkedIn é o único detalhe externo associado ao retrato e fica à esquerda do card.
- O fundo é exclusivamente `ParticleBackground`: decorativo, sem eventos de ponteiro, com `aria-hidden` e compatível com `prefers-reduced-motion`.
- Tecnologias confirmadas podem usar logotipos decorativos do Simple Icons, mas o nome da tecnologia deve continuar visível em texto.
- O formulário é `mailto:` validado; não adicione backend, analytics ou persistência sem solicitação explícita.

## Qualidade obrigatória

1. Crie ou atualize testes para comportamentos e conteúdos relevantes.
2. Rode `make check` antes de concluir.
3. Se o comando via pnpm não estiver disponível no ambiente, rode os binários locais equivalentes para Biome, TypeScript, Jest e Vite e informe isso.
4. Mantenha o pre-commit funcional: ele executa `pnpm lint` e `pnpm test`.
5. Não entregue mudanças com lint, testes, build ou `git diff --check` falhando.

## Documentação

- Atualize `docs/ARCHITECTURE.md` quando mudar componentes, estado, temas, fundo ou decisões técnicas.
- Atualize `docs/REQUIREMENTS.md` quando mudar objetivos, requisitos ou critérios de aceite.
- Atualize `AGENTS.md` ao adicionar/remover arquivos relevantes ou mudar regras do projeto.
