import React from "react";

const WreathPallet = (props) => {
  let { updateWreath } = props;
  const imagePallet = [
    "https://i.pinimg.com/564x/5e/62/de/5e62de54fc73f2da9f54bf8b74cf26a0.jpg",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR84pEX75bck4Ny1usdLw-M-3AfNJRWSRZMfqol217qYSaNM7R9ObeIb7TTPXGanybRQnI&usqp=CAU",
  ];
  return (
    <div className="color-palette" style={{ padding: "10px" }}>
      {imagePallet.map((img) => {
        return (
          <div
            onClick={() => {
              props.updateWreath(img);
            }}
          >
            <div
              style={{
                margin: "5px",
                border: "1px solid lightgray",
                boxShadow: "1px 2px 5px gray",
              }}
            >
              <img src={img} height="65" width="65" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WreathPallet;
