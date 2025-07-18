import React, { useEffect, useRef, useState } from 'react';
import { fabric } from "fabric";
import { useLocation } from "react-router-dom";
import Navbar from '../components/Navbar';
import CanvasToolbar from '../components/customizaton/CanvasToolbar';
import ThumbnailGallery from '../components/customizaton/ThumbnailGallery';
import VerticalToolbar from '../components/customizaton/VerticalToolbar';
import UploadControls from '../components/customizaton/UploadControls';
import TextControls from '../components/customizaton/TextControls';
import ExportButtons from '../components/customizaton/ExportButtons';
import ProductCustomizer from '../components/customizaton/ProductCustomizer';
import PreviewModalpng from '../components/customizaton/PreviewModalpng';
import Footer from '../components/Footer';
import SearchOverlay from "../components/SearchOverlay";

const CustomizeLogo = () => {
  const canvasRef = useRef(null);
  const thumbnailCanvasRefs = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);
  
  
  const [viewStates, setViewStates] = useState([null, null, null, null]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTool, setActiveTool] = useState("export");
  const [undoStack, setUndoStack] = useState([]);
  const [redoStack, setRedoStack] = useState([]);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const location = useLocation();
  const { productImages = [], productName = "" } = location.state || {};
  const [flag, setFlag] = useState(false);

  // ✅ Save canvas state to viewStates
  const saveCurrentViewState = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const json = canvas.toJSON(['id', 'customPart']);
    json.canvasWidth = canvas.getWidth();
    json.canvasHeight = canvas.getHeight();
    if (canvas.backgroundImage?.getSrc) {
      json.backgroundImageUrl = canvas.backgroundImage.getSrc();
    }
    const newStates = [...viewStates];
    newStates[activeIndex] = json;
    setViewStates(newStates);
  };

  

 const updateThumbnail = (index) => {
     const srcCanvas = canvasRef.current;
     const dstCanvas = thumbnailCanvasRefs.current[index]?.current;
     if (!srcCanvas || !dstCanvas) return;
 
     const dataUrl = srcCanvas.toDataURL({ format: "png" });
 
     const thumbCanvas = new fabric.StaticCanvas(dstCanvas);
     fabric.Image.fromURL(dataUrl, (img) => {
       const scale = Math.min(
         dstCanvas.width / img.width,
         dstCanvas.height / img.height
       );
       img.scale(scale);
       img.set({
         left: (dstCanvas.width - img.width * scale) / 2,
         top: (dstCanvas.height - img.height * scale) / 2,
       });
 
       thumbCanvas.clear();
       thumbCanvas.add(img);
       thumbCanvas.renderAll();
     });
   }; 

  const handleRedo = () => {
    const canvas = canvasRef.current;
    if (!canvas || redoStack.length === 0) return;

    const nextState = redoStack.pop();
    const currentState = canvas.toJSON(['id', 'customPart']);
    setUndoStack(prev => [...prev, currentState]);

    canvas.loadFromJSON(nextState, () => {
      canvas.renderAll();
      updateThumbnail(activeIndex);
    });
  };

  const handleUndo = () => {
    const canvas = canvasRef.current;
    if (!canvas || undoStack.length === 0) return;

    const prevState = undoStack[undoStack.length - 1];
    const newUndoStack = undoStack.slice(0, -1);

    const currentState = canvas.toJSON(['id', 'customPart']);
    setUndoStack(newUndoStack);
    setRedoStack(prev => [...prev, currentState]);

    canvas.loadFromJSON(prevState, () => {
      canvas.renderAll();
      updateThumbnail(activeIndex);
    });
  };

  const handleThumbnailClick = (index) => {
    if (index === activeIndex) return;
    saveCurrentViewState();
    setActiveIndex(index);

    const canvas = canvasRef.current;
    const newState = viewStates[index];
    if (canvas && newState) {
      canvas.loadFromJSON(newState, () => {
        canvas.mainGroup = canvas.getObjects().find(obj => obj.type === 'group');
        canvas.renderAll();
      });
    }
  };

  const handleToolChange = (tool) => {
    saveCurrentViewState();
    setActiveTool(tool);
  };

  useEffect(() => {
    if (activeTool === "preview") {
      saveCurrentViewState();
      setIsPreviewOpen(true);
    } else {
      setIsPreviewOpen(false);
    }
  }, [activeTool]);

  useEffect(() => {
  if (!isPreviewOpen) return;
  setTimeout(() => {
    for (let i = 0; i < viewStates.length; i++) {
      updateThumbnail(i); // 🔁 Refresh preview thumbnails
    }
  }, 300); // Delay to allow render
}, [isPreviewOpen]);


  return (
    
      <div className="customizer-page">
        <h2 className="customizer-title">Customize your product</h2>

        <div className="customizer-container">
          {/* Top Bar */}
          <div className="top-tools-bar">
            <CanvasToolbar
              canvasRef={canvasRef}
              onUndo={handleUndo}
              onRedo={handleRedo}
            />
            <ThumbnailGallery
              activeIndex={activeIndex}
              onThumbnailClick={handleThumbnailClick}
              thumbnailCanvasRefs={thumbnailCanvasRefs}
            />
          </div>

          {/* Main Customizer Body */}
          <div className="customizer-main">

            <div className="vertical-toolbar">
              <VerticalToolbar
                onSelectTool={handleToolChange}
                activeTool={activeTool}
                flag={flag}
              />
            </div>

            <div className="customizer-controls">
              {activeTool === "upload" && (
                <UploadControls
                  canvasRef={canvasRef}
                  updateThumbnail={() => updateThumbnail(activeIndex)}
                />
              )}
              {activeTool === "text" && (
                <TextControls
                  canvasRef={canvasRef}
                  updateThumbnail={() => updateThumbnail(activeIndex)}
                />
              )}
              {activeTool === "export" && (
                <ExportButtons
                  canvasRef={canvasRef}
                  viewStates={viewStates}
                />
              )}
            </div>

            <div className="canvas-wrapper">
              <ProductCustomizer
                canvasRef={canvasRef}
                mainImageUrl={`${import.meta.env.VITE_IMAGE_API_URL}${productImages[activeIndex]}`}
                savedState={viewStates[activeIndex]}
              />
            </div>
          </div>

          {/* Preview Modal */}
          <PreviewModalpng
            isOpen={isPreviewOpen}
            onClose={() => setActiveTool("export")}
            viewStates={viewStates}
            
          />
        </div>
      </div>
      
  );
};

export default CustomizeLogo;
