import { useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Acceuil/Navbar'
import Card from './Card'

import logo14 from '../../images/Products/logo14.png'
import btl14 from '../../images/Products/btl14.png'

import img1 from '../../images/Products/V3.jpg'

import DzamaProduits from './DzamaProduits'
import Footer from '../Acceuil/Footer'
import { useTranslation } from 'react-i18next'

function VieuxRhum1998() {
  const [show,setShow]=useState(false)
  const {t}=useTranslation();

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
                  <Link to="/VieuxRhum" className='lien-produit'>{t("4.autres")} </Link>
              </div>      
        </div>

  
    <div className='carte14'>
                    <Card logo={logo14} 
                   text={t("3.text29")} 
                   text2={t("3.text30")}  img={btl14}
                    linkTo='/VieuxRhum1998'
                   />
                </div>

        <div className='dzama-image'>
          <div className='dzama-image1 dzamarhum'>
             <img src={img1} className='image1'/>
          </div>

          <div className='dzama-detail'>
            <h2>{t("4.text14")}</h2>
            <div className='dzama-texte-div'> 
                <div className='dzama-paragraph'><span className='dzama-texte'>{t("4.text1")} :</span> 45°<br/></div> 
                <div className='dzama-paragraph'><span className='dzama-texte'>{t("4.text2")}  :  </span> Old Rum Vintage 1998<br/></div> 
                <div className='dzama-paragraph'><span className='dzama-texte'>{t("4.text3")}  : </span>Madagascar<br/></div> 
                <div className='dzama-paragraph'> <span className='dzama-texte'>{t("4.text4")} :</span>  {t("3.text5")}<br/></div>
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

export default VieuxRhum1998