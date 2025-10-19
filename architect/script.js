// Create a GSAP timeline for a controlled animation sequence
const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

// Animate the navbar elements first
tl.from(".logo", {
  opacity: 0,
  duration:1,
  y: -30,
  delay: 0.5, // Add a small delay to the start of the whole sequence
})
tl.from(".menu li",{
    opacity: 0,
  y: -30,
  delay: 0.1, // Add a small delay to the start of the whole sequence
  stagger: 0.2,
})
const t2=gsap.timeline()
t2.from(".content h1",{
    opacity: 0,
    x:-60,
    duration:1,
    delay:0.5,
    stagger:0.2
})
t2.from(".content p",{
    opacity: 0,
    x:-160,
    duration:1,
})
gsap.from(".content img",{
    opacity: 0,
    x:100,
    duration:1,
})
