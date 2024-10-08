import { Button } from "@mui/material";
import muamir from '../../assets/muahirFull.png'
const Intro = () => {
    return (
        <div className="flex justify-between mt-10">
            <div className="">
                <h1>Hi I am</h1>
                <h1>Muhammad Umair</h1>
                <h1><span>UI & UX</span><span>Designer</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
                <Button sx={{backgroundColor:'#FD6F00',color:"white"}} variant="container">Hire Me</Button>
            </div>
            <div>
            <div className="relative w-[438px] h-[468px] rounded-full mx-auto">

 
 <img
    className="w-full h-full object-cover rounded-full absolute z-40 ps-1 pe-4 pb-1 overflow-hidden "
    src={muamir}
    alt="Person"
  />
  <div className="w-[420px] h-[420px] border-4 rounded-full border-orange-200 absolute top-12 left-1 left z-0 overflow-hidden">
 </div>

  <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-[374px] h-[73px] bg-orange-500 opacity-60 z-50"></div>
</div>

            </div>
        </div>
    );
};

export default Intro;