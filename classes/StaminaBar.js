const baseColor = "rgba(219, 200, 23, 1)";
const lowColor = "rgba(209, 98, 24, 1)";

export default class StaminaBar {
  constructor(player) {
    this.player = player;

    // Outer bar
    this.barElement = document.createElement("div");
    this.barElement.style.position = "absolute";
    this.barElement.style.bottom = "20px";
    this.barElement.style.left = "300px";
    this.barElement.style.width = "200px";
    this.barElement.style.height = "10px";
    this.barElement.style.backgroundColor = "#555";
    this.barElement.style.display = "none";
    this.barElement.style.transform = "scaleX(-1)";

    // Inner bar (current stamina)
    this.staminaFill = document.createElement("div");
    this.staminaFill.style.height = "100%";
    this.staminaFill.style.width = "100%";
    this.staminaFill.style.backgroundColor = baseColor;
    this.barElement.appendChild(this.staminaFill);

    document.getElementById("container").appendChild(this.barElement);

    // Initialize
    this.stamina = player.stamina || 100;
    this.maxStamina = player.maxStamina || 100;
  }

  show() {
    this.barElement.style.display = "block";
  }

  hide() {
    this.barElement.style.display = "none";
  }

  update() {
    // Update stamina from player object
    this.stamina = this.player.stamina;
    // Update bar width
    const percentage = (this.stamina / this.maxStamina) * 100;
    this.staminaFill.style.width = `${percentage}%`;

    // Optional: change color if low
    if (percentage < 30) {
      this.staminaFill.style.backgroundColor = lowColor; // red
    } else {
      this.staminaFill.style.backgroundColor = baseColor; // green
    }
  }
}
