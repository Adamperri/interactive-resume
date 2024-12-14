document.addEventListener("DOMContentLoaded", () => {
    const hiddenElements = document.querySelectorAll(".hidden");
    let animationTriggered = false;
  
    // Trigger animations when the user moves the mouse
    const showElements = () => {
      if (!animationTriggered) {
        hiddenElements.forEach((el) => el.classList.add("visible"));
        animationTriggered = true;
      }
    };
  
    window.addEventListener("mousemove", showElements, { once: true });
  });
  