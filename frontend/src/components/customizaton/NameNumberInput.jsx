import React, { useState } from "react";
import { fabric } from "fabric";
import "../../styles/TextControls.css";

const fonts = [
  "Arial",
  "Times New Roman",
  "Courier New",
  "Georgia",
  "Comic Sans MS",
  "Impact",
  "Verdana",
  "Trebuchet MS",
  "Tahoma",
  "Lucida Console",
];

const NameNumberInput = ({ canvasRef, updateThumbnail }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [color, setColor] = useState("#000000");
  const [font, setFont] = useState(fonts[0]);
  const [nameObj, setNameObj] = useState(null);
  const [numberObj, setNumberObj] = useState(null);

  // 🔴 Delete button click handler
  const deleteObject = (eventData, transform) => {
    const target = transform.target;
    const canvas = target.canvas;
    canvas.remove(target);
    canvas.requestRenderAll();
    updateThumbnail();
  };

  // 🔴 Red cross render function
  const renderDeleteIcon = (ctx, left, top, styleOverride, fabricObject) => {
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

  const addNameAndNumber = () => {
    const canvas = canvasRef.current;
    if (!canvas || (!name && !number)) return;

    // Remove previous
    if (nameObj) {
      canvas.remove(nameObj);
      setNameObj(null);
    }
    if (numberObj) {
      canvas.remove(numberObj);
      setNumberObj(null);
    }

    let nameText = null;
    let numberText = null;

    if (name) {
      nameText = new fabric.Text(name, {
        top: 400,
        left: 250,
        fontSize: 20,
        fill: color,
        fontWeight: "bold",
        fontFamily: font,
        selectable: true,
        cornerStyle: "circle",
      });

      // 🟠 Add delete control to name
      nameText.controls.deleteControl = new fabric.Control({
        x: 0.5,
        y: -0.5,
        offsetY: -10,
        offsetX: 10,
        cursorStyle: "pointer",
        mouseUpHandler: deleteObject,
        render: renderDeleteIcon,
        cornerSize: 24,
      });

      canvas.add(nameText);
      setNameObj(nameText);
    }

    if (number) {
      numberText = new fabric.Text(number, {
        top: 430,
        left: 250,
        fontSize: 28,
        fill: color,
        fontWeight: "bold",
        fontFamily: font,
        selectable: true,
        cornerStyle: "circle",
      });

      // 🟠 Add delete control to number
      numberText.controls.deleteControl = new fabric.Control({
        x: 0.5,
        y: -0.5,
        offsetY: -10,
        offsetX: 10,
        cursorStyle: "pointer",
        mouseUpHandler: deleteObject,
        render: renderDeleteIcon,
        cornerSize: 24,
      });

      canvas.add(numberText);
      setNumberObj(numberText);
    }

    canvas.requestRenderAll();

    setTimeout(() => {
      updateThumbnail();
      // updateViewStates();
    }, 150);
  };

  return (
    <div className="custom-name-number-input">
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <input
          className="custom-name-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          className="custom-number-input"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Number"
        />
        <input
        className="custom-color-input"
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          title="Pick text color"
          style={{ width: 32, height: 32, border: "none", background: "none" }}
        />
        <select
        className="custom-font-input"
          value={font}
          onChange={(e) => setFont(e.target.value)}
          style={{ height: 32 }}
        >
          {fonts.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
      </div>
      <button className="custom-add-btn" onClick={addNameAndNumber}>
        Add to T-Shirt
      </button>
    </div>
  );
};

export default NameNumberInput;
