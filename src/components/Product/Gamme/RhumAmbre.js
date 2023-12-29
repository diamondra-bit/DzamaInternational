import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Acceuil/Navbar'

import Footer from '../../Acceuil/Footer'
import Card from '../../../components/Product/Card'



import logo4 from '../../../images/Products/logo4.png'
import btl4 from '../../../images/Products/btl4.png'

import logo9 from '../../../images/Products/logo9.png'
import btl9 from '../../../images/Products/btl9.png'
import { useTranslation } from 'react-i18next'

import triangle from '../../../images/Products/triangle.svg'


function RhumAmbre() {

  const [show,setShow]=useState(false)
  const[gamme,setGamme]=useState(false)
 
  const Gamme=()=>{
      setGamme(!gamme);
  } 
  const {t}=useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
    <div className='container'>

     <Navbar show={show} setShow={setShow}/>
     {!show && <div>
     <div className='Psection1'>
     <div> 
                    <h1>{t("1.nos")}</h1>
                    <h2>{t("1.produits")}</h2>
                    <h3 className='titre-gamme'>{t("3.text3")}</h3>
                </div>
                <div>
                <div className='gamme' onClick={Gamme}>{t("3.text1")}
                    <img src={triangle}/>
                    </div>
                    {gamme &&
                    <ul className='ul-gamme'>
                        <li><Link to="/RhumUne" className='ul-gamme-a'>{t("3.text6")}</Link></li>
                        <li><Link to="/RhumVieux"  className='ul-gamme-a'>{t("3.text2")}</Link></li>
                        <li> <Link to="/RhumAmbre" className='ul-gamme-a'>{t("3.text3")}</Link></li>
                        <li> <Link to="/RhumBlanc" className='ul-gamme-a'>{t("3.text4")}</Link></li>
                        <li><Link to="/VieuxRhum" className='ul-gamme-a'>{t("3.text5")}</Link> </li>
                    </ul>
                    }
                </div>
     </div>

     <div className='Psection2'>
                <div className='carte9'>
                    <Card logo={logo9} 
                     text={t("3.text22")} 
                     text2= {t("3.text23")}  img={btl9}
                    linkTo='/NosyBe'
                    showbutton={true}
                   />
                </div>

                <div className='carte4'>
                    <Card logo={logo4}  text={t("3.text12")} 
                    text2={t("3.text13")} img={btl4} 
                    linkTo='/CuveeNoir'
                    showbutton={true}
                    />
                </div>
     </div>
     <Footer/> </div>}

    </div>
    </>
  )
}

export default RhumAmbre