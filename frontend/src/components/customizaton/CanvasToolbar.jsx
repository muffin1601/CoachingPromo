import React from "react";
import "../../styles/CanvasToolbar.css";
import { FaSearchPlus, FaSearchMinus, FaUndo, FaRedo, FaTrash } from "react-icons/fa";

const CanvasToolbar = ({ canvasRef, onUndo, onRedo }) => {
  const zoomIn = () => canvasRef.current.setZoom(canvasRef.current.getZoom() * 1.1);
  const zoomOut = () => canvasRef.current.setZoom(canvasRef.current.getZoom() / 1.1);
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    canvas.clear();
    canvas.requestRenderAll && canvas.requestRenderAll(); // Refresh the canvas after clearing
  };

  return (
    <div className="canvas-toolbar">
      <button className="canvas-toolbar__button" onClick={zoomIn}>
        <FaSearchPlus className="icon" />
        Zoom In
      </button>
      <button className="canvas-toolbar__button" onClick={zoomOut}>
        <FaSearchMinus className="icon" />
        Zoom Out
      </button>
      <button className="canvas-toolbar__button" onClick={onUndo}>
        <FaUndo className="icon" />
        Undo
      </button>
      <button className="canvas-toolbar__button" onClick={onRedo}>
        <FaRedo className="icon" />
        Redo
      </button>
      <button className="canvas-toolbar__button" onClick={clearCanvas}>
        <FaTrash className="icon" />
        Clear All
      </button>
    </div>
  );
};

export default CanvasToolbar;
