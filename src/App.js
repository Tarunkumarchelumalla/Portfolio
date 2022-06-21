
import './App.css';
import About from './Components/About';
import Contact from './Components/contact';
import { Home } from './Components/Home';
import { Navbar } from './Components/Navbar';
import Skills from './Components/Skills';

function App() {
  return (<>
  <Navbar/>
  <Home/>
  <About/>
  <Skills/>
  <Contact/>
  </>
 

  );
}

export default App;
