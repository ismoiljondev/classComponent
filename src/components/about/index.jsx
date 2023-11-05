import React from "react";
import styles from "./style.module.scss";

export class About extends React.Component {
  render() {
    return (
      <div className={styles.about}>
        <div className={styles.about__container}>
          <img src={this.props.img} alt="" />
          <div className={`${styles.about__top} ${styles.about__card}`}>
            <h3>{this.props.clinentNumber}</h3>
            <p>{this.props.clinets}</p>
          </div>
          <div className={`${styles.about__bottom} ${styles.about__card}`}>
            <h3>{this.props.year}</h3>
            <p>{this.props.about}</p>
          </div>
        </div>
      </div>
    );
  }
}
