# Assignment Report — Explore Ella

**Student Name:** [TO_FILL]
**Registration Number:** [TO_FILL]
**Course:** [TO_FILL]
**Module:** [TO_FILL]
**Submission Date:** [TO_FILL]
**Domain:** [TO_FILL]
**Server IP:** [TO_FILL]

---

## 1. Introduction

This report documents the design, development, and deployment preparation of "Explore Ella," a static tourism website created as part of a university web technologies assignment. The website showcases Ella, a popular hill country destination in Sri Lanka, using modern web standards including HTML5, CSS3, and vanilla JavaScript.

The project demonstrates core web development competencies including semantic markup, responsive design, form handling, multimedia integration, and web server deployment configuration.

## 2. Website Objectives

The primary objectives of the Explore Ella website are:

- Present Ella, Sri Lanka as an appealing tourism destination
- Demonstrate HTML5 semantic elements and proper document structure
- Implement a responsive layout that functions across desktop, tablet, and mobile devices
- Provide interactive features using client-side JavaScript
- Include multimedia content (images, maps, gallery)
- Prepare deployment configurations for Apache/Nginx web servers
- Maintain high standards of accessibility and code quality

## 3. Selected Tourism Destination

**Ella** is a small town in the Badulla District of Sri Lanka's Uva Province, situated at approximately 1,041 metres above sea level in the central highlands. The destination was selected for its rich visual appeal and diverse range of natural attractions, including:

- Mountain peaks and hiking trails (Ella Rock, Little Adam's Peak)
- The iconic Nine Arches Bridge
- Waterfalls (Ravana Falls)
- Terraced tea plantations
- The scenic Kandy–Ella railway

Ella's combination of natural beauty, accessible adventure, and cultural heritage makes it an ideal subject for a tourism website.

## 4. Website Structure

The website consists of six interconnected pages:

| Page | File | Purpose |
|------|------|---------|
| Home | `index.html` | Landing page with hero, introduction, featured content |
| About | `about.html` | Destination information, facts, transport, map |
| Attractions | `attractions.html` | Detailed attraction guide with anchor navigation |
| Activities | `activities.html` | Activity recommendations and planning guide |
| Gallery | `gallery.html` | Image gallery with filters and lightbox |
| Contact | `contact.html` | Inquiry form with validation |

All pages share a consistent header navigation, footer, branding, and visual design system.

## 5. Description of Each Page

### Home Page (`index.html`)
The home page features a full-viewport hero section with a landscape image, animated text, and call-to-action buttons. Below, it includes a welcome introduction section, four featured experience cards (mountains, tea, adventure, rail), an attraction highlights grid, a travel inspiration split section, and a final call-to-action.

### About Page (`about.html`)
The about page provides comprehensive destination information including an introductory overview, six fact cards, a transport comparison table (train, bus, car, tuk-tuk), a best time to visit section with travel tips, and an embedded OpenStreetMap showing Ella's location.

### Attractions Page (`attractions.html`)
The attractions page catalogues six key attractions organised by category (bridges, mountains, waterfalls, culture/nature) with anchor navigation. Each attraction is presented as a semantic `<article>` element with image, description, category tag, and travel notes.

### Activities Page (`activities.html`)
The activities page features six interactive activity cards with hover overlays, an unordered list of popular viewpoints, an ordered list of planning steps, and an aside box with responsible travel guidance.

### Gallery Page (`gallery.html`)
The gallery page displays 11 images in a responsive grid with category filters (Landscapes, Attractions, Nature, Culture, Travel). Images are clickable and open in a keyboard-accessible lightbox with previous/next navigation and caption display.

### Contact Page (`contact.html`)
The contact page features a professional inquiry form with seven fields (name, email, phone, date, visitors, experience, message), real-time validation, and a success state that displays a summary of submitted data. A sidebar provides contact information (marked as placeholder).

## 6. HTML5 Implementation

The website demonstrates the following HTML5 elements across its pages:

- `<!DOCTYPE html>` — HTML5 document type declaration
- `<html lang="en">` — Language attribute for accessibility
- `<head>`, `<meta charset>`, `<meta name="viewport">` — Proper head configuration
- `<title>`, `<meta name="description">` — Unique per page
- `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>` — Semantic structure
- `<h1>`–`<h4>` — Heading hierarchy
- `<p>`, `<img>`, `<a>` — Core content elements
- `<ul>`, `<ol>` — Both list types demonstrated
- `<table>` — Transport comparison table
- `<form>`, `<label>`, `<input>`, `<select>`, `<textarea>`, `<button>` — Complete form elements

## 7. CSS and Responsive Design

The website uses two external stylesheets:

- `css/style.css` — Design system (CSS custom properties, component styles, layout utilities)
- `css/responsive.css` — Media queries for breakpoints at 360px, 480px, 768px, 1024px, 1440px, and 1920px

Key CSS features:
- CSS custom properties (variables) for colours, typography, spacing
- CSS Grid and Flexbox layouts
- Fluid typography using `clamp()`
- Scroll-triggered reveal animations
- Hover and focus interactive states
- `prefers-reduced-motion` media query for accessibility
- Print styles

## 8. Multimedia

The website includes the following multimedia elements:

- **Images:** AI-generated tourism photography (hero, attractions, activities, gallery)
- **Map:** Embedded OpenStreetMap iframe on the About page
- **SVG icons:** Inline SVG icons for experience cards, contact information, and navigation
- **SVG favicon:** Custom mountain-themed favicon

All images include appropriate `alt` text and use `loading="lazy"` where applicable.

## 9. Navigation and Functionality

### Navigation
- Persistent header navigation on all pages
- Active page highlighting
- Mobile hamburger menu with overlay
- Footer navigation links
- Breadcrumb navigation on inner pages
- Anchor navigation on Attractions page

### JavaScript Functionality
- Sticky header with scroll detection
- Mobile menu open/close with Escape key support
- Scroll reveal animations (IntersectionObserver)
- Gallery category filtering
- Lightbox with keyboard controls (Escape, Arrow keys)
- Form validation with inline error messages
- Form success state with submitted data summary
- localStorage demo storage
- Dynamic footer year

## 10. Technologies Used

| Technology | Version/Type | Purpose |
|-----------|-------------|---------|
| HTML5 | — | Document structure and semantics |
| CSS3 | — | Styling, layout, animations, responsiveness |
| JavaScript | ES6 (vanilla) | Interactivity and form handling |
| Google Fonts | DM Sans, Playfair Display | Typography |
| OpenStreetMap | Embed | Map display |
| SVG | Inline | Icons and favicon |

No external frameworks, libraries, or build tools are used.

## 11. Domain Registration

**Status:** [TO_FILL]

The domain for this project is:

- **Domain:** [TO_FILL]
- **Registrar:** [TO_FILL]
- **Registration date:** [TO_FILL]

[INSERT SCREENSHOT: DOMAIN REGISTRATION CONFIRMATION]

## 12. DNS Configuration

DNS records configured:

```
Type    Host    Value
A       @       YOUR_SERVER_IP
A       www     YOUR_SERVER_IP
```

[INSERT SCREENSHOT: DNS CONFIGURATION PANEL]

DNS resolution flow:
Domain → DNS Resolver → Server IP → Web Server → Virtual Host → Document Root → index.html

## 13. Virtual Hosting

Virtual host configuration files are provided for both Apache and Nginx:

- `deploy/apache-vhost.conf`
- `deploy/nginx-server-block.conf`

**Status:** [TO_CONFIGURE]

[INSERT SCREENSHOT: APACHE VIRTUAL HOST CONFIGURATION]
[INSERT SCREENSHOT: DOCUMENT ROOT FILE LISTING]

## 14. Website Deployment

### Deployment Steps

1. Set up a Linux server (Ubuntu/Debian recommended)
2. Install Apache or Nginx web server
3. Create the document root directory
4. Upload website files to the server
5. Configure the virtual host
6. Enable the site and restart the web server
7. Configure DNS records to point to the server
8. Install SSL certificate using Let's Encrypt
9. Test the live website

**Status:** [NOT YET DEPLOYED]

[INSERT SCREENSHOT: LIVE WEBSITE HOME PAGE]
[INSERT SCREENSHOT: LIVE WEBSITE ON MOBILE]

## 15. Testing

### Tests Performed

- All HTML pages load correctly
- Navigation links work between all pages
- Mobile menu opens and closes properly
- Gallery lightbox functions with keyboard controls
- Form validation displays errors and success states
- Responsive layout tested at multiple breakpoints
- Images load with proper alt text
- No JavaScript console errors
- Footer displays current year dynamically

### Browser Testing

- [TO_FILL: List browsers tested]

## 16. Accessibility

The website implements the following accessibility features:

- Skip-to-content link on every page
- Semantic HTML5 elements
- Single `<h1>` per page with proper hierarchy
- Alt text on all images
- ARIA labels on interactive elements
- `aria-expanded` on mobile menu
- `aria-live` region for form feedback
- `aria-modal` on lightbox
- Visible focus indicators
- Keyboard-operable gallery and menu
- `prefers-reduced-motion` support
- Sufficient colour contrast

## 17. References / Sources

- OpenStreetMap contributors — map data and embed
- Google Fonts — DM Sans and Playfair Display typefaces
- All images are AI-generated for this project (see `docs/image-sources.md`)
- General destination information drawn from widely available travel resources about Ella, Sri Lanka

## 18. Conclusion

The Explore Ella website successfully demonstrates the required web technologies and development practices as specified in the assignment brief. The project includes six interconnected pages with semantic HTML5 markup, responsive CSS design, interactive JavaScript features, multimedia content, and deployment preparation documentation.

The website is designed to be visually professional while clearly satisfying each technical requirement of the assignment. All deployment configuration files are included and documented, ready for actual server deployment when the domain and hosting infrastructure are available.

---

*This report was prepared as part of a university web technologies assignment. All content is for educational purposes only.*
