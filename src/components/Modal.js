import React, { useState } from 'react'
import { useEffect } from 'react';
import  './Modal.css'
import { motion } from 'framer-motion';

function Modal() {



  return (
    <>
  
       <div className='main'>

       <motion.div
      className="card"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h3>Titre de la carte</h3>
      <p>Description de la carte.</p>
    </motion.div>
        <button className='btn-first'>Send</button>
        <button className='btn-first'>Cancel</button>
       </div>
    </>
     
  )
}

export default Modal