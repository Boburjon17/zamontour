import React, { useRef } from 'react'
import "./visa.scss"
import { useTranslation } from 'react-i18next'
// import { Autoplay, Pagination, Navigation } from 'swiper';

// import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Visa = () => {
  const {t, i18n} = useTranslation()
 

  

  
  return (
    <div className='visa-container'>
      <div className="visa">
        <h4>{t("visa.viza olish")}</h4>
        <h6>{t("visa.biz sizga oson")}</h6>

       

        
      <Swiper
         breakpoints={{
          slidesPerView:1,
          spaceBetween:10,
          320:{
            slidesPerView:1,
            spaceBetween:10
           
          },
          481:{
            slidesPerView:1,
            spaceBetween:10
           
          },
          769:{
            slidesPerView:2,
            spaceBetween:30
           
          },
          1025:{
            slidesPerView:3,
            spaceBetween:30
           
          },
          1201:{
            slidesPerView:3,
            spaceBetween:30
           
          }
        }}
        centeredSlides={false}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        pagination={{
          clickable: false,
        }}
        navigation={{
          nextEl: '.visa-right-next',
          prevEl: '.visa-left-next',
        }}
      
        className="mySwiper"
      >
        <SwiperSlide> 
          <div className="visa-page">
            <div className="visa-page-left">
              <img src="https://zamontour.uz/assets/images/china.jpg" alt="" />
            </div>
            <div className="visa-page-right">
              <div className="visa-city">
              <h1>{t("visa.xitoy")}</h1>
            
              </div>
              <div className="visa-order">
              <i className="fa-solid fa-people-group"></i>
              <h3>300 {t("visa.royxat")}</h3>
              </div>
              <hr />
              <div className="visa-includes">
                <h1>{t("visa.bizning xizmat")}</h1>
                <ul>
                  <li><i className="fa-solid fa-tags"></i> 5 {t("visa.eng arzon")} </li>
                  <li><i className="fa-solid fa-clock"></i>{t("visa.tezkor")}</li>
                  <li><i className="fa-solid fa-check"></i>{t("visa.ishonch")}</li>
                </ul>

                <a href="#contact"><button>{t("weeks.joy band")}</button></a>
              </div>
              
            </div>
          </div>

        </SwiperSlide>

        <SwiperSlide> 
          <div className="visa-page">
            <div className="visa-page-left">
              <img src="https://zamontour.uz/assets/images/hongkong.jpg" alt="" />
            </div>
            <div className="visa-page-right">
              <div className="visa-city">
              <h1>{t("visa.xong kong")}</h1>
            
              </div>
              <div className="visa-order">
              <i className="fa-solid fa-people-group"></i>
              <h3>300 {t("visa.royxat")}</h3>
              </div>
              <hr />
              <div className="visa-includes">
                <h1>{t("visa.bizning xizmat")}</h1>
                <ul>
                  <li><i className="fa-solid fa-tags"></i> 5 {t("visa.eng arzon")} </li>
                  <li><i className="fa-solid fa-clock"></i>{t("visa.tezkor")}</li>
                  <li><i className="fa-solid fa-check"></i>{t("visa.ishonch")}</li>
                </ul>

                <a href="#contact"><button>{t("weeks.joy band")}</button></a>
              </div>
              
            </div>
          </div>

        </SwiperSlide>

        <SwiperSlide> 
          <div className="visa-page">
            <div className="visa-page-left">
              <img src="https://zamontour.uz/assets/images/europe.jpeg" alt="" />
            </div>
            <div className="visa-page-right">
              <div className="visa-city">
              <h1>{t("visa.yevropa")}</h1>
            
              </div>
              <div className="visa-order">
              <i className="fa-solid fa-people-group"></i>
              <h3>300 {t("visa.royxat")}</h3>
              </div>
              <hr />
              <div className="visa-includes">
                <h1>{t("visa.bizning xizmat")}</h1>
                <ul>
                  <li><i className="fa-solid fa-tags"></i> 5 {t("visa.eng arzon")} </li>
                  <li><i className="fa-solid fa-clock"></i>{t("visa.tezkor")}</li>
                  <li><i className="fa-solid fa-check"></i>{t("visa.ishonch")}</li>
                </ul>

                <a href="#contact"><button>{t("weeks.joy band")}</button></a>
              </div>
              
            </div>
          </div>

        </SwiperSlide>



        <SwiperSlide> 
          <div className="visa-page">
            <div className="visa-page-left">
              <img src="https://zamontour.uz/assets/images/india.jpg" alt="" />
            </div>
            <div className="visa-page-right">
              <div className="visa-city">
              <h1>{t("visa.hindiston")}</h1>
            
              </div>
              <div className="visa-order">
              <i className="fa-solid fa-people-group"></i>
              <h3>300 {t("visa.royxat")}</h3>
              </div>
              <hr />
              <div className="visa-includes">
                <h1>{t("visa.bizning xizmat")}</h1>
                <ul>
                  <li><i className="fa-solid fa-tags"></i> 5 {t("visa.eng arzon")} </li>
                  <li><i className="fa-solid fa-clock"></i>{t("visa.tezkor")}</li>
                  <li><i className="fa-solid fa-check"></i>{t("visa.ishonch")}</li>
                </ul>

                <a href="#contact"><button>{t("weeks.joy band")}</button></a>
              </div>
              
            </div>
          </div>

        </SwiperSlide>



        <SwiperSlide> 
          <div className="visa-page">
            <div className="visa-page-left">
              <img src="https://zamontour.uz/assets/images/japan.jpg" alt="" />
            </div>
            <div className="visa-page-right">
              <div className="visa-city">
              <h1>{t("visa.yaponiya")}</h1>
            
              </div>
              <div className="visa-order">
              <i className="fa-solid fa-people-group"></i>
              <h3>300 {t("visa.royxat")}</h3>
              </div>
              <hr />
              <div className="visa-includes">
                <h1>{t("visa.bizning xizmat")}</h1>
                <ul>
                  <li><i className="fa-solid fa-tags"></i> 5 {t("visa.eng arzon")} </li>
                  <li><i className="fa-solid fa-clock"></i>{t("visa.tezkor")}</li>
                  <li><i className="fa-solid fa-check"></i>{t("visa.ishonch")}</li>
                </ul>

                <a href="#contact"><button>{t("weeks.joy band")}</button></a>
              </div>
              
            </div>
          </div>

        </SwiperSlide>



        <SwiperSlide> 
          <div className="visa-page">
            <div className="visa-page-left">
              <img src="https://zamontour.uz/assets/images/saudi.jpg" alt="" />
            </div>
            <div className="visa-page-right">
              <div className="visa-city">
              <h1>{t("visa.saudiya arabistoni")}</h1>
            
              </div>
              <div className="visa-order">
              <i className="fa-solid fa-people-group"></i>
              <h3>300 {t("visa.royxat")}</h3>
              </div>
              <hr />
              <div className="visa-includes">
                <h1>{t("visa.bizning xizmat")}</h1>
                <ul>
                  <li><i className="fa-solid fa-tags"></i> 5 {t("visa.eng arzon")} </li>
                  <li><i className="fa-solid fa-clock"></i>{t("visa.tezkor")}</li>
                  <li><i className="fa-solid fa-check"></i>{t("visa.ishonch")}</li>
                </ul>

                <a href="#contact"><button>{t("weeks.joy band")}</button></a>
              </div>
              
            </div>
          </div>

        </SwiperSlide>



        <SwiperSlide> 
          <div className="visa-page">
            <div className="visa-page-left">
              <img src="https://zamontour.uz/assets/images/oman.jpg" alt="" />
            </div>
            <div className="visa-page-right">
              <div className="visa-city">
              <h1>{t("visa.omon")}</h1>
            
              </div>
              <div className="visa-order">
              <i className="fa-solid fa-people-group"></i>
              <h3>300 {t("visa.royxat")}</h3>
              </div>
              <hr />
              <div className="visa-includes">
                <h1>{t("visa.bizning xizmat")}</h1>
                <ul>
                  <li><i className="fa-solid fa-tags"></i> 5 {t("visa.eng arzon")}   </li>
                  <li><i className="fa-solid fa-clock"></i>{t("visa.tezkor")}</li>
                  <li><i className="fa-solid fa-check"></i>{t("visa.ishonch")}</li>
                </ul>

                <a href="#contact"><button>{t("weeks.joy band")}</button></a>
              </div>
              
            </div>
          </div>

        </SwiperSlide>

        
        
               




       
        <div className="autoplay-progress" slot="container-end">
         
          {/* <span ref={progressContent}></span> */}
        </div>
      </Swiper>

      
        


        
        <div   className="visa-pagination">
        <div className="visa-left-next"><i className="fa-solid fa-arrow-left"></i></div>
        <div  className="visa-right-next"><i className="fa-solid fa-arrow-right"></i></div>
        
          </div> 
         
      </div>
      <hr />
    </div>
  )
}

export default Visa