# Garage Doors Service Team Queens — Website Codebase

A complete, modern, professional, high-converting website built for **Garage Doors Service Team Queens**, a residential garage door company serving Queens, New York.

Designed and engineered to build trust, communicate services clearly, generate inbound phone calls, capture customer inquiries, and streamline appointment booking via GoHighLevel (GHL).

---

## 🏗️ Technology Stack

- **Framework**: [Astro](https://astro.build/) (Static Site Generation / SSG — generates 100% static HTML/CSS/JS for fast loading and low latency)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with a custom American home-service business design system
- **Typography**: `Poppins` (headings) and `Inter` (body copy)
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **CRM Integration**: GoHighLevel (GHL) Webhook, Live Chat Widget, and Service Calendar integration points
- **Messaging**: Native WhatsApp click-to-chat integration
- **Deployment**: Static output (`dist/`) suitable for standard hosting, cPanel, Apache, Nginx, Vercel, Netlify, or Cloudflare Pages.

---

## 🎨 Brand Identity & Design System

| Element | Specification | Hex / Value |
| :--- | :--- | :--- |
| **Primary Navy** | Core brand color, headers, hero accents | `#14243A` |
| **Secondary Navy** | Cards, badges, subtle contrast | `#1D3557` |
| **Accent Orange** | Primary CTAs, badges, conversion buttons | `#F28C28` |
| **Light Gray** | Card backgrounds, subtle alternating sections | `#F4F6F8` |
| **Dark Text** | Primary body typography | `#202A35` |
| **Muted Text** | Subtitles, supporting copy | `#697586` |
| **Border** | Subtle dividers, input borders | `#E5E7EB` |

---

## 📂 Project Structure

```
garage door project/
├── dist/                      # Production static output (deploy this folder)
├── public/                    # Static assets
│   ├── favicon.svg            # Branded garage door favicon
│   ├── robots.txt             # Search engine crawler instructions
│   ├── sitemap.xml            # XML sitemap with all routes
│   └── images/                # Optimized WebP photography & SVG logos
│       ├── logo.svg           # Primary brand logo
│       ├── logo-white.svg     # White brand logo for dark navy footer
│       ├── hero/              # Modern residential home garage hero
│       ├── services/          # Repair, Springs, Installation, Opener, Maintenance
│       ├── work/              # Project gallery photography
│       └── about/             # Queens homes & technician photography
├── src/
│   ├── config/
│   │   ├── business.js        # Centralized business information & verification flags
│   │   └── integrations.js    # GHL webhook, chat widget, calendar embed settings
│   ├── layouts/
│   │   └── BaseLayout.astro   # SEO meta, OpenGraph, JSON-LD schema, Header, Footer
│   ├── components/
│   │   ├── Header.astro       # Sticky navigation, mobile hamburger drawer, CTAs
│   │   ├── Footer.astro       # 4-column navy footer, quick links, contact info
│   │   ├── Hero.astro         # 2-column hero, verified CTAs, trust badges
│   │   ├── ServiceCard.astro  # Service card with image, details, CTAs
│   │   ├── WhyChooseUs.astro  # 5 value propositions, Queens local focus
│   │   ├── ProjectGallery.astro # Filterable portfolio with image lightbox
│   │   ├── HowItWorks.astro   # 4-step customer journey
│   │   ├── TestimonialsSection.astro # Google review display & feedback infrastructure
│   │   ├── FAQAccordion.astro # Accordion with 7 verified Q&As
│   │   ├── ContactForm.astro  # Full service request form with client validation
│   │   ├── WhatsAppButton.astro # Bottom-right floating WhatsApp CTA
│   │   ├── ChatWidget.astro   # GHL live chat widget embed & preview runner
│   │   └── CTASection.astro   # Conversion banner
│   ├── pages/
│   │   ├── index.astro        # Homepage
│   │   ├── services.astro     # Services overview & neighborhood directory
│   │   ├── work.astro         # Portfolio gallery with interactive lightbox
│   │   ├── about.astro        # About Us & company values
│   │   ├── reviews.astro      # Customer reviews & review integrity policy
│   │   ├── contact.astro      # 2-column contact page
│   │   ├── book-service.astro # Dedicated booking page (GHL calendar / form)
│   │   ├── privacy-policy.astro # New York SHIELD & TCPA-compliant privacy policy
│   │   └── terms.astro        # Terms and conditions
│   └── styles/
│       └── global.css         # Tailwind base styles and custom components
├── astro.config.mjs           # Astro configuration
├── tailwind.config.mjs        # Tailwind design tokens
├── package.json               # Node dependencies and scripts
└── GHL-INTEGRATION-GUIDE.md   # Step-by-step GoHighLevel onboarding guide
```

---

## 🚀 Quick Start & Development

### 1. Prerequisites
- Node.js 18+ (tested with Node 24)
- npm or pnpm

### 2. Development Server
```bash
npm run dev
```
Open your browser to `http://localhost:4321` to view the live site.

### 3. Production Build
```bash
npm run build
```
The static website files will be generated in `dist/`.

### 4. Preview Build
```bash
npm run preview
```

---

## 🔒 Business Details & Verification Policy

In accordance with strict business verification guidelines:
- We **never invent** phone numbers, emails, physical addresses, or licenses.
- Unverified items are controlled via boolean flags in `src/config/business.js`:
  - `verification.isPhoneVerified`
  - `verification.isEmailVerified`
  - `verification.isAddressVerified`
  - `verification.isHoursVerified`
  - `verification.isWhatsAppVerified`
- When set to `false`, direct call links and placeholders are safely hidden from the public-facing UI.

---

## 🌐 Deployment to cPanel or Standard Hosting

1. Run `npm run build`.
2. Locate the generated `dist/` directory.
3. Upload all contents of `dist/` into your server's `public_html` directory (via FTP, File Manager, or Git).
4. That's it! Because this is a static build, it requires no Node.js runtime on the production server.
