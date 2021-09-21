import React from "react";

const ImagePallet = (props) => {
  const imagePallet = [
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-tulips-blooming-in-field-royalty-free-image-1584131603.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCqkQWFZHLcJ8eNiAXrvEARLCso8vEctX3CRv1RLobZzuCDpin4PRntegHnZo1v6xRGLw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnqH9CxTsLw2-liEEgAyCf4AS6m0LhFoiQlosFnNZM-kocutAW3k0r7-L79eWWM40lITg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLh3oovgXLq2D1ts2Aw2NTSm298iyDR2h0smuBofnzbQ8hI3smELdruOs0_LGKitjN27A&usqp=CAU",
    "https://www.wallpaperflare.com/static/849/358/470/roses-flowers-flower-yellow-wallpaper.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr6GA026x1R_UwZ45CwbGx4uRa7fEg8W_kpJXeqFFgTBMo3aDFIk0416oJ-ooJHsWjFSw&usqp=CAU",
    "https://live.staticflickr.com/5242/5357420754_e6fd4ddc61_b.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpLFUw8ibl-goqO4gFh7kVNOwSkzStYSX9TbYtaqPcE3dIOs9SMK6-2gNTVlzdL4bmB8w&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR6oCCQHQRE83l7so_BsMNRiEUOeJjnX38k_tgyxkW-A8Tozqq2P_qxe8B58v4vig8A7U&usqp=CAU",
  ];
  return (
    <div className="color-palette" style={{ padding: "10px" }}>
      {imagePallet.map((img) => {
        return (
          <div
            onClick={() => {
              props.changeImage(img);
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

export default ImagePallet;
