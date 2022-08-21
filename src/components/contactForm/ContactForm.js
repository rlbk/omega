import "./ContactForm.css";
import { useState, useRef } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const form = useRef();

  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
  });

  const handleForm = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  //SEND DATA TO EMAIL
  const sendToEmail = (e) => {
    e.preventDefault();

    const { name, email, number } = user;

    if (name.length === 0 || email.length === 0 || number.length === 0) {
      window.alert("Make sure to fill all the fields before submitting");
      return;
    } else {
      emailjs
        .sendForm(
          "service_gpgnich",
          "template_mlzkszc",
          form.current,
          "jqApy5qIqJnjB0eSJ"
        )
        .then((res) => {
          window.alert("Subscribed!!");
          setUser({ name: "", email: "", number: "" });
        })
        .catch((err) => window.alert(err));
    }
  };

  //SEND DATA TO BACKEND
  /*  const submitHandler = async (e) => {
    e.preventDefault();

    const { name, email, number } = user;

    try {
      if (name.length === 0 || email.length === 0 || number.length === 0) {
        window.alert("Make sure to fill all the fields before submitting");
        return;
      }

      const res = await fetch("/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, number, email }),
      });

      if (res.status === 400) {
        window.alert("Please fill all the fields");
      } else {
        setUser({ name: "", email: "", number: "" });
        window.alert("Subscribed!!");
      }
    } catch (error) {
      console.log(error);
    }
  }; */
  /* 
  const api = (data) => {
    return fetch(``, {
      method: "POST",
      body: data,
    });
  }; */

  return (
    <div className="contact-form">
      <div className="cf-left">
        <div className="cf-title">Get Updated</div>
        <span>Provide us with your details. We will contact you.</span>
      </div>
      <div className="cf-right">
        <form onSubmit={sendToEmail} method="POST" ref={form}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="con-i"
            onChange={handleForm}
            value={user.name}
          />
          <input
            type="number"
            name="number"
            placeholder="Phone Number"
            className="con-i"
            onChange={handleForm}
            value={user.number}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="con-i"
            onChange={handleForm}
            value={user.email}
          />
          <button type="submit" className="s-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
