import "./Footer.css";
import MainLogoFooter from "../images/mainLogoFooter.png";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterest,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="f-row1">
        <div className="f-left">
          <Link to="Intro" spy={true} smooth={true} offset={-50} duration={500}>
            <img
              src={MainLogoFooter}
              alt="logo of Pen Nepal"
              style={{ cursor: "pointer" }}
            />
          </Link>
          <div className="sm-icons">
            <a href="https://www.facebook.com" className="icon">
              <FaFacebookF />
            </a>
            <a href="https://www.twitter.com" className="icon">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com" className="icon">
              <FaLinkedinIn />
            </a>
            <a href="https://www.pinterest.com" className="icon">
              <FaPinterest />
            </a>
          </div>
        </div>
        <div className="f-right">
          <div className="col-1">
            <h5>Management Contact</h5>
            <p>
              Prabin Khanal
              <br />
              Email:{" "}
              <a href="mailto:prabin@pennepaledu.com">prabin@pennepaledu.com</a>
              <br />
              Phone: <a href="tel:+977-9851066149">+977-9851066149</a>
            </p>
            <p>
              Shikhar Nepal
              <br />
              Email:{" "}
              <a href="mailto:shikhar@pennepaledu.com">
                shikhar@pennepaledu.com
              </a>
              <br />
              Phone: <a href="tel:+977-981235922">+977-981235922</a>
            </p>
          </div>
          <div className="col-2">
            <h5>Site Map</h5>
            <p>
              <Link
                to="Intro"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                style={{ cursor: "pointer" }}
              >
                Home
              </Link>
            </p>
            <p>
              <Link
                to="AboutUs"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                style={{ cursor: "pointer" }}
              >
                About Us
              </Link>
            </p>
            <p>
              <Link
                to="Destinations"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                style={{ cursor: "pointer" }}
              >
                Destinations
              </Link>
            </p>
            <p>
              <Link
                to="SixSteps"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                style={{ cursor: "pointer" }}
              >
                Process
              </Link>
            </p>
            <p>
              <Link
                to="Faq"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                style={{ cursor: "pointer" }}
              >
                FAQ
              </Link>
            </p>
          </div>
          <div className="col-3">
            <h5>Contact Us</h5>
            <p>
              <a href="tel:01-4465097">01-4465097</a>
            </p>
            <p>
              <a href="mailto:info@pennepal.com">info@pennepal.com</a>
            </p>
            <p>
              Panchakumari Marg,
              <br />
              New Baneshwor
              <br />
              (Adjacent to Civil Bank)
            </p>
          </div>
        </div>
      </div>
      <div className="f-row2">
        <p>Powered By Invocea Creative Agency</p>
        <p>
          Terms of use &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; Privacy
          Policy
        </p>
      </div>
    </div>
  );
};

export default Footer;
