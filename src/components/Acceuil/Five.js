import React from 'react'
import '../css/five.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo1 from '../../images/Five/logo1.png'
import logo2 from '../../images/Five/logo2.png'
import logo3 from '../../images/Five/logo3.png'
import btl1 from '../../images/Five/btl1.png'
import btl2 from '../../images/Five/btl2.png'
import btl3 from '../../images/Five/btl3.png'
import safir from '../../images/Five/safir.png'
import histoire from '../../images/Five/homehistoire3.jpg'
import { useTranslation } from 'react-i18next'

import 'aos/dist/aos.css'
import AOS from 'aos';

function Five() {
    const { t }=useTranslation();
    useEffect(()=>{
        AOS.init({
          duration:2000,
          easing: 'ease-in-out',
        });
         },[])

  return (
    <>
    <div className='five'>
        <div className="nosproduits">
            <h1>{t("1.nos")}</h1>
            <h2>{t("1.produits")}</h2>
        </div>
        <div>
            <Link to="/product" className='lien'>{t("1.Voir")} {t("1.produits")}</Link>
        </div>
    </div>
  
    <div className='five2' >
        <div className='fivecard fv1'  data-aos="fade-up-right">
                <img src={logo1} className='card1img' />
                <Link to="/VieuxRhum8" className='bouton'>{t("1.decouvrir")}</Link>   
        
            <img src={btl1} className='btl1'/>
        </div>

        <div className='fivecard2'>
      
           <div className='fivecard20'  data-aos="fade-left">
                <img src={logo2} className='card2img'/> 

                <p> <br/> {t("1.text12")} </p>

                <Link to="/VanillaDzamaRhum" className='card2btn'>{t("1.decouvrir")}</Link> 

                <img src={btl2} className='btl2'/>  
           </div>
            <br/>

           <div className='fivecard21'  data-aos="fade-left"> 
                <img src={logo3} className='card3img'/> 
        
                <p><br/> {t("1.text13")} </p>
                <Link to="/Lucien" className=' card3btn'>{t("1.decouvrir")}</Link>   
                <div><img src={btl3} className='btl3'/></div>
                </div>
            </div>
    </div>

    <div className='section4'data-aos="zoom-in" >
    <Link to="/product" className='card4Lien'> <span className='lien1'> {t("1.Voir")} </span>
     <br/> <span className='lien2'> {t("1.produits")}</span></Link>
    </div>

    <div className='section5'>
        <div className='sect5card0'>

            <h1  data-aos="fade-right" >{t("1.valeur")} N°4</h1>
            <h2  data-aos="fade-right" >{t("1.text14")}</h2>
            <p  data-aos="fade-right" > {t("1.text15")}</p>

            <Link to="/Histoire" className='lien'>{t("menu.histoire")}</Link>

            <img src={histoire} className='histoire' data-aos="fade-left" />

            <div  className='text'  data-aos="fade-up-right" >{t("1.text16")}</div>
            <div className='ligne'></div>
               

        </div>
    </div>
        
    
    </>
  )
}

export default Five