import React from 'react'
import { useTranslation } from 'react-i18next'
import "./footer.scss"

const Footer = () => {
  const {t, i18n}= useTranslation()
  return (
    <div className='footer-container'>
      <div className="footer">
        <div className="footer-title">
        <h1>{t("footer.sayohat")}</h1>
        <p>{t("footer.unda")}</p>
        </div>

        <a href="#"><button>{t("footer.boglanish")}</button></a>
       
      </div>
      <div className="footer-end">
        <p>Copyright ©2024 Zamon Business Tour.All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer