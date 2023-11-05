import React from "react";
import { Link } from "react-router-dom";
import { Btn } from "../button";
import styles from "./style.module.scss";
export class Navbar extends React.Component {
  render() {
    return (
      <div className={styles.navbar}>
        <div className={styles.navbar__container}>
          <h2>Interiorqu.</h2>
          <label htmlFor="menu">&#9776;</label>
          <input type="checkbox" id="menu" />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/workflow">Workflow</Link>
            </li>
            <li>
              <Link to="/reviews">Reviews</Link>
            </li>
            <li>
              <Link to="/project">Project</Link>
            </li>
            <Btn text={"send"} white={"white"} />
          </ul>
        </div>
      </div>
    );
  }
}
