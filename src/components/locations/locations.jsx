import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";
import "./locations.scss";

const Locations = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "1",
    "2",
    "3",
    "4"
  ];

  const handleSlideClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="l-container">
      <div className="locations">
        <h1>{t("locations.eng manzillar")}</h1>
        <p>{t("locations.har bir locations")}</p>

        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          centeredSlides={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Slide ${index}`}
                className={`slide-image ${
                  index === activeIndex ? "active" : ""
                }`}
                onClick={() => handleSlideClick(index)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Locations;
