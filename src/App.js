import Intro from "./components/intro/Intro";

import "./App.css";
import PenNepal from "./components/penNepal/PenNepal";
import AboutUs from "./components/aboutUs/AboutUs";
import Slider from "./components/slider/Slider";
import Destinations from "./components/destinations/Destinations";
import ProgHl from "./components/progHL/ProgHl";
import SixSteps from "./components/sixSteps/SixSteps";
import Faq from "./components/faq/Faq";
import GoogleMap from "./components/googleMap/GoogleMap";
import ContactForm from "./components/contactForm/ContactForm";
import Footer from "./components/footer/Footer";
import Application from "./components/applicationForm/Application";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/application" element={<Application />} />
    </Routes>
  );
}

function HomePage() {
  return (
    <div className="App">
      <Intro />
      <PenNepal />
      <AboutUs />
      <Destinations />
      <ProgHl />
      <SixSteps />
      <Slider />
      <Faq />
      <GoogleMap />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
