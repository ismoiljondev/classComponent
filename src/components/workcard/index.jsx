import React from "react";
import styles from "./style.module.scss";
export class WorkCard extends React.Component {
  render() {
    return (
      <div className={styles.card}>
        <div className={styles.card__img}>
          <img src={this.props.img} alt={this.props.alt} />
        </div>
        <div className={styles.card__text}>
          <div className={styles.card__text__title}>
            <h2>{this.props.title}</h2>
            <p>{this.props.number}</p>
          </div>
          <div className={styles.card__text__desc}>
            <p>{this.props.desc}</p>
          </div>
        </div>
      </div>
    );
  }
}
