# Formach Group - website (static, GitHub Pages)

Served at formachgroup.com from the `yidise89-ops/formachgroup` repo via GitHub Pages.
This is the old single-page `index.html` split into real, individually-addressable pages,
in English and French.

## Pages / URLs
English : /, /about, /sectors, /contact, /sectors/<slug> x7
French  : /fr, /fr/a-propos, /fr/secteurs, /fr/contact, /fr/secteurs/<slug> x7
  sector slugs (EN): crushing-screening, construction-civil-engineering, water-supply-irrigation,
    general-industrial-supplies, electrical-cables-components, fire-detection-safety-systems, industrial-pumps
  sector slugs (FR): concassage-criblage, construction-genie-civil, adduction-eau-irrigation,
    fournitures-industrielles, cables-electriques-composants, detection-incendie-securite, pompes-industrielles

## Shared files
- assets/site.css   all styling (one copy for the whole site)
- assets/site.js    nav menu + email + contact form
- images/logo.jpg   the logo (was pasted into every page as base64)
- sitemap.xml, robots.txt
- CNAME             keeps the formachgroup.com custom domain attached - DO NOT DELETE
- .nojekyll         tells GitHub Pages to serve files as-is

## Old URLs
`index-fr.html` and the earlier `crushing-screening.html` / `pumps.html` / ... / `blog*.html`
pages are now tiny redirect stubs pointing at the new addresses (blog -> homepage).

## Deploy
This IS the repo content. Replace everything in the repo with this folder (keep .git),
commit and push to the branch GitHub Pages serves (repo Settings -> Pages -> Branch).
Live in ~1 minute. Clean URLs (/about, /sectors/industrial-pumps) work on GitHub Pages
with no config. No DNS changes.

## Contact form
Front-end only - shows a thank-you message, does not send email yet.
