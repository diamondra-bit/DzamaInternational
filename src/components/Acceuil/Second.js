import React, { useState } from 'react'
import { useEffect } from 'react'
import '../css/second.css'
import Img3 from '../../images/flower-element.png'
import Img4 from '../../images/flower-element2.png'
import Img5 from '../../images/secondBackground.jpg'
import Img6 from '../../images/home-plants.jpg'

import { useTranslation } from 'react-i18next'

import AOS from 'aos';
import 'aos/dist/aos.css'

function Second() {

  const { t }=useTranslation();

 useEffect(()=>{
AOS.init({
  duration:3000,
  easing: 'ease-in-out',
});
 },[])


    return (
      <>   
       <div className='second' >   
            <div className='secondText'>
                <img src={Img3} className='flower'/>
                <img src={Img4} className='flower2'/>

                <h1>{t("1.valeur")} N°1</h1>
                <h2>{t("1.humain")}</h2>
                  <br/>
                  <div className='p' data-aos="fade-down-right" > {t("1.text1")}</div>  </div>
            <div className='secondImg'>
                <img src={Img5} className='Img5' data-aos="fade-left" />
                <img src={Img6} className='Img6'/>
            </div>              
        </div>     
      </>
    )
  }
  
  export default Second

