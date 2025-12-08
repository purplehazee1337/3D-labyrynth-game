export default function startTimer() {
  const counter = document.getElementById("counter");
  if (!counter) return;
  counter.style.display = "block";

  const totalTime = 10 * 60; // 10 minutes in seconds
  let timeLeft = totalTime;

  const interval = setInterval(() => {
    timeLeft--;

    // Format mm:ss
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    counter.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;

    if (timeLeft <= 0) {
      clearInterval(interval);
      counter.textContent = "time";
    }
  }, 1000);
}
