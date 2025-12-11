const questModule = document.getElementById("modal");

export default function fireModal(text) {
  questModule.innerHTML = `${text}`;

  // Fade in
  questModule.classList.remove("fade-out");
  questModule.style.display = "flex";

  // Ensure CSS transition applies
  requestAnimationFrame(() => {
    questModule.classList.add("fade-in");
  });

  // After 4 seconds → fade out
  setTimeout(() => {
    questModule.classList.remove("fade-in");
    questModule.classList.add("fade-out");

    // After fade-out animation ends → hide element
    setTimeout(() => {
      questModule.style.display = "none";
    }, 1000); // match transition time in CSS
  }, 3000);
}
