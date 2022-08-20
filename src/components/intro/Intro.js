import "./Intro.css";
import IntroImageB from "../images/introImageB.png";
// import IntroBg from "../images/introBg.png";
import Navbars from "../Navbar/Navbars";

import Typical from "react-typical";

// import Navbar from "../Navbar/Navbar";

const Intro = () => {
  return (
    <div className="intro-container" id="Intro">
      <div className="intro-parent">
        <img src={IntroImageB} alt="" />
        <div className="i-navbar">
          <Navbars />
        </div>

        {/* <div className="i-navbar">
          <Navbar />
        </div>  
     */}
        <div className="mainTitle">
          <h1>Precious Education Network</h1>
          <h2 className="mainFeatures">
            <Typical
              loop={Infinity}
              steps={[
                "Internship",
                1000,
                "Job placements",
                1000,
                "Counseling...",
                1000,
              ]}
            />
          </h2>
        </div>
        {/*  <h1 className="mainTitle">Precious Education Network</h1>
        <h2 className="mainFeatures">
          <Typical
            loop={Infinity}
            steps={[
              "Internship",
              1000,
              "Job placements",
              1000,
              "Counseling",
              1000,
            ]}
          />
        </h2> */}
      </div>
    </div>
  );
};

export default Intro;
