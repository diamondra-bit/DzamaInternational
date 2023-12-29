import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Card from './Card'
import Navbar from '../Acceuil/Navbar'
import './css/DzamarhumXV.css'

import logo1 from '../../images/Products/xv-logo.png'
import btl1 from '../../images/Products/bottle.png'

import img1 from '../../images/Products/img1.jpg'

import DzamaProduits from './DzamaProduits'
import Footer from '../Acceuil/Footer'

import { useTranslation } from 'react-i18next'


function DzamarhumXV() {
  const [show,setShow]=useState(false)
  const {t}=useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
    <div className='container'>

    <Navbar  show={show} setShow={setShow}/>   {!show && 
    <div className='Psection2'>
    <div className=' Psection-title'>
                <div> 
                    <h1>{t("1.nos")}</h1>
                    <h2>{t("1.produits")}</h2>
                </div>
                  <div className='div-lien-produit'>
                  <div className='ligne2 '></div>
                  <Link to="/RhumVieux" className='lien-produit'>{t("4.autres")} </Link>
              </div>      
        </div>
        <div className='carte'>
            <Card logo={logo1} 
                text={t("3.text7")} 
                 text2={t("3.text8")} 
                 img={btl1}  
                linkTo='/contact'
                showbutton={false}
            />
       </div>

       <div className='dzama-image'>
          <div className='dzama-image1 dzamarhum'>
             <img src={img1} className='image1'/>
          </div>

          <div className='dzama-detail'>
            <h2>{t("4.text14")}</h2>
            <div className='dzama-texte-div'> 
                <div className='dzama-paragraph'><span className='dzama-texte'>{t("4.text1")}  :</span> 40° <br/></div> 
                <div className='dzama-paragraph'><span className='dzama-texte'>{t("4.text2")}   :  </span>Old Rum Vintage 1996<br/></div> 
                <div className='dzama-paragraph'><span className='dzama-texte'>{t("4.text3")}   : </span>Madagascar<br/></div> 
                <div className='dzama-paragraph'> <span className='dzama-texte'>{t("4.text4")}   :</span>{t("3.text2")} <br/></div>
            </div>
       </div>
    </div>

   <DzamaProduits/>

   <Footer/>
       
    </div>}

    </div>
    </>
  )
}

export default DzamarhumXV