import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Acceuil/Navbar'

import Footer from '../../Acceuil/Footer'
import Card from '../../../components/Product/Card'

import logo1 from '../../../images/Products/xv-logo.png'
import btl1 from '../../../images/Products/bottle.png'

import logo2 from '../../../images/Products/logo2.png'
import btl2 from '../../../images/Products/btl2.png'

import logo6 from '../../../images/Products/logo6.png'
import btl6 from '../../../images/Products/btl6.png'

import logo8 from '../../../images/Products/logo8.png'
import btl8 from '../../../images/Products/btl8.png'
import { useTranslation } from 'react-i18next'

import triangle from '../../../images/Products/triangle.svg'

function RhumVieux() {
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
                    <h3 className='titre-gamme'>{t("3.text2")}</h3>
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
                <div className='carte'>
                    <Card logo={logo1} 
                     text={t("3.text7")} 
                     text2={t("3.text8")}  img={btl1}  
                     linkTo='/DzamarhumXV'
                     showbutton={true}
                     />
                </div>

                <div className='carte2'>
                    <Card logo={logo2}
                     text={t("3.text9")} img={btl2} 
                    linkTo='/VanillaDzamaRhum'
                    showbutton={true}
                    />
                </div>
                <div className='carte8'>
                    <Card logo={logo8}  text={t("3.text21")} img={btl8}
                    linkTo='/Lucien'
                    showbutton={true}
                   />
                </div>

                <div className='carte6'>
                    <Card logo={logo6} text={t("3.text16")} 
                    text2={t("3.text17")} img={btl6}
                    linkTo='/VieuxRhum8'
                    showbutton={true} />
                </div>
     </div>
     <Footer/></div>}
    
     </div>
    </>
  )
}

export default RhumVieux