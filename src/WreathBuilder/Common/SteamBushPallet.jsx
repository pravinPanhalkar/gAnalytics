// https://cdn.shopify.com/s/files/1/0108/9460/6436/products/artificial-18-eucalyptus-double-ring-wreath-wtwig-base-nearly-natural-295283_large.jpg?v=1584098210

import React from "react";

const SteamBushPallet = (props) => {
  let { updateSteamBush } = props;
  const imagePallet = [
    {
      id: 1,
      url: "https://i.etsystatic.com/10574728/r/il/05e099/2294398250/il_794xN.2294398250_cds8.jpg",
    },
    {
      id: 2,
      url: "https://image.shutterstock.com/image-vector/circle-green-fern-leaves-plant-260nw-678158653.jpg",
    },

    // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR84pEX75bck4Ny1usdLw-M-3AfNJRWSRZMfqol217qYSaNM7R9ObeIb7TTPXGanybRQnI&usqp=CAU",
  ];
  return (
    <div className="color-palette" style={{ padding: "10px" }}>
      {imagePallet.map((img) => {
        return (
          <div
            onClick={() => {
              props.updateSteamBush(img);
            }}
          >
            <div
              style={{
                margin: "5px",
                border: "1px solid lightgray",
                boxShadow: "1px 2px 5px gray",
              }}
            >
              <img src={img.url} height="65" width="65" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SteamBushPallet;
