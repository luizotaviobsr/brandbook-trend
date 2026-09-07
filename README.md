# Handoff · Biblioteca de modelos de publicação · Trend Science

## Overview

Biblioteca de **25 composições** de post 1:1 (1080 × 1080 px) para a Trend Science, organizadas em **13 famílias** distribuídas entre Capas, Miolos, Transições/Sínteses, Fechamentos, Miolos científicos, Miolo regulatório, Miolo de processo, Miolo documental e Referências.

Cada composição vem com ficha técnica em HTML (fora da área exportável) descrevendo função, elementos fixos, medidas atuais em `cqi` (container query inline) e equivalência em px @1080, faixas recomendadas, limites de conteúdo por linhas/caracteres, regras para conteúdo ausente, condições que exigem uma segunda tela e combinações recomendadas.

A biblioteca cobre todos os sete layouts identificados como lacunas nas etapas iniciais.

## About the Design Files

Os arquivos aqui são **referências de design em HTML** — protótipos que mostram a composição, hierarquia e comportamento pretendidos, **não código de produção para colar direto**. A tarefa do desenvolvedor é **recriar essas composições no ambiente da codebase** (React, Vue, SwiftUI, Flutter, native, ou a stack escolhida se ainda não houver uma) usando padrões e libs já estabelecidos.

Peculiaridades importantes:

1. **Container Queries são estruturais.** Todo o sistema de tipografia usa unidades `cqi`. O post é `container-type: inline-size` e cada tamanho é fração da largura do post. Isso permite que os posts escalem entre thumb (400 px) e exportação real (1080 px) sem media queries. Se o alvo não suporta CQ nativamente, faça JS de fallback ou fixe o container em largura de referência antes de renderizar.
2. **Fichas técnicas embutidas.** Existem `<dl class="spec">` como documentação inline fora da área exportável. Quando o design virar componente, o conteúdo dessas fichas vira Storybook doc / README de componente. **Não devem ir para a peça publicada.**
3. **Área exportável** é exclusivamente o `.post` (quadrado 1:1). Tudo fora dele — `.post-caption`, `.spec`, `.section-heading`, `.doc-block` — é documentação.

## Fidelity

**High-fidelity (hifi)** — tipografia, tamanhos, pesos, espaçamentos e cores estão definidos com precisão. Placeholders cinza listrados marcam onde entra foto real; imagens de referência (cromossomos e placa de Petri) estão em `assets/` para reproduzir o overlay preto característico. Textos exibidos são exemplos institucionais adequados à função de cada layout, escritos dentro do léxico da marca. Modelos com conteúdo científico ou regulatório usam placeholders explícitos entre colchetes e são marcados como **estrutura demonstrativa** — nenhum dado real foi inventado.

## Estrutura da biblioteca

Nomenclatura: `C##` capas, `M##` miolos, `T##` transições/sínteses, `F##` fechamentos. Variantes funcionais de uma mesma família levam sufixo `A`, `B` (ou etapa numerada em séries).

### Capas (6 composições)

| Código | Nome | Identificador original |
|---|---|---|
| C01 · A | Capa fotográfica com apoio | 01 |
| C01 · B | Capa fotográfica com apoio (variante) | 02 |
| C02 | Capa editorial tipográfica | 05 |
| C03 | Capa fotográfica de duas escalas | 08 |
| C04 | Capa com chamada superior | 10 |
| C05 | Capa de título extenso | 11 |

### Miolos gerais (7 composições)

| Código | Nome | Identificador original |
|---|---|---|
| M01 | Lista visual detalhada | 03 |
| M02 | Explicação com nota complementar | 06 |
| M03 | Explicação inferior | 06b |
| M04 | Explicação superior | 06c |
| M05 | Lista visual curta | 07 |
| M06 | Afirmação com contexto | 09 |
| M07 | Conjunto de termos | 14 |

### Transições e sínteses (3 composições)

| Código | Nome | Identificador original |
|---|---|---|
| T01 · A | Duas afirmações | 04 |
| T01 · B | Duas afirmações · fechamento com assinatura | 12 |
| T02 | Três faixas visuais | 13 |

### Fechamentos (2 composições)

| Código | Nome | Base |
|---|---|---|
| F01 · A | Fechamento institucional · sem convite | T01 · B |
| F01 · B | Fechamento institucional · com convite | F01 · A |

### Miolos científicos (3 composições)

| Código | Nome | Base |
|---|---|---|
| M08 | Ficha de estudo científico | M01 + M04 |
| M09 · A | Resultado em contexto · dado principal | C04 |
| M09 · B | Resultado em contexto · gráfico de barras | M09 · A |

### Miolo regulatório (1 composição)

| Código | Nome | Base |
|---|---|---|
| M10 | Atualização regulatória | M02 |

### Miolo de processo (3 aplicações da mesma família)

| Código | Nome | Base |
|---|---|---|
| M11 · etapa 01 | Etapa numerada com responsabilidade — prescrição | M04 |
| M11 · etapa 02 | Etapa numerada com responsabilidade — manipulação/importação | M04 |
| M11 · etapa 03 | Etapa numerada com responsabilidade — verificação documental | M04 |

### Miolo documental (2 aplicações)

| Código | Nome | Base |
|---|---|---|
| M12 · 2 comentários | Documento comentado — laudo de lote | M03 |
| M12 · 3 comentários | Documento comentado — licença sanitária | M03 |

### Referências e notas (2 telas paginadas)

| Código | Nome | Base |
|---|---|---|
| M13 · 1/2 | Referências · primeira tela | M05 |
| M13 · 2/2 | Referências continuadas + notas + como citar | M05 |

## Sistema visual (design tokens)

### Tipografia

- **Família única:** Inter Tight (Google Fonts), pesos 300 (light) e 400 (regular).
  - 400 para títulos, headlines, brand e labels.
  - 300 para textos de apoio, descrições, notas e rodapés.
- **Fraunces** carregada por compatibilidade histórica, **não usada** em nenhuma composição publicada; pode ser removida do `<link>` do Google Fonts sem impacto visual.
- Alinhamento de headlines: `text-wrap: balance` (com exceções pontuais para `nowrap` ou `pretty` documentadas por ficha).
- Letter-spacing padrão: `-0.02em` em headlines, `0.18em` em eyebrows, `0.28em` em rodapés caps, `0.32em` em brand caps.

### Cores

| Token | Hex | Uso |
|---|---|---|
| Placeholder cinza | `#d9d9d9` | Fundo sem foto |
| Listra do placeholder | `rgba(0,0,0,0.035)` a 135°, ciclo 22 px | Textura suave |
| Fundo página | `#f4f4f2` | Fora da área exportável |
| Fundo branco (posts) | `#ffffff` | C02 · M01 · M05 · M07 · F01 · M08 · M09 · M10 · M11 · M12 · M13 |
| Overlay preto sobre foto | `rgba(0,0,0,0.42)` | Todos os posts com `has-bg` |
| Texto sobre foto/escuro | `#ffffff` | — |
| Texto sobre branco (headline) | `#111111` | — |
| Texto sobre branco (descrição) | `#333333` · `#555555` | — |
| Brand secundário | `#8a8a8a` | Brand no topo em posts brancos e rótulos caps |
| Small/qualificador | `#555555` | Textos auxiliares em fichas de estudo |
| Destaque seta (listas) | `#c96a2b` | Coluna arrow do `.row` |
| Destaque colorido sobre foto | `#f5b8b8` | Palavra em destaque no C04 |
| Destaque colorido sobre branco | `#8a1a1a` | (reserva para C04 sobre fundo branco) |
| Fundo suave documento | `#faf9f6` | Recorte de documento em M12 |
| Régua fina | `rgba(0,0,0,0.08)` a `rgba(0,0,0,0.12)` | Separadores em M08, M09, M10, M12, M13, F01 |
| Etiqueta editorial | `#8a5a1a` | "revisar antes de publicar" em M10 |
| Verde de status (mapa de lacunas) | `#f4faf4` | Itens entregues |

### Escala tipográfica (em cqi, relativa à largura do post)

| Elemento | Tamanho |
|---|---|
| Brand caps | 2.2–2.3cqi |
| Eyebrow | 2.4cqi |
| Footer caps | 2.2cqi |
| Row · name | 2.3cqi |
| Row · qualificador (small) | 1.8cqi |
| Row · descrição | 2cqi |
| Pill | 2.6cqi |
| Switch card | 2.7cqi (b: 2.5cqi) |
| Sub-headline | 3–3.8cqi |
| Descrição M11 | 2.4cqi |
| Comentário M12 | 2cqi (comentário lateral) · 1.8cqi (texto do documento) |
| Item de referência M13 | 2cqi |
| Rótulo de seção M13 · M11 · M12 | 1.7–1.9cqi caps |
| Headline (varia por modelo) | 4.4–9cqi |
| Palavra do stack (T02) | 6.5cqi (ajustado) — faixa máx. 9cqi na ficha |
| Numeração de etapa (M11) | 14cqi |
| Dado principal (M09 · A) | 16cqi |
| Seta circular | 9cqi × 9cqi |

Conversão para 1080 × 1080: `1cqi ≈ 10.8 px`. Uma headline em 6.5cqi ≈ 70 px.

### Espaçamento

- Padding padrão do `.p-inner`: `9cqi` (modelos originais).
- Modelos novos com grid de metadados: `7cqi` (M08, M09, M10, M11, M12, M13) ou `8cqi` (F01) — reduzido para ganhar largura útil.
- Gaps internos: 2.4–5cqi.
- Padding em pills: `1.2cqi 2.4cqi`.
- Padding em cards: `3.5cqi 4cqi`.

### Border-radius

- Post: `2px`.
- Pills: `99px`.
- Card informativo: `2cqi`.
- Seta, thumbs e círculos de marcador: `50%`.
- Área de documento (M12): sem radius, borda fina `rgba(0,0,0,0.12)`.

### Shadow

- Post: `0 2px 0 rgba(0,0,0,0.04), 0 30px 60px -30px rgba(0,0,0,0.18)`.
- Placeholder cinza tem gradiente radial interno `rgba(255,255,255,0.35) → transparent`; desligado quando há imagem (`.has-bg::before { display:none }`).

## Léxico da marca aplicado

Termos oficiais usados nos exemplos textuais e nos rótulos das peças:

- **Trend Science** (duas palavras, iniciais maiúsculas)
- **Representante Credenciado** (sem acento, iniciais maiúsculas)
- **Grupo de representação médica** (categoria)
- **Protocolos clínicos avançados** (sempre plural)
- **Medicamentos de origem credenciada**
- **Continuidade do tratamento**
- **Verificação documental dupla** (conferência documental, nunca do produto)
- **Segue sem intervalo** (substitui expressões negativas)

Assinatura oficial, usada apenas em fechamento (T01 · B, F01 · A, F01 · B): *"A ciência de facilitar o trabalho de quem cuida."*

Responsabilidades em M11 respeitam o brandbook:

- Médico → prescrição e conduta clínica.
- Farmácia parceira → dispensação e manipulação.
- Time farmacêutico Trend Science → verificação documental dupla.
- Representante Credenciado → acompanhamento do fornecimento e contato com a clínica.

**Prescrição e decisão clínica nunca são atribuídas** à Trend Science ou ao Representante Credenciado.

Termos verificados como ausentes nas peças publicáveis: *tudo, completo, líder, inovador, interface, ecossistema, jornada do paciente, medicina integrativa, consultor, executivo de contas, parceiro comercial* (como nome do Representante). Travessão e hífen como pausa não aparecem — substituídos por vírgula, parênteses ou duas frases.

## Interactions & Behavior

Posts estáticos para publicação. Nenhuma animação obrigatória. Se transformados em componentes web:

- **Responsividade automática** via `container-type: inline-size` + `cqi`; sem media queries.
- **Grid da biblioteca:** `repeat(auto-fill, minmax(420px, 1fr))`, gap `48px 40px`.
- **Sem estados** (hover, focus, loading) — são peças de saída, não UI interativa.

## Fichas técnicas

Cada modelo carrega uma `<dl class="spec">` inline com:

- Função principal e usos secundários.
- Modelo-base (para os modelos novos).
- Elementos obrigatórios e opcionais.
- Elementos fixos.
- Medidas atuais em cqi (e px @1080).
- Faixas de conteúdo (linhas por campo, caracteres/linha).
- Quantidade máxima de blocos, comentários ou itens por tela.
- Regras para conteúdo ausente (omitir a linha sem espaço residual).
- Regras de imagem/recorte (M12).
- Condições que exigem uma segunda tela.
- Limites testados e limites ainda não validados.
- Quando não usar (indicando o modelo alternativo).

As fichas ficam abaixo da legenda do post, fora do quadro 1:1 exportável.

## Guia de combinações de carrossel

O HTML traz uma seção "Orientação de carrosséis" com sete tipos e três carrosséis institucionais previstos:

1. **Explicativo** — `C01·A → M02 → M04 → M06 → F01·A`
2. **Processo em etapas** — `C01·B → M11·01 → M11·02 → M11·03 → F01·A`
3. **Explicação documental** — `C01·A → M04 → M12 → M06 → F01·A`
4. **Lista comentada** — `C05 → M01 → M03 → M06 → T01·B`
5. **Editorial fotográfico** — `C02 → M03 → M04 → M03 → T01·A`
6. **Análise científica** — `C05 → M08 → M09·A → M06 → M13 → F01·A`
7. **Atualização regulatória** — `C01·B → M10 → M04 → F01·A`

Regra inicial de uso: **uma família de capa** e **até dois modelos principais de miolo por carrossel**, para preservar hierarquia e ritmo visual. O uso de M13 não elimina a identificação breve da fonte junto ao dado em M09.

Carrosséis institucionais previstos:

- **O papel da Trend Science** → explicativo · `C02 → M04 → M02 → M07 → T01·B`
- **Como o fornecimento é acompanhado** → processo em etapas · `C01·B → M11 × 4 etapas → F01·A`
- **O relacionamento com a clínica** → lista comentada · `C05 → M01 → M03 → M06 → F01·B`

## Mapa de lacunas

Todos os sete layouts identificados como lacunas foram entregues:

1. ✓ Fechamento institucional com assinatura (F01 · A / B)
2. ✓ Etapa numerada com responsabilidade (M11)
3. ✓ Documento comentado (M12)
4. ✓ Ficha de estudo científico (M08)
5. ✓ Resultado com gráfico ou dado contextualizado (M09 · A / B)
6. ✓ Atualização regulatória (M10)
7. ✓ Referências e notas (M13)

## Assets

- `assets/bg-cromossomos.jpg` — micrografia em verde-azulado (~177 KB), usada como fundo em C01·A, M02, M04, M06, C04, T01·B, faixas 1 e 3 de T02
- `assets/bg-petri.jpg` — placa de Petri com bolhas (~43 KB), usada em C01·B, C03, M03, T01·A, C05, faixa 2 de T02

Imagens de referência: substituir por fotografia editorial da Trend Science em produção. A licença das imagens de referência não foi verificada, **não redistribuir fora deste bundle**.

Fontes: Google Fonts — Inter Tight. (Fraunces está no `<link>` mas não é mais usada.)

## Files

- `Replicas.html` — arquivo vigente com a biblioteca completa (25 composições), fichas técnicas, guia de carrosséis, mapa de lacunas e bloco de verificação
- `Replicas_v2.html` — versão preservada após F01, M08, M09 e M10 (antes de M11, M12, M13)
- `Replicas_v1_original.html` — versão inicial preservada, antes da adaptação Trend Science
- `assets/bg-cromossomos.jpg`
- `assets/bg-petri.jpg`

## Verificação executada

Registrada no bloco final do HTML. Resumo:

- **Preservação visual:** nenhum estilo ou classe dos modelos anteriores foi alterado em nenhuma etapa. Composições, tipografia, cores, imagens e proporções mantidas.
- **Novos modelos usam a linguagem visual existente:** Inter Tight pesos 300/400, fundo branco em modelos informativos, réguas finas, rótulos caps espaçados, círculos de marcador com borda fina. Nenhum novo tratamento gráfico foi introduzido.
- **Léxico:** verificação manual da lista de termos proibidos — nenhum encontrado nas peças publicáveis.
- **Assinatura oficial:** presente apenas em T01·B, F01·A e F01·B. Nunca forçada em outros modelos.
- **Conteúdo científico e regulatório:** M08, M09 e M10 apresentados como *estrutura demonstrativa* com placeholders entre colchetes. Nenhum autor, periódico, amostra, resultado, norma ou órgão real inventado.
- **M11 série demonstrativa:** posições e escalas repetidas entre as três etapas verificadas visualmente. Responsabilidades respeitam o brandbook.
- **M12:** marcadores no documento em escala reduzida (2cqi) ficam fora da linha de dados a serem lidos. Correspondência clara entre número do documento e comentário lateral (3.4cqi). Estrutura ilustrativa sem simular documento oficial autêntico.
- **M13:** paginação "n/total" no canto superior direito, numeração contínua entre telas (1–4 na primeira, 5–6 na segunda), distinção entre referência numérica e nota editorial (`a, b, c`).
- **Fichas técnicas:** fora da área exportável.
- **Cópias preservadas:** `Replicas_v1_original.html` e `Replicas_v2.html`.

Limites ainda não validados visualmente: os máximos de caracteres/linha nas fichas são derivados da largura útil e do tamanho da fonte. Casos específicos (recorte horizontal em M12, referência com 3 linhas em M13, dado com 5+ dígitos em M09·A, texto regulatório longo em M10, convite mais longo em F01·B, descrição M11 com 4+ linhas) estão listados no bloco de verificação do HTML. **Antes de virar produção, textos reais precisam ser validados quadro a quadro.**

Quando o conteúdo exceder a capacidade: (1) editar o texto, (2) dividir em duas telas, ou (3) escolher outro modelo. **Nunca reduzir a fonte para caber.**

## Notas de implementação

1. **Componentização sugerida** — cada família (C01, M02, T01, F01, M08, M09, M10, M11, M12, M13…) vira um componente com props para brand, headline, sub, eyebrow, footer, backgroundImage, hasWhiteBg, campos específicos (numeração, dado, unidade, metadados, marcadores, referências). Fichas técnicas viram Storybook stories.

2. **Exportação** — o `.post` é a caixa exportável (1:1); tudo fora dela fica de fora. Um pipeline de export (Puppeteer/Playwright) deve targetar `.post` diretamente.

3. **Tipografia em `cqi`** — se o alvo não suporta Container Queries, use uma classe alternativa que fixa o container em 1080 px e converte cqi → px direto.

4. **`text-wrap: balance`** é usado em headlines; fallback aceitável se não suportado. Alguns modelos novos usam `nowrap` explícito para respeitar quebras `<br>` — documentado por ficha.

5. **Estrutura de camadas nos posts com foto:**

   ```
   .post.has-bg
     ├── <img class="bg-img"> (z-index 0)
     ├── <div class="bg-overlay"> (rgba(0,0,0,0.42), z-index 0)
     └── <div class="p-inner"> (z-index 1)
   ```

6. **Modificadores do wrapper `.post`:** `has-bg` desliga o gradiente radial default; `white-bg` força fundo branco e desliga o placeholder; `.p-inner.dark` inverte cor de texto para preto.

7. **Componentes de marcador e círculo numerado** aparecem em M12 e M13 — vale extrair como átomo reutilizável no design system do desenvolvedor (`<CircleMarker size="sm|md" number="1" />`).

8. **Grid de metadados** aparece em M08, M09, M10, M11, M12, M13 e F01 com variações (2 colunas, `auto 1fr`, `1fr 42%`, `32% 1fr`). Vale como padrão de layout tipográfico documentado.
