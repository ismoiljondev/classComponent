import React from "react";
import { WorkSwiper } from "../workslider";
import { SwiperSlide } from "swiper/react";
import { WorkCard } from "../workcard";
import image from "../../media/about.jpg";
import styles from "./style.module.scss";
export class Work extends React.Component {
  render() {
    return (
      <div className={styles.work}>
        <div className={styles.work__container}>
          <div className={styles.work__title}>
            <h2>{this.props.title}</h2>
            <div className={styles.work__title__line}>
              <div></div>
              <p>{this.props.desc}</p>
            </div>
          </div>
          <WorkSwiper>
            <SwiperSlide>
              <WorkCard
                img={image}
                alt={"this is image"}
                title={"Planning"}
                number={"01"}
                desc={
                  "One key part of the strategic planning is to understand your goals and budget."
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <WorkCard
                img={image}
                alt={"this is image"}
                title={"Planning"}
                number={"01"}
                desc={
                  "One key part of the strategic planning is to understand your goals and budget."
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <WorkCard
                img={image}
                alt={"this is image"}
                title={"Planning"}
                number={"01"}
                desc={
                  "One key part of the strategic planning is to understand your goals and budget."
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <WorkCard
                img={image}
                alt={"this is image"}
                title={"Planning"}
                number={"01"}
                desc={
                  "One key part of the strategic planning is to understand your goals and budget."
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <WorkCard
                img={image}
                alt={"this is image"}
                title={"Planning"}
                number={"01"}
                desc={
                  "One key part of the strategic planning is to understand your goals and budget."
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <WorkCard
                img={image}
                alt={"this is image"}
                title={"Planning"}
                number={"01"}
                desc={
                  "One key part of the strategic planning is to understand your goals and budget."
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <WorkCard
                img={image}
                alt={"this is image"}
                title={"Planning"}
                number={"01"}
                desc={
                  "One key part of the strategic planning is to understand your goals and budget."
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <WorkCard
                img={image}
                alt={"this is image"}
                title={"Planning"}
                number={"01"}
                desc={
                  "One key part of the strategic planning is to understand your goals and budget."
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <WorkCard
                img={image}
                alt={"this is image"}
                title={"Planning"}
                number={"01"}
                desc={
                  "One key part of the strategic planning is to understand your goals and budget."
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <WorkCard
                img={image}
                alt={"this is image"}
                title={"Planning"}
                number={"01"}
                desc={
                  "One key part of the strategic planning is to understand your goals and budget."
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <WorkCard
                img={image}
                alt={"this is image"}
                title={"Planning"}
                number={"01"}
                desc={
                  "One key part of the strategic planning is to understand your goals and budget."
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <WorkCard
                img={image}
                alt={"this is image"}
                title={"Planning"}
                number={"01"}
                desc={
                  "One key part of the strategic planning is to understand your goals and budget."
                }
              />
            </SwiperSlide>
          </WorkSwiper>
        </div>
      </div>
    );
  }
}
