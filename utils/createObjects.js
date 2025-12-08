export default function createObjects(objects, type) {
  for (let i = 0; i < objects.length; i++) {
    const [x, y, z, rx, ry, rz, w, h, color, texture] = objects[i];
    const newElement = document.createElement("div");
    newElement.className = `square ${type}`;
    newElement.id = type + i;
    newElement.style.width = `${w}px`;
    newElement.style.height = `${h}px`;
    newElement.style.background = color;
    newElement.style.backgroundImage = `url(${texture})`;
    newElement.style.transform = `translate3d(
    ${600 - w / 2 + x}px, 
    ${400 - h / 2 + y}px,
    ${z}px) 
    rotateX(${rx}deg)
    rotateY(${ry}deg)
    rotateZ(${rz}deg)`;

    world.append(newElement);
  }
}
