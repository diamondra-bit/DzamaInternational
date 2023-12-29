import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Acceuil/Navbar'

import Footer from '../../Acceuil/Footer'
import Card from '../../../components/Product/Card'

import logo7 from '../../../images/Products/logo7.png'
import btl7 from '../../../images/Products/btl7.png'

import logo5 from '../../../images/Products/logo5.png'
import btl5 from '../../../images/Products/btl5.png'

import logo12 from '../../../images/Products/logo12.png'
import btl12 from '../../../images/Products/btl12.png'

import logo13 from '../../../images/Products/logo13.png'
import btl13 from '../../../images/Products/btl13.png'

import logo14 from '../../../images/Products/logo14.png'
import btl14 from '../../../images/Products/btl14.png'
import { useTranslation } from 'react-i18next'
import triangle from '../../../images/Products/triangle.svg'

function VieuxRhum() {
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
                      <h3 className='titre-gamme'>{t("3.text5")} </h3>
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
        <div className='carte12'>
                    <Card logo={logo12} 
                   text={t("3.text26")}   img={btl12}
                    linkTo='/VieuxRhum3'
                    showbutton={true}
                   />
                </div>
                
                <div className='carte13'>
                    <Card logo={logo13} 
                    text={t("3.text27")} 
                    text2={t("3.text28")} img={btl13}
                    linkTo='/VieuxRhum6'
                    showbutton={true}
                   />
                </div>

                <div className='carte14'>
                    <Card logo={logo14} 
                    text={t("3.text29")} 
                    text2={t("3.text30")} img={btl14}
                    linkTo='/VieuxRhum1998'
                    showbutton={true}
                   />
                </div>
               
                <div className='carte5'>
                    <Card logo={logo5} text={t("3.text14")} 
                    text2={t("3.text15")} img={btl5} 
                    linkTo='/VieuxRhum5'
                    showbutton={true}
                    />
                </div>

                <div className='carte7'>
                    <Card logo={logo7} text={t("3.text18")} 
                    text2={t("3.text19")} 
                    text3={t("3.text20")}   img={btl7}
                    linkTo='/VanillaDzama'
                    showbutton={true}
                   />
                </div>
        </div>
        <Footer/></div>}
        
  </div>
    </>
  )
}

export default VieuxRhum