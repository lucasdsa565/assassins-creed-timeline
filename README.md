# Assassin's Creed Timeline

A single-page fan site that takes you on a scroll-driven journey through the entire Assassin's Creed timeline — from Kassandra in 431 B.C.E. to Jacob & Evye Frye in 1868 C.E. Each protagonist gets their own section with era, game, and bio, alongside a live "synchronization %" tracker and a side navigation that follows you as you scroll.

Built with plain HTML, CSS and JavaScript, using [GSAP](https://gsap.com/) and ScrollTrigger for the animations — each character section animates in with a subtle "Animus glitch" effect and fades out as you scroll past, tying the whole experience to the feel of syncing through a memory.

> **Disclaimer:** This is a non-commercial fan project made purely out of love for the series. All Assassin's Creed characters, names, and imagery belong to Ubisoft Entertainment. This project is **not affiliated with or endorsed by Ubisoft** in any way.

🔗 **[Live demo](#)** — replace with your GitHub Pages link once it's live

---

## Preview

| | |
|---|---|
| ![Hero section](<img width="1348" height="631" alt="image" src="https://github.com/user-attachments/assets/965085bf-3a26-4244-9fa6-48cacf37e126" />
 />
| ![The Creed section](<img width="1352" height="633" alt="image" src="https://github.com/user-attachments/assets/268602ad-ebb5-48eb-9427-16697b39bae7" />
 />
| ![Kassandra section](<img width="1350" height="633" alt="image" src="https://github.com/user-attachments/assets/1e5609f3-a3d4-413e-8426-ec3d00b87b9a" />
 />
| ![Sync complete section](<img width="1352" height="630" alt="image" src="https://github.com/user-attachments/assets/cedb1e86-e90c-4759-99de-c5c21d266657" />
 />
|

---

## Features

- 🕰️ Chronological timeline of every mainline protagonist, from Ancient Greece to Industrial Revolutuon
- 📊 Scroll-synced "synchronization" progress indicator that fills up as you read through the timeline
- 🧭 Fixed side navigation highlighting the era currently in view
- ✨ GSAP ScrollTrigger animations (entrance **and** exit) for every character section, with a subtle "glitch" effect on entry
- 📱 Fully responsive layout — desktop, tablet, and mobile

---

## Timeline

| Era | Character | Game(s) |
|---|---|---|
| 431 B.C.E. | Kassandra | Assassin's Creed Odyssey |
| 49 B.C.E. | Bayek of Siwa | Assassin's Creed Origins |
| 861 C.E. | Basim Ibn Ishaq | Assassin's Creed Mirage |
| 873 C.E. | Eivor Varinsdottir | Assassin's Creed Valhalla |
| 1191 C.E. | Altaïr Ibn-La'Ahad | Assassin's Creed |
| 1476 C.E. | Ezio Auditore da Firenze | AC II · Brotherhood · Revelations |
| 1579 C.E. | Naoe & Yasuke | Assassin's Creed Shadows |
| 1715 C.E. | Edward Kenway | Assassin's Creed IV: Black Flag |
| 1752 C.E. | Shay Patrick Cormac | Assassin's Creed Rogue |
| 1754 C.E. | Ratonhnhaké:ton (Connor) | Assassin's Creed III |
| 1789 C.E. | Arno Victor Dorian | Assassin's Creed Unity |
| 1868 C.E. | Jacob & Evie Frye | Assassin's Creed Syndicate |

---

## Tech stack

- **HTML5** / **CSS3** (CSS Grid, custom properties, media queries)
- **Vanilla JavaScript**
- **[GSAP](https://gsap.com/)** + **ScrollTrigger** for scroll-driven animations
- **Google Fonts** (Oswald)

No frameworks, no build step — just open `index.html` in a browser.

---

## Project structure

```
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── img/
│   └── ...character renders, logos, backgrounds
├── video/
│   └── ...Animus background videos
└── fonts/
    └── ...custom typefaces
```

---

## Running locally

This is a static site — no build tools or dependencies required.

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/assassins-creed-timeline.git
   ```
2. Open `index.html` directly in your browser, **or** serve it locally for the best experience (some browsers restrict video/font loading over `file://`):
   ```bash
   # using Python
   python -m http.server 8000

   # or using VS Code's Live Server extension
   ```
3. Visit `http://localhost:8000`

---

## Credits

- Character artwork and Assassin's Creed branding © Ubisoft Entertainment
- Animations powered by [GSAP](https://gsap.com/)
- Typeface: [Oswald](https://fonts.google.com/specimen/Oswald) via Google Fonts
