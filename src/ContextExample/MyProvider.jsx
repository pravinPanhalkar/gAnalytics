import React from "react";
import ContextProvider from "./ContextProvider";

const MyProvider = () => {
  return (
    <ContextProvider>
      <p>testin</p>
    </ContextProvider>
  );
};

export default MyProvider;
