import { useState, useRef } from "react";
import emailjs from "emailjs-com";

import "./Application.css";
import AppImage from "../images/appImage.jpeg";
import MainLogoFooter from "../images/mainLogoFooter.png";
import CvUpload from "../images/cvUpload.png";
import Typical from "react-typical";
// import axios from "axios";

const Application = () => {
  const form = useRef();
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    dob: "",
    number: "",
    qualification: "",
    cv: null,
  });

  const inputHandler = (e) => {
    const name = e.target.name;
    const value = name === "cv" ? e.target.files[0] : e.target.value;

    setData({ ...data, [name]: value });
  };

  //SEND TO EMAIL
  const sendToEmail = (e) => {
    e.preventDefault();

    const { fname, lname, email, dob, number, qualification } = data;

    if (
      fname.length === 0 ||
      lname.length === 0 ||
      email.length === 0 ||
      dob.length === 0 ||
      number.length === 0 ||
      qualification.length === 0
    ) {
      window.alert("Please fill all the fields");
      return;
    } else {
      emailjs
        .sendForm(
          "service_juo2vsv",
          "template_per7pha",
          form.current,
          "jqApy5qIqJnjB0eSJ"
        )
        .then((res) => {
          window.alert("Registered Sucess");
          setData({ name: "", email: "", number: "" });
        })
        .catch((err) => window.alert(err));
    }
  };

  //SEND DATA TO BACKEND
  /*  const handleSubmit = async (e) => {
    e.preventDefault();

      // await axios
      // .post("/register", formData, {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // })
      // .then((e) => window.alert("sucess"))
      // .catch((e) => console.log(e));
 
    const { fname, lname, email, dob, number, qualification, cv } = data;

    try {
      if (
        fname.length === 0 ||
        lname.length === 0 ||
        email.length === 0 ||
        dob.length === 0 ||
        number.length === 0 ||
        qualification.length === 0
      ) {
        window.alert("Please fill all the fields");
        return;
      }

      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // "Content-Type": "multipart/form-data",
        },
        // body: formData,
        body: JSON.stringify({
          fname,
          lname,
          email,
          dob,
          number,
          qualification,
        }),
      });

      if (res.status === 400 || !res) {
        window.alert("Something is wrong!");
      } else {
        setData({
          fname: "",
          lname: "",
          email: "",
          dob: "",
          number: "",
          qualification: "",
        });
        window.alert("Sucessfully Registered!!!");
      }
    } catch (error) {
      console.log(error);
    }
  }; */

  return (
    <div className="a-wrapper">
      <div className="a-left">
        <img src={AppImage} alt="" />
      </div>
      <div className="a-right">
        <div className="a-rightParent">
          <div className="a-mainLogo">
            <a href="/">
              <img src={MainLogoFooter} alt="" />
            </a>
          </div>
          <h1 className="sectionTitle">
            <Typical loop={Infinity} steps={["Application Form", 1000]} />
          </h1>
          <div className="appForm-wrapper">
            <form onSubmit={sendToEmail} method="POST" ref={form}>
              <div className="input-sec">
                <label htmlFor="fname">First Name</label>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  placeholder="John"
                  className="app-i"
                  onChange={inputHandler}
                  value={data.fname}
                />
              </div>
              <div className="input-sec">
                <label htmlFor="lname">Last Name</label>
                <input
                  type="text"
                  name="lname"
                  id="lname"
                  placeholder="Smith"
                  className="app-i"
                  onChange={inputHandler}
                  value={data.lname}
                />
              </div>
              <div className="input-sec">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@mail.com"
                  className="app-i"
                  onChange={inputHandler}
                  value={data.email}
                />
              </div>
              <div className="input-sec">
                <label htmlFor="dop">Date Of Birth</label>
                <input
                  type="date"
                  name="dob"
                  id="dop"
                  className="app-i"
                  onChange={inputHandler}
                  value={data.dob}
                />
              </div>
              <div className="input-sec">
                <label htmlFor="cnum">Phone Number</label>
                <input
                  type="text"
                  name="number"
                  id="cnum"
                  className="app-i"
                  onChange={inputHandler}
                  value={data.number}
                />
              </div>
              <div className="input-sec">
                <label htmlFor="qualification">Qualification</label>
                <input
                  type="text"
                  name="qualification"
                  id="qualification"
                  className="app-i"
                  onChange={inputHandler}
                  value={data.qualification}
                />
              </div>
              <div className="upload-wrapper">
                <div className="upload-parent">
                  <div>
                    <img src={CvUpload} alt="upload your cv" />
                  </div>
                  <div className="upload-txt">
                    <a href="mailto:info@pennepal.com">
                      <p>Upload Your CV </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="a-btn-wrapper">
                <div className="a-btn">
                  <button type="submit">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
