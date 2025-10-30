const canvas = document.getElementById("viewerCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

if (ctx) {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.font = "24px Arial";
  ctx.fillText("Edge Detection Viewer Ready", 120, 240);
}
