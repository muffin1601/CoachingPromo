import React, { useState } from "react";
import jsPDF from "jspdf";
import "../../styles/ExportButtons.css";
import { toast } from "react-toastify";
import { FaTimes } from "react-icons/fa";
import SubmitForm from "./SubmitForm";

const BackpackExportButtons = ({ thumbnailCanvasRefs, viewStates }) => {
  const [showForm, setShowForm] = useState(false);
  const [companyname, setCompanyName] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Backpack fields
  const [backpackType, setBackpackType] = useState("");
  const [capacity, setCapacity] = useState("");
  const [material, setMaterial] = useState("");
  const [color, setColor] = useState("");
  const [quantity, setQuantity] = useState(0);

  const [showChart, setShowChart] = useState(false);

  const generatePDF = async () => {
    if (!companyname.trim() || !phone.trim() || !message.trim()) {
      alert("Please fill all required fields.");
      return;
    }

    if (!backpackType || !capacity || !material || !color || quantity <= 0) {
      alert("Please select all backpack options and quantity.");
      return;
    }

    setLoading(true);

    const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
    const imageWidth = 90;

    const positions = [
      { x: 10, y: 10 },
      { x: 110, y: 10 },
      { x: 10, y: 150 },
      { x: 110, y: 150 },
    ];

    try {
      for (let i = 0; i < viewStates.length; i++) {
        const state = viewStates[i];
        if (!state) continue;

        const originalWidth = state.canvasWidth || 500;
        const originalHeight = state.canvasHeight || 630;

        const tempCanvasEl = document.createElement("canvas");
        tempCanvasEl.width = originalWidth;
        tempCanvasEl.height = originalHeight;

        const tempCanvas = new fabric.StaticCanvas(tempCanvasEl);
        tempCanvas.setWidth(originalWidth);
        tempCanvas.setHeight(originalHeight);

        await new Promise((resolve, reject) => {
          tempCanvas.loadFromJSON(state, () => {
            const renderCanvas = () => {
              tempCanvas.renderAll();
              setTimeout(() => {
                try {
                  const dataUrl = tempCanvas.toDataURL({
                    format: "png",
                    multiplier: 2,
                  });
                  const scale = imageWidth / originalWidth;
                  const imageHeight = originalHeight * scale;
                  const pos = positions[i] || { x: 10, y: 10 };

                  pdf.addImage(
                    dataUrl,
                    "PNG",
                    pos.x,
                    pos.y,
                    imageWidth,
                    imageHeight
                  );
                  resolve();
                } catch (err) {
                  reject(err);
                }
              }, 300);
            };

            if (state.backgroundImageUrl) {
              fabric.Image.fromURL(
                state.backgroundImageUrl,
                (img) => {
                  img.set({
                    originX: "left",
                    originY: "top",
                    left: 0,
                    top: 0,
                    scaleX: originalWidth / img.width,
                    scaleY: originalHeight / img.height,
                    selectable: false,
                    evented: false,
                  });
                  tempCanvas.setBackgroundImage(img, renderCanvas);
                },
                { crossOrigin: "anonymous" }
              );
            } else {
              renderCanvas();
            }
          });
        });
      }

      const blob = pdf.output("blob");
      const file = new File([blob], "customized-backpack.pdf", {
        type: "application/pdf",
      });

      const formData = new FormData();
      formData.append("pdf", file);
      formData.append("companyname", companyname);
      formData.append("phone", phone);
      formData.append("message", message);
      formData.append(
        "backpackOptions",
        JSON.stringify({ backpackType, capacity, material, color, quantity })
      );

      await fetch("/api/send-email", { method: "POST", body: formData });

      await fetch(import.meta.env.VITE_CRM_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": import.meta.env.VITE_CRM_API_KEY,
        },
        body: JSON.stringify({
          companyname,
          phone,
          message,
          backpackType,
          capacity,
          material,
          color,
          quantity,
        }),
      });

      pdf.save("customized-backpack.pdf");
      toast.success("PDF downloaded and details submitted!");
      setShowForm(false);
    } catch (error) {
      console.error("PDF generation error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="export-buttons-container">
      <div className="type-selection">
        <select
          className="type-dropdown"
          value={backpackType}
          onChange={(e) => setBackpackType(e.target.value)}
        >
          <option value="" disabled>
            Select Backpack Type
          </option>
          <option value="laptop">Laptop Backpack</option>
          <option value="travel">Travel Backpack</option>
          <option value="school">School Backpack</option>
          <option value="duffle">Duffle Bag</option>
        </select>

        <select
          className="type-dropdown"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
        >
          <option value="" disabled>
            Select Capacity
          </option>
          <option value="20L">20 Liters</option>
          <option value="30L">30 Liters</option>
          <option value="40L">40 Liters</option>
          <option value="50L+">50+ Liters</option>
        </select>

        <select
          className="type-dropdown"
          value={material}
          onChange={(e) => setMaterial(e.target.value)}
        >
          <option value="" disabled>
            Select Material
          </option>
          <option value="polyester">Polyester</option>
          <option value="nylon">Nylon</option>
          <option value="canvas">Canvas</option>
          <option value="leather">Leather</option>
        </select>

        <input
          type="text"
          className="type-dropdown"
          placeholder="Color (e.g. Black, Blue)"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />

        <input
          type="number"
          className="type-dropdown"
          placeholder="Quantity"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
        />
      </div>

      <div className="btns-container">
        {/* <button className="view-schart-btn" onClick={() => setShowChart(true)}>
          View Size Guide
        </button> */}

        <button className="export-pdf-btn" onClick={() => setShowForm(true)}>
          Download Design
        </button>
      </div>

      {showChart && (
        <div className="size-chart-overlay">
          <div className="size-chart-bg">
            <div className="size-chart-header">
              <h2 className="size-chart-title">Backpack Size Guide</h2>
              <button
                className="close-chart-btn"
                onClick={() => setShowChart(false)}
              >
                <FaTimes />
              </button>
            </div>
            <img
              src="/backpack-size-guide.jpeg"
              alt="Backpack Size Guide"
              className="size-chart-image"
            />
          </div>
        </div>
      )}

      {showForm && (
        <SubmitForm
          onSubmit={generatePDF}
          onCancel={() => setShowForm(false)}
          loading={loading}
          companyname={companyname}
          setCompanyName={setCompanyName}
          phone={phone}
          setPhoneNumber={setPhoneNumber}
          message={message}
          setMessage={setMessage}
        />
      )}
    </div>
  );
};

export default BackpackExportButtons;
