import { showEdges } from "./viewer";

const video = document.getElementById("video") as HTMLVideoElement;
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
  video.srcObject = stream;
  video.onplay = () => renderFrame();
});

function renderFrame() {
  if (video.readyState === video.HAVE_ENOUGH_DATA) {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0);
    const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
    showEdges(frame, ctx);
  }
  requestAnimationFrame(renderFrame);
}
