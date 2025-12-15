let rotation = 0;

function itemRotator() {
  const items = document.querySelectorAll(
    ".redRedbull, .blueRedbull, .yellowRedbull, .greenRedbull, .purpleRedbull, .key, .portal"
  );
  rotation = (rotation + 1) % 360;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    // preserve other inline transform functions, replace any existing rotateY
    const inline = item.style.transform || "";
    const cleaned = inline.replace(/rotateY\([^)]*\)/g, "").trim();
    item.style.transform =
      (cleaned ? cleaned + " " : "") + `rotateY(${rotation}deg)`;
  }
}
