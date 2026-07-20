# MINH HIEU STUDIO — Music, Archive & Experiments

[![GitHub Pages Deployment](https://img.shields.io/github/deployments/studiozengermany-cmd/studio-minh-hieu/github-pages?label=status&logo=github&color=31c754)](https://studiominhhieu.com)
[![Custom Domain](https://img.shields.io/badge/domain-studiominhhieu.com-0052ff?logo=google-chrome&logoColor=white)](https://studiominhhieu.com)
[![Tech Stack](https://img.shields.io/badge/tech-HTML5%20%7C%20CSS3%20%7C%20JS-orange?logo=javascript)](https://studiominhhieu.com)
[![Animation](https://img.shields.io/badge/animation-GSAP%20%26%20ScrollTrigger-green?logo=greensock&logoColor=white)](https://greensock.com/gsap/)

A premium, interactive personal portfolio website designed for **Minh Hieu** — showcasing music production, DJ archives, technical workflows, and creative web/AI experiments. 

Live Website: [https://studiominhhieu.com](https://studiominhhieu.com)

---

## 🌟 Key Features

- **Immersive Dark Theme**: Premium aesthetic styled with customized dark themes, gradients, and micro-interactions.
- **Cinematic Hero Background**: An atmospheric, loop-playing video background (`rain_bg.mp4`) with smooth overlay transitions.
- **GSAP Animations**: Fluid scrolling animations, scroll-triggered text-reveals, and element transitions powered by GreenSock Animation Platform and ScrollTrigger.
- **Project Showcase**: Displays experimental tools such as *SampleGuard* (Drag-and-drop secure file loading, memory inspector, safe lab).
- **Archive & Notes Hub**: Categorized storage sections for music files, project notes, and production workflows.
- **SEO & Performance Optimized**: Fully configured with unique titles, meta descriptions, canonical links, Open Graph tags, sitemap, and robots configuration.

---

## 🛠️ Tech Stack & Dependencies

- **HTML5**: Semantically structured layout with translation-protection (`translate="no"`).
- **CSS3**: Built with vanilla CSS using modern CSS Grid, Flexbox layouts, and standard CSS Custom Properties (Variables) for easy theme adjustment.
- **JavaScript (ES6+)**: Custom application logic for menu toggling, loading animations, and dynamic transitions.
- **GSAP (GreenSock)**: Used for robust and highly performant scrolling animations and effects.
- **Google Fonts**: Curated typography using **Outfit**, **Playfair Display**, **Plus Jakarta Sans**, and **JetBrains Mono**.

---

## 📂 Directory Structure

```text
├── assets/
│   ├── images/                # App illustrations & project screenshots
│   ├── mh-logo-scene.webp     # Favicon & brand asset
│   ├── og-image.webp          # Open Graph metadata image
│   └── rain_bg.mp4            # Cinematic background video loop
├── css/
│   └── styles.css             # Main styling, typography, variables & layout
├── js/
│   └── main.js                # Core JS logic & GSAP ScrollTrigger timeline configs
├── 404.html                   # Custom 404 error page
├── index.html                 # Main landing page
├── CNAME                      # Custom domain configuration for GitHub Pages
├── robots.txt                 # Search engine crawler configuration
├── sitemap.xml                # XML sitemap for SEO discovery
└── README.md                  # Project documentation
```

---

## 🚀 Local Development

To run this project locally, follow these simple steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/studiozengermany-cmd/studio-minh-hieu.git
   cd studio-minh-hieu
   ```

2. **Open index.html:**
   - Double-click `index.html` to open it directly in your browser.
   - Alternatively, serve it using **Live Server** (VS Code extension) or any lightweight static server:
     ```bash
     # Using Python
     python -m http.server 8000
     ```

---

## 🌐 Production Deployment

The project is automatically built and deployed via **GitHub Pages** on every push to the `main` branch.

### Custom Domain Configuration:
- **DNS setup**: A records are pointed to GitHub Pages IP addresses (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`).
- **CNAME**: Configured to map `studiominhhieu.com` directly to the repository.
- **HTTPS**: Fully enforced with Let's Encrypt SSL encryption.
