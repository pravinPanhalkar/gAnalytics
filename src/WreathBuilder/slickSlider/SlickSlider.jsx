import React, { useEffect } from "react";
import $ from "jquery";
import "./Slick.css";
import Slider from "react-slick";
const SlickSlider = () => {
  const [getDt, setDt] = React.useState({
    activeSlide: "",
    activeSlide2: "",
  });

  const [activeStyle, updateActiveStyle] = React.useState();

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // beforeChange: (current, next) => this.setState({ activeSlide: next }),
    // afterChange: (current) => this.setState({ activeSlide2: current }),

    beforeChange: (current, next) => updateActiveStyle(next),
    afterChange: (current) => updateActiveStyle(current),
  };

  return (
    <div>
      <h2>beforeChange and afterChange hooks</h2>
      {/* <p>
        BeforeChange => activeSlide: <strong>{this.state.activeSlide}</strong>
      </p>
      <p>
        AfterChange => activeSlide: <strong>{this.state.activeSlide2}</strong>
      </p> */}
      {/* <p>{activeStyle}</p> */}
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default SlickSlider;
