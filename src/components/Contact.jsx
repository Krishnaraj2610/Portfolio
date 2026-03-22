import { FaMobile } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'

function Contact(){
    return(
        <section id='contact' className=" py-20 text-center ">

            <h2 className="inline-block cursor-pointer hover:text-red-500 text-3xl font-bold">Contact</h2>
       <div className='max-w-6xl mx-auto px-10   flex justify-center items-center gap-6'>
            <div className="mt-6 flex flex-col items-center justify-center w-72 p-6 bg-white rounded-3xl border shadow-md 
    hover:-translate-y-2 hover:shadow-[0_10px_25px_rgba(59,130,246,0.3)] 
    transition duration-300 cursor-pointer">
                <MdEmail className='text-5xl '/>
                <h1 className='font-bold text-gray-500 '>EMAIL</h1>
                <h3 className='font-semibold'>krishnaraj2610@gmail.com</h3>
            </div>

            <div className='flex flex-col w-72  mt-6 p-5 rounded-3xl items-center hover:scale-105 border ronded-3xl shadow-xl '>
                <FaMobile className='text-5xl '/>
                <h1 className='font-bold mt-2 text-gray-500 '>MOBILE</h1>
                <h3 className='font-semibold'>8072130179</h3>
            </div>
        </div>    
            
        </section>
    );
}

export default Contact;