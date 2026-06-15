# ADR 0001 — Migrace React → statický HTML/CSS web

**Datum:** 2026-06-15  
**Stav:** Přijato

## Kontext

Web FC Malenovice běžel na React 19 + MUI + Bootstrap + react-bootstrap + Tailwind CSS
+ PhotoSwipe, buildovaný Vitem. Stack o třech CSS frameworků obsluhoval v podstatě
statický obsah: jednu scrollovací stránku s pěti sekcemi, 14 řádky tabulky, jedním
výsledkem zápasu a čtyřmi fotkami. Jediná reálná interaktivita byl přepínač mobilního
menu (`useState`). Každá aktualizace závislostí (MUI breaking changes, Tailwind v4
breaking changes, Vite major verze) vyžadovala netriviální práci.

## Rozhodnutí

Migrovat na čisté statické HTML + CSS bez build kroku:

- **0 JavaScript** — mobilní menu řešeno CSS-only (`<input type=checkbox>` + `:checked`
  selector), accordiony nativním `<details>/<summary>`.
- **PhotoSwipe odstraněn** — fotky jako `<a href>` odkazující na plnou velikost.
  Jednodušší a bez runtime závislosti.
- **Jeden CSS soubor** — pixel-perfect přepis MUI/Bootstrap/Tailwind do `css/styles.css`
  (~300 řádků), mobile-first, breakpoint 600 px.
- **Žádné CI** — smazán `deploy.yml`. GitHub Pages servíruje přímo z větve `main` / root.
  `git push` = web je živý.
- **Relativní cesty** — `href="css/styles.css"`, `href="images/2.jpg"` atd. Funguje
  správně pod projektovým podadresářem `/fcmalenovice/` bez jakékoli konfigurace.

## Alternativy, které byly zváženy

- **Zachovat React, zjednodušit CSS** (jeden framework místo tří) — odmítnuto; stále
  vyžaduje Node, build, závislosti a upgrade cykly.
- **Přidat JS přepínač menu** — odmítnuto; CSS-only je dostatečné a eliminuje poslední
  JS soubor.
- **Ponechat PhotoSwipe z CDN** — odmítnuto; přidává runtime závislost třetí strany;
  `<a href>` na plnou fotku splňuje funkci pro tento web.

## Důsledky

**Výhody:**
- Nulová údržba závislostí.
- Žádný build — deploy = push.
- Radikálně lepší Lighthouse Performance (žádný bundle, 0 JS).
- Editace obsahu = otevřít `index.html` v editoru.

**Nevýhody / kompromisy:**
- Ztráta komponentového modelu a TypeScript typování.
- Editace obsahu vyžaduje ruční úpravu HTML (ne formulář/CMS).
- PhotoSwipe lightbox (swipe, zoom, pinch) nahrazen otevřením fotky na nové záložce.
- Bez build procesu není automatická minifikace (soubory jsou malé — není problém).
