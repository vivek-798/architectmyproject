document.addEventListener("DOMContentLoaded", () => {
  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger, TextPlugin);

  // --- Typing Animation ---
  const typingText =
    "Our philosophy is simple: create spaces that are not only visually stunning but also deeply functional and sustainable. We blend artistry with engineering to deliver architecture that stands the test of time.";

  gsap.to("#typing-text", {
    text: typingText,
    duration: 5,
    ease: "none",
    scrollTrigger: {
      trigger: ".offer-section",
      start: "top 70%",
      toggleActions: "play none none none",
    },
  });

  // Add a blinking cursor effect
  gsap.fromTo(
    "#typing-text",
    { "border-right-color": "rgba(0,0,0,0.75)" },
    {
      "border-right-color": "rgba(0,0,0,0)",
      repeat: -1,
      duration: 0.5,
      ease: "steps(1)",
    }
  );

  // --- Scroll-Triggered Reveal Animations ---
  const revealElements = gsap.utils.toArray(".reveal-up");

  revealElements.forEach((elem) => {
    gsap.fromTo(
      elem,
      { y: 50, autoAlpha: 0 }, // Start state
      {
        y: 0,
        autoAlpha: 1, // End state
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: elem,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
});
