

import AboutSection from './Compponents/AboutSection/AboutSection'
import Footer from './Compponents/Footer/Footer'
import Intro from './Compponents/IntroSection/Intro'
import NavBar from './Compponents/NavBar/NavBar'
import ProjectSection from './Compponents/ProjectSection/ProjectSection'
import ServiceSection from './Compponents/ServiceSection/ServiceSection'
import Testomonials from './Compponents/Testomonials/Testomonials'
import TogetherDesign from './Compponents/TogetherDesign/TogetherDesign'
function App() {
  return (
    <div className='max-w-[1300px] mx-auto'>
    <NavBar></NavBar>
    <Intro></Intro>
    <AboutSection/>
    <ServiceSection/>
    <ProjectSection/>
    <Testomonials/>
    <TogetherDesign/>
    <Footer/>
    </div>
  )
}

export default App
