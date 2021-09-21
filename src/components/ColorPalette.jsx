import React from "react";

export default function ColorPalette(props) {
  const colors = ["#f39c12 "];

  return (
    <div className="color-palette">
      {colors.map((color) => {
        const activeClass =
          props.currentColor === color ? "color-swatch-active" : "";
        return (
          <div
            onClick={() => {
              props.changeColor(color);
            }}
          >
            <div
              className={`color-swatch ${activeClass}`}
              style={{ backgroundColor: color }}
            >
              {/* <img
                src="https://i.pinimg.com/736x/9d/0e/95/9d0e95a207231b44c265a8fef32d7127.jpg"
                height="65"
                width="65"
              /> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}
