import {motion} from 'framer-motion';
import { FaCode, FaDatabase, FaServer, FaTools } from "react-icons/fa";
import {HiOutlineGlobeAlt} from 'react-icons/hi'

 
function Skill(){
  return(
    <section id='skills' className='py-20 pt-20 text-center '>
      
      <h2 className=' inline-block transition cursor-pointer text-3xl font-bold inline-block hover:text-red-500 '>Tech Skills</h2>

       
      <div className=' max-w-6xl mx-auto px-10  mt-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      <motion.div className=' bg-white p-6 border rounded-2xl 
      shadow-md 
      hover:shadow-xl hover:-translate-y-2 hover:scale-105 
      hover:shadow-[0_10px_25px_rgba(34,197,94,0.4)]
      transition duration-300
      flex flex-col gap-4'
      >
        <div className='flex items-center gap-3'>
        <HiOutlineGlobeAlt className='bg-green-500 text-3xl p-1 rounded-xl text-gray-800 '/>
        <h1 className='font-bold'>Web & Ui</h1>
        </div>
        <div id='hover' className='  flex flex-wrap gap-3 text-gray-500 text-sm font-semibold'>
          <p className='shadow rounded p-2 bg-green-50'>REACT.JS</p>
          <p className='shadow rounded p-2 bg-green-50'>HTML5</p>
          <p className='shadow rounded p-2 bg-green-50'>CSS</p>
          <p className='shadow rounded p-2 bg-green-50'>JAVASCRIPT</p>
          <p className='shadow rounded p-2 bg-green-50'>TAILWIND CSS</p>
          
        </div>
      </motion.div>

      <motion.div className=' bg-white p-6 border rounded-2xl 
      shadow-md 
      hover:shadow-xl hover:-translate-y-2 hover:scale-105
      hover:shadow-[0_10px_25px_rgba(59,130,246,0.4)] 
      transition duration-300
      flex flex-col gap-4'>
        <div className='flex align-top gap-3'>
        <FaServer className='bg-blue-500 text-3xl p-1 rounded-xl text-gray-800 '/>
        <h1 className='font-bold'>Backend & APIs</h1>
        </div>
        <div id='hover' className='font-semibold text-sm text-md flex text-gray-500  flex-wrap gap-2 '>
          
          <p className='shadow rounded p-2 bg-blue-50'>NODE.JS</p>
          <p className='shadow rounded p-2 bg-blue-50'>REST APIs</p>
          <p className='shadow rounded p-2 bg-blue-50'>JSON</p>
          
        </div>
      </motion.div>

       <motion.div className='bg-white p-6 border rounded-2xl 
      shadow-md 
      hover:shadow-xl hover:-translate-y-2 hover:scale-105 
      hover:shadow-[0_10px_25px_rgba(234,179,8,0.4)]
      transition duration-300
      flex flex-col gap-4'>
        <div className='flex align-top gap-3'>
        <FaDatabase className='bg-yellow-500 text-3xl p-1 rounded-xl text-gray-800 '/>
        <h1 className='font-bold'>Data Management</h1>
        </div>
        <div id='hover' className='font-semibold text-sm text-md flex text-gray-500  flex-wrap gap-2 '>
          
          <span className="shadow rounded px-3 py-1 bg-yellow-50">SQL</span>
          <span className="shadow rounded px-3 py-1 bg-yellow-50">MySQL</span>
          <span className="shadow rounded px-3 py-1 bg-yellow-50">SQLite</span>
          <span className="shadow rounded px-3 py-1 bg-yellow-50">MongoDB</span>

          
        </div>
      </motion.div>

       <motion.div className='bg-white p-6 border rounded-2xl 
      shadow-md 
      hover:shadow-xl hover:-translate-y-2 hover:scale-105 
      hover:shadow-[0_10px_25px_rgba(168,85,247,0.4)]
      transition duration-300 hover:purple-500
      flex flex-col gap-4'>
        <div className='flex align-top gap-3'>
        <FaTools className='bg-gradient-to-r from-red-500 to-purple-500 bg-purple-500 text-3xl p-1 rounded-xl text-gray-800 '/>
        <h1 className='font-bold'>Tools & Platform</h1>
        </div>
        <div id='hover' className='font-semibold text-sm text-md flex text-gray-500  flex-wrap gap-2 '>
          
          <p className='shadow rounded p-2 bg-purple-50'>NODE.JS</p>
          <p className='shadow rounded p-2 bg-purple-50'>REST APIs</p>
          <p className='shadow rounded p-2 bg-purple-50'>JSON</p>
          
        </div>
      </motion.div>

       <motion.div className='bg-white p-6 border rounded-2xl 
      shadow-md 
      hover:shadow-xl hover:-translate-y-2 hover:scale-105 
      hover:shadow-[0_10px_25px_rgba(99,102,241,0.4)]
      transition duration-300
      flex flex-col gap-4'>
        <div className='flex align-top gap-3'>
        <FaCode className="bg-gradient-to-r from-indigo-500 to-purple-500 text-3xl p-2 rounded-xl text-white" />
        <h1 className='font-bold'>IDE</h1>
        </div>
        <div id='hover' className='font-semibold text-sm text-md flex text-gray-500  flex-wrap gap-2 '>
          
          <p className='shadow rounded p-2 bg-blue-50'>VS CODE</p>
          
          
        </div>
      </motion.div>

      
        </div>
    </div>
    </section>
  );
}

export default Skill;