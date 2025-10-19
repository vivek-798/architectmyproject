document.addEventListener("DOMContentLoaded", () => {
  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);

  // --- Scroll-Triggered Reveal Animations for the whole page ---

  // Animate elements that should slide up
  gsap.utils.toArray(".reveal-up").forEach((elem) => {
    gsap.fromTo(
      elem,
      { y: 50, autoAlpha: 0 }, // Start state: slightly down and invisible
      {
        y: 0,
        autoAlpha: 1, // End state: original position and fully visible
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: elem,
          start: "top 90%", // Start animation when 90% of the element is in view
          toggleActions: "play none none reverse", // Play on enter, reverse on scroll up
        },
      }
    );
  });

  // Animate elements that should slide in from the left
  gsap.utils.toArray(".reveal-left").forEach((elem) => {
    gsap.fromTo(
      elem,
      { x: -100, autoAlpha: 0 },
      {
        x: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: elem,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  // Animate elements that should slide in from the right
  gsap.utils.toArray(".reveal-right").forEach((elem) => {
    gsap.fromTo(
      elem,
      { x: 100, autoAlpha: 0 },
      {
        x: 0,
        autoAlpha: 1,
        duration: 1,
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
