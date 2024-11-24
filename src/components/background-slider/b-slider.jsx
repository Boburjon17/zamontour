import  { useTranslation } from 'react-i18next'

import './b-slider.scss'
// Import Swiper React components


// Import Swiper styles
import 'swiper/css';
import { useEffect, useState } from 'react';
;
const Bslider = () => {
   const {t, i18n}= useTranslation()
 
  
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const backgrounds = [
    'url("src/assets/images/b-slider.jfif")',
    'url("src/assets/images/b-slider2.jfif")',
    'url("src/assets/images/b-slider3.jfif")',
    'url("src/assets/images/b-slider4.jfif")',

  ];
  const data = [
    {
      name: t('intro.dubai'),
      population: '67.41M',
      area: '551.500 km²',
      price: '$425.600',
    },
    {
      name: t('intro.Sharm El-Sheikh'),
      population: '73,000',
      area: '480 km²',
      price: '$120,000',
    },
    {
      name: t('intro.istanbul'),
      population: '15.8M',
      area: '5,343 km²',
      price: '$350,000',
    },
    {
      name: t('intro.antaliya'),
      population: '1.5M',
      area: '20,723 km²',
      price: '$280,000',
    },
  ];

  
  
  
  

  // Orqa fon va ma'lumotlarni bir vaqtda o'zgartirish

  useEffect ( () => {
    const intervalId = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
      setTextIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000); // 5 soniyada bir o'zgarish

    return () => clearInterval(intervalId); // Component unmount bo'lganda intervalni to'xtatish
  }, []);

  return (
    <div className="app">
      <div
        className="background"
        style={{ backgroundImage: backgrounds[backgroundIndex] }}
      ></div>
      <div className="content">
        <div className="intro-slider">
          <div className="intro-top">
            <h2>{t("intro.siz yoqtirib qolishingiz aniq bo'lgan shahar")}:</h2>
            <h1>{data[backgroundIndex].name}</h1>
            <a href="#">
              <button>{t('intro.borishni xohlaysizmi')}</button>
            </a>
          </div>

          <div className="intro-bottom">
            <div className="intro-bottom-left">
              <div className="intro-card">
                <div className="intro-img">
                  <i className="fa-solid fa-user"></i>
                </div>
                <div className="intro-text">
                  <p>{t('intro.aholisi')}:</p>
                  <h3>{data[backgroundIndex].population}</h3>
                </div>
              </div>

              <div className="intro-card">
                <div className="intro-img">
                  <i className="fa-solid fa-globe"></i>
                </div>
                <div className="intro-text">
                  <p>{t('intro.hududi')}:</p>
                  <h3>{data[backgroundIndex].area}</h3>
                </div>
              </div>

              <div className="intro-card">
                <div className="intro-img">
                  <i className="fa-solid fa-house"></i>
                </div>
                <div className="intro-text">
                  <p>{t("intro.o'rtacha narx")}:</p>
                  <h3>{data[backgroundIndex].price}</h3>
                </div>
              </div>
            </div>
            <div className="intro-bottom-right">
              <a href="#">
                <button>{t("intro.ko'proq bilish")}</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bslider;