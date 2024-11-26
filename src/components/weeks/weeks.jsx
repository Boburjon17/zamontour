import React, { useRef } from 'react'
import "./weeks.scss"
import { useTranslation } from 'react-i18next'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/cs ms/autoplay';
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
      slidesPerView={3}
        spaceBetween={30}
        centeredSlides={false}
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
            <div className="weeks-page-left">
              <img src="https://zamontour.uz/assets/images/usa1.jpg" alt="" />
            </div>
            <div className="weeks-page-right">
              <div className="weeks-city">
              <h1>{t("weeks.aqsh")}</h1>
              <h2>$700</h2>
              </div>
              <div className="weeks-order">
              <span><i className="fa-solid fa-people-group"></i>
              <h3>{t("weeks.buyurtmalar")}</h3>
              </span>
              <p>/{t("weeks.kishi")}</p>
              
              </div>
              <hr />
              <div className="weeks-includes">
                <h1>{t("weeks.tur ichi")}</h1>
                <ul>
                  <li><i className="fa-solid fa-taxi"></i> 5 {t("weeks.kunlik sayohat")}&gt; {t("weeks.mehmonxona")} </li>
                  <li><i className="fa-solid fa-plane"></i>{t("weeks.aviabilet")}</li>
                  <li><i className="fa-solid fa-building"></i>{t("weeks.eng yaxshi manzillar")}</li>
                </ul>

                <a href="#"><button>{t("weeks.joy band")}</button></a>
              </div>
              
            </div>
          </div>

        </SwiperSlide>

        <SwiperSlide> 
          <div className="weeks-page">
            <div className="weeks-page-left">
              <img src="https://zamontour.uz/assets/images/eng.jpg" alt="" /></div>
            <div className="weeks-page-right">
              <div className="weeks-city">
              <h1>{t("weeks.angliya")}</h1>
              <h2>$700</h2>
              </div>
              <div className="weeks-order">
              <span><i className="fa-solid fa-people-group"></i>
              <h3>{t("weeks.buyurtmalar")}</h3>
              </span>
              <p>/{t("weeks.kishi")}</p>
              
              </div>
              <hr />
              <div className="weeks-includes">
                <h1>{t("weeks.tur ichi")}</h1>
                <ul>
                  <li><i className="fa-solid fa-taxi"></i> 5 {t("weeks.kunlik sayohat")}&gt; {t("weeks.mehmonxona")} </li>
                  <li><i className="fa-solid fa-plane"></i>{t("weeks.aviabilet")}</li>
                  <li><i className="fa-solid fa-building"></i>{t("weeks.eng yaxshi manzillar")}</li>
                </ul>

                <a href="#"><button>{t("weeks.joy band")}</button></a>
              </div>
              
            </div>
          </div>

        </SwiperSlide>


        <SwiperSlide> 
          <div className="weeks-page">
            <div className="weeks-page-left">
              <img src="https://zamontour.uz/assets/images/cand.jpg" alt="" />
            </div>
            <div className="weeks-page-right">
              <div className="weeks-city">
              <h1>{t("weeks.kanada")}</h1>
              <h2>$700</h2>
              </div>
              <div className="weeks-order">
              <span><i className="fa-solid fa-people-group"></i>
              <h3>{t("weeks.buyurtmalar")}</h3>
              </span>
              <p>/{t("weeks.kishi")}</p>
              
              </div>
              <hr />
              <div className="weeks-includes">
                <h1>{t("weeks.tur ichi")}</h1>
                <ul>
                  <li><i className="fa-solid fa-taxi"></i> 5 {t("weeks.kunlik sayohat")}&gt; {t("weeks.mehmonxona")} </li>
                  <li><i className="fa-solid fa-plane"></i>{t("weeks.aviabilet")}</li>
                  <li><i className="fa-solid fa-building"></i>{t("weeks.eng yaxshi manzillar")}</li>
                </ul>

                <a href="#"><button>{t("weeks.joy band")}</button></a>
              </div>
              
            </div>
          </div>

        </SwiperSlide>


        <SwiperSlide> 
          <div className="weeks-page">
            <div className="weeks-page-left">
              <img src="https://zamontour.uz/assets/images/europe2.jpg" alt="" />
            </div>
            <div className="weeks-page-right">
              <div className="weeks-city">
              <h1>{t("weeks.yevropa")}</h1>
              <h2>$700</h2>
              </div>
              <div className="weeks-order">
              <span><i className="fa-solid fa-people-group"></i>
              <h3>{t("weeks.buyurtmalar")}</h3>
              </span>
              <p>/{t("weeks.kishi")}</p>
              
              </div>
              <hr />
              <div className="weeks-includes">
                <h1>{t("weeks.tur ichi")}</h1>
                <ul>
                  <li><i className="fa-solid fa-taxi"></i> 5 {t("weeks.kunlik sayohat")}&gt; {t("weeks.mehmonxona")} </li>
                  <li><i className="fa-solid fa-plane"></i>{t("weeks.aviabilet")}</li>
                  <li><i className="fa-solid fa-building"></i>{t("weeks.eng yaxshi manzillar")}</li>
                </ul>

                <a href="#"><button>{t("weeks.joy band")}</button></a>
              </div>
              
            </div>
          </div>

        </SwiperSlide>



        <SwiperSlide> 
          <div className="weeks-page">
            <div className="weeks-page-left">
              <img src="https://zamontour.uz/assets/images/deals-04.jpg" alt="" />
            </div>
            <div className="weeks-page-right">
              <div className="weeks-city">
              <h1>{t("intro.istanbul")}</h1>
              <h2>$700</h2>
              </div>
              <div className="weeks-order">
              <span><i className="fa-solid fa-people-group"></i>
              <h3>{t("weeks.buyurtmalar")}</h3>
              </span>
              <p>/{t("weeks.kishi")}</p>
              
              </div>
              <hr />
              <div className="weeks-includes">
                <h1>{t("weeks.tur ichi")}</h1>
                <ul>
                  <li><i className="fa-solid fa-taxi"></i> 5 {t("weeks.kunlik sayohat")}&gt; {t("weeks.mehmonxona")} </li>
                  <li><i className="fa-solid fa-plane"></i>{t("weeks.aviabilet")}</li>
                  <li><i className="fa-solid fa-building"></i>{t("weeks.eng yaxshi manzillar")}</li>
                </ul>

                <a href="#"><button>{t("weeks.joy band")}</button></a>
              </div>
              
            </div>
          </div>

        </SwiperSlide>



        <SwiperSlide> 
          <div className="weeks-page">
            <div className="weeks-page-left">
              <img src="https://zamontour.uz/assets/images/offers-02.jpg" alt="" />
            </div>
            <div className="weeks-page-right">
              <div className="weeks-city">
              <h1>{t("intro.dubai")}</h1>
              <h2>$700</h2>
              </div>
              <div className="weeks-order">
              <span><i className="fa-solid fa-people-group"></i>
              <h3>{t("weeks.buyurtmalar")}</h3>
              </span>
              <p>/{t("weeks.kishi")}</p>
              
              </div>
              <hr />
              <div className="weeks-includes">
                <h1>{t("weeks.tur ichi")}</h1>
                <ul>
                  <li><i className="fa-solid fa-taxi"></i> 5 {t("weeks.kunlik sayohat")}&gt; {t("weeks.mehmonxona")} </li>
                  <li><i className="fa-solid fa-plane"></i>{t("weeks.aviabilet")}</li>
                  <li><i className="fa-solid fa-building"></i>{t("weeks.eng yaxshi manzillar")}</li>
                </ul>

                <a href="#"><button>{t("weeks.joy band")}</button></a>
              </div>
              
            </div>
          </div>

        </SwiperSlide>



        <SwiperSlide> 
          <div className="weeks-page">
            <div className="weeks-page-left">
              <img src="https://zamontour.uz/assets/images/deals-01.jpg" alt="" />
            </div>
            <div className="weeks-page-right">
              <div className="weeks-city">
              <h1>{t("intro.antaliya")}</h1>
              <h2>$700</h2>
              </div>
              <div className="weeks-order">
              <span><i className="fa-solid fa-people-group"></i>
              <h3>{t("weeks.buyurtmalar")}</h3>
              </span>
              <p>/{t("weeks.kishi")}</p>
              
              </div>
              <hr />
              <div className="weeks-includes">
                <h1>{t("weeks.tur ichi")}</h1>
                <ul>
                  <li><i className="fa-solid fa-taxi"></i> 5 {t("weeks.kunlik sayohat")}&gt; {t("weeks.mehmonxona")} </li>
                  <li><i className="fa-solid fa-plane"></i>{t("weeks.aviabilet")}</li>
                  <li><i className="fa-solid fa-building"></i>{t("weeks.eng yaxshi manzillar")}</li>
                </ul>

                <a href="#"><button>{t("weeks.joy band")}</button></a>
              </div>
              
            </div>
          </div>

        </SwiperSlide>



        <SwiperSlide> 
          <div className="weeks-page">
            <div className="weeks-page-left">
              <img src="https://zamontour.uz/assets/images/offers-01.jpg" alt="" />
            </div>
            <div className="weeks-page-right">
              <div className="weeks-city">
              <h1>{t("intro.Sharm El-Sheikh")}</h1>
              <h2>$700</h2>
              </div>
              <div className="weeks-order">
              <span><i className="fa-solid fa-people-group"></i>
              <h3>{t("weeks.buyurtmalar")}</h3>
              </span>
              <p>/{t("weeks.kishi")}</p>
              
              </div>
              <hr />
              <div className="weeks-includes">
                <h1>{t("weeks.tur ichi")}</h1>
                <ul>
                  <li><i className="fa-solid fa-taxi"></i> 5 {t("weeks.kunlik sayohat")}&gt; {t("weeks.mehmonxona")} </li>
                  <li><i className="fa-solid fa-plane"></i>{t("weeks.aviabilet")}</li>
                  <li><i className="fa-solid fa-building"></i>{t("weeks.eng yaxshi manzillar")}</li>
                </ul>

                <a href="#"><button>{t("weeks.joy band")}</button></a>
              </div>
              
            </div>
          </div>

        </SwiperSlide>



        
               




       
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