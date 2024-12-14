document.addEventListener("DOMContentLoaded", () => {
    const hiddenElements = document.querySelectorAll(".hidden");
    const nameText = document.getElementById("name-text");
    const taglineText = document.getElementById("tagline-text");
    let animationTriggered = false;
  
    // Add hover effects for Hero text
    const addHoverEffects = (element) => {
      const text = element.textContent.split(" ");
      element.textContent = "";
      text.forEach((word) => {
        const wordContainer = document.createElement("span");
        wordContainer.style.marginRight = "0.25em";
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
  
    // Trigger animations when the user moves the mouse
    const showElements = () => {
      if (!animationTriggered) {
        hiddenElements.forEach((el) => el.classList.add("visible"));
        animationTriggered = true;
      }
    };
  
    window.addEventListener("mousemove", showElements, { once: true });
  
    // Smooth Scroll Functionality
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    });
  });
  
  // Copy to clipboard function
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      alert(`Copied: ${text}`);
    });
  }
  