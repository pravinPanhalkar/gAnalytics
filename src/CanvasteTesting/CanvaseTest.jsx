import React, { useEffect } from "react";
import ImagePallet from "../components/ImagePallet";
import CustomeSlider from "../Slick/CustomeSlider";
const fabric = window.fabric;

const CanvaseTest = () => {
  useEffect(() => {
    let canvas = new fabric.Canvas("canvas", {
      height: 500,
      width: 500,
      //   backgroundColor: "green",
    });

    let circle = new fabric.Circle({
      radius: 200,
      fill: "",
      stroke: "lightgray",
      strokeWidth: 50,
      margin: 20,
    });

    canvas.add(circle);
    canvas.centerObject(circle);

    let img = fabric.Image.fromURL(
      "https://www.wallpaperflare.com/static/849/358/470/roses-flowers-flower-yellow-wallpaper.jpg",
      // "../test.jpg",
      function (img) {
        img.set({
          left: 20,
          top: 0,
          angle: 180,
        });
        img.scaleToWidth(100);
        img.scaleToHeight(200);
        img.rotate(20);
        canvas.add(img);
        // canvas.centerObject(img);
      }
    );
  });
  return (
    <div>
      <h1>Span</h1>
      <CustomeSlider />
      <canvas id="canvas" />

      <ImagePallet />
    </div>
  );
};

export default CanvaseTest;
