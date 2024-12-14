// script.js

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn");
    const hiddenElements = document.querySelectorAll(".hidden");
    let animationTriggered = false;
  
    // Add sequential bounce effect to each letter in buttons
    buttons.forEach((button) => {
      const text = button.textContent;
      button.textContent = ""; // Clear original text
      text.split("").forEach((letter, index) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.style.setProperty("--letter-index", index);
        button.appendChild(span);
      });
    });
  
    // Trigger animations when user moves the mouse for the first time
    const showElements = () => {
      if (!animationTriggered) {
        hiddenElements.forEach((el) => el.classList.add("visible"));
        animationTriggered = true;
      }
    };
  
    window.addEventListener("mousemove", showElements, { once: true });
  });
  