import './css/App.css'
//import Navigation from './components/navigation';
import Landing from './components/landing';
import About from './components/about';
import Experience from './components/experience';
import Skills from './components/skills';
import Contact from './components/contact';
import Testimonial from './components/testimonial';
//import Process from './components/process';

function App() {
  return (
    <>
      <main>
          <Landing/>
          <About/>
          <Skills/>
          <Experience/>
          {/**<Process/>**/}
          <Testimonial/>
          <Contact/>
      </main>
    </>
  )
}

export default App
