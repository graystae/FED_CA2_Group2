# Mind Body Bloom — CA2 Front-End Web Development

A healthy-lifestyle website for teens/young adults (16-30) in Singapore, covering fitness, sleep, mental health and nutrition. Built with **Tailwind CSS** (CDN) + vanilla HTML5/JavaScript, no build step required.

## Folder Structure
```
FED_CA2_Group2/
│
├── index.html                         # Homepage (Gabriel)
├── README.md
│
├── pages/
│   ├── mental-health.html              # Gabriel
│   ├── mental-health-tips.html         # Gabriel
│   │
│   ├── fitness.html                    # Guan Zhe
│   ├── fitness-workouts.html           # Guan Zhe
│   │
│   ├── about.html                      # Guan Zhe
│   │
│   ├── nutrition.html                  # Grace
│   ├── nutrition-recipes.html          # Grace
│   │
│   ├── personal-action.html            # Grace
│   │
│   ├── sleep.html                      # Tong Yu
│   ├── sleep-tips.html                 # Tong Yu
│   │
│   └── resources.html                  # Tong Yu
│
├── assets/
│   │
│   ├── css/
│   │   └── style.css                   # Shared styles
│   │
│   ├── js/
│   │   ├── main.js                     # Navbar, streak counter, tabs, accordion
│   │   └── form-validation.js          # Signup form validation
│   │
│   └── img/
│       └── (empty)         
│
└── docs/                               # Optional (for project documents)
    ├── project-planning.docx
    └── reflection-journal.docx 
```

## File Naming Convention
- All lowercase, hyphen-separated (e.g. `sleep-tips.html`, `nutrition-recipes.html`).
- Homepage must stay named `index.html`.

## Adding a New Page
1. Copy an existing page closest to your topic (e.g. `sleep.html`) as a starting point.
2. Update the `<title>`, hero section, and main content — keep the header/nav and footer markup identical across all pages so navigation stays consistent.
3. Set the `active` class on your page's own nav link (desktop + mobile menu).
4. Link `assets/css/style.css` and `assets/js/main.js` (and `form-validation.js` only if your page has the sign-up form).

## Team Responsibilities
- **Gabriel** — Homepage, Mental Health + Mental Health Tips
- **Tong Yu** — Sleep, Sleep Tips, Resources
- **Guan Zhe** — Fitness, Fitness Workouts, About (UI design lead)
- **Grace** — Nutrition, Nutrition Recipes, Personal Action Plan

## Assignment Compliance Checklist
- [x] 12 pages total (3 per member), `index.html` as homepage
- [x] One styling framework only (Tailwind CSS via CDN)
- [x] Responsive nav with hamburger menu on mobile
- [x] At least one HTML `<table>` (sleep.html, fitness-workouts.html)
- [x] Form with custom JS validation (index.html sign-up form)
- [x] JavaScript DOM interactivity: streak counter, gallery filter, tabs, accordion, mobile nav
- [x] Consistent visual style (shared color system + typography in style.css)
