
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const CustomTabs = () => {
    const [index,setIndex]=useState(3)
    const handleToOpen=(idx)=>{
        setIndex(idx)
    }
  return (
    <Tabs>
      <TabList className={'flex justify-center gap-6'}>
        <Tab onClick={()=>handleToOpen(1)} className={index===1?"bg-[#FD6F00] text-lg py-1 px-3 font-semibold rounded-lg text-white":" border border-gray-400 text-lg py-1 px-3 font-semibold rounded-lg"}>All</Tab>
        <Tab onClick={()=>handleToOpen(2)} className={index===2?"bg-[#FD6F00] text-lg py-1 px-3 font-semibold rounded-lg text-white":" border border-gray-400 text-lg py-1 px-3 font-semibold rounded-lg"}>UI/UX</Tab>
        <Tab onClick={()=>handleToOpen(3)} className={index===3?"bg-[#FD6F00] text-lg py-1 px-3 font-semibold rounded-lg text-white":" border border-gray-400 text-lg py-1 px-3 font-semibold rounded-lg"}>Web Design</Tab>
        <Tab onClick={()=>handleToOpen(4)} className={index===4?"bg-[#FD6F00] text-lg py-1 px-3 font-semibold rounded-lg text-white":" border border-gray-400 text-lg py-1 px-3 font-semibold rounded-lg"}>App Design</Tab>
        <Tab onClick={()=>handleToOpen(5)} className={index===5?"bg-[#FD6F00] text-lg py-1 px-3 font-semibold rounded-lg text-white":" border border-gray-400 text-lg py-1 px-3 font-semibold rounded-lg"}>Graphic Design</Tab>
      </TabList>

      <TabPanel>
        <h2>All Content</h2>
      </TabPanel>
      <TabPanel>
        <h2>UI/UX Content</h2>
      </TabPanel>
      <TabPanel>
        <h2>Web Design Content</h2>
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
