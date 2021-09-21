import React from "react";
import { Card, Container } from "react-bootstrap";

const WreathPreview1 = () => {
  return (
    <div>
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
    </div>
  );
};

export default WreathPreview1;
