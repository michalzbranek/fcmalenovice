# FC Malenovice — web klubu

Statický web fotbalového klubu FC Malenovice. Čisté HTML + CSS, žádný JavaScript,
žádný build krok.

## Jak editovat obsah

Veškerý obsah je v `index.html`. Otevři ho v libovolném textovém editoru.

### Výsledek zápasu

Najdi sekci `<section id="vysledek">` a uprav:
- skóre: `<span class="score-number">3:0</span>`
- poločas: `(2:0)`
- střelce: `<strong class="scorer-name">Páleníček Petr</strong> - hattrick`
- text reportu: tři odstavce `<p>` v `.result-text`

### Tabulka

Najdi `<section id="tabulka">`. Každý tým = jeden `<tr>`. Sloupce v pořadí:
`#, Klub, Z, V, R, P, S, B, P+, P−`.

Speciální třídy na `<tr>`:
- `row-top` — top 3 (zelený tint)
- `row-bottom` — spodní 3 (červený tint)
- `row-self` — Malenovice (modrý highlight, tučně)

### Fotogalerie

Fotky jsou v `images/`. Přidej soubor do `images/` a vlož nový odkaz do
`<div class="gallery-grid">`:

```html
<a href="images/nova.jpg" class="gallery-item" aria-label="Galerie — popis">
  <img src="images/nova.jpg" alt="FC Malenovice — popis" loading="lazy">
</a>
```

### O klubu (accordiony)

Najdi `<section id="o-klubu">`. Tři bloky `<details open>` — edituj obsah v
`.accordion-body` dle potřeby.

## Jak nasadit

1. Ulož změny.
2. `git add -p` a `git commit`.
3. `git push origin main`

Web je živý automaticky přes GitHub Pages (Source = `main` / root).

## Jak lokálně otestovat

```bash
python3 -m http.server
# otevři http://localhost:8000
```

## Struktura

```
fcmalenovice/
├── index.html        ← veškerý obsah
├── css/styles.css    ← veškeré styly
├── images/           ← fotky (1.jpg, 2.jpg, 3.jpg, 5.jpg)
├── .nojekyll         ← vypíná Jekyll na GitHub Pages
├── CONTEXT.md        ← glosář pojmů
├── PLAN.md           ← záznam migrace
└── docs/adr/         ← architektonická rozhodnutí
```
