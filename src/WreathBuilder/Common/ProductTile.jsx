import React from "react";
import { Card, Container } from "react-bootstrap";
import ProgressBarWreath from "./ProgressBarWreath";
import WreathPallet from "./WreathPallet";

const ProductTile = (props) => {
  let {
    Title,
    flag,
    changeFlag,
    currentCount,
    setCurrentCount,
    updateWreath,
    changeProgressToRight,
    changeProgressToLeft,
  } = props;

  return (
    <Container>
      <Card>
        <Card.Body>
          <span>{Title}</span>
          <ProgressBarWreath
            flag={props.flag}
            // changeFlag={changeFlag}
            currentCount={currentCount}
            setCurrentCount={setCurrentCount}
            changeProgressToRight={changeProgressToRight}
            changeProgressToLeft={changeProgressToLeft}
          />
          {/* <WreathPallet updateWreath={updateWreath} /> */}
          {props.children}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProductTile;
