import React, { useRef } from 'react'
import "./weeks.scss"
import { useTranslation } from 'react-i18next'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Weeks = () => {
  const {t, i18n} = useTranslation()

  

  
  return (
    <div className='weeks-container'>
      <div className="weeks">
        <h1>{t("weeks.Eng yaxshi haftalik takliflarimiz")}</h1>
        <p>{t("weeks.har bir shahar")}</p>

        <div className="weeks-slide">

        <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        modules={[Autoplay, Pagination, Navigation]}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
      
        className="mySwiper"
      >
        <SwiperSlide> 
          <div className="weeks-page">
            <div className="weeks-page-left"></div>
            <div className="weeks-page-right">
              <div className="weeks-page-right-top"></div>

            </div>
          </div>

        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
         
          {/* <span ref={progressContent}></span> */}
        </div>
      </Swiper>
    </>


        </div>
      </div>
    </div>
  )
}

export default Weeks