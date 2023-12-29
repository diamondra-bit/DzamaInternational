import React from 'react'
import Navbar from '../components/Acceuil/Navbar'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

import CardPrix from '../components/Prix/CardPrix'
import DzamaProduits from '../components/Product/DzamaProduits'
import { useTranslation } from 'react-i18next'

import 'aos/dist/aos.css'
import AOS from 'aos';

 import './css/Prix.css'
import Footer from '../components/Acceuil/Footer'

function Prix() {

  const [show,setShow]=useState(false)
  const {t}=useTranslation();
  useEffect(()=>{
    AOS.init({
      duration:2000,
      easing: 'ease-in-out',
    });
     },[])

     useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    
  return (
    <>
    <div className='container'>

      <Navbar show={show} setShow={setShow} lng={false}/>
      {!show && <div> 
        <div>
      <div className='Psection1 main-prix'>
            <div> 
              <h1 data-aos="fade-down-right">{t("1.notre")}</h1>
              <h2 data-aos="fade-down-right">{t("1.histoire")}</h2>
              <span className='span-date' data-aos="fade-right">{t("7.text1")}</span>
            </div>

            
      </div>

      <div className='Psection1 main-prix-2' data-aos="zoom-in">
          <CardPrix title={2017}  
          showtext1={true}
          showtext2={true}
          showtext3={true}
          text1={t("7.text3")}
          text2={t("7.text4")}
          text3={t("7.text5")}
         />
      </div>

      <div className='Psection1  main-prix-2' data-aos="zoom-in">
          <CardPrix title={2016}  
          showtext1={true}
          text1={t("7.text6")}
         />
      </div>

      <div className='Psection1  main-prix-2' data-aos="zoom-in">
          <CardPrix title={2015} 
          showtext1={true}
          showtext2={true}
          text1={t("7.text7")}
          text2={t("7.text8")}
         />
      </div>

      <div className='Psection1  main-prix-2' data-aos="zoom-in">
          <CardPrix title={2014}  
          showtext1={true}
          text1={t("7.text9")}
          />
      </div>

      <div className='Psection1  main-prix-2' data-aos="zoom-in">
          <CardPrix title={2013}  
          showtext1={true}
          text1={t("7.text10")}
         />
      </div>

      <div className='Psection1  main-prix-2' data-aos="zoom-in">
          <CardPrix title={2012}  
          text1={t("7.text11")}
          showlist={true}
            list1={t("7.text12")}
            list2={t("7.text13")}
            list3={t("7.text14")}
            list4={t("7.text15")}

          text2={t("7.text16")}
          showlist2={true}
            list5={t("7.text17")}
          
          text3={t("7.text18")}
          showlist3={true}
            list6={t("7.text19")}
            list7={t("7.text20")}
            list8={t("7.text21")}
            showtext1={true}
           showtext2={true}
           showtext3={true}
        />
      </div>

      <div className='Psection1  main-prix-2' data-aos="zoom-in">
          <CardPrix title={2012}  
          text1={t("7.text22")}
          showtext1={true}
        />
      </div>

      <div className='Psection1  main-prix-2' data-aos="zoom-in">
          <CardPrix title={2011}  
          text1={t("7.text23")}
          showlist01={true}
            list1={t("7.text24")}
            list2={t("7.text25")}
            list3={t("7.text26")}
            list4={t("7.text27")}
            list9={t("7.text28")}
            list10={t("7.text29")}
            list11={t("7.text30")}

          text2={t("7.text31")}
          showlist2={true}
            list5={t("7.text32")}
          showtext1={true}
          showtext2={true}

        />
      </div>

      <div className='Psection1  main-prix-2' data-aos="zoom-in">
          <CardPrix title={2011}  
          text1={t("7.text33")}
          text2={t("7.text34")}
          showtext1={true}
          showtext2={true}
         />
      </div>
 
      <div className='Psection1  main-prix-2' data-aos="zoom-in">
          <CardPrix title={2010}  
          text4={t("7.text35")}
          showlist4={true}
            list12={t("7.text36")}
            list13={t("7.text37")}
            showtext4={true}

        />
      </div>

      <div className='Psection1  main-prix-2' data-aos="zoom-in">
          <CardPrix title={2009}  
          text1={t("7.text38")} showtext1={true}
        />
      </div>

      <div className='Psection1  main-prix-2' data-aos="zoom-in">
          <CardPrix title={2008}  
          text1={t("7.text39")}
           showtext1={true}
        />
      </div>

      <div className='Psection1  main-prix-2' data-aos="zoom-in">
          <CardPrix title={2006}  
          text1={t("7.text40")}
          showtext1={true}
        />
      </div>

      <div className='Psection1  main-prix-2' data-aos="zoom-in">
          <CardPrix title={2005}  
          text1={t("7.text41")}
          showtext1={true}
        />
      </div>

      <div className='Psection1  main-prix-2' data-aos="zoom-in">
          <CardPrix title={2003}  
          text1={t("7.text42")}
          showtext1={true}
        />
      </div>

      <div className='Psection1  main-prix-2' data-aos="zoom-in">
          <CardPrix title={2002}  
          text1={t("7.text43")}
          showtext1={true}
        />
      </div>

      <div className='Psection1  main-prix-2' data-aos="zoom-in">
          <CardPrix title={2001}  
          text1={t("7.text44")}
          showtext1={true}
        />
      </div>
      <div className='Psection1  main-prix-2' data-aos="zoom-in">
          <CardPrix title={2000}  
          text1={t("7.text45")}
          showtext1={true}
          text2={t("7.text46")}
          showtext2={true}
        />
      </div>

      <div className='Psection1  main-prix-2' data-aos="zoom-in">
          <CardPrix title={1999}  
          text1={t("7.text47")}
          showtext1={true}
          text2={t("7.text48")}
          showtext2={true}
        />
      </div>

      <div className='Psection1  main-prix-2' data-aos="zoom-in">
          <CardPrix title={1998}  
          text1={t("7.text49")}
          showtext1={true}
        />
      </div>

      <div className='Psection1  main-prix-2' data-aos="zoom-in">
          <CardPrix title={1997}  
          text1={t("7.text50")}
          showtext1={true}
        />
      </div>
      <div className='Psection1  main-prix-2' data-aos="zoom-in">
          <CardPrix title={1988}  
          text1={t("7.text51")}
          showtext1={true}
        />
      </div>

      <div className='Psection1  main-prix-2' data-aos="zoom-in">
          <CardPrix title={1985}  
          text1={t("7.text52")}
          showtext1={true}
        />
      </div>
      <div className='Psection1  main-prix-2' data-aos="zoom-in">
          <CardPrix title={1982}  
          text1={t("7.text53")}
          showtext1={true}
        />
      </div>
      <div className='Psection1  main-prix-2' data-aos="zoom-in">
          <CardPrix title={1981}  
          text1={t("7.text54")}
          showtext1={true}
        />
      </div>

      <div className='Psection1'> <DzamaProduits/></div>
      <Footer/>
      </div>
      </div> }
    
      </div>
    </>
  )
}

export default Prix