# PLAN.md — fcmalenovice

## Kontext

Repo běží na React 19 + **MUI + Bootstrap + react-bootstrap + Tailwind** + PhotoSwipe.
Tři CSS frameworky naráz, žádná skutečná interaktivní logika — obsah je statický
(tabulka, výsledky, fotogalerie).

**Cíl:** boring tech / minimum údržby — zmigrovat na čisté vanilla HTML/CSS/JS
bez build kroku, jako [photoalbum](https://github.com/michalzbranek/photoalbum)
(referenční šablona).

---

## Rozsah změn

### Zahodit
- React 19 + react-dom
- MUI (Material UI) + Emotion
- Bootstrap + react-bootstrap
- Tailwind CSS
- react-photoswipe-gallery (pouze wrapper nad PhotoSwipe)
- Vite + TypeScript + ESLint
- `package.json`, `node_modules`, `dist/`, `.github/workflows/deploy.yml`

### Přidat
- `index.html` — statická HTML kostra (bez build kroku)
- `css/styles.css` — mobile-first, jeden soubor, dark/light dle potřeby
- `js/data.js` — veškerý obsah (tabulka, výsledky, fotografie, texty)
- `js/main.js` — render z data.js + chování (IIFE, DOMContentLoaded)
- `.nojekyll` — vypne Jekyll na GitHub Pages
- `CONTEXT.md` — glosář pojmů projektu
- `README.md` — jak editovat obsah a nasadit

### Fotogalerie — PhotoSwipe nativně

`react-photoswipe-gallery` je pouze React wrapper nad vanilla knihovnou **PhotoSwipe**.
Migrace: načíst PhotoSwipe přímo přes `<script>` z CDN nebo jako vendor soubor.

```html
<!-- V <head> nebo před </body> -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/photoswipe@5/dist/photoswipe.css">
<script type="module">
  import PhotoSwipeLightbox from 'https://cdn.jsdelivr.net/npm/photoswipe@5/dist/photoswipe-lightbox.esm.js';
  // inicializace viz photoswipe.net/getting-started/
</script>
```

Fotografie a metadata (src, width, height, caption) přesunout do `js/data.js`.

### Tabulka a výsledky

Data tabulky (hráči, výsledky, statistiky) přesunout do `js/data.js` jako JS pole objektů.
`js/main.js` tabulku dynamicky renderuje do `<table>` (nebo staticky v HTML, pokud se
data nemění — pak není JS ani potřeba).

---

## Struktura po migraci

```
fcmalenovice/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── data.js       ← obsah: tabulka, výsledky, foto, texty
│   └── main.js       ← render + galerie init
├── images/           ← fotografie (přejmenovat z public/ nebo assets/)
├── .nojekyll
├── CONTEXT.md
├── README.md
└── PLAN.md           ← tento soubor
```

---

## Postup migrace

1. **Zmapovat obsah** — projít React komponenty a vypsat veškerá data:
   - hráči / tým (tabulka)
   - výsledky zápasů
   - fotografie (cesty, rozměry pro PhotoSwipe)
   - texty stránek
2. **Přesunout data** → `js/data.js`.
3. **Napsat `index.html`** — sekce odpovídající stávajícím stránkám/tabům.
4. **Napsat `css/styles.css`** — mobile-first, přepsat MUI/Bootstrap/Tailwind jedním souborem.
5. **Napsat `js/main.js`** — render tabulky + výsledků z data.js + inicializace PhotoSwipe.
6. **Ověřit galerii** — otevřít lightbox, swipe, zavřít.
7. **Přepnout GH Pages** → Source `main` / root (místo Vite deploy workflow).
8. **Smazat** React zbytek: `src/`, `package.json`, `vite.config*`, `tsconfig*`, `node_modules/`, `dist/`, `deploy.yml`.

---

## Verifikace

- `python3 -m http.server` v rootu → otevřít `localhost:8000`.
- Proklikat všechny sekce.
- Otestovat fotogalerii: otevřít, swipe, zavřít (klávesnice + touch).
- DevTools responsive: mobile breakpoint (< 600 px) a desktop.
- Lighthouse: čekat výrazně lepší Performance oproti původnímu bundle.
