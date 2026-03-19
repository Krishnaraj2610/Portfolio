import projects from "../data/projects";
import {motion} from 'framer-motion';

function Projects() {
    return (
      <section id='projects' className="py-20 bg-black text-white text-center">

        <h2 className="text-3xl font-bold">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8 px-10 mt-10">

            {projects.map((projects, index)=>(
             <motion.div
              key={index}
              whileHover={{scale:1.05}}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
             >
                <h3 className="text-xl font-bold">{projects.title}</h3>
                <p className="mt-2 text-gray-400">{projects.desc}</p>

              <div className="mt-4 space-x-4">
                <a href={projects.live } target='_blank'> Live</a>
                <a href={projects.Github} target='_blank'> GitHub</a>
              </div>  
             </motion.div>
            ))
            }
        </div>
      </section>
    );
}
export default Projects;