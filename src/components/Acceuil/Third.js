import React from 'react'
import { useEffect } from 'react'
import '../css/third.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import 'aos/dist/aos.css'
import AOS from 'aos';

function Third() {

  const { t }=useTranslation();
  useEffect(()=>{
    AOS.init({
      duration:2000,
      easing: 'ease-in-out',
    });
     },[])
  return (
    <>
       <div className='third'>
                <div className='thirdtext'  data-aos="zoom-in">
                  <div>
                    <h2>7</h2>         
                  </div>
                  <div className='resph1'>
                    <h1 >{t("1.text2")}</h1>
                  <p >{t("1.text3")}</p>
                  </div>
                </div>

                <div className='thirdtext'  data-aos="zoom-in">
                  <div >
                      <h2>2</h2>         
                    </div>
                    <div className='resph1'>
                      <h1 >{t("1.text4")}</h1>
                    <p>{t("1.text5")}</p>
                    </div>
                </div>

                <div className='thirdtext t2'  data-aos="zoom-in">
                  <div>
                      <h2>500</h2>         
                    </div>
                    <div >
                      <h1 className='h12'>{t("1.text6")}</h1>
                    </div>
                </div>
                
        </div>

          <div className='div-lien'>
                  <div className='ligne2'></div>
                  <Link to="/Prix" className='lien'>{t("1.text7")}</Link>
          </div>

    </>
  )
}

export default Third
