import React from "react";
import styles from "./style.module.scss";
import { Btn } from "../button";
export class Showcase extends React.Component {
  render() {
    return (
      <div className={styles.showcase}>
        <div className={styles.showcase__container}>
          <h1>{this.props.title}</h1>
          <p>{this.props.paragraf}</p>
          <Btn text={"Get Started"} />
        </div>
      </div>
    );
  }
}
