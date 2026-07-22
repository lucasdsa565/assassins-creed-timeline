gsap.registerPlugin(ScrollTrigger, SplitText);

/* ============================================================
   HERO INTRO ANIMATION
   ============================================================ */

// Make sure the whole page has loaded before running the animation
window.addEventListener('load', function () {

  const tlIntro = gsap.timeline();

  tlIntro.from('.intro', {
    opacity: 0,
    duration: 1
  })

  .from('.intro h1', {
    opacity: 0,
    x: 200,
    ease: "power2.out",
  })

  .from('.hero-subtitle', {
    opacity: 0,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "power2.inOut",
  });

});

/* ============================================================
   SIDE TIMELINE NAV + SYNC PERCENTAGE (scroll-driven, plain JS)
   ============================================================ */

const timeline = document.querySelector(".timeline-wrapper");
const items = document.querySelectorAll(".timeline-item");
const percentage = document.querySelector(".sync-percentage");
const fill = document.querySelector(".timeline-fill");
const firstSection = document.querySelector("#kassandra");
const lastSection = document.querySelector("#syndicate");

window.addEventListener("scroll", () => {

  const start = firstSection.offsetTop;
  const end = lastSection.offsetTop + lastSection.offsetHeight;
  const scroll = window.scrollY + window.innerHeight / 2;

  if (scroll >= start && scroll <= end) {

    timeline.classList.add("show");
    percentage.classList.add("visible");

    const progress = ((scroll - start) / (end - start)) * 100;

    percentage.innerHTML = `
    <span class="sync-title">SYNCHRONIZATION</span>
    <span class="sync-value">${Math.round(progress)}%</span>
`;

    fill.style.height = progress + "%";

  } else {

    timeline.classList.remove("show");
    percentage.classList.remove("visible");

    fill.style.height = "0%";

  }

  items.forEach(item => {

    const section = document.getElementById(item.dataset.target);
    const rect = section.getBoundingClientRect();

    if (rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2) {

      items.forEach(i => i.classList.remove("active"));
      item.classList.add("active");

    }

  });

});

/* ============================================================
   SYNC COMPLETE SECTION
   ============================================================ */

const syncTimeline = gsap.timeline({

  scrollTrigger: {
    trigger: "#sync-complete",
    start: "top center",
    toggleActions: "play none none reverse"
  }

});

syncTimeline

.fromTo(".sync-status",
  { y: 30, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.7 }
)

.fromTo(".sync-title-big",
  { y: 40, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.8 },
  "-=0.2"
)

.fromTo(".sync-complete-text",
  { scale: .85, opacity: 0 },
  { scale: 1, opacity: 1, duration: 1 },
  "-=0.4"
)

.to(".sync-divider", {
  width: "500px",
  duration: .8,
  ease: "power2.out"
}, "-=0.2")

.fromTo(".sync-memory",
  { opacity: 0, y: 20 },
  { opacity: 1, y: 0, duration: .6 },
  "-=0.2"
)

.fromTo(".sync-100",
  { opacity: 0, scale: .8 },
  { opacity: 1, scale: 1, duration: .6 },
  "-=0.3"
);

/* ============================================================
   1) CREED SECTION (the three tenets + central emblem)
   ============================================================ */
const creedTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".creed-section",
    start: "top 65%",
    toggleActions: "play none none reverse"
  }
});

creedTl
.from(".center-creed-title", {
  y: -30,
  opacity: 0,
  filter: "blur(8px)",
  duration: 1.1,
  ease: "power3.out"
})
.from(".orbit-logo", {
  scale: 0.6,
  opacity: 0,
  rotate: -120,
  filter: "blur(10px)",
  duration: 1.4,
  ease: "expo.out"
}, "-=0.5")
.from(".card-left", {
  x: -90,
  opacity: 0,
  filter: "blur(6px)",
  duration: 1.1,
  ease: "power3.out"
}, "-=0.9")
.from(".card-right", {
  x: 90,
  opacity: 0,
  filter: "blur(6px)",
  duration: 1.1,
  ease: "power3.out"
}, "<") // at the same time as card-left
.from(".card-bottom", {
  y: 60,
  opacity: 0,
  filter: "blur(6px)",
  duration: 1,
  ease: "power3.out"
}, "-=0.5");

/* ============================================================
   2) CHARACTER SECTIONS (Kassandra, Bayek, Basim, Eivor,
      Altaïr, Ezio, Edward, Shay, Connor, Arno)
      -> Generic loop: automatically detects which side to
         animate from, based on the "section-reversed" class

      NOTE: the exit animation is driven directly by scroll
      (scrub) and only starts once the section's bottom edge
      is already leaving the viewport, so there's plenty of
      time to read the content before it fades out.
   ============================================================ */
gsap.utils.toArray(".character-section").forEach((section) => {

  const imageBox = section.querySelector(".character-image-box");
  const contentBox = section.querySelector(".character-content-box");

  // Shadows and Syndicate don't have this structure -> handled separately below
  if (!imageBox || !contentBox) return;

  const isReversed = section.classList.contains("section-reversed");
  const imgFromX = isReversed ? 120 : -120;
  const contentFromX = isReversed ? -100 : 100;

  const eraEl = contentBox.querySelector(".character-era-top");
  const nameEl = contentBox.querySelector(".character-name");
  const subEl = contentBox.querySelector(".character-game-sub");
  const bioEls = contentBox.querySelectorAll(".character-bio, .character-bio-2");

  /* ---------- ENTRANCE (smooth, with a "sync glitch") ---------- */
  const charTl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 70%",
      toggleActions: "play none none reverse"
    }
  });

  // 1. Quick glitch: the image "flickers" before settling, like the
  //    Animus rendering the memory
  charTl.fromTo(imageBox,
    { opacity: 0.15, x: imgFromX * 0.3 },
    { opacity: 0.5, x: imgFromX * 0.15, duration: 0.08, ease: "none", repeat: 3, yoyo: true }
  )
  // 2. Smooth, final entrance
  .to(imageBox, {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    duration: 1.3,
    ease: "power4.out"
  })
  .fromTo(imageBox,
    { filter: "blur(14px)" },
    { filter: "blur(0px)", duration: 1.3, ease: "power4.out" },
    "<"
  );

  if (eraEl) {
    charTl.from(eraEl, {
      x: contentFromX,
      opacity: 0,
      filter: "blur(4px)",
      duration: 0.9,
      ease: "power3.out"
    }, "-=1.1");
  }

  if (nameEl) {
    charTl.from(nameEl, {
      y: 35,
      opacity: 0,
      filter: "blur(4px)",
      duration: 0.9,
      ease: "power3.out"
    }, "-=0.7");
  }

  if (subEl) {
    charTl.from(subEl, {
      y: 20,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out"
    }, "-=0.6");
  }

  if (bioEls.length) {
    charTl.from(bioEls, {
      y: 25,
      opacity: 0,
      duration: 0.8,
      stagger: 0.25,
      ease: "power2.out"
    }, "-=0.5");
  }

  /* ---------- EXIT (slow, gradual, tied to scroll) ---------- */
  gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "bottom 75%", // only starts fading once the section's bottom has passed 3/4 of the viewport
      end: "bottom -10%",  // finishes once the section has fully scrolled past
      scrub: 0.6
    }
  })
  .to(imageBox, {
    opacity: 0,
    scale: 1.08,
    x: imgFromX * -0.4,
    filter: "blur(10px)",
    ease: "none"
  })
  .to(contentBox, {
    opacity: 0,
    y: -30,
    filter: "blur(6px)",
    ease: "none"
  }, "<");
});

/* ============================================================
   3) SHADOWS SECTION (Naoe & Yasuke) - 3-column layout
   ============================================================ */
const shadowsTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#shadows",
    start: "top 65%",
    toggleActions: "play none none reverse"
  }
});

shadowsTl
.from("#shadows .shadows-header", {
  y: -30,
  opacity: 0,
  filter: "blur(6px)",
  duration: 0.9,
  ease: "power3.out"
})
.from("#shadows .shadows-text-left", {
  x: -90,
  opacity: 0,
  filter: "blur(6px)",
  duration: 1,
  ease: "power3.out"
}, "-=0.3")
.from("#shadows .shadows-text-right", {
  x: 90,
  opacity: 0,
  filter: "blur(6px)",
  duration: 1,
  ease: "power3.out"
}, "<")
.from("#shadows .img-naoe", {
  y: 70,
  opacity: 0,
  filter: "blur(10px)",
  duration: 1.1,
  ease: "expo.out"
}, "-=0.5")
.from("#shadows .img-yasuke", {
  y: 70,
  opacity: 0,
  filter: "blur(10px)",
  duration: 1.1,
  ease: "expo.out"
}, "-=0.8");

// Smooth exit tied to scroll — same wide range used by the other sections
gsap.timeline({
  scrollTrigger: {
    trigger: "#shadows",
    start: "bottom 75%",
    end: "bottom -10%",
    scrub: 0.6
  }
})
.to("#shadows .shadows-container", {
  opacity: 0,
  scale: 1.05,
  filter: "blur(10px)",
  ease: "none"
})
.to("#shadows .shadows-header", {
  opacity: 0,
  y: -20,
  ease: "none"
}, "<");

/* ============================================================
   4) SYNDICATE SECTION (Jacob & Evie) - 3-column layout
   ============================================================ */
const syndicateTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#syndicate",
    start: "top 65%",
    toggleActions: "play none none reverse"
  }
});

syndicateTl
.from("#syndicate .syndicate-header", {
  y: -30,
  opacity: 0,
  duration: 0.6,
  ease: "power2.out"
})
.from("#syndicate .syndicate-text-left", {
  x: -80,
  opacity: 0,
  duration: 0.7,
  ease: "power2.out"
}, "-=0.2")
.from("#syndicate .syndicate-text-right", {
  x: 80,
  opacity: 0,
  duration: 0.7,
  ease: "power2.out"
}, "<")
.from("#syndicate .img-jacob", {
  y: 60,
  opacity: 0,
  duration: 0.8,
  ease: "power3.out"
}, "-=0.4")
.from("#syndicate .img-evie", {
  y: 60,
  opacity: 0,
  duration: 0.8,
  ease: "power3.out"
}, "-=0.6");

// Exit animation, same logic used by the other sections
gsap.timeline({
  scrollTrigger: {
    trigger: "#syndicate",
    start: "bottom 75%",
    end: "bottom -10%",
    scrub: 0.6
  }
})
.to("#syndicate .syndicate-container", {
  opacity: 0,
  scale: 1.05,
  filter: "blur(10px)",
  ease: "none"
})
.to("#syndicate .syndicate-header", {
  opacity: 0,
  y: -20,
  ease: "none"
}, "<");