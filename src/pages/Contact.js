import React, { useEffect,useRef } from 'react'
import { useState } from 'react'
import Navbar from '../components/Acceuil/Navbar'
import Footer from '../components/Acceuil/Footer'
import './css/Contact.css'
import icone1 from '../images/Contact/icone1.png'
import icone2 from '../images/Contact/icone2.png'
import icone3 from '../images/Contact/icone3.png'
import yes from '../images/Contact/yes.svg'
import fail from '../images/Contact/fail.svg'
import axios from 'axios'
import emailjs from '@emailjs/browser';

import { useTranslation } from 'react-i18next'

import 'aos/dist/aos.css'
import AOS from 'aos';

function Contact() {

  const {t}=useTranslation();
  const [show,setShow]=useState(false)

  const form = useRef(); //Pour manipuler le DOM(STOCKER DONNÉES)

  const [modal,setModal]=useState(false)
  const [modal2,setModal2]=useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  useEffect(()=>{
    AOS.init({
      duration:2000,
      easing: 'ease-in-out',
    });
     },[])

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_od8seb5', 'template_50bmyws', form.current, 'lkTsi4cF-Kp3J1c7Y')
      .then((result) => { 
        setModal(!modal);
      }, (error) => {
        setModal2(!modal2);
      });
  };

  useEffect(() => {
    if (modal) {
      const modalTimeout = setTimeout(() => {
        setModal(false);
      }, 1000);
      
      return () => {
        clearTimeout(modalTimeout);
      };
    }
  }, [modal]);

useEffect(()=>{
  if(modal2){
    const modal2Timeout=setTimeout(()=>{
      setModal2(false);
    },1000);

    return ()=>{
      clearTimeout(modal2Timeout)
    }
  }
},[modal2])


  return (
    <>

    <div className='container'>

   <Navbar show={show} setShow={setShow}/>
  
    {!show && <div>
    <div className='Csection1'>
        <h1  data-aos="zoom-in" data-aos-duration="1500">Contact</h1>

        {modal &&(
                        <div> 
                          <div className='overlay-m'></div>
                          <div className='modal-content-body-m'>
                            <div className='message-modal'>
                              <img src={yes}/>   
                              <h2>Message envoyé</h2>    
                            </div>             
                          </div>
                          </div>
        )}

        {modal2 &&(
                        <div> 
                          <div className='overlay-m'></div>
                          <div className='modal-content-body-m'>
                            <div className='message-modal'>
                              <img src={fail}/>   
                              <h2>Vérifier votre connexion </h2>    
                            </div>             
                          </div>
                          </div>
        )}

        <div className='Csection2'>

            <div className='sect1'  data-aos="zoom-in" >
                <h2>{t("5.text1")}</h2>

                <form ref={form} onSubmit={sendEmail}>
                <div className='divinput'>      
                  <label >{t("5.text2")}<span className='etoile'>*</span>
                  </label>  <br/>
                  <input type='text' name='name'/>        
                </div>

                <div className='divinput'>
                  <label>{t("5.text3")} <span className='etoile'>*</span></label>  <br/>
                  <input type='email' name='email'/>        
                </div>
                
                <div className='divinput'>
                  <label>{t("5.text4")}<span className='etoile'>*</span></label>  <br/>
                  <textarea rows={6} cols={50} name='message'/>        
                </div>

                <div className='divinput accepter'>
                  <div><input type='checkbox' value="cochee"/></div>
                  <div> <label> {t("5.text5")}<span className='etoile'>*</span></label> </div>
               </div>
                
                <div className='divinput'>
                  <input type='submit' value={t("5.text9")}  />       
                </div>   
                </form>                 
            </div>

            <div className='sect2' data-aos="zoom-in-left" >
                <div className='sect21'>
                    <div className='divinput2'> 
                        <h1>{t("5.text6")}</h1>
                      
                        <div className='accepter2'>
                          <div><img src={icone1} className='icn'/></div>
                          <div className='sect2text'>{t("5.text7")}</div>      
                        </div>

                        <div className='accepter2'>
                          <div><img src={icone2} className='icn'/></div>
                          <div className='sect2text'> </div>      
                        </div>

                        <div className='accepter2'>
                          <div><img src={icone3} className='icn'/></div>
                          <div className='sect2text'>dirum@dzama.mg</div>      
                        </div>
                    </div>
                </div>

                <div className='sect22'>
                     <div className='divinput2'> 
                     <h1>Madagascar</h1>
                      
                      <div className='accepter2'>
                        <div><img src={icone1} className='icn'/></div>
                        <div className='sect2text'>{t("5.text8")} </div>      
                      </div>

                      <div className='accepter2'>
                        <div><img src={icone2} className='icn'/></div>
                        <div className='sect2text'>+261 20 22 612 43  </div>      
                      </div>

                      <div className='accepter2'>
                        <div><img src={icone3} className='icn'/></div>
                        <div className='sect2text'>exportmada@dzama.mg </div>      
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

    <Footer/>
    </div> }

  </div>
    </>
  )
}

export default Contact


