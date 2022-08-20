import { useEffect } from "react";

import "./Destinations.css";
import UAE from "../images/UAE.png";
import Macau from "../images/macau.jpg";
import Hongkong from "../images/hongkong.png";
import China from "../images/China.png";
import Japan from "../images/japan.png";
import Thailand from "../images/Thailand.png";
import Europe from "../images/Europe.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Destinations = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const countries = [
    {
      img: UAE,
      name: "Dubai",
      desc: " It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page",
    },
    {
      img: Macau,
      name: "Macao",
      desc: " It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page",
    },
    {
      img: Hongkong,
      name: "Hongkong",
      desc: " It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page",
    },
    {
      img: China,
      name: "China",
      desc: " It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page",
    },
    {
      img: Japan,
      name: "Japan",
      desc: " It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page",
    },
    {
      img: Thailand,
      name: "Thailand",
      desc: " It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page",
    },
    {
      img: Europe,
      name: "Europe",
      desc: " It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page",
    },
  ];

  return (
    <div className="destinations-container" id="Destinations">
      <h1 className="sectionTitle">Destinations</h1>
      <p>
        The main advantage of any internship is not the ability to earn a
        six-figure salary, but rather it is an opportunity to gain valuable
        experience. A paid hotel management internship in UAE for international
        students will always be a plus point and will surely look good on your
        resume and can only help you advance in your career. Fortunately, there
        are numerous student internships in the United Arab of Emirates (Dubai)
        from which to choose. Some of the advantages of global internships in
        the UAE include exposure to a wide range of tasks and departments of the
        hotel industry. You will be mentored, will build a professional network,
        and will be staying in the bustling metropolis of UAE.
      </p>

      <div className="d-countriesList">
        {" "}
        {countries.map((country, index) => {
          return (
            <div
              data-aos="flip-left"
              data-aos-offset="100"
              className="d-countries"
              key={index}
            >
              <div className="d-flag">
                <img src={country.img} alt="National Flag" />
              </div>
              <h3 className="country-name">{country.name}</h3>
              <p>{country.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Destinations;
