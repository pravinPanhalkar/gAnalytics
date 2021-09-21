import React, { useEffect, useState } from "react";
import "./App.css";
import Flower from "./components/Flower";
import ColorPalette from "./components/ColorPalette";
import FlowerTest from "./components/FlowerTest";
import ShareDemo from "./shareDemo/ShareDemo";
import { Test } from "./fabricePractice/Test";
import ImagePallet from "./components/ImagePallet";
import Main from "./WreathBuilder/MainPage/Main";
import SlickSlider from "./WreathBuilder/slickSlider/SlickSlider";
import CanvaseTest from "./CanvasteTesting/CanvaseTest";

const fabric = window.fabric;

const App = () => {
  const [fillColors, setFillColors] = useState(Array(22).fill("white"));
  const [currentColor, setCurrentColor] = useState("blue");

  const [fillImages, setFillImages] = useState(Array(15).fill("white"));
  const [currentImage, setCurrentImage] = useState("");

  const onFillColor = (i) => {
    let newFillColors = fillColors.slice(0);
    newFillColors[i] = currentColor;
    setFillColors(newFillColors);
  };

  const [enableImageFlag, setEnableImageFlag] = useState(Array(15).fill(false));
  const [currentFlag, setCurrentFlag] = useState(false);

  const onFillImage = (i) => {
    let newImage = fillImages.slice(0);
    newImage[i] = currentImage;
    setFillImages(newImage);
    debugger;
    console.log(i);
  };

  const onFlagChange = (i) => {
    debugger;
    let prevState = enableImageFlag[i];
    debugger;
    let newFlag = enableImageFlag.slice(0);
    newFlag[i] = !prevState;
    debugger;
    setEnableImageFlag(newFlag);
  };

  let canvas = new fabric.Canvas("test", {
    width: 300,
    height: 300,

    backgroundColor: "red",
  });
  canvas.renderAll();
  return (
    <div style={{ textAlign: "center" }}>
      {/* <div className="flower">
        <FlowerTest
          fillColors={fillColors}
          onFill={onFillColor}
          fillImages={fillImages}
          onFillImage={onFillImage}
          onFlageChange={onFlagChange}
          enableImageFlag={enableImageFlag}
          setCurrentFlag={setCurrentFlag}
          currentFlag={currentFlag}
        />
      </div>
      <ColorPalette currentColor={currentColor} changeColor={setCurrentColor} />
      <ImagePallet changeImage={setCurrentImage} /> */}
      {/* <CanvaseTest /> */}
      {/* <canvas id="wreath1" /> */}
      {/* <Test /> */}
      {/* <div>
        <h2>Share demo</h2>
        <ShareDemo />
      </div>
      <div className="flower">
        <FlowerTest
          fillColors={fillColors}
          onFill={onFillColor}
          fillImages={fillImages}
          onFillImage={onFillImage}
          onFlageChange={onFlagChange}
          enableImageFlag={enableImageFlag}
          setCurrentFlag={setCurrentFlag}
          currentFlag={currentFlag}
        />
      </div>
      <ColorPalette currentColor={currentColor} changeColor={setCurrentColor} />
      <ImagePallet changeImage={setCurrentImage} />
      <hr /> */}
      <Main />
      {/* <SlickSlider /> */}
      {/* <ShareDemo /> */}
    </div>
  );
};

export default App;
