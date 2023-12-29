import React from 'react'
import '../css/fourth.css'
import { useTranslation } from 'react-i18next'

import { useEffect } from 'react'
import 'aos/dist/aos.css'
import AOS from 'aos';

function Fourth() {
  const { t }=useTranslation();
  useEffect(()=>{
    AOS.init({
      duration:2000,
      easing: 'ease-in-out',
    });
     },[])
     
  return (
    <>
    <div className='fourth' data-aos="fade-up">

        <div className='fourthcard f1'>
            <h1>{t("1.valeur")} N°2</h1>
            <h2>{t("1.text8")}</h2>
            <div className='fourthp'>{t("1.text9")}</div>
        </div>

        <div className='fourthcard f2'>
            <h1>{t("1.valeur")} N°3</h1>
            <h2>{t("1.text10")}</h2>
            <div className='fourthp'>{t("1.text11")} </div>
        </div>
    </div>
    </>
  )
}

export default Fourth