import React, { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import "./form.scss"
import axios from 'axios'

const Form = () => {
    const {t, i18n} = useTranslation()
    const [loading, SetLoading]= useState(false)

    const nameRef= useRef(null)
    const phoneRef= useRef(null)
    const adressRef = useRef(null)
    const personRef = useRef(null)
    const visaRef = useRef(null)
    const dateRef = useRef(null)

    const sendMessage= (event)=>{
        SetLoading(true)
        event.preventDefault();
        const token ='7868317836:AAETV1ao_SpGVnFCjT79KUINpm--HWBCTog'
        const chat_id = '1346734598'
        const url= `https://api.telegram.org/bot${token}/sendMessage`

        const name= nameRef.current.value
        const phone= phoneRef.current.value
        const person =personRef.current.value
        const adress =adressRef.current.value
        const visa =visaRef.current.value
        const date =dateRef.current.value


        const messageContent= `Ismi: ${name} \nFamilyasi: ${phone} \nNecha kishi:${person} \nUchish sanasi:${date} \nAdress:${adress} \n Visa:${visa}`
        // const phone= document.getElementById("phone").value
    
        axios({
            url:url,
            method:'POST',
            data:{
                "chat_id":chat_id,
                "text":messageContent,
            }
        }).then((res)=>{
            nameRef.current.value=""
            phoneRef.current.value=""
            personRef.current.value = "ex. 3 or 4 or 5"
            dateRef.current.value = ""
            adressRef.current.value ="Antalya"
            visaRef.current.value = "Country"


            alert("Muvaqqiyatli yuborildi")
        }).catch((error)=>{
            console.log("Yuborishda xatolik", error);
        }).finally(()=>{
        SetLoading(false)
        })
    }
  return (
    <div className='form-container' >
        <div className="form">
            <h1>{t("maps.oz")} <span>{t("maps.joyi")}</span> {t("maps.band")}
             <span> {t("maps.qiling")}</span> </h1>

             <form id='myForm' className='myForm ' onSubmit={sendMessage}>
                <div className="form-name-phone">
                <label htmlFor="">
                    <p>{t('maps.ism')}</p>
                    <input type="text" id='name' ref={nameRef} placeholder='Ex. John Smithee' />
                </label>
                <label htmlFor="">
                    <p>{t("maps.tel raqam")}</p>
                    <input type="tel" defaultValue="+998"  ref={phoneRef} id='phone' maxLength={13} />
                </label>

                </div>
                <div className="form-person-check">
                    <label htmlFor="">
                        <p>{t("maps.necha kishi")}</p>
                       <select name="" id="" className='form-person' ref={personRef}>
                        <option value="ex. 3 or 4 or 5 ">ex. 3 or 4 or 5</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4+">4+</option>
                       </select>
                    </label>
                    <label htmlFor="">
                        <p>{t("maps.uchish")}</p>
                        <input type="date" ref={dateRef} />

                    </label>
                </div>
                <label htmlFor="" className='form-adress'>
                <h2>{t("maps.manzil")}</h2>
                    <select name="" id="adress" ref={adressRef}>
                        <option value="Antalya">Antalya</option>
                        <option value="Istanbul">Istanbul</option>
                        <option value="Dubai">Dubai</option>
                        <option value="Sharm el-sheikh">Sharm el-Sheikh</option>
                        <option value="Kuala lumpur">Kuala Lumpur</option>
                        <option value="Kanada">Kanada</option>
                        <option value="Aqsh">AQSH</option>
                    </select>

                </label>
                <label htmlFor="" className='form-visa'>
                    <h3>{t("maps.viza")}</h3>
                    <select name="" id="visa" ref={visaRef} >
                        <option value="Country">Country</option>
                        <option value="Europe">Europe</option>
                        <option value="England">England</option>
                        <option value="Japan">Japan</option>
                        <option value="Oman">Oman</option>
                        <option value="Usa">USA</option>
                        <option value="Saudi arabia">Saudia Arabia</option>
                        <option value="India">India</option>
                        <option value="China">China</option>
                        <option value="Hong kong">Hong Kong</option>
                    </select>
                </label>
                <a href=""><button type='submit' disabled={loading}>{ loading?"Yuborilmoqda" : t("maps.band qilish")}</button></a>
              

               

             </form>

        </div>

    </div>
  )
}

export default Form