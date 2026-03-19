import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
       initial={{y: -50, opacity:0}}
       animate={{y:0, opacity:1}}
       className="fixed w-full bg-black/40 backdrop-blur-md text-white flex justify-between px-10 py-4"
    >
        <h1 className='font-bold text-xl'>KRISHNARAJ</h1>

        <div className='space-x-6'>  
            <a href='#projects'>Projects</a>
            <a href='#contact'>Contact</a>

            <a href='/resume.pdf'>
                <button className='bg-blue-500 px-4 py-1 rounded'>
                  Resume
                </button>
            </a>
        </div>
    </motion.nav>
  );
}

export default Navbar;