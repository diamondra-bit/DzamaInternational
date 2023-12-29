import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect} from 'react'
import Card from './Card'
import Navbar from '../Acceuil/Navbar'
import DzamaProduits from './DzamaProduits'
import Footer from '../Acceuil/Footer'

import logo10 from '../../images/Products/logo10.png'
import btl10 from '../../images/Products/btl10.png'

import img1 from '../../images/Products/tsingy.jpg'
import { useTranslation } from 'react-i18next'

function Tsingy() {
  const {t}=useTranslation();
  const [show,setShow]=useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
    <div className='container'>

      <Navbar  show={show} setShow={setShow}/>{!show && 
<div className='Psection2'>
<div className=' Psection-title'>
                <div> 
                    <h1>{t("1.nos")}</h1>
                    <h2>{t("1.produits")}</h2>
                </div>
                  <div className='div-lien-produit'>
                  <div className='ligne2 '></div>
                  <Link to="/RhumBlanc" className='lien-produit'>{t("4.autres")}</Link>
              </div>      
        </div>
               <div className='carte10'>
                    <Card logo={logo10} 
                     text={t("3.text24")}  img={btl10}
                    linkTo='/Tsingy'
                   />
                </div>

                <div className='dzama-image'>
          <div className='dzama-image1'>
             <img src={img1}/>
          </div>

          <div className='dzama-detail'>
            <h2>{t("4.text14")}</h2>
            <div className='dzama-texte-div dzama-texte-div2'> 
                <div className='dzama-paragraph'><span className='dzama-texte'>{t("4.text1")} :</span> 40°<br/></div> 
                <div className='dzama-paragraph'><span className='dzama-texte'>{t("4.text2")}  :  </span>{t("4.text5")} <br/></div> 
                <div className='dzama-paragraph'><span className='dzama-texte'>{t("4.text3")} : </span>Madagascar<br/></div> 
                <div className='dzama-paragraph'> <span className='dzama-texte'>{t("4.text4")}  :</span> {t("3.text4")} <br/></div>
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

export default Tsingy