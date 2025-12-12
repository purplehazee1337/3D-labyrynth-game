export default function playSound(sound, volume = 0.5) {
  const audio = new Audio();
  audio.src = sound;
  audio.volume = volume;
  audio.play();
}
