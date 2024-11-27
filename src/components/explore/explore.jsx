import React from 'react'
import "./explore.scss"
import { useTranslation } from 'react-i18next'

const Explore = () => {
    const {t, i18n}= useTranslation()
  return (
    <div className='explore-container'>
        <div className="explore">
            <h1>{t('explore.chipta')}</h1>
            <h6>{t("explore.har bir shahar")}</h6>
            <div className="explore-realway">
                <div className="explore-realway-img">
                    <img src="https://zamontour.uz/assets/images/afr.jpg" alt="" />
                </div>
                <div className="explore-realway-text">
                    <div className="text-title">
                        <div className="text-subtitle">
                        <h2>{t("explore.temir yol")}</h2>
                        <p>{t("explore.butu")}</p>
                            
                        </div>
                        <a href="#"><button>{t("explore.koproq")}</button></a>
                 
                    </div>
                    <p>{t("explore.yol orqali")}</p>
                   
                   
                </div>
                
            </div>
            <div className="explore-air">
                <div className="explore-air-img">
                    <img src="https://zamontour.uz/assets/images/airplane.jpg" alt="" />
                </div>
                <div className="explore-air-text">
                    <div className="air-text-small">
                        <div className="air-subtitle">
                            <h1>{t("explore.aviabiletlar biz bilan")}</h1>
                            <p>{t("explore.jahon boylab")}</p>
                        </div>

                        <a href="#"><button>{t("explore.koproq")}</button></a>

                    </div>
                    <p>{t("explore.eng arzon qulay")}</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Explore