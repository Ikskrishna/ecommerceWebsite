import React from 'react'
import {useNavigate} from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa";
import {motion} from "framer-motion"

const BackButton = () => {

    const navigate = useNavigate()

  return (
    <>
      <motion.button 
        className='w-8'
        whileHover={{scale:1.10}}
        onClick={()=>navigate(-1)}
      >
         <h1><FaArrowLeft className='text-xl' /></h1>
      </motion.button>
    </>
  )
}

export default BackButton
