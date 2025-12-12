export default function createSpikes(objects, type) {
  for (let i = 0; i < objects.length; i++) {
    const [x, y, z, rx, ry, rz, w, h, color, texture] = objects[i];
    const wall1 = document.createElement("div");
    wall1.className = `square spike`;
    wall1.id = type + i;
    wall1.style.width = `${w}px`;
    wall1.style.height = `${h}px`;
    wall1.style.background = color;
    wall1.style.backgroundImage = `url(${texture})`;
    wall1.style.transform = `translate3d(
    ${600 - w / 2 + x}px, 
    ${400 - h / 2 + y}px,
    ${z}px) 
    rotateX(${rx}deg)
    rotateY(0deg)
    rotateZ(${rz}deg)`;

    const wall2 = document.createElement("div");
    wall2.className = `square spike`;
    wall2.id = type + i;
    wall2.style.width = `${w}px`;
    wall2.style.height = `${h}px`;
    wall2.style.background = color;
    wall2.style.backgroundImage = `url(${texture})`;
    wall2.style.transform = `translate3d(
    ${600 - w / 2 + x}px, 
    ${400 - h / 2 + y}px,
    ${z}px) 
    rotateX(${rx}deg)
    rotateY(90deg)
    rotateZ(${rz}deg)`;

    world.append(wall1);
    world.append(wall2);
  }
}
