import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import SliderImage11 from "../images/sliderImage11.png";
import SliderImage2 from "../images/sliderImage2.jpeg";
import SliderImage3 from "../images/sliderImage3.jpeg";
import SliderImage4 from "../images/sliderImage4.jpeg";
import SliderImage5 from "../images/sliderImage5.jpeg";
import SliderImage6 from "../images/sliderImage6.jpeg";

const Slider = () => {
  const images = [
    SliderImage11,
    SliderImage2,
    SliderImage3,
    SliderImage4,
    SliderImage5,
    SliderImage6,
  ];

  return (
    <div className="slider-container">
      <h1 className="sectionTitle">Gallery</h1>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        grabCursor={true}
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={image} alt="" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
