
import './navbar.scss'
import { useTranslation } from 'react-i18next'
// import zamonlogo from "../../assets/images/zamon.logo.svg"

const Navbar = () => {


 
  const {t, i18n } =  useTranslation()
 const onChangeLanguage =(lang) => 
 {
  i18n.changeLanguage(lang)
 }
  return (
    <nav>
       <div className='navbar-container'>

       <a href="/" className="navbar-logo">
    
        <img src="/images/zamon.logo.svg" alt="" />

        </a>
       

        <ul className='navbar-menu'  >
            <li><a href="#home"> {t('navbar.Sahifa')}</a></li>
            <li><a href="#about"> {t('navbar.bizHaqimizda')}</a></li>
            <li><a href="#tour"> {t('navbar.turlar')}</a></li>
            <li><a href="#contact">{t('navbar.kontaktlar')}</a></li>
        </ul>
        <ul  id='lng' className='navbar-language' >
          
            <li ><a  onClick={()=>onChangeLanguage('uz')} >UZ</a></li>
            <li > <a onClick={()=>onChangeLanguage('eng')}   >ENG</a></li>
            <li> <a   onClick={()=>onChangeLanguage('ru')} >RU</a></li>
           <li> <a target='_blank' href='https://t.me/zamonbiznestour'><i className="fa-brands fa-telegram"></i></a> </li>
            <li> <a target='_blank' href='https://www.instagram.com/zamontour'><i className="fa-brands fa-instagram"></i></a> </li>
            </ul>
            </div>
       
    </nav>
  )
}

export default Navbar