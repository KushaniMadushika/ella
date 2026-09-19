# Explore Ella

> Discover the Beauty of Sri Lanka

A premium static tourism website showcasing Ella, Sri Lanka — built with HTML5, CSS3, and vanilla JavaScript for a university web technologies assignment.

---

## Overview

Explore Ella is a six-page static tourism website that presents the town of Ella in Sri Lanka's hill country as a travel destination. The site features scenic landscapes, attraction guides, activity recommendations, an image gallery with lightbox functionality, and a client-side inquiry form.

The project is designed to satisfy university assignment requirements covering HTML5 semantic elements, CSS responsive design, JavaScript interactivity, multimedia integration, form handling, and web server deployment preparation.

## Assignment Purpose

This website was created as a university assignment to demonstrate competency in:

- HTML5 document structure and semantic markup
- CSS3 styling with responsive design
- Client-side JavaScript for interactivity
- Web accessibility best practices
- Static website hosting configuration (Apache/Nginx)
- DNS and domain configuration knowledge
- Professional project documentation

## Features

- **Premium visual design** — Nature-inspired colour palette, professional typography, and modern layout
- **Six interconnected pages** — Home, About, Attractions, Activities, Gallery, Contact
- **Responsive layout** — Tested across desktop (1920px), laptop (1366px), tablet (768px), and mobile (360px) viewpoints
- **Interactive gallery** — Category filtering and keyboard-accessible lightbox with previous/next navigation
- **Client-side form validation** — Real-time validation with accessible error messages and success state
- **Scroll animations** — Subtle reveal-on-scroll effects with reduced-motion support
- **Sticky header** — Transparent on hero, solid on scroll, with mobile hamburger menu
- **Accessibility** — Skip links, ARIA labels, focus management, keyboard navigation, sufficient contrast
- **SEO** — Unique titles, meta descriptions, Open Graph tags, robots.txt, sitemap.xml
- **Deployment-ready** — Apache and Nginx configuration templates included

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero section, introduction, featured experiences, attraction highlights, travel inspiration, CTA |
| About | `about.html` | Destination overview, facts, transport table, best time to visit, OpenStreetMap embed |
| Attractions | `attractions.html` | Six attractions with anchor navigation, organised by category (bridges, mountains, waterfalls, culture) |
| Activities | `activities.html` | Activity cards, ordered/unordered lists, planning steps, responsible travel aside |
| Gallery | `gallery.html` | 11 images with category filters, lightbox viewer, hover captions |
| Contact | `contact.html` | Inquiry form with validation, success state with summary, contact sidebar |

## Technologies

| Technology | Usage |
|-----------|-------|
| HTML5 | Semantic page structure, forms, tables, multimedia |
| CSS3 | Custom properties, Flexbox, Grid, animations, responsive breakpoints |
| JavaScript | DOM manipulation, event handling, form validation, lightbox, scroll effects |
| Google Fonts | DM Sans (body), Playfair Display (headings) |
| SVG | Icons and favicon |
| OpenStreetMap | Embedded map on About page |

## Project Structure

```text
explore-ella/
├── index.html
├── about.html
├── attractions.html
├── activities.html
├── gallery.html
├── contact.html
├── css/
│   ├── style.css              # Design system and component styles
│   └── responsive.css         # Media queries for all breakpoints
├── js/
│   └── script.js              # All interactivity (modular functions)
├── images/
│   ├── hero/                  # Hero section imagery
│   ├── attractions/           # Attraction photographs
│   ├── activities/            # Activity photographs
│   └── gallery/               # Gallery photographs
├── assets/
│   └── favicon.svg            # SVG favicon
├── docs/
│   ├── assignment-report.md   # Full assignment report template
│   ├── requirements-checklist.md  # Requirements coverage checklist
│   ├── deployment.md          # Deployment guide
│   └── image-sources.md       # Image attribution
├── deploy/
│   ├── apache-vhost.conf      # Apache virtual host configuration
│   ├── nginx-server-block.conf # Nginx server block configuration
│   └── dns-records.txt        # DNS record template
├── robots.txt
├── sitemap.xml
└── README.md
```

## Local Development

This is a static website with no build step or server-side dependencies. To run it locally:

### Using Python's built-in HTTP server

```bash
cd explore-ella
python3 -m http.server 8000
```

Then open: `http://localhost:8000`

### Using XAMPP

Place the `explore-ella` directory inside XAMPP's `htdocs` folder and access via:

```
http://localhost/explore-ella/
```

### Using VS Code Live Server

Install the "Live Server" extension and open `index.html` with Live Server.

## Responsive Design

The website is tested for the following viewport widths:

- 1920px — Large desktop
- 1440px — Desktop
- 1366px — Laptop
- 1024px — Tablet landscape
- 768px — Tablet portrait
- 480px — Mobile
- 390px — Mobile (iPhone)
- 360px — Mobile (small Android)

Responsive behaviour includes:
- Collapsible hamburger menu on tablets and mobile
- Stacking grid layouts to single columns
- Adjusted typography scale
- Full-width image and card layouts on mobile

## Accessibility

- Skip-to-content link on every page
- Semantic HTML elements (`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`)
- Proper heading hierarchy (single `h1` per page)
- Alt text on all images
- ARIA labels on navigation, buttons, and interactive elements
- `aria-expanded` on mobile menu toggle
- `aria-live` region for form status messages
- `aria-modal` on lightbox dialog
- Visible focus indicators
- Keyboard-operable lightbox (Escape, Arrow keys)
- `prefers-reduced-motion` media query support

## Form Functionality

The contact form demonstrates client-side form handling:

1. **Validation** — Required fields, email format, phone format
2. **Error display** — Inline error messages below invalid fields
3. **Success state** — Summary of submitted data displayed after validation
4. **localStorage** — Submissions saved to browser storage for demo purposes

**Important:** This is a frontend-only demonstration. No data is transmitted to any server. The form clearly communicates this to the user.

## Image Sources

All images used in this project are AI-generated for demonstration purposes. See `docs/image-sources.md` for full attribution details.

## SEO

- Unique `<title>` for each page
- `<meta name="description">` for each page
- Open Graph (`og:title`, `og:description`, `og:type`) tags
- Semantic HTML structure
- `robots.txt` with sitemap reference
- `sitemap.xml` with all pages listed
- SVG favicon

## Deployment

See `docs/deployment.md` for complete deployment instructions covering:

- Server setup (Ubuntu/Debian)
- Apache virtual host configuration
- Nginx server block configuration
- SSL/TLS with Let's Encrypt
- File upload and permissions
- DNS configuration

### Configuration files provided:

- `deploy/apache-vhost.conf`
- `deploy/nginx-server-block.conf`
- `deploy/dns-records.txt`

## DNS Configuration

See `deploy/dns-records.txt` for the DNS record template showing:

- A record for `@` (root domain)
- A record for `www` subdomain
- DNS resolution flow diagram

## Virtual Hosting

The project includes ready-to-use virtual host configurations for both Apache and Nginx. Replace `YOUR_DOMAIN.com`, `YOUR_SERVER_IP`, and `YOUR_DOCUMENT_ROOT` placeholders with actual values before deployment.

## SSL

HTTPS can be configured using Let's Encrypt (free, automated, open certificate authority):

```bash
sudo apt install certbot python3-certbot-apache  # For Apache
sudo certbot --apache -d YOUR_DOMAIN.com -d www.YOUR_DOMAIN.com
```

Or for Nginx:

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d YOUR_DOMAIN.com -d www.YOUR_DOMAIN.com
```

**Status:** [NOT YET DEPLOYED] — SSL configuration templates are included but certificates have not been generated.

## Testing Checklist

- [x] All 6 HTML pages load without errors
- [x] Navigation links work between all pages
- [x] Mobile hamburger menu opens/closes correctly
- [x] Scroll reveal animations trigger
- [x] Sticky header transitions on scroll
- [x] Gallery filter buttons work
- [x] Lightbox opens, closes, and navigates
- [x] Keyboard navigation in lightbox (Escape, Arrow keys)
- [x] Form validates required fields
- [x] Form shows inline error messages
- [x] Form displays success state with summary
- [x] Footer year displays current year
- [x] All images load with proper alt text
- [x] Responsive layout at key breakpoints
- [x] No horizontal overflow on mobile
- [x] No console errors in browser

## Assignment Requirements Mapping

| Requirement | Implementation |
|-------------|---------------|
| 4+ interconnected pages | 6 pages: index, about, attractions, activities, gallery, contact |
| HTML5 headings | h1–h4 used across all pages |
| Paragraphs | Used throughout all content sections |
| Images | Local images in hero, attractions, activities, gallery |
| Hyperlinks | Navigation, CTAs, footer links, anchor links, breadcrumbs |
| Ordered lists | Activities page — planning steps |
| Unordered lists | Activities page — viewpoints, footer links |
| Table | About page — transport comparison table |
| Form | Contact page — full inquiry form |
| Navigation | Persistent header nav on all pages |
| Semantic HTML | header, nav, main, section, article, aside, footer |
| Page titles | Unique title per page |
| Meta descriptions | Unique description per page |
| CSS | External stylesheets (style.css, responsive.css) |
| Responsive design | Full responsive.css with breakpoints 360px–1920px |
| Gallery | Gallery page with filters, lightbox |
| Map | OpenStreetMap embed on About page |
| Multimedia | Images, map, SVG icons |
| Form validation | Client-side JS validation with error/success states |
| Domain/DNS | Templates in deploy/ directory |
| Virtual hosting | Apache and Nginx configs provided |

## Known Limitations

1. **No backend** — Form submissions are saved to localStorage only; no server-side processing
2. **No actual deployment** — Domain, DNS, and SSL configuration templates are provided but deployment has not been performed
3. **Contact details are placeholders** — Email and phone numbers shown are clearly marked as not real
4. **Images are AI-generated** — Not actual photographs of Ella (noted in image-sources.md)
5. **No actual social media accounts** — Social links are intentionally omitted to avoid false claims

## Student Information

```
Student Name: [TO_FILL]
Registration Number: [TO_FILL]
Course: [TO_FILL]
Module: [TO_FILL]
Domain: [TO_FILL]
Server IP: [TO_FILL]
Submission Date: [TO_FILL]
```

---

*This project is an academic submission for demonstration and educational purposes only.*
