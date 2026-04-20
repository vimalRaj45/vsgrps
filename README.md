# VSGRPS — Vision Solutions Groups

> **India's Premier Software Development Company** | Namakkal, Tamil Nadu 🇮🇳  
> Website: [vsgrps.com](https://vsgrps.com) | Email: vimalraj5207@gmail.com | Phone: +91 88070 99288

---

## 🏢 About VSGRPS

**VSGRPS** (Vision Solutions Groups) is a leading software development company headquartered in **Namakkal, Tamil Nadu, India**. Founded in 2021, VSGRPS operates through two divisions:

- **Vision Solutions Groups** — Strategic consulting, digital vision, and business transformation
- **VSGRPS Technologies** — The tech engine that turns ideas into high-performance digital products

We specialize in building **scalable web applications, automation systems, SaaS platforms, CRM dashboards, and enterprise-grade software** for startups and businesses worldwide.

---

## 🌐 Live Products & URLs

| Product | URL | Description |
|---|---|---|
| Main Website | [vsgrps.com](https://vsgrps.com) | Company landing page |
| VSGRPS Agile | [agile.vsgrps.com](https://agile.vsgrps.com) | Agile project management workspace |
| CertifyPro | [certifypro.vsgrps.com](https://certifypro.vsgrps.com) | Enterprise certificate generation SaaS |

---

## 📁 Project Structure

```
vsgrps-main/
├── public/                    # Static public assets
│   ├── favicon.svg
│   ├── manifest.json          # PWA manifest
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── sw.js                  # Service Worker
│   ├── icons.svg
│   ├── pwa-icon-192.png
│   ├── pwa-icon-512.png
│   └── images/
│       └── projects/          # Project screenshot images
├── src/
│   ├── assets/                # Local image assets
│   │   ├── scout-about.png
│   │   └── scout-contact.png
│   ├── components/
│   │   ├── About/             # About section (company info, counters)
│   │   ├── AgileWorkspaceProduct/ # Agile product showcase
│   │   ├── AppSolutions/      # App solutions + PWA install
│   │   ├── Blog/              # Blog section
│   │   ├── Chatbot/           # AI-powered chatbot (Gemini API)
│   │   ├── Common/            # Shared: LottieIcon, ScrollToTop, ServicePageLayout
│   │   ├── CompanyReview/     # Google-style review section
│   │   ├── Contact/           # Contact form section
│   │   ├── FeaturedProduct/   # Featured product showcase
│   │   ├── FloatingActions/   # Floating WhatsApp + scroll buttons
│   │   ├── Footer/            # Footer + Cookie Consent + Legal Dialog
│   │   ├── Hero/              # Hero section with typing animation
│   │   ├── LoadingScreen/     # Animated loading screen
│   │   ├── Navbar/            # Responsive navbar with mobile sidebar
│   │   ├── Projects/          # Projects carousel + grid
│   │   ├── Services/          # Services grid
│   │   ├── TechStack/         # Animated tech stack marquee
│   │   ├── Testimonials/      # Client testimonials carousel
│   │   └── WhyChooseUs/       # Why choose VSGRPS section
│   ├── data/
│   │   └── projects.js        # All project data (title, tech, images, results)
│   ├── pages/
│   │   ├── AboutPage.jsx
│   │   ├── BlogPage.jsx
│   │   ├── CookiePolicyPage.jsx
│   │   ├── PrivacyPage.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── TermsPage.jsx
│   │   ├── ProjectDetail/     # Dynamic project detail page
│   │   └── services/          # Individual service sub-pages
│   │       ├── AutomationPage.jsx
│   │       ├── CRMPage.jsx
│   │       ├── CustomerSupportPage.jsx
│   │       ├── CustomSoftwarePage.jsx
│   │       ├── HostingPage.jsx
│   │       └── WebDevelopmentPage.jsx
│   ├── App.jsx                # Root app with router + all routes
│   ├── main.jsx               # React entry point
│   └── index.css              # Global styles + CSS variables
├── scripts/
│   └── fix-prerender.js       # Post-build script: moves pre-rendered home to root
├── dist/                      # Production build output (pre-rendered HTML)
├── sim.html                   # Standalone static demo page
├── index.html                 # Vite entry HTML with SEO meta + schema
├── vite.config.js             # Vite + prerender plugin config
├── package.json
├── wrangler.toml              # Cloudflare Pages deployment config
└── .env                       # Environment variables
```

---

## ⚙️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|---|---|---|
| React | 19.x | UI framework |
| Vite | 8.x | Build tool & dev server |
| React Router DOM | 7.x | Client-side routing |
| Framer Motion | 12.x | Page animations |
| PrimeReact | 10.x | UI component library |
| PrimeFlex | 4.x | CSS utility grid |
| PrimeIcons | 7.x | Icon library |
| Swiper | 12.x | Carousel/slider |
| GSAP | 3.x | Advanced animations |
| Lenis | 1.x | Smooth scroll |
| React Helmet Async | 3.x | SEO head management |
| React Hook Form | 7.x | Form handling |
| React Hot Toast | 2.x | Toast notifications |
| React Intersection Observer | 10.x | Scroll-triggered animations |

### AI & Integrations
| Technology | Purpose |
|---|---|
| Google Gemini API | Powers the AI chatbot |
| Google Analytics 4 (G-2CQC98J7WY) | User analytics |
| Google Site Verification | Search console verification |
| Lottie / DotLottie WC | Animated illustrations |

### Build & Deployment
| Technology | Purpose |
|---|---|
| `@prerenderer/rollup-plugin` | Static pre-rendering for SEO |
| `@prerenderer/renderer-jsdom` | JSDOM renderer for pre-rendering |
| Puppeteer | Headless browser for pre-render |
| Cloudflare Pages | Hosting & CDN (`wrangler.toml`) |
| Sharp | Image optimization |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/vimalRaj45/vsgrps.git
cd vsgrps-main

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root:

```env
VITE_GEMINI_API_KEY=your_google_gemini_api_key
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173`

### Production Build

```bash
npm run build
```

This runs:
1. `vite build` — Bundles all assets + pre-renders all routes
2. `node scripts/fix-prerender.js` — Moves the pre-rendered home page to `dist/index.html`

### Preview Build Locally

```bash
npm run preview
```

---

## 🗺️ Routes & Pages

| Route | Page | Description |
|---|---|---|
| `/` | Home | Full landing page (Hero → About → Services → Products → Projects → Blog → Why Us → Testimonials → Review → Tech Stack → Contact) |
| `/about` | About Page | Dedicated about page with full company story |
| `/services` | Services Page | All services overview |
| `/services/web-development` | Web Dev Page | Web development service detail |
| `/services/automation-solutions` | Automation Page | Automation service detail |
| `/services/crm-dashboards` | CRM Page | CRM & dashboard service detail |
| `/services/custom-software` | Custom Software Page | Custom software service detail |
| `/services/hosting-cloud` | Hosting Page | Hosting & cloud service detail |
| `/services/customer-support` | Support Page | Customer support service detail |
| `/blog` | Blog Page | Company blog |
| `/projects` | Projects | Scrolls to projects section |
| `/contact` | Contact | Scrolls to contact section |
| `/project/:id` | Project Detail | Individual project detail page |
| `/privacy` | Privacy Policy | Privacy policy page |
| `/terms` | Terms of Service | Terms page |
| `/cookies` | Cookie Policy | Cookie policy page |

---

## 📦 Our Services

### 1. 🌐 Web Development
High-performance corporate websites, e-commerce platforms, and custom web applications.
- SaaS Platforms (React, Next.js)
- E-commerce Stores (Shopify, WooCommerce, Custom)
- Landing Pages (Google Ads optimized)
- Progressive Web Apps (Offline-capable, installable)

### 2. ⚙️ Automation Solutions
Reduce manual work through intelligent workflow automation.
- Workflow Automation (Google Apps Script, Zapier)
- Customer Communication Bots
- Process Optimization Tools

### 3. 📊 Dashboards & CRM
Centralize operations with custom business intelligence.
- Business Dashboards (Real-time data)
- Custom CRM Systems
- Data Visualization & Reporting

### 4. 💻 Custom Software
End-to-end system design and API integrations.
- REST & GraphQL API Architecture
- Enterprise-grade Backend Systems
- Third-party Integrations (Payment, SMS, Email)

### 5. ☁️ Hosting & Cloud
Secure, high-uptime deployment and cloud services.
- Web Hosting & Cloud Deployment
- CI/CD Pipeline Setup
- Security Hardening & SSL

### 6. 🎧 Customer Support
Ongoing technical support and system maintenance.
- Bug Fixes & Updates (3-month free support included)
- System Monitoring
- Feature Enhancements

---

## 🏆 Featured Projects

### 1. CertifyPro — Enterprise Certificate SaaS
- **URL:** [certifypro.vsgrps.com](https://certifypro.vsgrps.com)
- **Tech:** React 18, Vite, Fastify, PDF-Lib, BullMQ, Upstash Redis, Cloudinary
- **Key Features:** Visual drag-and-drop design studio, bulk CSV processing, Zero-Retention Architecture (GDPR), multi-font support, real-time preview
- **Results:** 1000s certs/second, Zero data footprint, 100% GDPR compliant, Free community tier

### 2. EasanMart — Grocery Management System
- **Client:** EasanMart Logistics
- **Tech:** HTML, CSS, Bootstrap 5, JavaScript, Google Apps Script, Google Sheets, Netlify
- **Key Features:** Google Sheets backend, automated order processing, real-time stock updates, email notifications
- **Results:** 100% order accuracy, Zero hosting cost, 40% faster inventory, 500+ monthly orders

### 3. Edwyna — Scalable Enterprise Web App
- **Client:** Edwyna Enterprise
- **Tech:** Express.js, PostgreSQL, Supabase, Render, Node.js, BigRock
- **Key Features:** Enterprise PostgreSQL DB, serverless functions, real-time sync, automated CI/CD, secure auth
- **Results:** 99.9% uptime, 50ms DB response, auto-scaling, 80% efficiency gain

### 4. Srimayil Builders — Corporate Business Website
- **Client:** Srimayil Builders Group
- **Tech:** React.js, Google Apps Script, Google Sheets, BigRock, Netlify, Framer Motion
- **Key Features:** Interactive project gallery, lead capture, premium animations, SEO optimized
- **Results:** 60% more lead gen, 98/100 Lighthouse score, Zero server costs, 25+ projects shown

### 5. College Event Platform — Real-Time Event Management
- **Client:** Universal College of Engineering
- **Tech:** React.js, Fastify, Neon PostgreSQL, GoDaddy, Node.js, Tailwind CSS
- **Key Features:** High-concurrency API, serverless Postgres, real-time registration, QR code check-in, e-certificate generation
- **Results:** 5000+ registered users, <30ms API latency, 200+ events managed, 100% uptime

---

## 🛠️ Technologies We Master

**Frontend:** React, Next.js, TypeScript, Tailwind CSS, Framer Motion, GSAP  
**Backend:** Node.js, Fastify, Express.js, Python, Django  
**Databases:** PostgreSQL, MongoDB, Redis, Supabase, Neon DB, Firebase  
**Cloud & DevOps:** AWS, Docker, Kubernetes, Render, Cloudflare, CI/CD  
**Mobile:** Flutter, React Native  
**AI/ML:** TensorFlow, Google Gemini API  
**Payments & Comms:** Razorpay, EmailJS, Brevo  
**Tools:** Git, Figma, Google Workspace (Sheets, Apps Script)  

---

## 📈 SEO & Performance

This site is fully optimized for search engines and performance:

- ✅ **Pre-rendering** — All routes are statically pre-rendered at build time via `@prerenderer/rollup-plugin` (Puppeteer renderer with 10s render timeout)
- ✅ **JSON-LD Schema** — `Organization`, `LocalBusiness`, `WebSite`, `Service`, `BreadcrumbList` schemas embedded
- ✅ **Open Graph & Twitter Cards** — Full social preview metadata
- ✅ **Google Analytics 4** — Tracking ID: `G-2CQC98J7WY`
- ✅ **Google Site Verification** — `gqqLAlnUqc6eBcVbBjlEkRH3F6Xhy6NhBpjzFqsMlis`
- ✅ **Canonical URLs** — Set per-page via React Helmet Async
- ✅ **Sitemap** — `/sitemap.xml`
- ✅ **Robots.txt** — `/robots.txt`
- ✅ **PWA** — Installable Progressive Web App with Service Worker & manifest
- ✅ **Manual Chunk Splitting** — vendor, primereact, router, framer, swiper chunks
- ✅ **Lazy Loading** — All heavy components are React.lazy() loaded
- ✅ **Accessibility** — ARIA labels, keyboard navigation, semantic HTML

### Pre-rendered Routes
`/index`, `/about`, `/services`, `/projects`, `/contact`, `/blog`, `/privacy`, `/terms`, `/cookies`

---

## 🌍 Deployment

### Cloudflare Pages (Primary)

Configured via `wrangler.toml`. Push to main branch to trigger auto-deploy.

```bash
# Deploy with Wrangler
npx wrangler pages deploy dist --project-name=vsgrps
```

### Build Output (`dist/`)
```
dist/
├── index.html          # Pre-rendered home page
├── about/index.html    # Pre-rendered about page
├── services/index.html # Pre-rendered services page
├── blog/index.html     # Pre-rendered blog page
├── contact/index.html  # Pre-rendered contact page
├── projects/index.html # Pre-rendered projects page
├── privacy/index.html  # Pre-rendered privacy page
├── terms/index.html    # Pre-rendered terms page
├── cookies/index.html  # Pre-rendered cookie policy page
├── assets/             # Hashed JS/CSS bundles
├── sitemap.xml
├── robots.txt
├── manifest.json
└── sw.js               # Service Worker
```

---

## 🤖 AI Chatbot

The site features an AI-powered chatbot built with **Google Gemini API**:
- Pre-trained with VSGRPS company context, services, pricing strategy, and FAQs
- Responds to inquiries about services, pricing, timelines, and the team
- Accessible via the floating button (bottom-right) on all pages
- Pricing model: requirement-based (no fixed price list)

---

## 🔑 Key Scripts

| Script | Command | Description |
|---|---|---|
| Dev Server | `npm run dev` | Start Vite dev server (HMR) |
| Build | `npm run build` | Build + pre-render all routes |
| Preview | `npm run preview` | Preview production build locally |
| Lint | `npm run lint` | Run ESLint |

---

## 📞 Contact VSGRPS

| Channel | Details |
|---|---|
| 📧 Email | vimalraj5207@gmail.com |
| 📱 Phone / WhatsApp | +91 88070 99288 |
| 📍 Location | Namakkal, Tamil Nadu, India |
| 💼 LinkedIn | [Vimal Raj S](https://www.linkedin.com/in/vimal-raj-s-b83b42324) |
| 🐙 GitHub | [vimalRaj45](https://github.com/vimalRaj45) |
| 🕐 Hours | Always open for inquiries (24/7) |

---

## 📄 Legal

- [Privacy Policy](https://vsgrps.com/privacy)
- [Terms of Service](https://vsgrps.com/terms)
- [Cookie Policy](https://vsgrps.com/cookies)

---

## 📝 License

© 2026 VSGRPS Technologies. All rights reserved.  
Crafted with ♥ in India — Namakkal, Tamil Nadu.

---

*Built with React + Vite + Cloudflare Pages | VSGRPS Technologies — Vision Solutions Groups*
