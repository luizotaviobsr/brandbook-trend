# Handoff: Trendscience Brandbook v3.1 · VIGENTE

> **Versão do conteúdo verbal:** REV 2, publicada em 02/09/2026, revisada em
> duas rodadas pelo Luiz Otavio B S Rocha. A fonte da verdade textual está
> em `reference/PROMPT-publicar-texto-final-VIGENTE.md` — respeite esse
> texto **verbatim** em qualquer reimplementação. O bundle carrega também
> `reference/trendscience-v3-prompt.md` (rodada anterior), `guia de slides`
> e `MEDICAO deck real` para contexto histórico.

## Overview

Sistema completo de identidade e comunicação da **Trendscience** entregue em **cinco produtos integrados** que compartilham uma única fonte de verdade visual + regras editoriais absolutas:

1. **Brandbook institucional v3.1** (`index.html`) — documento estratégico completo. **13 capítulos publicados**: A marca, Para quem, Pilares, O que sustenta a operação, Compromissos com o cliente, Portfólio, Como funciona, Provas, Qualidade e conformidade (com Uso responsável embutido), Como a marca escreve, A marca falando, Design System (12.1 a 12.7), Aplicações e materiais. **Todas as regras editoriais REV 2 aplicadas verbatim**.
2. **Padrão Apresentação** (`Padrão Apresentação.html`) — shell + galeria de slide 16:9 (1920×1080) em grid navegável com fullscreen modal + a seção **14.3 · Como construir os slides** (guia integral da régua de construção). **Pool de templates esvaziado em 07/09/2026 — sistema em reconstrução.**
3. **Padrão A4** (`Padrão A4.html`) — shell + galeria A4 retrato 210×297mm (794×1123px @96dpi). **Pool de templates esvaziado em 07/09/2026 — sistema em reconstrução.**
4. **Padrão Publicações e Criativos** (`Padrão Publicações e Criativos.html`) — shell + galeria de redes sociais em 6 formatos (Feed 4:5, Story/Reels 9:16, Carrossel série 5, LinkedIn horizontal 1200×627, LinkedIn PDF vertical 1080×1350, Highlight 1080×1920). **Pool de templates esvaziado em 07/09/2026 — sistema em reconstrução.**
5. **Fotografia** (`Fotografia.html`) — biblioteca curada de referências fotográficas por categoria e cenário.

Os cinco produtos vivem em uma sidebar unificada com 16 itens agrupados em três blocos: **Verbal** (11), **Visual** (2) e **Materiais** (3+).

---

## About the Design Files

Os arquivos deste bundle são **referências de design criadas em HTML** — protótipos de alta fidelidade demonstrando a aparência, o conteúdo e o comportamento pretendidos, **não código de produção para copiar diretamente**.

A tarefa do dev é **recriar esses designs no ambiente existente do codebase** (React, Vue, Next, Astro, Nuxt, SwiftUI, Flutter, native etc.) usando os padrões e bibliotecas já estabelecidos naquele projeto. Se não houver ambiente pré-existente, escolha o framework mais adequado (recomendação: Next.js + Tailwind ou similar, dado que o design usa muito CSS Grid moderno e web fonts).

Os design tokens (cores, tipografia, ícones) e as regras editoriais documentadas abaixo **são a fonte de verdade** — sempre use os valores exatos, não a implementação HTML/CSS deste bundle como referência de código.

---

## Fidelity

**High-fidelity (hifi) — pixel-perfect + copy-perfect.** As cinco telas foram construídas com valores absolutos e escala tipográfica calibrada em píxels reais. Toda a copy é final (VIGENTE, aprovada em duas rodadas). O dev deve reproduzir com fidelidade total, incluindo texto literal onde ele estiver escrito.

---

## 9 pontos verbais que não se alteram em nenhuma revisão futura

Do prompt VIGENTE (`reference/PROMPT-publicar-texto-final-VIGENTE.md`, seção 3):

1. **O bloco "Uso responsável" não se suaviza.** As três negações em série ("Não fornecemos… não orientamos… não tratamos desempenho como produto de prateleira") são o **conteúdo** da seção, não estilo. Não fundir as frases, não abrandar, e **não trocar a palavra "desempenho"**. O público desse bloco é regulador, jornalista e cético, não cliente.
2. **A Visão termina em "quando o tratamento não pode parar".** Esse eco é a parte que diz *por que* confiar; sem ele a frase vira confiança genérica. O fecho fica no fim da frase, não no meio.
3. **"Inteligência sobre o paciente e o protocolo" não é inteligência de mercado.** O que volta ao médico é leitura do caso dele. A frase diz "não como estatística de mercado" de propósito, e essa oração não se corta.
4. **Em "Curadoria técnica", a decisão clínica é sempre do médico.** A Trendscience responde pela segurança técnica da formulação e atua de forma consultiva. Não escrever nada que sugira participação na conduta clínica.
5. **A conferência documental dupla é diferencial e precisa continuar nomeada.** Não simplificar para "o laudo fica disponível".
6. **Nunca travessão ou hífen como pontuação, sempre vírgula.** Se a vírgula não sustenta a frase, dividir em duas frases. Esta é a régua mais ampla da marca, vale em todos os materiais.
7. **"Medicina integrativa", nunca "medicina integrativa e alta performance".** A expressão foi retirada da categoria da empresa. Ainda vive em material antigo; sem esta linha alguém a reintroduz achando que está restaurando o padrão. A **única ocorrência preservada** no brandbook é dentro do Léxico travado (cap 10), como citação intencional que ensina a não usá-la.
8. **"Representante Credenciado" sempre em maiúscula.** É termo do léxico da marca, não descrição de cargo.
9. **O leitor é o sujeito da frase.** "Você prescreve. A gente garante" é a régua. Vocabulário de logística (entregar, viabilizar) descreve a operação, não o que o médico ganha.

## Outras regras editoriais absolutas (aplicam-se a TODOS os sistemas)

### Categoria oficial
**A Trendscience é um grupo de representação médica especializado em comercialização, distribuição e importação de medicamentos usados na medicina integrativa.** Este é o boilerplate oficial. Deve aparecer literalmente em toda peça institucional.

### Alinhamento
Todo texto alinhado à esquerda em 100% dos templates. Exceção única: highlights de Instagram com ícone centralizado (`.tpl-highlight-icon`).

### Contraste em fundos escuros
Sobre fundo Ink ou Teal, títulos são sempre `#FFFFFF` 100%. **Nunca** teal como cor de destaque em fundo escuro.

### Overlays em imagens
**Preto puro `rgba(0,0,0, α)`.** Nunca Ink `#042A2B` com opacidade.

### Sublinhado nunca é usado
Destaque via **peso**, não por cor nem por decoração.

### Expressões proibidas em conteúdo publicado
- `ecossistema` (fora do contexto "ecossistema de tecnologia e inteligência artificial", que é nome da 3ª frente da operação)
- `interface`
- `jornada do paciente`
- `do pedido ao pós`
- `o que vem depois da prescrição`
- `indicação terapêutica` / `indicações`
- `medicina integrativa e alta performance`

**Exceção única** — todas essas expressões aparecem literalmente na coluna "Não escreva" da tabela do capítulo 10 "Como a marca escreve", como citações intencionais que ensinam a não usá-las.

### Frases proibidas
- `não acreditamos em volume`
- `resposta rápida não é diferencial de marketing`
- `não somos plataforma anônima nem call center`
- `nunca com um "estamos verificando"`
- `prazo dito é prazo cumprido`
- `dúvida enviada é dúvida respondida no mesmo turno`
- `movimentos de prescrição`
- `comportamento clínico`
- `mais adesão`

### Tratamento do médico
Em **texto institucional publicado**, o sujeito é sempre a Trendscience ou o Representante Credenciado. O médico aparece na terceira pessoa. **Nunca "você" endereçando o médico** em texto institucional.

**Exceção única:** nos exemplos de fala do capítulo 11 (A marca falando) o tratamento é **"senhor"** na primeira abordagem, com "você" liberado quando o médico abrir para isso. Além disso, no capítulo 02 (Para quem) as frases-âncora usam "você" porque endereçam o médico diretamente ("Você prescreve. A gente garante…") — essa é a régua 9 do VIGENTE.

### Grafias oficiais
- **Trendscience** — S minúsculo
- **Representante Credenciado** — sem acento, sempre com duas iniciais maiúsculas
- **medicina integrativa** — expressão fixa (nunca mais "medicina integrativa e alta performance")
- **grupo de representação médica** — categoria oficial

### Placeholder textual literal
Placeholders textuais nos templates de apresentação, A4 e publicações usam **"A Marca"** como texto de exemplo. É intencional — o sistema é uma biblioteca; conteúdo final é injetado pelo usuário na produção.

### Léxico travado
Expressões que não variam ao longo do sistema:
- `continuidade do tratamento` — território da marca
- `segue sem intervalo` — o que se diz numa mensagem de problema
- `verificação documental dupla` — a Trendscience confere a documentação mesmo quando a farmácia já conferiu. **Nunca** escrever que a Trendscience confere o produto ou o lote (ela não tem responsabilidade sanitária)
- `quando o tratamento não pode parar` — permitido só na visão

### Personalidade em uma linha
A Trendscience fala como quem resolve: **firme, não solene. Direta, não seca. Específica, não técnica. Presente, não insistente.** Não usa arquétipo. Não usa listas de adjetivos avulsos.

### Sem emoji, sem ícone unicode ad-hoc
A marca não usa emoji em nenhum contexto. Ícones vêm da biblioteca Lucide (stroke 2, round).

### Uso responsável — a exceção da exceção
Todo material da Trendscience segue a proibição de definição por negação. A única exceção é a **subseção Uso responsável (dentro do cap 09 Qualidade e conformidade)**, onde as três negações são o conteúdo: "não fornecemos para consumo por conta própria, não orientamos uso sem médico e não tratamos desempenho como produto de prateleira". Vale só nessa subseção — regulador precisa ler o limite escrito, não deduzido.

---

## Estrutura do Design System

### 1. Paleta oficial

**Cores fundacionais:**

| Nome | Hex | Uso |
|---|---|---|
| **Branco** | `#FFFFFF` | Fundos claros, texto sobre Ink/Teal |
| **Ink · Deep Petrol** | `#042A2B` | Texto principal, fundos escuros |
| **Teal** | `#007A7D` | Cor de acento única, exclusivamente sobre fundos claros |
| **Corpo** | `#2E3838` | Corpo de texto (subtítulo em Teal `#007A7D`) |

**Escala Teal:** `#E6F3F3` · `#C2E2E2` · `#8FCBCB` · `#5AB3B4` · `#2E9799` · `#007A7D` (primário) · `#00686B` · `#005457` · `#00393B` · `#042A2B`

**Escala Neutra:** `#F6F7F6` · `#ECEEEE` · `#DDE1E1` · `#C2C7C7` · `#9EA4A4` · `#737979` · `#565B5B` · `#3E4343` · `#262A2A` · `#0F1414`

**Semânticas:** Success `#12805C` · Warning `#B7791F` · Error `#B03A2E` · Info `#00686B`

**Regra Zero:** uma cor por bloco de texto, sempre a 100%. Sem opacidade em texto, sem degradê, sem texto bicolor. Ênfase se faz por **peso**, nunca por cor.

### 2. Tipografia

**Família:** `Inter Tight`. Uma só. Sem terceira fonte, sem itálico verdadeiro.

**Pesos oficiais:** 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold).

**Uso:**
- Título de seção e bloco: **Inter Tight 500** (display), com ênfase inline em **300 teal**
- Corpo: **Inter Tight 400**
- Eyebrow / tag / caixa alta: **Inter Tight 700** com `letter-spacing: 0.12em`
- Título em **Deep Petrol #042A2B**, subtítulo em **Teal #007A7D**, corpo em **Corpo #2E3838**
- Hierarquia vem de **peso + tamanho**, não de família

Import:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

### 3. Iconografia Lucide

```css
svg {
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}
/* Canvas 24×24, área útil 20×20 */
```

Tamanhos: 16px (compacto), 24px (padrão), 48px (destaque).

### 4. Padrão gráfico oficial

O único padrão gráfico é o **ícone-símbolo Trendscience** (viewBox `0 0 475 594`, 3 formas), aplicado em escala massiva e cortado por margens do frame. Nunca decompor, rotacionar, espelhar ou deslocar.

---

## Screens / Views

### VIEW 1 · Brandbook Institucional v3.1 (`index.html`)

**Purpose:** Documento estratégico de referência da marca, versão VIGENTE · Setembro 2026.

**Layout:** Sidebar sticky 268px + main fluido. Sidebar com wordmark + 16 itens em 3 grupos.

**Sidebar unificada:**

**Verbal (01–11):**
1. A marca
2. Para quem
3. Pilares
4. O que sustenta a operação
5. Compromissos com o cliente
6. Portfólio
7. Como funciona
8. Provas
9. Qualidade e conformidade *(inclui subseção Uso responsável)*
10. Como a marca escreve
11. A marca falando

**Visual (12–13):**
- 12 Design System (sub-âncoras 12.1–12.7: Logo, Monograma, Tipografia, Cores, Ícones, Padrões gráficos, Design System)
- 13 Aplicações e materiais

**Materiais (14–17):**
- 14 Padrão Apresentação →
- 15 Padrão A4 →
- 16 Padrão Publicações e Criativos →
- 17 Fotografia →

### Estrutura de cada capítulo verbal (texto VIGENTE)

**Capítulo 01 A marca**
- Categoria (definição literal em 1 linha)
- Sobre a Trendscience (boilerplate + 3 usos: curto, capa três tempos, versão para release)
- Propósito (com verbo "viabilizar", não "conseguir")
- Missão (uma só: "Conectar médicos e clínicas ao que a medicina integrativa usa hoje, e sustentar essa conexão do primeiro pedido à continuidade do tratamento.")
- Visão ("Ser a empresa em que o médico brasileiro confia para os seus pacientes e protocolos, quando o tratamento não pode parar.")
- Personalidade em uma linha (4 pares yes)
- Essência fecha o capítulo ("A ciência de facilitar o trabalho de quem cuida")

**Capítulo 02 Para quem** — 3 blocos:
- Para o médico: frase-âncora ("Você prescreve. A gente garante que o tratamento aconteça, na sua clínica ou na casa do paciente.") + lista "O que você recebe" (5 itens)
- Para a clínica: frase-âncora ("Um único fornecedor para diversos protocolos e tratamentos. Previsibilidade para planejar o mês.") + lista "O que a clínica recebe" (4 itens)
- O paciente: 1 frase ("O médico cuida do paciente. A Trendscience cuida de que nada falte para ele cuidar.")

**Capítulo 03 Pilares** — 3 pilares:
- Relacionamento
- Segurança regulatória (com primeira frase VIGENTE: "Licença sanitária conferida, documentação de cada lote e rastreabilidade em toda a cadeia. É o trabalho que sustenta a prescrição do médico e que ele não precisa fazer.")
- Continuidade

**Capítulo 04 O que sustenta a operação** — 4 frentes:
- Inteligência sobre o paciente e o protocolo (com a frase "não como estatística de mercado" preservada literal)
- Curadoria técnica (com pesquisa e desenvolvimento de fórmulas personalizadas; decisão clínica sempre do médico)
- Ecossistema de tecnologia e inteligência artificial
- Educação médica

**Capítulo 05 Compromissos com o cliente** — 4 compromissos em `.comp-grid`:
- Disponibilidade
- Resposta (sem "O senhor", em terceira pessoa, com "enquanto ainda dá tempo de decidir" como prova de aviso)
- Rigor (**sem** "três validações independentes por produto" — essa redação foi removida pelo Luiz em 02/09/2026)
- Continuidade

**Capítulo 06 Portfólio** — 9 categorias clínicas em grid + 2 naturezas (Nacionalizados/Importados) em cards. Regra: descrever campo de uso, nunca indicação terapêutica.

**Capítulo 07 Como funciona**
- Lead: "O médico prescreve. Nós fazemos o resto acontecer."
- Callout do ciclo em uma frase: "Curadoria de fornecedores, credenciamento, manipulação ou importação, documentação e entrega no consultório, na clínica ou na casa do paciente. Um Representante Credenciado responde pelo pedido do início ao fim."
- 6 passos em grid: Prescrição, Pedido, Curadoria e credenciamento, Manipulação ou importação, Entrega, Continuidade
- Fecho: "Do primeiro pedido à continuidade do tratamento, o médico fala com uma pessoa só."

**Capítulo 08 Provas** — lead "Desde 2023, mais de 4.500 médicos e 8.000 pacientes atendidos nos 27 estados brasileiros e em mais de 110 cidades, com cerca de 50 itens em portfólio." + 4 blocos (Escala e adoção, Estrutura, Pessoa, Sistema) + regras de número + o que falta.

**Capítulo 09 Qualidade e conformidade** — 5 blocos, inclusive **Uso responsável** como subseção final:
- Como um produto chega ao médico (3 parágrafos: farmácia credenciada + o que é importado + conferência lote a lote com verificação documental dupla)
- Cuidado individualizado
- Se um lote não passa
- Quem entra na nossa rede
- Uso responsável (título literal, texto único: "Todo produto que a Trendscience fornece existe para cumprir uma conduta médica. Trabalhamos com prescrição, com registro do que foi entregue e com um profissional responsável em cada etapa. Não fornecemos para consumo por conta própria, não orientamos uso sem médico e não tratamos desempenho como produto de prateleira. Medicina integrativa é medicina, e é assim que a gente opera.")

**Capítulos 10 e 11** — Como a marca escreve (14 princípios + tabela do/don't + léxico travado + pontuação + registro por público) e A marca falando (7 seções com exemplos de fala, perguntas difíceis, comunicação de problema, mensagens de rotina).

**Capítulos 12.1–12.7** — capítulos visuais (Logo, Monograma, Tipografia, Cores, Ícones, Padrões gráficos, Design System).

**Capítulo 13 Aplicações e materiais** — hub para as 3+ páginas de sistema.

---

### VIEW 2 · Padrão Apresentação (`Padrão Apresentação.html`)

Shell de slide 16:9 (canvas 1920×1080) com galeria em grid + modal fullscreen. **Pool esvaziado em 07/09/2026 — galeria exibe placeholder "Em reconstrução · Novos templates em breve"**. A seção **14.3 · Como construir os slides** (guia editorial completo) permanece publicada acima da galeria. O CSS (`deck-templates.css`) e o viewer modal ficam prontos para receber os próximos templates.

### VIEW 3 · Padrão A4 (`Padrão A4.html`)

Shell A4 retrato 794×1123 com galeria em grid + modal fullscreen. **Pool esvaziado em 07/09/2026 — galeria exibe placeholder "Em reconstrução"**. O CSS (`deck-a4.css`) e o viewer permanecem prontos para receber novos templates.

### VIEW 4 · Padrão Publicações e Criativos (`Padrão Publicações e Criativos.html`)

Shell multi-formato com galeria + modal + suporte a carrosséis (dots de navegação interna). **Array `window.__pcTemplates` esvaziado em `templates-publicacoes.js` em 07/09/2026** — galeria exibe placeholder "Novos criativos em breve". CSS (`deck-publicacoes.css`) e helpers (`WORDMARK_SVG`, `HANDLE_MARK`, `HANDLE`) preservados.

### VIEW 5 · Fotografia (`Fotografia.html`)

Biblioteca curada de imagens por categoria e cenário.

---

## Interactions & Behavior

### Sidebar (todas as views)
- Sticky, scroll interno
- Active state via `.active` (fundo `gray-50` + numeral em teal)
- Hover 200ms ease
- Links inter-página com badge `abrir ↗` em teal
- Sub-âncoras 12.1–12.7 rolam para dentro do capítulo 12

### Modal Fullscreen (views 2, 3, 4)
- Clique em tile abre modal, `body` ganha `overflow: hidden`
- Escala do stage: `transform: scale(w/nativeW)` dentro de `requestAnimationFrame` após `.is-open` (crítico — sem rAF, `getBoundingClientRect()` retorna 0)
- Navegação: setas ← →, ESC, botão fechar, clique no backdrop
- Contador `01 / N` no rodapé

### Carrossel dentro do modal (view 4)
- Se template tem `carr: [slide1, slide2, ...]`, o modal ganha dots teal na parte inferior
- Setas navegam DENTRO do carrossel primeiro, depois pulam para o próximo template
- Cliques nos dots saltam para slide específico

### Miniaturas normalizadas (view 4)
- Grid com altura fixa 380px
- Cada canvas escalado por `Math.min(availW/dim.w, availH/dim.h)` para encaixar sem cortar

---

## State Management

Vanilla JS puro. Estado mínimo:
- **Modal viewer** — `currentIdx`, classe boolean `.is-open`
- **Carrossel interno** (só view 4) — `currentCarrIdx`, resetado ao abrir novo template
- **Sidebar active** — no brandbook via IntersectionObserver no scroll; nas galerias, classe estática

Ao portar para React/Vue:

```
GalleryPage (Apresentação, A4 ou Publicações)
├── state: currentIdx, isViewerOpen, currentCarrIdx?
├── data: templates[] (definições estáticas)
├── ThumbnailGrid
│   └── ThumbnailTile (onClick → openViewer(idx))
└── ViewerModal
    ├── keyboard handler (←, →, Escape)
    └── CarouselDots (quando template.carr existe)
```

---

## Design Tokens

### CSS Custom Properties

```css
:root {
  /* Fundacionais */
  --white: #FFFFFF;
  --ink: #042A2B;
  --teal: #007A7D;
  --corpo: #2E3838;

  /* Escalas — completas no styles.css */
  --teal-50 até --teal-900;
  --gray-50 até --gray-900;

  /* Semânticas */
  --success: #12805C;
  --warning: #B7791F;
  --error:   #B03A2E;
  --info:    #00686B;

  /* Tipografia */
  --font-display: 'Inter Tight', system-ui, sans-serif;
  --font-sans:    'Inter Tight', system-ui, sans-serif;

  /* Timing */
  --dur-fast: 200ms;
  --ease: cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Spacing (múltiplos de 4)

Valores absolutos calibrados por contexto: `4, 6, 8, 10, 12, 16, 20, 24, 28, 32, 40, 48, 56, 64, 72, 80, 88, 96, 128, 160`.

Margens por canvas:
- Slide 1920×1080: 72×96px
- A4 794×1123: 60px
- Feed/Carrossel/PDF 1080×1350: 72px
- Story/Highlight 1080×1920: 96×72px
- LinkedIn 1200×627: 48×60px
- Brandbook: `clamp(88px, 12vh, 144px)` × `clamp(40px, 6vw, 96px)`

### Border radius

- `--radius-sm: 3px` (badges)
- `--radius-md: 6px` (cards e tiles)
- `50%` (dots, avatares)
- **Templates de canvas: predominantemente `0` (bordas retas editorial)**

### Escala tipográfica (canvas nativo)

| Nível | Slide | A4 | Feed | Story | LinkedIn |
|---|---|---|---|---|---|
| Display/Title | 168 | 108 | 92 | 108 | 60 |
| H1 | 112 | 72 | – | – | – |
| H2 | 80 | 52 | 60 | 72 | 42 |
| H3 | 44 | 28 | 42 | 48 | 28 |
| Lead | 32 | 20 | 32 | 34 | 22 |
| Body | 22 | 15 | 26 | 28 | 18 |

---

## Assets

### OG image
`assets/images/og-cover.jpg` — 1200×630, gerada a partir de `cover-vidraria.jpg` com wordmark Trendscience branco por cima + vinheta escura à esquerda para legibilidade.

### Imagens
Placeholders visuais com hatching 45° + label mono top-left + tag de aspect ratio bottom-right. Implementador substitui pelo asset real. Fotos oficiais da marca em `assets/photography/` (organizadas por cenário: farmacêutico e produto, sinalização, a pessoa que resolve, abstrato de marca).

### SVG assets (em `assets/logo/`)
- `trendscience-logo.svg` — wordmark completo
- `trendscience-icon.svg` — monograma sólido
- `trendscience-icon-outline.svg` — monograma vazado

### Ícones Lucide
~25 ícones incorporados como `<symbol>` nos HTMLs. Ao portar, use `lucide-react` / `lucide-vue-next` mantendo `stroke-width={2}` + round.

### Fontes
**Inter Tight** (fonte única) via Google Fonts.

---

## Files

Todos os arquivos-fonte estão dentro desta pasta.

| Arquivo | Descrição |
|---|---|
| `README.md` | Este documento |
| `index.html` | **Brandbook institucional v3.1 VIGENTE** (view 1) |
| `index v3.0 (pre-vigente).html` | Backup pré-publicação REV 2, referência histórica |
| `index v2.0 (legacy).html` | Backup v2.0 (rodada anterior) |
| `Padrão Apresentação.html` | Shell de slide 16:9 + guia 14.3 (pool vazio, aguardando reconstrução) |
| `Padrão A4.html` | Shell A4 retrato (pool vazio, aguardando reconstrução) |
| `Padrão Publicações e Criativos.html` | Shell multi-formato de redes sociais (pool vazio, aguardando reconstrução) |
| `Fotografia.html` | Biblioteca curada (view 5) |
| `templates-publicacoes.js` | Array `__pcTemplates` (esvaziado em 07/09/2026) + helpers reutilizáveis |
| `styles.css` | Design tokens globais, shell, sidebar, tipografia base |
| `sections-visual.css` | Estilos das seções verbais do brandbook |
| `sections-system.css` | Estilos utilitários do brandbook |
| `section-patterns.css` | Estilos do capítulo Padrões gráficos |
| `section-icons.css` | Estilos do capítulo Iconografia |
| `deck-templates.css` | CSS específico dos 45 slides |
| `deck-a4.css` | CSS específico dos templates A4 (mantido para reuso) |
| `deck-publicacoes.css` | CSS específico dos templates de publicações (mantido para reuso) |
| `inline-svg.js` | Utilitário de inline SVG |
| `TYPOGRAPHY.md` | Guia tipográfico complementar |
| `reference/PROMPT-publicar-texto-final-VIGENTE.md` | **Fonte da verdade textual (VIGENTE, 02/09/2026)** — imutável |
| `reference/trendscience-v3-prompt.md` | Prompt de execução v2→v3 (rodada anterior) |
| `assets/logo/*.svg` | Logos oficiais |
| `assets/images/og-cover.jpg` | OG image 1200×630 |
| `assets/photography/*` | Fotografia oficial da marca |

### Estrutura recomendada no codebase-alvo

```
src/
├── styles/
│   ├── tokens.css
│   ├── typography.css
│   └── icons.css
├── content/
│   └── brandbook/
│       ├── 01-a-marca.mdx  ← copy VIGENTE literal
│       ├── 02-para-quem.mdx
│       └── … 11-marca-falando.mdx
├── components/
│   ├── layout/
│   │   ├── Sidebar.tsx  ← 16 itens em 3 grupos
│   │   └── Shell.tsx
│   ├── brandbook/
│   ├── deck/         ← templates de slide (a reconstruir)
│   ├── a4/           ← templates A4 (a reconstruir)
│   └── publicacoes/  ← templates + CarouselViewer (a reconstruir)
└── pages/
    ├── index.tsx
    ├── apresentacao.tsx
    ├── a4.tsx
    └── publicacoes.tsx
```

---

## Metadados do site (SEO/OG)

Aplicar no `<head>` do brandbook publicado:

```html
<title>Trendscience · Grupo de representação médica — Brandbook v3.1</title>
<meta name="description" content="A Trendscience é um grupo de representação médica especializado em comercialização, distribuição e importação de medicamentos usados na medicina integrativa. Atendemos médicos e clínicas nos 27 estados brasileiros.">
<meta name="theme-color" content="#042A2B">

<meta property="og:type" content="website">
<meta property="og:title" content="Trendscience · Grupo de representação médica">
<meta property="og:description" content="Comercialização, distribuição e importação de medicamentos usados na medicina integrativa. Brandbook v3.1.">
<meta property="og:image" content="assets/images/og-cover.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Wordmark Trendscience sobre fundo de vidraria em petróleo.">
<meta property="og:locale" content="pt_BR">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Trendscience · Grupo de representação médica">
<meta name="twitter:description" content="Comercialização, distribuição e importação de medicamentos usados na medicina integrativa. Brandbook v3.1.">
<meta name="twitter:image" content="assets/images/og-cover.jpg">
```

---

## Notas finais para o dev

1. **Alinhamento à esquerda é regra da marca** — não interpretar como sugestão.
2. **Overlays em imagens são pretos puros** — `rgba(0,0,0, α)`, nunca Ink com opacidade.
3. **Contraste em fundos escuros** — títulos sempre 100% branco.
4. **Sem sublinhados** — destaque por peso, não por cor.
5. **Sem emoji.**
6. **Placeholders são intencionais.** Preserve os `[PLACEHOLDER ...]` labels durante a implementação inicial.
7. **Copy é final e verbatim.** A publicação REV 2 do VIGENTE encerra a rodada verbal. Não parafrasear.
8. **Sistema de códigos híbrido em publicações** — o formato `FORMATO-CATEGORIA-NN` (ex: `CARR-CIENT-02`) facilita filtragem futura. Preservar.
9. **Carrosséis são séries indivisíveis** — cada `CARR-*` tem 5 slides fixos com progresso compartilhado. Modelar como componente único com estado `currentSlide` interno.
10. **Escala tipográfica é absoluta** — não usar `rem` para os templates de canvas. Os valores em px são para o canvas nativo do formato; o scale visual acontece via `transform` no container, não na tipografia.
11. **A fonte da verdade textual é `reference/PROMPT-publicar-texto-final-VIGENTE.md`.** Em qualquer conflito entre o README e o prompt VIGENTE, **o VIGENTE prevalece.**
