import { Button } from "@mui/material";
import SectionHeader from "../../Shared/imgeDesinge/SectionHeader/SectionHeader";

const TogetherDesign = () => {
    return (
        <div className=" mt-20">
            <SectionHeader title={'Lets Design Together'} description={'Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium'}/>

            <div className="w-[50%] mx-auto flex flex-col md:flex-row lg:flex-row items-center justify-center gap-6 mt-10">
                <input className="py-1 ps-1 pe-36 outline-none border border-gray-400 rounded-lg" type="email" placeholder="Enter You Email" name="email" id="" />

                <Button sx={{backgroundColor:"#FD6F00",color:"white"}} variant="container">Contact Me</Button>
            </div>
            
        </div>
    );
};

export default TogetherDesign;