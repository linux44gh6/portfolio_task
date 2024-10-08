import { Button } from "@mui/material";
import muamir from '../../assets/muahirFull.png'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Intro = () => {
    return (
        <div className="flex justify-between mt-10 px-4">
            <div className=" space-y-2">
                <h1 className="text-3xl  font-bold">Hi I am</h1>
                <h1 className="text-4xl font-bold text-primary">Muhammad Umair</h1>
                <h1 className="text-7xl font-extrabold"><span>UI & UX</span> <br /><span className="ms-44">Designer</span></h1>
                <p className="text-lg w-[510px] pt-4">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
                <Button sx={{backgroundColor:'#FD6F00',color:"white"}} variant="container">Hire Me</Button>
            </div>
            <div>
            <div className="relative w-[438px] h-[468px] rounded-full mx-auto">

 
 <img
    className="w-full h-full object-cover rounded-full absolute z-40 ps-1 pe-4 pb- overflow-hidden "
    src={muamir}
    alt="Person"
  />
  <div className="w-[420px] h-[420px] border-4 rounded-full border-orange-200 absolute top-12 left-1 left z-0 overflow-hidden">
 </div>

  <div className="absolute top-11 left-1/2 transform -translate-x-1/2 w-[374px] h-[73px] bg-orange-500 opacity-60 z-50"></div>
 
</div>
<div className="flex justify-center gap-3 mt-2">
    <FaFacebook className="size-8"></FaFacebook>
    <FaTwitter className="size-8"/>
    <FaInstagram className="size-8"/>
    <FaLinkedin className="size-8"/>
    
  </div>
            </div>
        </div>
    );
};

export default Intro;