import React from 'react'
import logo from '../../images/logo.svg' 
import fb from '../../images/Six/fb.png'
import tw from '../../images/Six/tw.png'
import inst from '../../images/Six/inst.png'
import '../css/footer.css'
import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function Footer() {
  const { t }=useTranslation();
  return (
    <>
          <div className='footer'>
            <div className=' logofooter'>
              <img src={logo} /> 
            </div>

            <div className='link'>
                <ul>
                  <li><Link to="/Home" className='linktext'>{t("menu.acceuil")}</Link></li>
                  <li><Link to="/histoire" className='linktext' >{t("menu.histoire")}</Link></li>
                  <li><Link to="/product" className='linktext'>{t("menu.produits")}</Link></li>
                  <li><Link to="/contact" className='linktext'>{t("menu.contact")}</Link></li>
                </ul>
            </div>
        </div>

        <div className='iconeall'>
            <Link to="https://www.facebook.com/rhumsdzamaOfficiel"><img src={fb} className='icn'/></Link>
            <Link to="https://twitter.com/i/flow/login?redirect_after_login=%2Fdzamarhum"><img src={tw} className='icn'/></Link>
            <Link to="https://www.instagram.com/"><img src={inst} className='icn insta'/></Link>
          </div>
        <div className=' lignefooter'></div>

        <p className='footertext'>{t("footer.text1")}</p>
    </>
  )
}

export default Footer