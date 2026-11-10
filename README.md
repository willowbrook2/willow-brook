# Landingspagina · Willow Brook

Statische site voor GitHub Pages: `index.html`, `privacy.html`, `css/style.css`, `js/main.js`, `img/`, `video/`.

## Secties
1. Hero met de video van de wilg aan het meer (8 s, loop, zonder geluid) en kernboodschap
2. Merkverhaal met de video van de thee en het doosje
3. Ritueel in 3 stappen
4. Beeldband met de video van de slaper en een citaat
5. De 3 varianten (officiële productfoto's)
6. Sign-up (MailerLite) en footer

## MailerLite-formulier plakken
1. MailerLite > Forms > Embedded forms > jouw formulier > **HTML-code** kopiëren.
2. In `index.html` de code plakken in `<div id="mailerlite-form"></div>`.
3. Het voorbeeldformulier (`<form id="voorbeeld-form">`) en het blok `form__bedankt` verwijderen.
Het voorbeeldformulier verstuurt niets: het controleert alleen de velden en toont de bedankmelding.

## Online zetten (GitHub Pages)
1. Nieuwe publieke repository, bv. `willow-brook`.
2. De **inhoud** van deze map `web/` uploaden naar de hoofdmap van de repository.
3. Settings > Pages > Deploy from a branch > `main` / `(root)` > Save.
4. Na een minuut staat de site op `https://<gebruikersnaam>.github.io/willow-brook/`.

## Beelden en video's
Alle video's spelen zonder geluid (het audiospoor is eruit gehaald) en in een lus.

| Bestand | Bron |
|---|---|
| `video/wb-hero-wilg-meer.mp4` | `videos/Wide establishing shot at night, 275825 P2E.mp4` (1600 px, 8 s) |
| `video/wb-verhaal-thee.mp4` | `videos/peaceful atmosphere. realistic l 199 ne9.mp4`, uitsnede 4:5 op de thee en het doosje |
| `video/wb-band-slaper.mp4` | `videos/Woman_sleeping_by_lake_201f81b3.mp4`, zwarte randen weggesneden, heen en terug afgespeeld (5,6 s) |
| `img/*-poster.jpg` | eerste beeld van elke video (zie je zolang de video laadt) |
| `img/product-*.jpg` | officiële productfoto's, `assets/bron/productfoto/` (bijgesneden 4:5) |
| `img/og-image.jpg` | deelbeeld 1200 × 630 |
| `img/favicon*` | wilgicoon in goud |
