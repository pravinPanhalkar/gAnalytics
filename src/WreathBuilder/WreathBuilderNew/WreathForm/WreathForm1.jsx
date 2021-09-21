import React, { useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import WreathPreview1 from "./WreathPreview1";
import ReactGA from "react-ga";
import { useLocation } from "react-router-dom";

import { createBrowserHistory } from "history";
const fabric = window.fabric;
const history = createBrowserHistory();
const WreathForm1 = () => {
  const [canvasData, setCanvasData] = React.useState([]);

  const [currentWreath, setCurrentWreath] = React.useState("");
  window.dataLayer = window.dataLayer || [];
  useEffect(() => {
    debugger;
    // ReactGA.initialize("286955683");
    ReactGA.initialize("G-37W75SYN8X", {
      debug: true,
      titleCase: false,
      gaOptions: {
        userId: 450,
      },
    });
    // ReactGA.initialize("G-37W75SYN8X", {
    //   debug: true,
    //   titleCase: false,
    //   gaOptions: {
    //     userId: 123,
    //   },
    // });
    // ReactGA.pageview(window.location.pathname + window.location.search);
    ReactGA.ga("send", "pageview", window.location.pathname);
    // ReactGA.event({
    //   category: "Editing",
    //   action: "event",
    //   label: "Game Widget",
    // });
  }, []);

  let assetsForWreath = {
    wreath: "",
    steam: [],
    picks: [],
    accessary: [],
  };

  const [selectedAsset, updateAsset] = React.useState(assetsForWreath);

  let canvas = new fabric.Canvas("test", {
    width: 300,
    height: 300,

    backgroundColor: "red",
  });
  canvas.renderAll();
  var ga = ReactGA.ga();
  const sendData = async (e) => {
    e.preventDefault();
    ReactGA.event({
      category: "Social",
      action: "Rated an App",
      value: 3,
    });
  };

  return (
    <div style={{ alignItems: "center" }}>
      <span>hi</span>
      <Container fluid>
        <div>
          <WreathPreview1 fabric={fabric} canvas={canvas} />
        </div>
        <button
          onClick={(e) => {
            sendData(e);
          }}
        >
          sendData
        </button>
      </Container>
    </div>
  );
};

export default WreathForm1;
