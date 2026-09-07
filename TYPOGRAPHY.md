# Trendscience Typography Guide

> **Inter Tight carrega a voz e a informação da marca.**

Uma família. Sem terceira fonte, sem itálico verdadeiro, sem alternativa em contexto formal. A hierarquia vem do **peso** e do **tamanho**, não da família.

---

## Loading

```html
<link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

```css
:root {
  --font-display: "Inter Tight", ui-sans-serif, -apple-system, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
  --font-sans:    "Inter Tight", ui-sans-serif, -apple-system, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
}
```

> `--font-display` e `--font-sans` apontam para a mesma família — a variável é mantida por retrocompatibilidade com código existente que separava display vs corpo. Toda hierarquia vem de peso e tamanho.

---

## Tabela das 8 funções

| # | Função | Peso | Tamanho | Tracking | Uso |
|---|---|---|---|---|---|
| 1 | **Display** | 500 | ≥ 36px, `clamp(36px, 5vw, 64px)` | -0.02em a -0.025em | `.section-title`, `h1`/`h2` de capa, `.t-display`. Nunca 700. |
| 2 | **Ênfase inline** | 300 | do elemento pai | herdado | `em`, `em.hl`, `.frase .em` dentro de display. `font-style: normal`. Cor: `--teal` sobre claro, `--teal-signal` sobre escuro. |
| 3 | **Big number** | 500 | ≥ 48px | -0.045em | `.big-num`, `.figure`, `.stat-n`. Line-height 0.9. `font-feature-settings: "tnum" 1`. Unidade cola em 300 teal, 0.35em, vertical-align 0.7em. |
| 4 | **Subtítulo** | 500 | 18-28px | -0.015em | `.pillar h3`, `.chapter-sub`, `h3` de bloco temático. Line-height 1.2. |
| 5 | **Eyebrow** | 700 | 10-11px, uppercase | 0.12em | `.eyebrow .num`, badge, tag. Caixa alta com tracking aberto. |
| 6 | **Corpo** | 400 | 14-16px | 0 | `p`, `li`, `.lead`. Line-height 1.6. |
| 7 | **Metadado** | 500 | 10-12px | 0.06em | Rodapé, versão, timestamp, breadcrumb. |
| 8 | **Frase-conceito** | 300 | 13-16px | -0.01em | `.essence`, `.brand-quote`, `.foot .quote`. Fecho de material, nunca abertura. |

---

## 8 regras absolutas

1. **Uppercase permitido em tags** (eyebrow, badge, metadado). Sempre com tracking 0.12em. Nunca em corpo, subtítulo, display.
2. **Ênfase interna** em display = peso 300 sobre 500, cor `--teal`. Nunca itálico verdadeiro.
3. **Peso 700 em corpo corrido é substituído por 600** (Inter Tight 700 é pesado no corpo). `<b>` em `p` deve mapear para 600.
4. **Boilerplate, rodapé, assinatura de e-mail, documentação regulatória, laudo de lote** → todos em Inter Tight, seguindo a tabela acima.
5. **Display e corpo nunca no mesmo tamanho** na mesma peça. Display deve ser no mínimo 1.5× maior que o corpo adjacente.
6. **Números em tabela** → peso 500 com `font-feature-settings: "tnum" 1`. Nome de item, coluna, badge → peso normal (400 ou 700 conforme função).
7. **KPIs e big-numbers** trazem `line-height: 0.9`. Unidade cola em 300 teal, `font-size: 0.35em`, `vertical-align: 0.7em`.
8. **Ênfase em display** = Inter Tight 300 light, cor teal, sem itálico verdadeiro.

---

## Fallback

- Se Inter Tight 300 não sustentar em LED, impressão pequena ou peça institucional muito séria, migre a ênfase para `var(--teal-signal)` mantendo peso 500. Documentar como comentário no CSS local.
- Fallback do sistema em browsers sem web-font: `ui-sans-serif` → cinza sistema.

---

## Anti-padrões

- ❌ Adicionar segunda família tipográfica
- ❌ Utilizar duas fontes na mesma peça (o padrão é uma só)
- ❌ `font-style: italic` em qualquer contexto (ênfase é por peso 300)
- ❌ Peso 700 em corpo corrido (`<b>` mapeia para 600)
- ❌ Caixa alta 700 abaixo de 10px (a letra fecha)
- ❌ Display e corpo no mesmo tamanho na mesma peça
- ❌ Ênfase por cor dentro de corpo — use peso, não cor
- ❌ Letter-spacing decorativo positivo em corpo (kerning é para display)
- ❌ Título centralizado — a marca alinha à esquerda

---

## Versão

**v3.2 · Setembro 2026** — migração para família única Inter Tight (Ubuntu removida da marca).
