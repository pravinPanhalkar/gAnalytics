import React, { useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import ProductTile from "../Common/ProductTile";
import SteamBushPallet from "../Common/SteamBushPallet";
import WreathPallet from "../Common/WreathPallet";
import WreathPreview from "./WreathPreview";
const fabric = window.fabric;
const WreathForm = () => {
  const [canvasData, setCanvasData] = React.useState([]);

  const [currentWreath, setCurrentWreath] = React.useState("");

  let assetsForWreath = {
    wreath: "",
    steam: [],
    picks: [],
    accessary: [],
  };

  const [selectedAsset, updateAsset] = React.useState(assetsForWreath);

  let canvas = new fabric.Canvas("wreath", {
    width: 300,
    height: 300,

    // backgroundColor: "red",
  });
  canvas.renderAll();

  let circle = new fabric.Circle({
    radius: 100,
    fill: "",
    stroke: "lightgray",
    strokeWidth: 10,
    margin: 20,
  });

  canvas.add(circle);
  canvas.centerObject(circle);
  // let prevCanvas = [...canvasData];
  // prevCanvas.push(circle);
  // debugger;
  // setCanvasData(prevCanvas);

  let activeProgressBar = {
    first: false,
    second: true,
    third: false,
    fourth: false,
  };
  const [flag, updateFlag] = React.useState(activeProgressBar);
  const [currentCount, setCurrentCount] = React.useState(0);

  // for wreath currently selecteused
  const [currentImg, setCurrentImg] = React.useState("");

  const [currentProgressTitle, updateCurrentTitle] = React.useState("");

  // steam and bushes
  const [currentPallet, setCurrentPallet] = React.useState();

  // const [currentSteamBush, setCurrentSteamBush] = React.useState("");
  const [steamAndBushes, setSteamAndBushes] = React.useState([]);

  useEffect(() => {
    console.log(currentCount);
    let newState = { ...updateFlag };
    if (currentCount === 0) {
      newState["first"] = true;
      newState["second"] = false;
      newState["third"] = false;
      newState["fourth"] = false;
      updateCurrentTitle("Select Wreath Form");
      setSteamAndBushes([]);
    }
    if (currentCount === 1) {
      newState["first"] = false;
      newState["second"] = true;
      newState["third"] = false;
      newState["fourth"] = false;
      updateCurrentTitle("Select Steam & Bushes upto 3");
    }

    if (currentCount === 2) {
      newState["first"] = false;
      newState["second"] = false;
      newState["third"] = true;
      newState["fourth"] = false;
      updateCurrentTitle("Select Picks upto 3");
    }

    if (currentCount === 3) {
      newState["first"] = false;
      newState["second"] = false;
      newState["third"] = false;
      newState["fourth"] = true;
      updateCurrentTitle("Select Accessary upto 3");
    }
    updateFlag(newState);
  }, [currentCount]);

  const updateWreath = (img) => {
    debugger;
    setCurrentImg(img);
    setCurrentWreath(img);

    let prevWreathBuildData = { ...selectedAsset };
    prevWreathBuildData["wreath"] = img;
    updateAsset(prevWreathBuildData);
  };

  const updateSteamBush = (img, cnt) => {
    debugger;
    let prevSteam = [...steamAndBushes];
    if (prevSteam.length <= 2) {
      // setSteamAndBushes()
      prevSteam.push(img);
      debugger;
      setSteamAndBushes(prevSteam);

      let prevWreathBuildData = { ...selectedAsset };
      if (prevWreathBuildData["steam"].length <= 2) {
        prevWreathBuildData["steam"].push(img);
        debugger;
        updateAsset(prevWreathBuildData);
      }
      // let prevWreathBuildData = { ...selectedAsset };
      let wreathSelected = prevWreathBuildData.wreath;

      fabric.Image.fromURL(wreathSelected, (img) => {
        img.set({
          left: 300,
          top: 0,
        });
        img.scaleToHeight(300);
        img.scaleToWidth(300);
        canvas.add(img);
        canvas.centerObject(img);
      });
      prevSteam.map((steams) => {
        fabric.Image.fromURL(steams.url, (steamBush) => {
          steamBush.set({
            left: 0,
            top: 0,
            angle: 180,

            // height: 100,
          });
          // .scale(1);
          steamBush.scaleToHeight(150);
          steamBush.scaleToWidth(150);
          canvas.add(steamBush);
          canvas.centerObject(steamBush);
          canvas.setBackgroundColor(null);
        });
      });
    }
  };

  const changeProgressToRight = () => {
    debugger;
    let curCnt = currentCount;
    curCnt += 1;
    if (curCnt === 1) {
      let prevWreathBuildData = { ...selectedAsset };
      let wreathSelected = prevWreathBuildData.wreath;
      let steams = prevWreathBuildData.steam;
      fabric.Image.fromURL(wreathSelected, (img) => {
        img.set({
          left: 300,
          top: 0,
        });
        img.scaleToHeight(300);
        img.scaleToWidth(300);
        canvas.add(img);
        canvas.centerObject(img);
      });
      if ((steams.length <= 2) & (steams.length != 0)) {
        steams.map((steams) => {
          fabric.Image.fromURL(steams, (curentSteams) => {
            curentSteams.set({
              left: 300,
              top: 0,
            });
            curentSteams.scaleToHeight(300);
            curentSteams.scaleToWidth(300);
            canvas.add(curentSteams);
            canvas.centerObject(curentSteams);
          });
        });
      }
    }
    if (curCnt < 4 && curCnt >= 0) {
      setCurrentCount(curCnt);
    }
  };

  const changeProgressToLeft = () => {
    debugger;
    let curCnt = currentCount;
    if (curCnt === 0) {
      curCnt = 0;
    } else {
      curCnt -= 1;
    }
    if (curCnt === 0) {
      setCurrentImg(currentWreath);

      fabric.Image.fromURL(currentWreath, (img) => {
        img.set({
          left: 300,
          top: 0,
        });
        img.scaleToHeight(300);
        img.scaleToWidth(300);
        canvas.add(img);
        canvas.centerObject(img);
      });
    }
    if (curCnt < 4 && curCnt >= 0) {
      setCurrentCount(curCnt);
    }
  };

  useEffect(() => {
    let curCnt = currentCount;
    if (curCnt === 1) {
      
    }
  });

  // useEffect(() => {
  // let prevCanvas = [...canvasData];
  // prevCanvas.map((imgUrl) => {
  //   fabric.Image.fromURL(imgUrl, (img) => {
  //     img.set({
  //       left: 300,
  //       top: 0,
  //     });
  //     img.scaleToHeight(300);
  //     img.scaleToWidth(300);
  //     canvas.add(img);
  //     canvas.centerObject(img);
  //   });
  // });

  //   let curCnt = currentCount;
  //   debugger;
  //   if (curCnt == 0) {
  // let prevWreathBuildData = { ...selectedAsset };
  // let wreathSelected = prevWreathBuildData.wreath;
  // setCurrentImg(wreathSelected);

  // fabric.Image.fromURL(currentWreath, (img) => {
  //   img.set({
  //     left: 300,
  //     top: 0,
  //   });
  //   img.scaleToHeight(300);
  //   img.scaleToWidth(300);
  //   canvas.add(img);
  //   canvas.centerObject(img);
  // });
  // }

  // if (curCnt == 1) {
  //   let prevWreathBuildData = { ...selectedAsset };
  //   let stemSelected = prevWreathBuildData.steam;
  //   // setCurrentImg(wreathSelected);
  //   stemSelected.map((steams) => {
  //     fabric.Image.fromURL(currentWreath, (steams) => {
  //       steams.set({
  //         left: 300,
  //         top: 0,
  //       });
  //       steams.scaleToHeight(300);
  //       steams.scaleToWidth(300);
  //       canvas.add(steams);
  //       canvas.centerObject(steams);
  //     });
  //   });
  // }
  // });

  useEffect(() => {
    if (currentImg != "") {
      let newImg = fabric.Image.fromURL(
        currentImg,

        (img) => {
          img.set({
            left: 300,
            top: 0,
          });
          img.scaleToHeight(300);
          img.scaleToWidth(300);
          canvas.add(img);
          canvas.centerObject(img);
        }
      );
    }
  }, [currentImg]);

  return (
    <div style={{ alignItems: "center" }}>
      <Container fluid>
        <WreathPreview fabric={fabric} canvas={canvas} />
      </Container>
      <ProductTile
        Title={currentProgressTitle}
        flag={flag}
        setCurrentCount={setCurrentCount}
        currentCount={currentCount}
        updateWreath={updateWreath}
        changeProgressToRight={changeProgressToRight}
        changeProgressToLeft={changeProgressToLeft}
      >
        {currentCount === 0 ? (
          <WreathPallet updateWreath={updateWreath} />
        ) : currentCount === 1 ? (
          <SteamBushPallet updateSteamBush={updateSteamBush} />
        ) : null}
      </ProductTile>
    </div>
  );
};

export default WreathForm;

/*


*/
