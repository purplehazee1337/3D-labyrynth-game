const questModule = document.getElementById("quest");

export default function fireQuestModule(text) {
  questModule.innerHTML = `QUEST<br>${text}`;

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
  }, 6000);
}