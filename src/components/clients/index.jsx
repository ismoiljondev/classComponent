import React from "react";
import { ClientSlider } from "../clientsslider";
import { SwiperSlide } from "swiper/react";
import { ClientsCard } from "../clientcard";
import client from "../../media/about.jpg";
import styles from "./style.module.scss";
export class Clients extends React.Component {
  render() {
    return (
      <div className={styles.client}>
        <div className={styles.client__container}>
          <div className={styles.client__title}>
            <h2>{this.props.title}</h2>
            <div className={styles.client__title__line}>
              <div></div>
              <p>{this.props.desc}</p>
            </div>
          </div>
          <ClientSlider>
            <SwiperSlide>
              <ClientsCard
                title={"Mr. Leonardo"}
                parag={"Remote Programmer"}
                desc={
                  "“Modern desk style featured with tropical stuff with plant and the lighting for a warm, and comforting take on interior design minimalist. I love this design!. Thanks Interiorqu.” "
                }
                img={client}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ClientsCard
                title={"Mr. Leonardo"}
                parag={"Remote Programmer"}
                desc={
                  "“Modern desk style featured with tropical stuff with plant and the lighting for a warm, and comforting take on interior design minimalist. I love this design!. Thanks Interiorqu.” "
                }
                img={client}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ClientsCard
                title={"Mr. Leonardo"}
                parag={"Remote Programmer"}
                desc={
                  "“Modern desk style featured with tropical stuff with plant and the lighting for a warm, and comforting take on interior design minimalist. I love this design!. Thanks Interiorqu.” "
                }
                img={client}
              />
            </SwiperSlide>
          </ClientSlider>
        </div>
      </div>
    );
  }
}
