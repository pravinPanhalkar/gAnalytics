import React, { useState, useEffect } from "react";
import { fabric } from "fabric";

export const Test = () => {
  // const [canvas, setCanvas] = useState("");
  const [canvas, setCanvas] = useState("");
  useEffect(() => {
    setCanvas(initCanvas());
    imagesCan();
  }, []);
  const initCanvas = () =>
    new fabric.Canvas("canvas", {
      height: 100,
      width: 100,
      backgroundColor: "pink",
    });

  //   ps://www.steadylearner.com/static/images/brand/prop-passer.png"
  //     );

  const addRect = (canvi) => {
    // const rect = new fabric.Image.fromURL(
    //   "https://www.steadylearner.com/static/images/brand/prop-passer.png",
    //   (image) => {
    //     image.scale(0.75);
    //     canvas.add(image);
    //     canvas.renderAll();
    //   }
    // );
    // canvi.add(rect);
    // canvi.renderAll();
  };

  let cav = new fabric.Canvas("img");

  const imagesCan = () => {
    fabric.Image.fromURL(
      // "https://www.steadylearner.com/static/images/brand/prop-passer.png",
      "../test.jpg",
      function (testimage) {
        cav.add(testimage);
      }
    );
  };

  return (
    <div>
      <span>testing</span>
      <canvas id="canvas" />

      <canvas id="img" width="200" height="200" />
      <br />
    </div>
  );
};
