import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import 'aos/dist/aos.css'
import AOS from 'aos';

function DzamaProduits() {
  const {t}=useTranslation();

  useEffect(()=>{
    AOS.init({
      duration:2000,
      easing: 'ease-in-out',
    });
     },[])

  return (
    <>
     <div className='section4 dzama-history' data-aos="zoom-in">
    <Link to="/product" className='card4Lien'> <span className='lien1'> {t("1.Voir")} </span>
     <br/> <span className='lien2'> {t("1.produits")}  </span></Link>
    </div>
    </>
  )
}

export default DzamaProduits