import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Navbar from '../components/Acceuil/Navbar'
import Footer from '../components/Acceuil/Footer'
import './css/Mention.css'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import 'aos/dist/aos.css'
import AOS from 'aos';

function Mention() {

  const [show,setShow]=useState(false)
  const {t}=useTranslation();

  useEffect(()=>{
    AOS.init({
      duration:2000,
      easing: 'ease-in-out',
    });
     },[])

     const [mois,setMois]=useState("");
     const [annee,setAnnee]=useState("");

     const navigate=useNavigate();  

     const [errormois,setErrormois]=useState(false);
     const [errorannee,setErrorannee]=useState(false);
     const[no,setNo]=useState(false)
      
     const date = new Date();
     const moisActuel = date.getMonth() + 1; // Ajoutez 1 car les mois vont de 0 à 11
    
     const correspondanceMois = {
       "Janvier": 1, "Février": 2, "Mars": 3, "Avril": 4, "Mai": 5, "Juin": 6,
       "Juillet": 7, "Août": 8, "Septembre": 9, "Octobre": 10, "Novembre": 11, "Décembre": 12
     };
     
     const indexMois = correspondanceMois[mois];
     const anneeActuelle = new Date().getFullYear();
    
     const annees = Array.from({ length: anneeActuelle - 1899 }, (_, index) => anneeActuelle - index);

     const calcul=(e)=>{
      e.preventDefault();

  
       if (indexMois===undefined){
      setErrormois(true);
      }
      if (annee===""){
          setErrorannee(true);
      }

      if (indexMois!==undefined && annee!="")
      {
        setErrormois(false);
        setErrorannee(false);

        let age=anneeActuelle-annee;
        if (indexMois>moisActuel)
        {age--;}
  
        if (age >=18)
        {
          navigate('/Home')
        }else{
          setNo(true);
        }
        
      }

     
     }


  return (
    <>
      <div className='container'>
        {!show && 
        <div>
          <div className='Csection1 c1' data-aos="zoom-in-left">
                <div className='Hsection c'>
                    <div className='text4 text40'>
                        <div className='text-login'>Confirmez votre age</div>
                        {no && <div className='error majeur'> L'accès à cette section est réservé aux utilisateurs majeurs</div>}

                        <div className='form-login'>
                            <form onSubmit={calcul}>

                              <div className='div-block'>
                              <div> <label>Mois de naissance</label></div> 
                             {errormois && <div className='error'>Veuillez remplir votre mois de naissance *</div>} 
                              <div><select onChange={(e) => setMois(e.target.value)}>
                                    <option ></option>
                                    <option value="Janvier">Janvier</option>
                                    <option value="Février">Février</option>
                                    <option value="Mars">Mars</option>
                                    <option value="Avril">Avril</option>
                                    <option value="Mai">Mai</option>
                                    <option value="Juin">Juin</option>
                                    <option value="Juillet">Juillet</option>
                                    <option value="Août">Août</option>
                                    <option value="Septembre">Septembre</option>
                                    <option value="Octobre">Octobre</option>
                                    <option value="Novembre">Novembre</option>
                                    <option value="Décembre">Décembre</option>
                                  </select></div>
                                </div>

                                  <div className='div-block'>
                                   <div>  <label>Année de naissance</label></div>
                                   {errorannee && <div className='error'>Veuillez remplir votre année de naissance *</div>}
                                   <div>   
                                   <select onChange={(e) => setAnnee(e.target.value)}>
                                    <option></option>
                                  {annees.map((a, index) => (
                                      <option key={index} value={a}>
                                        {a}
                                      </option>
                                    ))}
                                  </select>
                                    </div>
                                  </div>
                                 <button className='btn-login' type='submit'>Envoyer</button>
                            </form>
                        </div>
                    </div>
                </div>
          </div>
        </div>}
      </div>
  </>
  )
}

export default Mention