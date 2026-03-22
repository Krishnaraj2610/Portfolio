import {motion} from 'framer-motion'
import { FaDownload } from 'react-icons/fa';
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className='min-h-screen pt-20 flex mr-5 justify-center items-center text-center bg-white'>
      <motion.img 
      src="/photo.JPG"
      alt='Krishnaraj'
      whileHover={{scale:1.1}}
      className='w-80 h-80 rounded-full object-cover  mb-4 mr-2 ml-5 justify-left' />
      <div className='m-10'>
      <motion.h1
       initial={{opacity:0,y:40}}
       animate={{opacity:1,y:0}}
       className=' font-bold text-gray-500 text-2xl'
      >
       Hello!! I'm 
      </motion.h1>

      <motion.h1
       initial={{opacity:0,y:40}}
       animate={{opacity:1,y:0}}
       className='inline-block text-6xl font-bold text-black hover:text-red-500'
      >
       Krishnaraj
      </motion.h1>

      <motion.p
        initial={{opacity:0}}
        animate={{opacity:1}}
        className='mt-4 text-gray-600 font-bold mb-3  '
      >
       MERN Stack Developer | Frontend Developer | React Developer
      
      </motion.p>
          I’m Krishnaraj, an aspiring MERN Stack Developer with hands-on experience in building real-world projects. 
  I focus on creating scalable applications and delivering high-quality user experiences using React, Node.js, and modern web technologies.
      <motion.p>

      </motion.p>

      <motion.div className='mr-6 space-x-4 mt-10'>
        <a href='#projects'>
          <button className='bg-blue-600 text-white font-bold px-5 py-2 rounded-3xl hover:scale-105'>
            View Projects
          </button>
        </a>

        <a href='/Resume.pdf' download>
          <button 
            className='border font-bold bg-blue-600 text-white hover:scale-105 hover:bg-blue-600  px-5 py-2 rounded-3xl'
            whileHover={{scale:1.2}}
          >
           <div className='flex items-center'>
            Download CV
            <FaDownload className='ml-2 '/>
          </div> 
          
          </button>
        </a>
      </motion.div>
      </div>
    </section>
  );
}

export default Hero;