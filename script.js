document.addEventListener("DOMContentLoaded", () => {
  const hiddenElements = document.querySelectorAll(".hidden");
  const nameText = document.getElementById("name-text");
  const taglineText = document.getElementById("tagline-text");
  let animationTriggered = false;

  // Function to add hover effects for Hero text
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

  // Add hover effects for both name and tagline
  addHoverEffects(nameText);
  addHoverEffects(taglineText);

  // Function to trigger animations
  const triggerAnimations = () => {
    if (!animationTriggered) {
      hiddenElements.forEach((el) => el.classList.add("visible"));
      animationTriggered = true;
    }
  };

  // Detect if the user is on a mobile device
  const isMobileDevice = () => {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  };

  // Trigger animations on page load for mobile, or mouse movement for desktop
  if (isMobileDevice()) {
    triggerAnimations(); // Automatically show elements on mobile
  } else {
    // Trigger animations on first mouse movement for desktop
    window.addEventListener("mousemove", triggerAnimations, { once: true });
  }

  // Smooth scroll functionality for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
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

// Copy to clipboard functionality
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert(`Copied: ${text}`);
  });
}
