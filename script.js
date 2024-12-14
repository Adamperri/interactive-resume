document.addEventListener("mousemove", (e) => {
    const mouseEffect = document.querySelector(".mouse-effect");
    mouseEffect.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`;
  });