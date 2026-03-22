import React from 'react'
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    
   <footer className="flex justify-center items-center  bg-gray-700 text-white mt-20 py-10">
    <div className="border-t border-gray-700 my-6">

        
        <p className="text-gray-500 text-md">
          © {new Date().getFullYear()} Krishnaraj. All rights reserved.
        </p>
    </div>
    </footer>
  )
}

export default Footer;