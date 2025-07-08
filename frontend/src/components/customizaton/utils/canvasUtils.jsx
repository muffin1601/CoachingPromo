import { fabric } from "fabric";

// Shared delete control configuration
export const createDeleteControl = () => ({
  x: 0.5,
  y: -0.5,
  offsetY: -10,
  offsetX: 10,
  cursorStyle: "pointer",
  mouseUpHandler: deleteObject,
  render: renderDeleteIcon,
  cornerSize: 24,
});

const deleteObject = (eventData, transform) => {
  const target = transform.target;
  const canvas = target.canvas;
  canvas.remove(target);
  canvas.requestRenderAll();
};

const renderDeleteIcon = (ctx, left, top) => {
  const size = 24;
  ctx.save();
  ctx.translate(left, top);
  ctx.beginPath();
  ctx.arc(0, 0, size / 2, 0, Math.PI * 2, true);
  ctx.fillStyle = "#ec3c3c";
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(-6, -6);
  ctx.lineTo(6, 6);
  ctx.moveTo(6, -6);
  ctx.lineTo(-6, 6);
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.restore();
};

// High-res canvas generator for PDF
export const generateHighResCanvas = async (state, width = 900, height = 900) => {
  const tempCanvasEl = document.createElement("canvas");
  tempCanvasEl.width = width;
  tempCanvasEl.height = height;
  const tempCanvas = new fabric.StaticCanvas(tempCanvasEl, { width, height });

  await new Promise((resolve) => {
    tempCanvas.loadFromJSON(state, () => {
      tempCanvas.renderAll();
      resolve(tempCanvas);
    });
  });

  return tempCanvas;
};

// Common color palette
export const COLOR_SET = [
  "#ffc5d6", "#ffa1bd", "#ccf11e", "#3472c1", "#ffb52c", "#8a141b",
  "#ff7331", "#fdfdfc", "#257137", "#ffd500", "#e21215",
  "#2430b9", "#d4b5cc", "#99b4d0", "#209866", "#212322", "#eca134",
  "#585757", "#989595", "#92435e", "#ebff00", "#ec4e74", "#5c3c31",
  "#aaaaa8", "#2f4340", "#dad1bc", "#663698", "#5ca5f7", "#e06d8c",
];