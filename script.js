// script.js

document.addEventListener("DOMContentLoaded", () => {
    const nameElement = document.querySelector(".name");
    nameElement.addEventListener("mouseover", () => {
      nameElement.textContent = "Hello, I'm [Your Name]!";
    });
  
    nameElement.addEventListener("mouseout", () => {
      nameElement.textContent = "Your Name";
    });
  });
  