import React from "react";
// Import Swiper React components
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./style.scss";
// import required modules
import { Navigation } from "swiper/modules";

export class ClientSlider extends React.Component {
  render() {
    return (
      <>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          loop={true}
        >
          {this.props.children}
        </Swiper>
      </>
    );
  }
}
