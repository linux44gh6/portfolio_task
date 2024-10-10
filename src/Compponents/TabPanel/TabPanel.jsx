import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import project1_img1 from '../../assets/project1-img-1.png'
import project1_img2 from '../../assets/project1-img-2.png'
import project2_img1 from '../../assets/project2-img-1.png'
import project2_img2 from '../../assets/project2-img-2.png'
import project3_img1 from '../../assets/project3-img-1.png'
import project3_img2 from '../../assets/project3-img-2.png'
const CustomTabs = () => {
  const [index, setIndex] = useState(2); // Set the default to 2, which corresponds to the 3rd tab (index starts from 0)

  const handleToOpen = (idx) => {
    setIndex(idx);
  };

  const getTabClassName = (tabIndex) => {
    return index === tabIndex
      ? "bg-[#FD6F00] text-lg py-1 px-3 font-semibold rounded-lg text-white outline-none"
      : "border border-gray-400 text-lg py-1 px-3 font-semibold rounded-lg";
  };

  return (
    <Tabs selectedIndex={index} onSelect={(idx) => setIndex(idx)}>
      <TabList className={'flex justify-center gap-6'}>
        <Tab onClick={() => handleToOpen(0)} className={getTabClassName(0)}>All</Tab>
        <Tab onClick={() => handleToOpen(1)} className={getTabClassName(1)}>UI/UX</Tab>
        <Tab onClick={() => handleToOpen(2)} className={getTabClassName(2)}>Web Design</Tab>
        <Tab onClick={() => handleToOpen(3)} className={getTabClassName(3)}>App Design</Tab>
        <Tab onClick={() => handleToOpen(4)} className={getTabClassName(4)}>Graphic Design</Tab>
      </TabList>

      <TabPanel>
        <h2>All Content</h2>
      </TabPanel>
      <TabPanel>
        <h2>UI/UX Content</h2>
      </TabPanel>
      <TabPanel>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20'>
        <ProjectCard
        img1={project1_img2}
        img2={project1_img1}
        title={"Web Design"}
        subTitle={"AirCalling Landing Page Design "}
        />
        <ProjectCard
        img1={project2_img2}
        img2={project2_img1}
        title={"Web Design"}
        subTitle={"Business Landing Page Design"}
        />
        <ProjectCard
        img1={project3_img2}
        img2={project3_img1}
        title={"Web Design"}
        subTitle={"Ecom Web Page Design"}
        />
        </div>
      </TabPanel>
      <TabPanel>
        <h2>App Design Content</h2>
      </TabPanel>
      <TabPanel>
        <h2>Graphic Design Content</h2>
      </TabPanel>
    </Tabs>
  );
};

export default CustomTabs;
