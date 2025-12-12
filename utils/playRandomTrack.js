let audioPlayer = new Audio();

export function playRandomTrack(volume = 0.2) {
  const fileNames = [
    "Unreal Tournamen - Nether Animal.mp3",
    "Unreal Tournament  - The Course.mp3",
    "Unreal Tournament - Foregone Destruction.mp3",
    "Unreal Tournament - Skyward Fire.mp3",
  ];

  const randomIndex = Math.floor(Math.random() * fileNames.length);
  const randomFile = fileNames[randomIndex];

  audioPlayer.src = `assets/music/${randomFile}`;
  audioPlayer.volume = volume;
  audioPlayer.play();
}

export function stopMusic() {
  if (audioPlayer) {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    console.log("Music stopped.");
  }
}
