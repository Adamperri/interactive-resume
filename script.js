// script.js

// Mouse Effect
document.addEventListener("mousemove", (e) => {
    const mouseEffect = document.querySelector(".mouse-effect");
    const x = e.pageX;
    const y = e.pageY;
    mouseEffect.style.transform = `translate(${x - 25}px, ${y - 25}px)`; // Offset to center the effect on the cursor
  });
  
  // Smooth Scroll for "About Me" Link
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
  