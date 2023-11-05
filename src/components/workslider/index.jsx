import React from "react";
import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

export class WorkSwiper extends React.Component {
  render() {
    return (
      <>
        <Swiper
          slidesPerView={1}
          spaceBetween={8}
          loop={true}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {this.props.children}
        </Swiper>
      </>
    );
  }
}
