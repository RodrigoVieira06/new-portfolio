# Requisitos do portfólio

## Finalidade

O portfólio apresenta quem Rodrigo Vieira Lima é profissionalmente, sua trajetória em tecnologia e os trabalhos que desenvolveu. A experiência deve tornar responsabilidades, competências e decisões técnicas fáceis de compreender, sem linguagem publicitária.

## Conteúdo confirmado

As informações profissionais são mantidas em `src/data/portfolio.ts` e incluem experiência na Hitss Brasil, Levva, QUAY e Nasajon; a progressão de qualidade de software para desenvolvimento frontend; o projeto independente LIPCAT/UFRJ; formação na FAETERJ-Rio e no IFRJ; e as competências confirmadas nos currículos. `docs/personal/Profile.pdf` funciona como referência documental complementar, mas os dados exibidos continuam centralizados no arquivo tipado.

## Requisitos funcionais

1. Exibir as seções Sobre, Experiência, Projetos, Formação e Contato em uma única página.
2. Manter header fixo com navegação por âncoras e compensação para o topo.
3. Oferecer temas claro e escuro; usar a preferência do sistema no primeiro acesso e permitir troca manual persistida.
4. Exibir fundo decorativo de partículas desfocadas, contínuo, sem interação por mouse e desativável para pessoas que preferem reduzir movimento.
5. Exibir formulário com validação de nome, e-mail e mensagem e abertura segura de `mailto:`; não enviar nem salvar dados.
6. Exibir experiências e projetos em carrosséis separados, com controles por botões, indicadores e teclado, sem rotação automática.
7. Apresentar o LIPCAT como projeto independente, sem período ou vínculo empresarial.
8. Exibir a formação acadêmica confirmada com as identidades visuais da FAETERJ-Rio e do IFRJ.
9. Exibir uma abertura inicial em quatro etapas de um segundo: título, retrato, função e descrição, depois o restante da página. A rolagem deve ficar bloqueada até a última etapa; pessoas com `prefers-reduced-motion` recebem a página completa de imediato.

## Requisitos de conteúdo e tom

- Escrever em português brasileiro, de modo concreto e profissional.
- Apresentar trajetória, trabalhos e identidade profissional por seu contexto e relevância técnica.
- Não declarar disponibilidade nem oferecer serviços sem confirmação explícita.
- Priorizar responsabilidades, tecnologias e histórico verificável.
- Evitar promessas, chamadas de venda, slogans e frases de impacto.

## Direção visual

- Usar branco, preto, verde e cinza da nova marca como base da interface.
- Tokens da marca: verde vivo `#00ea90`, verde secundário `#0ca579`, cinza `#6b6b6b` e cinza-claro `#c1c1c1`, com variantes de contraste por tema.
- Manter a interface minimalista, responsiva, com foco visível e contraste adequado.
- Partículas são decorativas: não podem dificultar leitura ou interação. Sob blocos de texto, devem receber desfoque adicional por uma superfície translúcida.
- As habilidades usam logotipos decorativos de tecnologias confirmadas, mantendo seus nomes como texto acessível.
- Os arquivos-fonte da identidade ficam em `src/assets/brand/`, as variantes usadas pela interface em `src/assets/logo/` e fotos pessoais em `src/assets/personal/`. Ao incluir novas imagens, organize-as em subpastas por finalidade e mantenha `src/assets/` sem assets na raiz.
- Marcas de empregadores ficam em `src/assets/experience/`, imagens de projetos em `src/assets/projects/` e instituições de ensino em `src/assets/education/`.
- O card de retrato do Hero exibe somente a foto local, recortada para preencher o espaço e com orientação original. Ele fica visualmente à esquerda do texto em todos os tamanhos; não deve conter gradiente, iniciais ou cargo. Apenas o link do LinkedIn permanece como detalhe externo à esquerda do card.

## Critérios de aceite para mudanças

1. Dados profissionais continuam centralizados e confirmados.
2. Os dois temas permanecem utilizáveis e com contraste suficiente.
3. A navegação por teclado e a responsividade não regressam.
4. Novos comportamentos têm testes adequados.
5. `make check` passa antes da entrega.
