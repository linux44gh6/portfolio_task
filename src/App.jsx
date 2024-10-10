

import AboutSection from './Compponents/AboutSection/AboutSection'
import Intro from './Compponents/IntroSection/Intro'
import NavBar from './Compponents/NavBar/NavBar'
import ProjectSection from './Compponents/ProjectSection/ProjectSection'
import ServiceSection from './Compponents/ServiceSection/ServiceSection'
import TogetherDesign from './Compponents/TogetherDesign/TogetherDesign'
import Slider from './Shared/Slider/Slider'
function App() {
  return (
    <div className='max-w-[1300px] mx-auto'>
    <NavBar></NavBar>
    <Intro></Intro>
    <AboutSection/>
    <ServiceSection/>
    <ProjectSection/>
    <Slider/>
    <TogetherDesign/>
    </div>
  )
}

export default App
