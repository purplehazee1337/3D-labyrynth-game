export default function playSound(sound) {
  const audio = new Audio();
  audio.src = sound;
  audio.play();
}
