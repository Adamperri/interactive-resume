document.addEventListener("DOMContentLoaded", () => {
    const hiddenElements = document.querySelectorAll(".hidden");
    const nameText = document.getElementById("name-text");
    const taglineText = document.getElementById("tagline-text");
    let animationTriggered = false;
  
    // Add hover effects to Hero section text
    const addHoverEffects = (element) => {
      const text = element.textContent.split(" ");
      element.textContent = "";
      text.forEach((word) => {
        const wordContainer = document.createElement("span");
        wordContainer.style.marginRight = "0.25em"; // Space between words
        word.split("").forEach((letter) => {
          const span = document.createElement("span");
          span.textContent = letter;
          wordContainer.appendChild(span);
        });
        element.appendChild(wordContainer);
      });
    };
  
    addHoverEffects(nameText);
    addHoverEffects(taglineText);
  
    // Trigger animations when user moves the mouse for the first time
    const showElements = () => {
      if (!animationTriggered) {
        hiddenElements.forEach((el) => el.classList.add("visible"));
        animationTriggered = true;
      }
    };
  
    window.addEventListener("mousemove", showElements, { once: true });
  });
  