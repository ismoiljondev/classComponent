import React from "react";
import styles from "./style.module.scss";
export class ClientsCard extends React.Component {
  render() {
    return (
      <div className={styles.clientcard}>
        <div className={styles.clientcard__img}>
          <img src={this.props.img} alt={this.props.alt} />
        </div>
        <div className={styles.clientcard__text}>
          <div className={styles.clientcard__text__title}>
            <h2>{this.props.title}</h2>
            <p>{this.props.parag}</p>
          </div>
          <p>{this.props.desc}</p>
        </div>
      </div>
    );
  }
}
