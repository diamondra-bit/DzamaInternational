import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './css/Product.css'

import Navbar from '../components/Acceuil/Navbar'
import Footer from '../components/Acceuil/Footer'
import Card from '../components/Product/Card'

import logo1 from '../images/Products/xv-logo.png'
import btl1 from '../images/Products/bottle.png'

import logo2 from '../images/Products/logo2.png'
import btl2 from '../images/Products/btl2.png'

import logo3 from '../images/Products/logo3.png'
import btl3 from '../images/Products/btl3.png'

import logo4 from '../images/Products/logo4.png'
import btl4 from '../images/Products/btl4.png'

import logo5 from '../images/Products/logo5.png'
import btl5 from '../images/Products/btl5.png'

import logo6 from '../images/Products/logo6.png'
import btl6 from '../images/Products/btl6.png'

import logo7 from '../images/Products/logo7.png'
import btl7 from '../images/Products/btl7.png'

import logo8 from '../images/Products/logo8.png'
import btl8 from '../images/Products/btl8.png'

import logo9 from '../images/Products/logo9.png'
import btl9 from '../images/Products/btl9.png'

import logo10 from '../images/Products/logo10.png'
import btl10 from '../images/Products/btl10.png'

import logo11 from '../images/Products/logo11.png'
import btl11 from '../images/Products/btl11.png'

import logo12 from '../images/Products/logo12.png'
import btl12 from '../images/Products/btl12.png'

import logo13 from '../images/Products/logo13.png'
import btl13 from '../images/Products/btl13.png'

import logo14 from '../images/Products/logo14.png'
import btl14 from '../images/Products/btl14.png'

import triangle from '../images/Products/triangle.svg'
import { useTranslation } from 'react-i18next'

import 'aos/dist/aos.css'
import AOS from 'aos';

function Product()
{
    const {t}=useTranslation();
    const [show,setShow]=useState(false)
    const[gamme,setGamme]=useState(false)
   
    const Gamme=()=>{
        setGamme(true);
    } 
    const gammefalse=()=>{
        setGamme(false)
    }
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }, []);
    useEffect(()=>{
        AOS.init({
          duration:2000,
          easing: 'ease-in-out',
        });
         },[])

    return(
        <>
        <div className='container'>

            <Navbar show={show} setShow={setShow} lng={false}/>
            {!show && 
          <div >
            <div className='Psection1'>
                <div> 
                    <h1  data-aos="fade-down-right" >{t("1.nos")}</h1>
                    <h2  data-aos="fade-down-right" >{t("1.produits")}</h2>
                </div>
                <div>
                    <div className='gamme' data-aos="fade-down-left"  onClick={Gamme}>{t("3.text1")}
                    <img src={triangle}/>
                    </div>
                    {gamme &&
                    <ul className='ul-gamme'>
                         <li onClick={gammefalse}><Link to="/RhumUne" className='ul-gamme-a'>{t("3.text6")}</Link></li>
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
                    text2={t("3.text8")} 
                     img={btl1}  
                     linkTo='/DzamarhumXV'
                     showbutton={true}
                     />
                </div>
                
                <div className='carte2'>
                    <Card logo={logo2}
                    text={t("3.text9")} 
                    img={btl2} 
                    linkTo='/VanillaDzamaRhum'
                    showbutton={true}
                    />
                </div>
               
                <div className='carte3'>
                    <Card logo={logo3} text={t("3.text10")} 
                    text2={t("3.text11")} 
                    img={btl3} 
                    linkTo='/CuveeBlanche'
                    showbutton={true}
                    />
                </div>

                <div className='carte4'>
                    <Card logo={logo4}
                     text={t("3.text12")} 
                    text2={t("3.text13")} 
                    img={btl4} 
                    linkTo='/CuveeNoir'
                    showbutton={true}
                    />
                </div>

                <div className='carte5'>
                    <Card logo={logo5}
                     text={t("3.text14")} 
                    text2={t("3.text15")} 
                    img={btl5} 
                    linkTo='/VieuxRhum5'
                    showbutton={true}
                    />
                </div>

                <div className='carte6'>
                    <Card logo={logo6} 
                    text={t("3.text16")} 
                    text2={t("3.text17")} 
                    img={btl6}
                    linkTo='/VieuxRhum8'
                    showbutton={true} />
                </div>

                <div className='carte7'>
                    <Card logo={logo7}
                     text={t("3.text18")} 
                    text2={t("3.text19")} 
                    text3={t("3.text20")} 
                    img={btl7}
                    linkTo='/VanillaDzama'
                    showbutton={true}
                   />
                </div>

                <div className='carte8'>
                    <Card logo={logo8} 
                    text={t("3.text21")} 
                     img={btl8}
                    linkTo='/Lucien'
                    showbutton={true}
                   />
                </div>

                <div className='carte9'>
                    <Card logo={logo9} 
                     text={t("3.text22")} 
                    text2= {t("3.text23")} 
                    img={btl9}
                    linkTo='/NosyBe'
                    showbutton={true}
                   />
                </div>
            
                <div className='carte10'>
                    <Card logo={logo10} 
                    text={t("3.text24")} 
                    img={btl10}
                    linkTo='/Tsingy'
                    showbutton={true}
                   />
                </div>

                <div className='carte11'>
                    <Card logo={logo11} 
                    text={t("3.text25")} 
                    img={btl11}
                    linkTo='/NosyBeBlanc'
                    showbutton={true}
                   />
                </div>
                
                <div className='carte12'>
                    <Card logo={logo12} 
                    text={t("3.text26")} 
                    img={btl12}
                    linkTo='/VieuxRhum3'
                    showbutton={true}
                   />
                </div>
                
                <div className='carte13'>
                    <Card logo={logo13} 
                    text={t("3.text27")} 
                    text2={t("3.text28")} 
                    img={btl13}
                    linkTo='/VieuxRhum6'
                    showbutton={true}
                   />
                </div>

                <div className='carte14'>
                    <Card logo={logo14} 
                    text={t("3.text29")} 
                    text2={t("3.text30")} 
                    img={btl14}
                    linkTo='/VieuxRhum1998'
                    showbutton={true}
                   />
                </div>


             </div>

             <Footer/>
             </div>}
        
             </div>
        </>
    )
}
export default Product