import React from 'react'
import { useTranslation } from 'react-i18next'
import "./reservation.scss"

const Reservation = () => {
    const {t,i18n} = useTranslation()
  return (
    <div className='r-container'>
        <div className="reservation"  >
            <p id='contact'>{t("reservations.ozingiz")}</p>
            <h1>{t("reservations.oz joy")}</h1>
             <a href="#"><button>{t("explore.koproq")}</button></a>

             <div className="connect" >
                <div className="connect-small">
                    <div className="connect-icon">
                    <i className="fa-solid fa-phone-flip"></i>
                    </div>
                    <h3>{t("reservations.telefon")}</h3>
                    <a href="#">+998 99 299 99 96</a>


                </div>

                <div className="connect-small">
                    <div className="connect-icon">
                    <i className="fa-solid fa-envelope"></i>
                    </div>
                    <h3>{t("reservations.email")}</h3>
                    <a href="#">zamonbizbestour@mail.ru</a>


                </div>

                <div className="connect-small">
                    <div className="connect-icon">
                    <i className="fa-solid fa-location-pin"></i>
                    </div>
                    <h3>{t("reservations.ofis")}</h3>
                    <a href="#">15/25, Chilonzor - 9, Toshkent city</a>


                </div>
               

                </div>
             </div>
        </div>
  )
}

export default Reservation