import "./Navbars.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Component } from "react";
import MainLogos from "../images/mainLogos.png";
import { Link } from "react-scroll";

class Navbars extends Component {
  state = { clicked: false };
  handleCick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <nav>
          <div className="logo-container">
            <a href="/">
              <img src={MainLogos} alt="" className="logo-main" />
              <h1 className="n-title">PEN Nepal</h1>
            </a>
          </div>
          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <li>
                <Link
                  to="Intro"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="menu-items"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="AboutUs"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="menu-items"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="Destinations"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="menu-items"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  to="SixSteps"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="menu-items"
                >
                  Process
                </Link>
              </li>
              <li>
                <Link
                  to="Faq"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="menu-items"
                >
                  FAQ
                </Link>
              </li>
              <li>
                {" "}
                <a href="/application">
                  <button className="button">Apply Now</button>
                </a>
              </li>
            </ul>
          </div>
          <div id="mobile" onClick={this.handleCick}>
            {this.state.clicked ? (
              <FaTimes className="menu-icons" />
            ) : (
              <FaBars className="menu-icons" />
            )}
          </div>
        </nav>
      </>
    );
  }
}

export default Navbars;
