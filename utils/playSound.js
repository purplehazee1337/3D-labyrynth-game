export default function playSound(sound) {
  const audio = new Audio();
  audio.src = sound;
  audio.volume = 0.5;
  audio.play();
}
