# CONTEXT.md — FC Malenovice

Glosář pojmů projektu. Pouze definice — žádné implementační detaily.

---

## Sekce

Jedna část scrollovací stránky. Web má pět sekcí:
**Domů** (top stránky), **Výsledek**, **Fotogalerie**, **Tabulka**, **O klubu**.
Navigace scrolluje plynule na kotvy (HTML anchor + `scroll-behavior: smooth`).

## Tabulka

Ligová tabulka s 14 týmy. Sloupce:

| Zkratka | Význam |
|---------|--------|
| Z | Zápasy (odehráno) |
| V | Výhry |
| R | Remízy |
| P | Prohry |
| S | Skóre (rozdíl branek: vstřelené − obdržené) |
| B | Body |
| P+ | Penalty proměněné |
| P− | Penalty neproměněné |

## Výsledek

Výsledek posledního odehraného zápasu + textový report.
Obsahuje: skóre, poločasový výsledek, střelce, text reportu.

## Fotogalerie

Sada fotografií z dění klubu. Kliknutím se otevře plná velikost fotky.

## O klubu

Tři tematické oddíly: základní informace o klubu, složení výboru, historie.
Každý oddíl je rozbalovací (HTML `<details>/<summary>`).
