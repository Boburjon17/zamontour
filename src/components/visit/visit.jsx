import React from 'react'
import { useTranslation } from 'react-i18next'
import "./visit.scss"

const Visit = () => {
  const {t, i18n} = useTranslation()
  return (
    <div className='visit-container'>
      <div className="visit" id='visit'>
        <h1>{t("visit.shaharlardan")}</h1>
        <h6>{t("visit.har bir visit")}</h6>

        <div className="visit-page">
          <div className="visit-page-img">
            <img src="/images/visit-dubai.jpg" alt="" />
          </div>
          <div className="visit-page-text">
            <div className="text-title">
              <div className="text-subtitle">
                <h2>{t("intro.dubai")}</h2>
                <h5>{t("visit.baa")}</h5>
              </div>
              <a href="#contact"><button>{t("explore.koproq")}</button></a>
            </div>
            <p>{t("visit.dubai about")}</p>

           
            <div className="visit-directions">
            <hr />
              <ul>
                <li><i className="fa-solid fa-user"></i>8.86mln {t("weeks.kishi")}</li>
                <li><i className="fa-solid fa-globe"></i>41.290km2</li>
                <li><i className="fa-solid fa-house-chimney"></i>$1.100.200</li>
              </ul>
              <hr />
              
              <a href="#">{t("visit.qiziqarlimi")}<i className="fa-solid fa-arrow-right"></i></a>
            </div>
            
          </div>
        </div>
        <hr className='hr-big' />

        <div className="visit-page">
          <div className="visit-page-img">
            <img src="/images/visit-antalya.jpg" alt="" />
          </div>
          <div className="visit-page-text">
            <div className="text-title">
              <div className="text-subtitle">
                <h2>{t("intro.antaliya")}</h2>
                <h5>{t("visit.turkiya")}</h5>
              </div>
              <a href="#contact"><button>{t("explore.koproq")}</button></a>
            </div>
            <p>{t("visit.antalya about")}</p>

           
            <div className="visit-directions">
            <hr />
              <ul>
                <li><i className="fa-solid fa-user"></i>44.48mln {t("weeks.kishi")}</li>
                <li><i className="fa-solid fa-globe"></i>275.400km2</li>
                <li><i className="fa-solid fa-house-chimney"></i>$946.000</li>
              </ul>
              <hr />
              
              <a href="#">{t("visit.qiziqarlimi")}<i className="fa-solid fa-arrow-right"></i></a>
            </div>
            
          </div>
        </div>

    <hr  className='hr-big'/>

        <div className="visit-page">
          <div className="visit-page-img">
            <img src="/images/visit-sharm.jpg" alt="" />
          </div>
          <div className="visit-page-text">
            <div className="text-title">
              <div className="text-subtitle">
                <h2>{t("intro.Sharm El-Sheikh")}</h2>
                <h5>{t("visit.misr")}</h5>
              </div>
              <a href="#contact"><button>{t("explore.koproq")}</button></a>
            </div>
            <p>{t("visit.misr about")}</p>

           
            <div className="visit-directions">
            <hr />
              <ul>
                <li><i className="fa-solid fa-user"></i>67.41mln {t("weeks.kishi")}</li>
                <li><i className="fa-solid fa-globe"></i>551.500 km2</li>
                <li><i className="fa-solid fa-house-chimney"></i>$425.600</li>
              </ul>
              <hr />
              
              <a href="#">{t("visit.qiziqarlimi")}<i className="fa-solid fa-arrow-right"></i></a>
            </div>
            
          </div>
        </div>

          <hr className='hr-big' />


        <div className="visit-page">
          <div className="visit-page-img">
            <img src="/images/visit-istanbul.jpg" alt="" />
          </div>
          <div className="visit-page-text">
            <div className="text-title">
              <div className="text-subtitle">
                <h2>{t("intro.istanbul")}</h2>
                <h5>{t("visit.turkiya")}</h5>
              </div>
              <a href="#contact"><button>{t("explore.koproq")}</button></a>
            </div>
            <p>{t("visit.istanbul about")}</p>

           
            <div className="visit-directions">
            <hr />
              <ul>
                <li><i className="fa-solid fa-user"></i>8.86mln {t("weeks.kishi")}</li>
                <li><i className="fa-solid fa-globe"></i>41.290km2</li>
                <li><i className="fa-solid fa-house-chimney"></i>$1.100.200</li>
              </ul>
              <hr />
              
              <a href="#">{t("visit.qiziqarlimi")}<i className="fa-solid fa-arrow-right"></i></a>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Visit