import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Navbar from '../components/Acceuil/Navbar'
import Footer from '../components/Acceuil/Footer'
import './css/Histoire.css'
import { Link } from 'react-router-dom'
import icone1 from '../images/Histoire/icon1.png'
import img1 from '../images/Histoire/img1.jpg'
import logo1 from '../images/Histoire/medal1.png'
import logo2 from '../images/Histoire/medal2.png'
import logo3 from '../images/Histoire/medal3.png'
import logo4 from '../images/Histoire/medal4.png'
import { useTranslation } from 'react-i18next'
import 'aos/dist/aos.css'
import AOS from 'aos';

function Histoire() {
  const {t}=useTranslation();
  const [show,setShow]=useState(false)

  const [videoVisible, setVideoVisible] = useState(false);
  const toggleVideo = () => {
    setVideoVisible(!videoVisible);
  }
  useEffect(()=>{
    AOS.init({
      duration:2000,
      easing: 'ease-in-out',
    });
     },[])

     useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

  return (
    <>
    <div className='container'>

    <Navbar show={show} setShow={setShow} lng={false}/>
    {!show && <div>
    <div className='Hsection'>
        <div className='Hsect1'>
          <h1 data-aos="fade-down-right" data-aos-duration="1500">{t("1.notre")}</h1>
          <h2 data-aos="fade-down-right" data-aos-duration="1500" >{t("1.histoire")}</h2>

          <div className='text2'data-aos="fade-right" > {t("2.text1")}
          <br/>  <br/> {t("2.text2")} </div>
        </div>

        <div className='Hsect2'>
          <div className='Hsect20'>
          <div className='Hsect21' data-aos="fade-left">
              <Link to="/Prix" className='divlink'>
                  <h3>{t("2.text3")}</h3>
                  <div className='divlinktext'>  {t("2.text4")}
                  <br/> <br/>
                  <span className='link'>{t("2.savoirplus")}</span>    
                  </div>
              </Link>
          </div>

          <div className='Hsect22' >
            <Link to="/Prix" className='divlink'>
                  <h3>{t("2.text5")}</h3>
                  <div className='divlinktext'>  {t("2.text6")}
                  <br/> <br/>
                  <span className='link'>{t("2.savoirplus")}</span>    
                  </div>
              </Link>
          </div>
          </div>
          <div className='Hsect23'>
               {/* <Link to="../images/histoire.mp4" className='divlink'> </Link>*/} 
                <img src={icone1} className='icn1'   onClick={toggleVideo}/>
                <span className='video'>{t("2.text7")}</span>
                {/*   {videoVisible && (
                  <video controls width="460" height="360">
                    <source src="../images/histoire.mp4" type="video/mp4" />
                    Votre navigateur ne prend pas en charge la lecture de vidéos.
                  </video>
                )} */} 
            

          </div>
        </div>
        </div>

        <div className='Hsection'>
            <div>
              <img src={img1} className='image1' />
            </div>
            <div  className='text3 ' data-aos="zoom-in" >
            {t("2.text8")}
              </div>
        </div>

        <div className='Hsection' >
            <div  className='text4 ' data-aos="zoom-in">
              <h2> {t("2.text9")},</h2>
              {t("2.text10")}
            </div>
        </div>
    
        <div className='Hsection H1'>
          <div className='text5' data-aos="fade-right" >
          {t("2.text11")}
          </div>
            <div  className='text6' data-aos="fade-left" >
            {t("2.text12")}
              <br/> {t("2.text13")}
            </div>
        </div>

        <div className='Hsection H1 H2'>
          <div className='text7'  data-aos="fade-right">
          <h2>26  {t("2.text5")}</h2>
          {t("2.text14")} </div>

            <div>
              <div  className='logoflex' data-aos="fade-down-left">
                <div> <img src={logo1} className='logo'/></div>
                <div> <img src={logo2} className='logo'/></div>
                <div> <img src={logo3} className='logo'/></div>
                <div> <img src={logo4} className='logo'/></div>
              </div>
              <Link to="/Prix" className='lien3'>  {t("2.text15")} </Link>
            </div>
        </div>

         <div className='Hsection'>
            <div  className='text4 texte ' data-aos="zoom-in">
              
            <h2>{t("2.text16")} </h2>
            <h3> {t("2.text17")}</h3>
                
            {t("2.text18")} <br/> <br/>
            {t("2.text19")}  </div>
                      </div>

              <div className='section4' data-aos="zoom-in" >
              <Link to="/product" className='card4Lien'> <span className='lien1'> {t("1.Voir")}</span>
              <br/> <span className='lien2'> {t("1.produits")}</span></Link>
              </div>

          <Footer/>   </div> }
        
    </div>
    </>
  )
}

export default Histoire