import React from 'react'
import '../css/six.css'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import 'aos/dist/aos.css'
import AOS from 'aos';

function Six() {
  const { t }=useTranslation();
  useEffect(()=>{
    AOS.init({
      duration:2000,
      easing: 'ease-in-out',
    });
     },[])
  return (
    <>
        <div className='contact' data-aos="fade-down">
            <h2>contact</h2>

            <Link to="/contact" className='lien'>{t("1.text17")}</Link>
        </div>

      
           </>
  )
}

export default Six