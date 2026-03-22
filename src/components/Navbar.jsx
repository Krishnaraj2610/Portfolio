import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
       initial={{y: -50, opacity:0}}
       animate={{y:0, opacity:1}}
       className="fixed w-full bg-white/40 backdrop-blur-md text-black flex justify-between px-10 py-4"
    >
        <h1 className='font-bold text-xl hover:text-blue-500 transition duration-300' >KRISHNARAJ</h1>

        <div className='space-x-6'>  
           
            <a href='#about' className='font-semibold hover:text-blue-500'>About</a>
            <a href='#skills' className='font-semibold hover:text-blue-500'>Skills</a>
            <a href='#projects' className='font-semibold hover:text-blue-500'>Projects</a>
            <a href='#contact' className='font-semibold hover:text-blue-500'>Contact</a>

            <a href='/Resume.pdf'>
                <button className='bg-blue-500 text-white px-4 py-1 rounded font-semibold'>
                  Resume
                </button>
            </a>
        </div>
    </motion.nav>
  );
}

export default Navbar;