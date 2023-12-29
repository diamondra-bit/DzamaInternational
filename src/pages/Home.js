import React, { useEffect } from 'react'
import { useState } from 'react'
import Navbar from '../components/Acceuil/Navbar'
import Second from '../components/Acceuil/Second'
import Third from '../components/Acceuil/Third'
import Fourth from '../components/Acceuil/Fourth'
import Five from '../components/Acceuil/Five'
import Six from '../components/Acceuil/Six'
import Footer from '../components/Acceuil/Footer'
import './css/Home.css'
import { Link } from 'react-router-dom'
import mada from '../images/mada.png'
import Img1 from '../images/Img1.png'
import Img2 from '../images/Img2.png'

import { useTranslation } from 'react-i18next'

function Home() {

  const {t}=useTranslation();
  const [show,setShow]=useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
    <div className='container'>
      <Navbar show={show} setShow={setShow} lng={true}/>
      {!show && 
      <div >
          <div className='main'>
            <div className='textmain'>
                <img src={mada} className='mada'/>
              
              <div className='texttitle' >
                <h1>FROM MADAGASCAR TO </h1>
                <h2 >THE WORLD</h2>
              </div>
            </div>
            <div className='about'>
              <h1>{t("1.qui")}</h1>

              <p>{t("1.raffinement")}</p>

            </div>
            
            <div className='imgDzama'> 
              <img src={Img1} className='img1'/>
              <img src={Img2} className='img2'/>
            </div>
          </div> 
    

          <Second/>
          
          <Third/>

          <Fourth/>

          <Five/>

          <Six/>

          <Footer/>
      </div>
    }
    </div>
    </>
  )
}

export default Home