const povGif = document.getElementById("povGif");

export function displayPov() {
  povGif.style.display = "block";
  povGif.src = "";
  void povGif.offsetWidth;
  povGif.src = "assets/pov.gif";

  const gifDuration = 4920;
  setTimeout(() => {
    povGif.src = "assets/lastpov.gif";
  }, gifDuration);
}

export function hidePov() {
  povGif.style.display = "none";
}
