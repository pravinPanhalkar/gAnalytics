import React from "react";
import { Container, Button } from "react-bootstrap";
import "./pro.css";

const ProgressBarWreath = (props) => {
  let {
    flag,
    setCurrentCount,
    currentCount,
    changeProgressToRight,
    changeProgressToLeft,
  } = props;
  let activeClass = "cir active";
  let inactiveClass = "cir inactive";

  // const changeProgressToRight = () => {
  //   debugger;
  //   let curCnt = currentCount;
  //   curCnt += 1;
  //   if (curCnt < 4 && curCnt >= 0) {
  //     setCurrentCount(curCnt);
  //   }
  // };

  // const changeProgressToLeft = () => {
  //   debugger;
  //   let curCnt = currentCount;
  //   curCnt -= 1;
  //   if (curCnt < 4 && curCnt >= 0) {
  //     setCurrentCount(curCnt);
  //   }
  // };

  return (
    <Container>
      <Button style={{ float: "left" }} onClick={() => changeProgressToLeft()}>
        Left
      </Button>
      {/* <span className={flag.first ? activeClass : inactiveClass}>1</span> */}
      <span className={flag.first ? activeClass : inactiveClass}>1</span>
      <span className={flag.second ? activeClass : inactiveClass}>2</span>
      <span className={flag.third ? activeClass : inactiveClass}>3</span>
      <span className={flag.fourth ? activeClass : inactiveClass}>4</span>
      <Button
        style={{ float: "right" }}
        onClick={() => changeProgressToRight()}
      >
        Right
      </Button>
    </Container>
  );
};

export default ProgressBarWreath;
