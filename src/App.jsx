

import AboutSection from './Compponents/AboutSection/AboutSection'
import Intro from './Compponents/IntroSection/Intro'
import NavBar from './Compponents/NavBar/NavBar'
import ProjectSection from './Compponents/ProjectSection/ProjectSection'
import ServiceSection from './Compponents/ServiceSection/ServiceSection'
function App() {
  return (
    <div className='max-w-6xl mx-auto'>
    <NavBar></NavBar>
    <Intro></Intro>
    <AboutSection/>
    <ServiceSection/>
    <ProjectSection/>
    </div>
  )
}

export default App
