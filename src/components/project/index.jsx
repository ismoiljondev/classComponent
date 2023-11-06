import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

export class Project extends React.Component {
  render() {
    return (
      <>
        <div className={style.project}>
          <div className={style.container}>
            <div className={style.title}>
              <h1>The Latest Project</h1>
              <h3>
                <span></span>OUR MINI GALLERY<span></span>
              </h3>
            </div>
            <div className={style.box_img_text}>
              <div className={style.text}>
                <h1>The Tropical Workspace Style</h1>
                <p>
                  Tropical style is all about comfort, ease and utility and is
                  eclectic by definition. The style is characterized by warm and
                  colors drawn mostly from lighting.
                </p>
                <button>Read more</button>
              </div>
              <div className={style.img}></div>
            </div>
            <div className={style.box_img_text}>
              <div className={style.img}></div>

              <div className={style.text}>
                <h1>The Tropical Workspace Style</h1>
                <p>
                  Tropical style is all about comfort, ease and utility and is
                  eclectic by definition. The style is characterized by warm and
                  colors drawn mostly from lighting.
                </p>
                <button>Read more</button>
              </div>
            </div>
            <div className={style.box_img_text}>
              <div className={style.text}>
                <h1>The Tropical Workspace Style</h1>
                <p>
                  Tropical style is all about comfort, ease and utility and is
                  eclectic by definition. The style is characterized by warm and
                  colors drawn mostly from lighting.
                </p>
                <button>Read more</button>
              </div>
              <div className={style.img}></div>
            </div>
            <div className={style.box_img_text}>
              <div className={style.text}>
                <h2 id="h1">Interested to Work With Us?</h2>
                <p>
                  Fill the form and send the type of your room and tell us what
                  you need for your future room, then wait until we reply it.
                </p>
                <span></span>
              </div>
              <div className={style.form}>
                <form action="">
                  <ul>
                    <li>
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        id="name"
                      />
                    </li>
                    <li>
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="text"
                        placeholder="Email address"
                        id="email"
                      />
                    </li>
                    <li>
                      <label htmlFor="room">Name</label>
                      <input
                        type="text"
                        placeholder="Enter type room"
                        id="room"
                      />
                    </li>
                    <li>
                      <label htmlFor="tell">Tell us</label>
                      <input type="text" placeholder="Tell us what you need" />
                    </li>
                    <li className={style.li}>
                      <button>Submit</button>
                    </li>
                  </ul>
                </form>
              </div>
            </div>

            <footer className={style.footer}>
              <div className={style.top}>
                <ul className={style.ul1}>
                  <li>
                    <h3>Newsletter</h3>
                  </li>
                  <li>
                    Subscribe to our newsletter for awesome newsletter and daily
                    inspiration.
                  </li>
                  <li>
                    <form action="">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Email address"
                      />
                      <button>Subsribe</button>
                    </form>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h3>Navigation</h3>
                  </li>
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Workflow</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Reviews</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Project</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h3>About</h3>
                  </li>
                  <li>
                    <Link to={"/"}>Pricing</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Contact</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h3>Social</h3>
                  </li>
                  <li>
                    <Link to={"/"}>Instagram</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Facebook</Link>
                  </li>
                  <li>
                    <Link to={"/"}>WhatsApp</Link>
                  </li>
                </ul>
              </div>
              <div className={style.bottom}>
                <p> Created @ 2021 Interiorqu.com.StudioWebsite</p>
                <span>
                  <p>Privacy Policy</p> <p>Terms & Conditions</p>
                </span>
              </div>
            </footer>
          </div>
        </div>
      </>
    );
  }
}
