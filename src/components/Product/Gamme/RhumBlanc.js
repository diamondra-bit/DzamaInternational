import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Acceuil/Navbar'

import Footer from '../../Acceuil/Footer'
import Card from '../../../components/Product/Card'

import logo3 from '../../../images/Products/logo3.png'
import btl3 from '../../../images/Products/btl3.png'

import logo10 from '../../../images/Products/logo10.png'
import btl10 from '../../../images/Products/btl10.png'

import logo11 from '../../../images/Products/logo11.png'
import btl11 from '../../../images/Products/btl11.png'
import { useTranslation } from 'react-i18next'
import triangle from '../../../images/Products/triangle.svg'


function RhumBlanc() {
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
                      <h3 className='titre-gamme'>{t("3.text4")}</h3>
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
        <div className='carte10'>
                    <Card logo={logo10} 
                      text={t("3.text24")}  img={btl10}
                    linkTo='/Tsingy'
                    showbutton={true}
                   />
                </div>

                <div className='carte3'>
                    <Card logo={logo3}text={t("3.text10")} 
                    text2={t("3.text11")} img={btl3} 
                    linkTo='/CuveeBlanche'
                    showbutton={true}
                    />
                </div>
                <div className='carte11'>
                    <Card logo={logo11} 
                    text={t("3.text25")}  img={btl11}
                    linkTo='/NosyBeBlanc'
                    showbutton={true}
                   />
                </div>
        </div>
        <Footer/></div>}
      
    </div>
    </>
  )
}

export default RhumBlanc