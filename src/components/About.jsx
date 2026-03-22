import  {motion}from 'framer-motion'
import { FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";


const About = () => {
  return (
    <section id='about' className='display flex flex-col justify-center text-center'>
     <p className='text-gray-600 font-bold text-2xl'>Dive Into</p>
     <h1 className='w-fit mx-auto inline-block transition cursor-pointer font-bold text-5xl hover:text-red-500'>My Journey!</h1>
     
     <div whileHover={{scale:1.2}} className='dispaly mt-10 flex justify-center flex-wrap'>
        <motion.div 
           whileHover={{scale:1.05}} 
           className='border flex items-center flex-col gap-1 bg-white text-black mr-4 m-5 p-5 rounded-lg shadow-gray-500/30 shadow-2xl'
        >
            <FaGraduationCap className=" flex text-black-500 items-center gap-3 text-3xl" />
            <h1 className='font-bold '>Graduation</h1>
            <p className='text-black-500'>B.E Electrical And Electronics Enineering</p>
            <p className='font-semibold'>Karpagam College Of Engineering, Coimbatore</p>
        </motion.div>

        <motion.div 
            whileHover={{scale:1.05}}  
            className='border flex flex-col gap-1 items-center bg-white text-black mr-4 m-5 rounded-lg shadow-gray-500/30 shadow-2xl p-5'
        >
            <FaMapMarkerAlt className='text-black-500 text-2xl'/>
            <h1 className='font-bold'>Location</h1>
            <p className='font-semibold items-center'>Coimbatore, TamilNadu</p>
            
        </motion.div>
     </div>


    </section>
  );
}

export default About