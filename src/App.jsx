import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">
      < Navbar className='flex-col justify-center'/> 
      < Hero className='flex-col'/> 
      < Skills className='flex-col'/> 
      < Projects className='flex-col'/>
      <Contact/>
    </div>
  );
}

export default App;