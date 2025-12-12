const baseColor = "rgba(192, 22, 22, 1)"; // normal health color (gold/yellow)
const lowColor = "rgba(235, 26, 26, 1)"; // low health color (red)

export default class HealthBar {
  constructor(player) {
    this.player = player;

    // Outer bar
    this.barElement = document.createElement("div");
    this.barElement.style.position = "absolute";
    this.barElement.style.bottom = "20px";
    this.barElement.style.right = "300px";
    this.barElement.style.width = "200px";
    this.barElement.style.height = "10px";
    this.barElement.style.backgroundColor = "#555";
    this.barElement.style.display = "none";

    // Inner bar (current health)
    this.healthFill = document.createElement("div");
    this.healthFill.style.height = "100%";
    this.healthFill.style.width = "100%";
    this.healthFill.style.backgroundColor = baseColor;
    this.barElement.appendChild(this.healthFill);

    document.getElementById("container").appendChild(this.barElement);

    // Initialize health values
    this.health = player.health || 100;
    this.maxHealth = player.maxHealth || 100;
  }

  show() {
    this.barElement.style.display = "block";
  }

  hide() {
    this.barElement.style.display = "none";
  }

  update() {
    // Update health from player object
    this.health = this.player.health;

    // Update bar width
    const percentage = (this.health / this.maxHealth) * 100;
    this.healthFill.style.width = `${percentage}%`;

    // Change color if low health
    if (percentage < 30) {
      this.healthFill.style.backgroundColor = lowColor; // red
    } else {
      this.healthFill.style.backgroundColor = baseColor; // gold
    }
  }
}
