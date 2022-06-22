
import './App.css';
import About from './Components/About';
import Contact from './Components/contact';
import { Home } from './Components/Home';
import { Navbar } from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

function App() {
  return (<>
  <div >
  <Navbar/>
  <Home/>
  <About/>
  <Skills/>
  <Projects/>
  <Contact/>
  </div>
  </>
 

  );
}

export default App;
