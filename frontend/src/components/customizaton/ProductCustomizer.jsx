import React, { useEffect } from "react";
import { fabric } from "fabric";
import "../../styles/ProductCustomizer.css";

const ProductCustomizer = ({
  canvasRef,
  mainImageUrl,
  partMap = {},
  savedState,
  globalPartColors = {},
}) => {
  useEffect(() => {
    const canvasEl = document.getElementById("product-customizer-canvas");
    if (!canvasEl) return;

    const calculateSize = () => {
      const screenWidth = window.innerWidth;
      let width = 500;
      let height = 630;

      if (screenWidth < 768) {
        width = screenWidth * 0.9;
        height = width * 1.26;
      }

      return { width, height };
    };

    const { width, height } = calculateSize();

    if (!canvasRef.current) {
      const canvas = new fabric.Canvas(canvasEl, {
        width,
        height,
        preserveObjectStacking: true,
      });
      canvasRef.current = canvas;
    } else {
      canvasRef.current.setWidth(width);
      canvasRef.current.setHeight(height);
      canvasRef.current.renderAll();
    }

    const handleResize = () => {
      const { width, height } = calculateSize();
      canvasRef.current.setWidth(width);
      canvasRef.current.setHeight(height);
      canvasRef.current.renderAll();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const applyGlobalColors = (canvas) => {
    const grp = canvas.mainGroup;
    if (!grp || !globalPartColors || Object.keys(globalPartColors).length === 0) return;

    const applyColor = (o) => {
      const part = o.customPart;
      if (part && globalPartColors[part]) {
        o.set("fill", globalPartColors[part]);
        o.dirty = true;
      }
      if (o._objects) o._objects.forEach(applyColor);
    };

    applyColor(grp);
    canvas.requestRenderAll();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !mainImageUrl) return;

    canvas.clear();

    // 1. Handle saved JSON state first
    if (savedState) {
      canvas.loadFromJSON(savedState, () => {
        canvas.mainGroup = canvas.getObjects().find(obj => obj.type === "group");
        applyGlobalColors(canvas);
        canvas.renderAll();
      });
      return;
    }

    // 2. Detect file type
    const isSvg = mainImageUrl.toLowerCase().endsWith(".svg");

    if (isSvg) {
      // Load SVG
      fetch(mainImageUrl)
        .then((res) => res.text())
        .then((svgText) => {
          const cleaned = svgText
            .replace(/<\/*\s*[\w\-]+:/g, "<")
            .replace(/\s+xmlns(:\w+)?="[^"]+"/g, "");

          const reviver = (element, obj) => {
            const id = element.getAttribute("id");
            if (id) obj.id = id.toLowerCase();
          };

          fabric.loadSVGFromString(cleaned, (objs, opts) => {
            if (!objs.length) return;

            const assignParts = (o) => {
              if (o.id) {
                for (const [part, ids] of Object.entries(partMap)) {
                  if (ids.includes(o.id)) {
                    o.customPart = part;
                    break;
                  }
                }
              }
              o.set({ objectCaching: true, selectable: false });
              if (o._objects) o._objects.forEach(assignParts);
            };

            objs.forEach(assignParts);

            const grp = new fabric.Group(objs, opts);
            const { width, height } = canvas;
            const bb = grp.getBoundingRect();
            const scale = Math.min(width / bb.width, height / bb.height);

            grp.scale(scale);
            grp.set({
              left: (width - bb.width * scale) / 2,
              top: (height - bb.height * scale) / 2,
              selectable: false,
            });

            canvas.add(grp);
            canvas.mainGroup = grp;
            applyGlobalColors(canvas);
          }, reviver);
        });
    } else {
      // Load PNG/JPG as background image
      fabric.Image.fromURL(
        mainImageUrl,
        (img) => {
          const canvasWidth = canvas.getWidth();
          const canvasHeight = canvas.getHeight();
          const scale = Math.min(canvasWidth / img.width, canvasHeight / img.height);

          img.set({
            originX: "center",
            originY: "center",
            left: canvasWidth / 2,
            top: canvasHeight / 2,
            scaleX: scale,
            scaleY: scale,
            selectable: false,
            evented: false,
          });

          canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
        },
        { crossOrigin: "anonymous" }
      );
    }
  }, [mainImageUrl, partMap, savedState, globalPartColors]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleChange = () => {
      if (typeof window.updateThumbnailFromCanvas === "function") {
        window.updateThumbnailFromCanvas();
      }
    };

    canvas.on("object:modified", handleChange);
    canvas.on("object:added", handleChange);

    return () => {
      canvas.off("object:modified", handleChange);
      canvas.off("object:added", handleChange);
    };
  }, []);

  return (
    <canvas
      id="product-customizer-canvas"
      className="product-customizer-canvas"
    />
  );
};

export default ProductCustomizer;
