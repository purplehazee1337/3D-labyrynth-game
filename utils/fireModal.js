const questModule = document.getElementById("modal");

let fadeOutTimer = null;
let hideTimer = null;

export default function fireModal(text) {
  // Clear running timers (avoid overlap)
  if (fadeOutTimer) clearTimeout(fadeOutTimer);
  if (hideTimer) clearTimeout(hideTimer);

  // Reset animation classes
  questModule.classList.remove("fade-in", "fade-out");

  questModule.innerHTML = text;
  questModule.style.display = "flex";

  // Trigger fade-in
  requestAnimationFrame(() => questModule.classList.add("fade-in"));

  // Schedule fade-out
  fadeOutTimer = setTimeout(() => {
    questModule.classList.remove("fade-in");
    questModule.classList.add("fade-out");

    // Hide after fade-out
    hideTimer = setTimeout(() => {
      questModule.style.display = "none";
    }, 1000);
  }, 3000);
}
