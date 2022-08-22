import "./SixSteps.css";
import SixSteps1 from "../images/sixSteps1.png";
import SixSteps2 from "../images/sixSteps2.png";
import SixSteps3 from "../images/sixSteps3.png";
import SixSteps4 from "../images/sixSteps4.png";
import SixSteps5 from "../images/sixSteps5.png";
import SixSteps6 from "../images/sixSteps6.png";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const SixSteps = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const sixSteps = [
    {
      img: SixSteps1,
      title: "STEP 1: Application Form ",
      desc: "Internship opens a pathway for a successful career in the hospitality industry. You dream, we are there to assist you. Fill up and submit the application form. You are requested to clearly mention your mobile number in your CV.",
    },
    {
      img: SixSteps2,
      title: "STEP 2: Screening Process ",
      desc: "After PEN receives your application form or CV, PEN staff will call you to get information on all your expectations and your internship destinations. You will be invited to visit PEN office. PEN officials will share all the information that is necessary to get hotel management internship abroad.",
    },
    {
      img: SixSteps3,
      title: "STEP 3: Selection Process ",
      desc: `If you successfully pass the screening process, PEN official will make a call and write email to
      the selected applicant. Selected applicants will be issued formal letter of selection from PEN.`,
    },
    {
      img: SixSteps4,
      title:
        "STEP 4: Initial payment to PEN for forwarding the process to host company ",
      desc: `After receiving formal letter from PEN office, successful applicants are required to pay initial
      payment confirming that you would register for the internship program. This will push PEN to
      make necessary agreement with potential host hotels, resorts, restaurants, internship
      providing colleges and universities.`,
    },
    {
      img: SixSteps5,
      title: "STEP 5: Confirmation Letter of Internship ",
      desc: `We forward your CV to internship provider for further interview. PEN will moderate the
      interview session. However, concerned officials of hotels, resorts or any colleges offering
      hotel management internship will conduct online meeting for about 20 minutes. You will be
      asked about the knowledge of hotel management and your learning attitude. You will be
      sent official internship letter from PEN within 8 weeks from the date you have made the initial
      payment. The letter will mention the name of hotels and resorts where you are going to
      intern and other necessary details that you have to follow before going to internship abroad.`,
    },
    {
      img: SixSteps6,
      title: "STEP 6: Visa Processing",
      desc: `After getting official confirmation, you are requested to collect necessary documents from
      the college where you study. PEN will facilitate to process visa, booking accommodation, and
      counseling support from hospitality expert before leaving Nepal.
      `,
    },
  ];

  return (
    <div className="six-steps" id="SixSteps">
      <h1 className="sectionTitle">6 Steps</h1>
      <h2>
        You dream, we are there to assist you for a golden and bright future.
      </h2>
      <div className="s-steps">
        <div
          data-aos="zoom-in-down"
          data-aos-offset="300"
          data-aos-duration="500"
          className="steps"
        >
          <h1>{sixSteps[0].title}</h1>
          <img src={sixSteps[0].img} alt="" />
          <p>{sixSteps[0].desc}</p>
        </div>
        <div
          data-aos="zoom-in-down"
          data-aos-offset="300"
          data-aos-duration="500"
          className="steps"
        >
          <h1>{sixSteps[1].title}</h1>
          <img src={sixSteps[1].img} alt="" />
          <p>{sixSteps[1].desc}</p>
        </div>
        <div
          data-aos="zoom-in-down"
          data-aos-offset="300"
          data-aos-duration="500"
          className="steps"
        >
          <h1>{sixSteps[2].title}</h1>
          <img src={sixSteps[2].img} alt="" />
          <p>{sixSteps[2].desc}</p>
        </div>
        <div
          data-aos="zoom-in-down"
          data-aos-offset="300"
          data-aos-duration="500"
          className="steps"
        >
          <h1>{sixSteps[3].title}</h1>
          <img src={sixSteps[3].img} alt="" />
          <p>{sixSteps[3].desc}</p>
        </div>
        <div
          data-aos="zoom-in-down"
          data-aos-offset="300"
          data-aos-duration="500"
          className="steps"
        >
          <h1>{sixSteps[4].title}</h1>
          <img src={sixSteps[4].img} alt="" />
          <p>{sixSteps[4].desc}</p>
        </div>
        <div
          data-aos="zoom-in-down"
          data-aos-offset="300"
          data-aos-duration="500"
          className="steps"
        >
          <h1>{sixSteps[5].title}</h1>
          <img src={sixSteps[5].img} alt="" />
          <p>{sixSteps[5].desc}</p>
        </div>
      </div>
    </div>
  );
};

export default SixSteps;

/* {sixSteps.map((step, index) => {
      const fadeAni = index % 2 ? "fade-right" : "fade-left";
      return (
        <div
          data-aos={fadeAni}
          data-aos-offset="200"
          className="steps"
          key={index}
        >
          <h1>{step.title}</h1>
          <img src={step.img} alt="" />
          <p>{step.desc}</p>
        </div>
      );
    })} */
