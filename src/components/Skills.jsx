import {motion} from 'framer-motion';

const Skills = ['React', 'Node js', 'MongoDB', 'Express js', 'JavaScript']; 
  
function Skill(){
  return(
    <section className='py-20 text-center bg-grey-900 text-white'>
      
      <h2 className='text-3xl font-bold'>Skills</h2>

       <div className='flex justify-center gap-6 mt-8 flex-wrap'>
        {Skills.map((Skills, index)=>(
          <motion.div
            key={index}
            whileHover={{scale:1.1}}
            className='bg-grey-800 px-6 py-3 rounded-lg shadow-lg'
          >
            {Skills}
          </motion.div>
        )
      )
      }
      </div>
    </section>
  );
}

export default Skill;