import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";

const Home = () => {
  const history = useHistory();
  const openWreathBuilder = () => {
    history.push({
      pathname: "/wreath-form",
    });
  };

  return (
    <div>
      <h1>Home Page</h1>
      <Button onClick={openWreathBuilder}>Start Building</Button>
    </div>
  );
};

export default Home;
