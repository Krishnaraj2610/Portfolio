import { FaGithub } from "react-icons/fa";
import projects from "../data/projects";
import {motion} from 'framer-motion';

function Projects() {
    return (
      <section id='projects' className="py-20 min-h-screen  text-black text-center">

        <h2 className="inline-block hover:text-blue-500 text-3xl font-bold">Things I’ve Built</h2>

        <div className=" grid md:grid-cols-2 gap-8 px-10 mt-10">

            {projects.map((projects, index)=>(
             <motion.div
              key={index}
              whileHover={{scale:1.05}}
              className="border  p-6 rounded-3xl hover:shadow-xl hover:-translate-y-2 hover:scale-105
      hover:shadow-[0_10px_25px_rgba(59,130,246,0.4)]  shadow-lg"
             >
                <h3 className="text-xl font-bold inline-block cursor-pointer hover:text-blue-500">{projects.title}</h3>
                <p className="mt-2 text-gray-400">{projects.desc}</p>

              <div className="mt-4 flex items-center justify-center space-x-10">
                <a href={projects.live } target='_blank' className="hover:scale-105 bg-blue-500 p-2 text-white rounded-2xl"> Live</a>
                <a href={projects.github} target='_blank' className="hover:scale-105 flex gap-2 items-center bg-blue-500 p-2 rounded-2xl text-white"> <FaGithub/> GitHub</a>
              </div>  
             </motion.div>
            ))
            }
        </div>
      </section>
    );
}
export default Projects;