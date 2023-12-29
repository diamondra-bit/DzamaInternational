import React, { useState } from 'react'
import '../css/Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg' 
import icone from '../../images/menu.png' 
import close from '../../images/close.svg' 
import french from '../../images/Products/french.svg'
import usa from '../../images/Products/usa.svg'

import { useTranslation } from 'react-i18next'


function Navbar({show,setShow,lng}) {

  const { t,i18n }=useTranslation();
  const[showlng,setShowlng]=useState(true);
  const [currentLang, setCurrentLang] = useState("fr");

  const handleLangChange=(event)=>{
    const selectedLang = event.target.value;
    setCurrentLang(selectedLang);
    setShowlng(!showlng);
    console.log(event.target.value)
    i18n.changeLanguage(event.target.value)
  }

  const navbarshow=()=>{
    setShow(!show)
  }
  
  return (
    <>
    <div className='navbar'>
        <div>
          <img src={logo} className="img" />  </div>
        
        <div className='div-menu'>
        {lng&&
          <div className='div-select'>  
            {showlng &&<img src={french}/>} {!showlng && <img src={usa}/> }
            <select onChange={handleLangChange} value={currentLang}>
              <option value='fr'>FR</option>
              <option value='en'>EN</option>
            </select>
          </div>
          }
              <div className='menu'>
                <h1 >Menu</h1> 
  
                {show ? (<img src={close} className="icone close" onClick={navbarshow} />):(  <img src={icone} className="icone" onClick={navbarshow} />)} 
              </div> 

          
        </div>
        
      </div>

        {show && 
          <div className='navbar-link'>
          <ul>
            <li><Link to="/Home">{t("menu.acceuil")}</Link></li>
            <li><Link to="/histoire">{t('menu.histoire')}</Link></li>
            <li><Link to="/product">{t('menu.produits')}</Link></li>
            <li><Link to="/contact">{t('menu.contact')}</Link></li>
           
          </ul>
          </div>
 }
          
     
    
    </>
  )
}

export default Navbar
