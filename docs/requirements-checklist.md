# Requirements Checklist — Explore Ella

This checklist maps every assignment requirement to its implementation in the project.

---

## Website Structure

- [x] **Four or more interconnected pages** — 6 pages: index.html, about.html, attractions.html, activities.html, gallery.html, contact.html
- [x] **Home page** — `index.html` with hero, introduction, experience cards, attraction grid, travel inspiration, CTA
- [x] **About page** — `about.html` with destination overview, facts, transport table, map
- [x] **Attractions page** — `attractions.html` with 6 attractions, anchor navigation, article elements
- [x] **Activities page** — `activities.html` with activity cards, lists, planning steps
- [x] **Gallery page** — `gallery.html` with filterable image grid and lightbox
- [x] **Contact/inquiry page** — `contact.html` with full inquiry form and validation

## HTML5 Elements

- [x] **HTML5 headings (h1-h6)** — h1–h4 used across all pages, single h1 per page
- [x] **Paragraphs** — Used throughout all content sections
- [x] **Images** — Local images in hero, attractions, activities, gallery (with alt text)
- [x] **Hyperlinks** — Navigation, CTAs, footer, breadcrumbs, anchor links
- [x] **Ordered lists** — `activities.html` — planning steps section
- [x] **Unordered lists** — `activities.html` — viewpoints section; navigation; footer links
- [x] **Table** — `about.html` — transport comparison table with thead/tbody
- [x] **Form** — `contact.html` — 7-field inquiry form
- [x] **Labels** — All form fields have associated `<label>` elements
- [x] **Input types** — text, email, tel, date used in form
- [x] **Select** — Visitors count and preferred experience dropdowns
- [x] **Textarea** — Message field in inquiry form
- [x] **Button** — Submit button, filter buttons, hamburger, lightbox controls

## Semantic HTML

- [x] **`<!DOCTYPE html>`** — All pages
- [x] **`<html lang="en">`** — All pages
- [x] **`<head>`** — All pages
- [x] **`<meta charset>`** — All pages
- [x] **`<meta viewport>`** — All pages
- [x] **`<title>`** — Unique per page
- [x] **`<meta description>`** — Unique per page
- [x] **`<header>`** — Site header on all pages
- [x] **`<nav>`** — Main navigation, breadcrumbs, anchor navigation, footer navigation
- [x] **`<main>`** — Main content area on all pages
- [x] **`<section>`** — Content sections on all pages
- [x] **`<article>`** — Attraction cards on attractions.html
- [x] **`<aside>`** — Travel tips on about.html, responsible travel on activities.html, form info on contact.html
- [x] **`<footer>`** — Site footer on all pages

## CSS

- [x] **External CSS** — `css/style.css` and `css/responsive.css`
- [x] **CSS variables** — Full design token system in `:root`
- [x] **Responsive design** — Media queries at 360px, 480px, 768px, 1024px, 1440px, 1920px
- [x] **Flexbox** — Header, navigation, cards, buttons
- [x] **CSS Grid** — Experience grid, attraction grid, gallery grid, form grid, footer grid
- [x] **Animations** — Hero text fade-up, scroll reveal, hover effects
- [x] **Hover states** — Cards, buttons, links, gallery items
- [x] **Focus states** — Visible `:focus-visible` outline on all interactive elements
- [x] **Print styles** — Included in responsive.css

## JavaScript

- [x] **Mobile navigation** — Hamburger open/close with overlay
- [x] **Sticky header** — Scroll-based class toggle
- [x] **Gallery lightbox** — Open, close, previous, next with keyboard support
- [x] **Gallery filters** — Category-based filtering
- [x] **Form validation** — Required, email, phone validation with error messages
- [x] **Form success** — Summary display after valid submission
- [x] **localStorage** — Demo inquiry storage
- [x] **Scroll reveal** — IntersectionObserver-based animations
- [x] **Smooth scrolling** — For anchor links
- [x] **Active nav state** — Current page highlighting
- [x] **Footer year** — Dynamic current year

## Multimedia

- [x] **Images** — Local tourism images throughout the site
- [x] **Gallery** — Filterable grid with 11 images on gallery.html
- [x] **Map** — OpenStreetMap embed on about.html
- [x] **Icons** — SVG icons for experience cards, contact info, footer
- [x] **Favicon** — Custom SVG favicon

## Accessibility

- [x] **Skip link** — "Skip to main content" on all pages
- [x] **Heading hierarchy** — Correct h1–h4 nesting
- [x] **Alt text** — All images have descriptive alt text
- [x] **ARIA labels** — Buttons, nav, lightbox, form
- [x] **aria-expanded** — Mobile menu toggle
- [x] **aria-live** — Form status region
- [x] **aria-modal** — Lightbox dialog
- [x] **Keyboard navigation** — Lightbox, menu, form, all interactive elements
- [x] **Focus management** — Lightbox returns focus on close
- [x] **Reduced motion** — `prefers-reduced-motion` media query
- [x] **Contrast** — Dark text on light backgrounds, light text on dark sections

## Navigation

- [x] **Working internal links** — All navigation, CTAs, and footer links verified
- [x] **Consistent navigation** — Same header/footer on all pages
- [x] **Breadcrumbs** — On all inner pages
- [x] **Anchor links** — Attractions page category anchors
- [x] **No broken links** — All links verified

## SEO

- [x] **Unique page titles** — Each page has a unique `<title>`
- [x] **Meta descriptions** — Each page has a unique `<meta name="description">`
- [x] **Open Graph tags** — og:title, og:description, og:type on all pages
- [x] **robots.txt** — Included at project root
- [x] **sitemap.xml** — Included at project root with all 6 pages
- [x] **Semantic URLs** — Clean file names (about.html, attractions.html, etc.)
- [x] **Favicon** — SVG favicon linked on all pages

## Deployment Preparation

- [x] **Apache virtual host** — `deploy/apache-vhost.conf`
- [x] **Nginx server block** — `deploy/nginx-server-block.conf`
- [x] **DNS records** — `deploy/dns-records.txt` with resolution flow
- [x] **Deployment guide** — `docs/deployment.md`
- [x] **SSL documentation** — Let's Encrypt instructions in deployment.md
- [ ] **Domain registered** — [TO_FILL]
- [ ] **DNS configured** — [TO_FILL]
- [ ] **Server deployed** — [NOT YET DEPLOYED]
- [ ] **HTTPS enabled** — [NOT YET CONFIGURED]
- [ ] **Online testing** — [TO_FILL]

## Documentation

- [x] **README.md** — Complete project documentation
- [x] **Assignment report** — `docs/assignment-report.md`
- [x] **Requirements checklist** — `docs/requirements-checklist.md` (this file)
- [x] **Deployment guide** — `docs/deployment.md`
- [x] **Image sources** — `docs/image-sources.md`

## Code Quality

- [x] **Clean naming** — Descriptive class names and IDs
- [x] **CSS variables** — Consistent design tokens
- [x] **Consistent indentation** — 4 spaces in HTML, CSS, JS
- [x] **Relative file paths** — All internal references are relative
- [x] **No inline CSS** — All styles in external stylesheets
- [x] **No inline JavaScript** — All scripts in external file
- [x] **No lorem ipsum** — All content is real tourism copy
- [x] **No dead code** — Clean, used-only code
- [x] **Modular JavaScript** — Functions for each feature
