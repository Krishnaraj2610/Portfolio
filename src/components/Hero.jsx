import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <section className='h-screen flex flex-col justify-center items-center text-center text-white bg-gradient-to-br from-black to-grey-900'>

      <motion.h1
       initial={{opacity:0,y:40}}
       animate={{opacity:1,y:0}}
       className='text-5l font-bold'
      >
       Hi, I'm Krishnaraj
      </motion.h1>

      <motion.p
        initial={{opacity:0}}
        animate={{opacity:1}}
        className='mt-4 text-grey-400'
      >
       MERN Stack Developer | React Specialist
      </motion.p>

      <motion.div className='mr-6 space-x-4'>
        <a href='#projects'>
          <button className='bg-blue-500 px-5 py-2 rounded'>
            View Projects
          </button>
        </a>

        <a href='/resume.pdf' download>
          <button className='border px-5 py-2 rounded'>
           Resume
          </button>
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;