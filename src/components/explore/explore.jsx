import React from 'react'
import "./explore.scss"
import { useTranslation } from 'react-i18next'

const Explore = () => {
    const {t, i18n}= useTranslation()
    

  return (
    <div className='explore-container'>
        <div className="explore" id='about'>
            <h1>{t('explore.chipta')}</h1>
            <h6>{t("explore.har bir shahar")}</h6>
            <div className="explore-realway">
                <div className="explore-realway-img">
                    <img src="/images/explore-railway.jpg" alt="" />
                </div>
                <div className="explore-realway-text">
                    <div className="text-title">
                        <div className="text-subtitle">
                        <h2>{t("explore.temir yol")}</h2>
                        <p>{t("explore.butu")}</p>
                            
                        </div>
                        <a href="#contact"><button>{t("explore.koproq")}</button></a>
                 
                    </div>
                    <p>{t("explore.yol orqali")}</p>
                   
                   
                </div>
                
            </div>

            <hr />
            <div className="explore-air">
                <div className="explore-air-img">
                    <img src="/images/explore-air.jpg" alt="" />
                </div>
                <div className="explore-air-text">
                    <div className="air-text-small">
                        <div className="air-subtitle">
                            <h2>{t("explore.aviabiletlar biz bilan")}</h2>
                            <p>{t("explore.jahon boylab")}</p>
                        </div>

                        <a href="#contact"><button>{t("explore.koproq")}</button></a>

                    </div>
                    <p>{t("explore.eng arzon qulay")}</p>
                </div>

            </div>
            <hr />
        </div>
    </div>
  )
}

export default Explore