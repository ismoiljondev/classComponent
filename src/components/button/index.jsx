import React from "react";
import styles from "./style.module.scss";
export class Btn extends React.Component {
  render() {
    return (
      <div>
        <button
          className={`${styles.btn} ${
            this.props.white === "white" ? styles["btn--white"] : ""
          }`}
        >
          {this.props.text}
        </button>
      </div>
    );
  }
}
