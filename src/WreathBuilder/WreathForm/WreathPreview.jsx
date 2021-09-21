import React from "react";
import { Card, Container } from "react-bootstrap";

const WreathPreview = (props) => {
  let { fabric, canvas } = props;
  //   let canvas = new fabric.Canvas("wreath", {
  //     width: 300,
  //     height: 300,

  //     // backgroundColor: "lightgray",
  //   });
  //   canvas.renderAll();

  //   let circle = new fabric.Circle({
  //     radius: 100,
  //     fill: "",
  //     stroke: "lightgray",
  //     strokeWidth: 10,
  //     margin: 20,
  //   });

  //   canvas.add(circle);
  //   canvas.centerObject(circle);

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>Wreath</Card.Title>
          <Card.Subtitle style={{ float: "right" }}>Zoom</Card.Subtitle>
          <Card.Text
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <canvas id="wreath" />
          </Card.Text>
          <Card.Link href="#">Start Over</Card.Link>
          <Card.Link href="#">Finished</Card.Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default WreathPreview;
