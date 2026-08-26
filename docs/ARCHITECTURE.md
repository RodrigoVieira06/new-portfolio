# Arquitetura e contexto para IAs

## Propósito

Este repositório contém o portfólio público de Rodrigo Vieira Lima, direcionado a oportunidades CLT em desenvolvimento frontend. A prioridade é comunicar experiência profissional confirmada de modo objetivo, acessível, responsivo e fácil de manter.

## Mapa do sistema

```text
App
├── ParticleBackground  partículas decorativas desfocadas e contínuas
├── useOpeningSequence  controla os estágios da abertura inicial
├── Header              navegação por âncoras, fixa, e alternância de tema
├── Hero                apresentação progressiva, CTAs e retrato pessoal
├── About               narrativa e habilidades
├── Experience          carrossel de empresas e responsabilidades
│   └── Carousel        navegação acessível e estado do item ativo
├── Portfolio           carrossel de projetos independentes
│   └── Carousel
├── Education           formação acadêmica confirmada
└── Contact             formulário validado e mailto seguro
    └── useContactForm  schema Zod + React Hook Form
```

## Decisões

- `src/data/portfolio.ts` é a fonte única para experiências, projetos, formação e skills. Alterar conteúdo lá antes de alterar a visualização.
- As seções compõem a página e não devem acessar APIs diretamente.
- `src/components/ui` concentra primitivos no padrão shadcn: composição, variantes CVA e `cn`.
- SCSS é global por escolha deliberada para uma landing compacta. Novos estilos devem usar o prefixo da seção/componente.
- O tema é controlado por `data-theme` no elemento `html`. A preferência segue o sistema no primeiro acesso e fica persistida como `theme`.
- `useOpeningSequence` controla a abertura em quatro marcos de um segundo: título, retrato, descrição e página completa. Até o último marco, `App` monta somente o Hero progressivo e usa `app--opening` para bloquear a rolagem. Cada bloco revelado, inclusive `hero__description`, possui sua própria animação de entrada. Com `prefers-reduced-motion`, o hook vai diretamente a `complete`.
- O `Header` usa `src/assets/logo/logo-rv.png`, logo transparente com apenas o símbolo `{RV}`; ela funciona nos dois temas sem troca de arquivo.
- Os assets locais são organizados por finalidade. `src/assets/logo/` concentra os arquivos de marca e `src/assets/personal/` as fotos pessoais; demais imagens devem entrar em subpastas semânticas ao serem incluídas, sem assets na raiz de `src/assets/`.
- O Hero usa `src/assets/personal/personalPhoto.jpg` em um `img` acessível, preenchendo e recortando o card com `object-fit: cover`, sem alterar sua orientação. A foto é pré-carregada e decodificada antes de seu fade, com dimensões intrínsecas explícitas. A cópia reserva sua altura final durante a abertura, evitando reposicionamentos quando descrição e ações são montadas. O Grid posiciona visualmente o retrato à esquerda do texto, preservando o texto primeiro na ordem semântica. O card não contém gradiente nem textos, e o link do LinkedIn fica externo, à esquerda dele.
- A paleta de destaque deriva da logo: ciano, laranja e rosa, combinados com superfícies brancas e pretas. Os tokens ficam em `src/styles/globals.scss`.
- `ParticleBackground` é decorativo, usa `aria-hidden`, não responde ao cursor e respeita `prefers-reduced-motion`.
- A classe global `text-backdrop` é aplicada aos blocos textuais para desfocar as partículas abaixo deles e preservar a leitura.
- A grade de habilidades recebe `iconUrl` dos dados profissionais e renderiza logotipos decorativos, com o nome da tecnologia preservado no conteúdo.
- `Carousel` mantém localmente o índice ativo, exibe uma peça por vez e oferece navegação circular por botões, indicadores e setas do teclado. Não há avanço automático, preservando controle e legibilidade.
- `Experience` associa as imagens de `src/assets/experience/` às empresas. `Portfolio` usa `src/assets/projects/` e mantém LIPCAT fora do histórico empresarial. `Education` usa `src/assets/education/` para FAETERJ-Rio e IFRJ.
- O formulário usa `mailto:`. Não inventar endpoint. Se houver backend, trocar a implementação de `onSubmit` no hook e manter o schema e os testes.

## Regras de evolução

1. Para um novo case, criar o tipo e dados em `src/data`, depois o componente de apresentação.
2. Escrever/atualizar testes antes ou junto da regra de interface alterada.
3. Manter HTML semântico, foco visível e contrastes adequados.
4. Nunca adicionar informação profissional não confirmada pelo currículo ou por Rodrigo.
5. Antes de entregar: `make check`.

## Qualidade

- Jest e Testing Library cobrem o conteúdo estrutural, disponibilidade CLT, alternância de tema, navegação do carrossel, conteúdo profissional, formação e validação do formulário.
- Biome faz lint, formatação e organização de imports.
- Lefthook executa lint e testes no pre-commit. `make check` reúne lint, testes e build.
- Consulte `AGENTS.md` e `docs/REQUIREMENTS.md` para as regras completas de evolução.

## Limites

- Não há backend, analytics, CMS ou armazenamento de formulário.
- O Hero usa a foto local em `src/assets/personal/personalPhoto.jpg`, apresentada em um `img` com `alt="Rodrigo Vieira Lima"` e dimensões responsivas.
