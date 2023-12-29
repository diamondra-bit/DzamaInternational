import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import '../css/card.css'

import 'aos/dist/aos.css'
import AOS from 'aos';

function Card({logo,text,text2,text3,img,linkTo,showbutton}) {
  const {t}=useTranslation();

  useEffect(()=>{
    AOS.init({
      duration:2000,
      easing: 'ease-in-out',
    });
     },[])
  return (
    <>
        <div className='card1' >
          
            <div>
                <img src={img} className='btlimg'  data-aos="fade-right"  />
            </div>
            
            <div>
                <img src={logo} className='card1logo1'/> <br/>
                <div className='card1text' data-aos="fade-up-left" >{text}  <br/>  <br/>{text2} <br/>  <br/>{text3}</div>
                {showbutton &&  <Link to={linkTo} className=' card1btn' data-aos="fade-right"  data-aos-duration="2500">{t("1.decouvrir")}</Link>   }
               
            </div>
            
        </div>
    </>
  )
}

export default Card