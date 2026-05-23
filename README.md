# Siddhantham Naveen — Portfolio

World-class animated portfolio built with React + Vite, Tailwind CSS, GSAP, Framer Motion, Lenis, and Three.js.

---

## 🚀 Setup in VS Code (3 steps)

### Step 1 — Open in VS Code
```
File → Open Folder → select the naveen-portfolio folder
```

### Step 2 — Install dependencies
Open the **Terminal** in VS Code (`Ctrl + backtick`) and run:
```bash
npm install
```
This installs: React, Vite, Tailwind, GSAP, Framer Motion, Lenis, Three.js.

### Step 3 — Start development server
```bash
npm run dev
```
Then open **http://localhost:5173** in your browser.

---

## 📁 Folder Structure

```
naveen-portfolio/
├── index.html                  # Entry HTML
├── vite.config.js              # Vite config
├── tailwind.config.js          # Tailwind config
├── postcss.config.js           # PostCSS config
├── package.json                # Dependencies
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx                # React entry point
    ├── App.jsx                 # Root — assembles all sections + Lenis
    ├── index.css               # Global styles + CSS variables
    ├── hooks/
    │   └── useScrollReveal.js  # Reusable GSAP scroll hook
    └── components/
        ├── Cursor.jsx          # Custom cursor + ring + mouse glow
        ├── ParticleBackground.jsx  # Three.js particle field
        ├── Navbar.jsx          # Fixed nav with smooth scroll
        ├── Hero.jsx            # Cinematic hero with GSAP word reveals
        ├── About.jsx           # About + animated stat counters
        ├── Skills.jsx          # Skill groups grid
        ├── Experience.jsx      # Timeline with stagger reveal
        ├── Projects.jsx        # Project cards
        ├── Education.jsx       # Education + certifications
        ├── Contact.jsx         # Contact with magnetic buttons
        └── Footer.jsx
```

---

## 🖼️ Adding Your Photo

Place your photo at `public/photo.jpg`, then in `src/components/Hero.jsx` change:
```jsx
const IMAGE_URL = 'https://drive.google.com/uc?export=view&id=1wrCuHA2no7eIi87q7lt01vsJ7_saW40X'
```
to:
```jsx
const IMAGE_URL = '/photo.jpg'
```

---

## 🌐 Deploy to Vercel (free)

```bash
npm run build
```
Then drag the `dist/` folder to **vercel.com** — it goes live instantly.

---

## ✨ Tech Stack

| Library | Purpose |
|---|---|
| React 18 + Vite | Fast component-based UI |
| Tailwind CSS | Utility-first styling |
| GSAP + ScrollTrigger | Scroll-based animations |
| Framer Motion | Component transitions |
| Lenis | Buttery smooth scrolling |
| Three.js | 3D particle background |
