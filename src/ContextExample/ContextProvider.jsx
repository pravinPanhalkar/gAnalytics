import React, { createContext } from "react";
export const WreathContext = createContext();
const ContextProvider = (props) => {
  let defaultValue = {
    state: 1,
    value: 2,
  };
  const [data, setData] = React.useState(defaultValue);

  return (
    <WreathContext.Provider value={{ data, setData }}>
      {props.children}
    </WreathContext.Provider>
  );
};

export default ContextProvider;
