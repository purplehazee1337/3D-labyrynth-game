export default function objectDetector(objects, type, player, callback) {
  for (let i = 0; i < objects.length; i++) {
    const object = objects[i];
    let r =
      (object[0] - player.x) ** 2 +
      (object[1] - player.y) ** 2 +
      (object[2] - player.z) ** 2;
    let r1 = object[6] ** 2;

    if (r < r1) {
      const el = document.getElementById(type + i);
      if (el) {
        callback && callback(type + i);
      }
    }
  }
}
