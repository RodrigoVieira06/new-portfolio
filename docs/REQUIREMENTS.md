# Requisitos do portfólio

## Finalidade

O portfólio apresenta Rodrigo Vieira Lima para oportunidades CLT em desenvolvimento frontend. A experiência deve facilitar a avaliação por recrutadores, gestores e pessoas técnicas, sem linguagem publicitária.

## Conteúdo confirmado

As informações profissionais são mantidas em `src/data/portfolio.ts` e incluem experiência na Hitss Brasil, Levva, QUAY, Nasajon e LIPCAT, além de competências em React, TypeScript, microfrontends, FastAPI/BFF, Zustand e Jest/RTL. Alterações devem ser confirmadas antes de entrar na página.

## Requisitos funcionais

1. Exibir as seções Sobre, Experiência, Portfólio e Contato em uma única página.
2. Manter header fixo com navegação por âncoras e compensação para o topo.
3. Oferecer temas claro e escuro; usar a preferência do sistema no primeiro acesso e permitir troca manual persistida.
4. Exibir fundo decorativo de partículas desfocadas, contínuo, sem interação por mouse e desativável para pessoas que preferem reduzir movimento.
5. Exibir formulário com validação de nome, e-mail e mensagem e abertura segura de `mailto:`; não enviar nem salvar dados.
6. Manter a seção de portfólio como estado de preparação até existirem cases publicáveis.

## Requisitos de conteúdo e tom

- Escrever em português brasileiro, de modo concreto e profissional.
- Direcionar a mensagem a oportunidades CLT.
- Não declarar disponibilidade para oportunidades sem confirmação explícita.
- Priorizar responsabilidades, tecnologias e histórico verificável.
- Evitar promessas, chamadas de venda, slogans e frases de impacto.

## Direção visual

- Usar branco, preto e os tons ciano, laranja e rosa da logo como cores de destaque.
- Tokens principais: ciano `#00d8c9`, laranja `#ff9d3d` e rosa `#f63770`, com variantes de contraste por tema.
- Manter a interface minimalista, responsiva, com foco visível e contraste adequado.
- Partículas são decorativas: não podem dificultar leitura ou interação. Sob blocos de texto, devem receber desfoque adicional por uma superfície translúcida.
- As habilidades usam logotipos decorativos de tecnologias confirmadas, mantendo seus nomes como texto acessível.
- Arquivos de marca devem permanecer em `src/assets/logo/`. Ao incluir novas imagens, organize-as em subpastas por finalidade e mantenha `src/assets/` sem arquivos de logo na raiz.

## Critérios de aceite para mudanças

1. Dados profissionais continuam centralizados e confirmados.
2. Os dois temas permanecem utilizáveis e com contraste suficiente.
3. A navegação por teclado e a responsividade não regressam.
4. Novos comportamentos têm testes adequados.
5. `make check` passa antes da entrega.
