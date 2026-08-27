# Guia de desenvolvimento do portfólio

## Objetivo do produto

Este é o portfólio público de Rodrigo Vieira Lima. A página deve apresentar com clareza quem ele é profissionalmente, os trabalhos que desenvolveu, sua trajetória, competências e formas de contato.

## Fonte de verdade profissional

- `src/data/portfolio.ts` é a fonte única para empresas, cargos, períodos, resumos, destaques e habilidades.
- `docs/personal/Profile.pdf` é uma fonte documental complementar exportada do LinkedIn; informações aproveitadas na página devem primeiro ser consolidadas em `src/data/portfolio.ts`.
- Não inclua experiências, resultados, métricas, projetos, certificações ou tecnologias que não estejam confirmados nesse arquivo ou pelo Rodrigo.
- Ao adicionar um case público, defina primeiro seu tipo e dados em `src/data/` e só depois crie sua apresentação.

## Linguagem e conteúdo

- Use português brasileiro, tom direto, profissional e verificável.
- Priorize a compreensão do perfil profissional: cargo, contexto, responsabilidades, tecnologias, evolução de carreira e contato.
- Apresente trabalhos e trajetória por seu contexto profissional e técnico, sem direcionar o texto a processos seletivos.
- Não transforme o conteúdo em anúncio de disponibilidade, oferta de serviços ou promessa comercial.
- Evite slogans, frases de impacto, superlativos e clichês como “transformar negócios”, “fazer acontecer” ou “criar algo relevante”.

## Arquitetura

```text
App
├── ParticleBackground  camada decorativa animada e inacessível ao leitor de tela
├── Header              navegação fixa e alternância de tema
├── Hero                abertura em etapas, posicionamento profissional e CTAs
├── About               resumo profissional e habilidades
├── Experience          carrossel baseado em dados tipados
│   └── Carousel        controles, indicadores e navegação por teclado
├── Portfolio           projetos independentes em carrossel
├── Education           formação acadêmica
└── Contact             formulário validado que abre mailto:
    └── useContactForm  schema Zod e integração com React Hook Form
```

## Interface e acessibilidade

- Use React com TypeScript estrito e SCSS global. Não introduza Tailwind.
- Mantenha componentes de interface em `src/components/ui/`, usando o padrão existente com CVA, Radix Slot e `cn`.
- O menu fica fixo no topo; preserve `scroll-padding-top` quando ajustar seu tamanho.
- Há temas claro e escuro. A preferência inicial segue o sistema, pode ser alterada no header e é salva em `localStorage` como `theme`.
- Na primeira visita, a página faz uma abertura de quatro segundos: título aos 1s, retrato aos 2s, função e descrição aos 3s e o restante da página aos 4s. Cada novo bloco deve ter transição suave própria. Enquanto ela ocorre, a rolagem fica bloqueada. Para `prefers-reduced-motion`, renderize a página completa imediatamente, sem espera nem bloqueio.
- O header usa o novo símbolo geométrico da marca: `src/assets/logo/logo-rv.png` no tema claro e `src/assets/logo/logo-rv-monochrome.png` no tema escuro. Ambos são PNGs transparentes, sem fundo ou texto sobreposto.
- `src/assets/brand/` preserva os arquivos-fonte entregues da identidade visual, `src/assets/logo/` concentra as variantes usadas pela interface e `src/assets/personal/` as fotos pessoais. Não deixe assets diretamente na raiz de `src/assets/`; novos tipos de imagem devem usar uma subpasta semântica própria quando forem adicionados.
- Marcas de empresas ficam em `src/assets/experience/`, projetos em `src/assets/projects/` e instituições em `src/assets/education/`.
- Os carrosséis de experiência e projetos devem ter controles acessíveis, navegação por teclado e não devem avançar automaticamente.
- O retrato principal é `src/assets/personal/personalPhoto.jpg`: no Hero, ele ocupa todo o card e é recortado por CSS, mantendo sua orientação original. Pré-carregue e decodifique a foto antes do fade de entrada, e informe suas dimensões intrínsecas para evitar saltos de layout. Visualmente, o card fica à esquerda do texto; preserve a ordem semântica do texto antes dele. Reserve a altura final do bloco de texto durante a abertura. Mantenha o `alt="Rodrigo Vieira Lima"` e não inclua texto sobre a foto; o link do LinkedIn permanece como detalhe externo, à esquerda do card.
- O tema usa branco, preto e os tons da nova marca: verde vivo (`#00ea90`), verde secundário (`#0ca579`) e cinzas (`#6b6b6b` e `#c1c1c1`). Use variantes de contraste quando a cor for aplicada a texto ou foco.
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
- Use Jest e Testing Library. Os testes atuais cobrem áreas principais, alternância de tema, logo por tema, navegação ativa e validação do formulário.
- Antes de entregar, execute `make check` (lint, testes e build). Se o wrapper do pnpm estiver indisponível, execute os binários locais equivalentes e informe o motivo.
- O pre-commit executa `pnpm lint` e `pnpm test`; mantenha ambos aprovados.
- Formate e organize imports com Biome. Não use `any`.

## Documentação

- Consulte `docs/ARCHITECTURE.md` para a implementação atual.
- Consulte `docs/REQUIREMENTS.md` para requisitos de produto, conteúdo e qualidade.
- Consulte `.codex/skills/portfolio-frontend/SKILL.md` antes de executar mudanças de frontend neste projeto.
