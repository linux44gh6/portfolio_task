import { Button } from "@mui/material";
import muamir from '../../assets/muahirFull.png'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import ImgDesigne from "../../Shared/imgeDesinge/imgDesigne";

const Intro = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row justify-between mt-10 lg:px-4 items-center">
            <div className=" space-y-2">
                <h1 className="text-3xl  font-bold">Hi I am</h1>
                <h1 className="text-4xl font-bold text-primary">Muhammad Umair</h1>
                <h1 className="text-7xl font-extrabold"><span>UI & UX</span> <br /><span className="ms-20 lg:ms-44">Designer</span></h1>
                <p className="text-lg w-full md:w-[510px] lg:w-[510px] pt-4">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
                <Button sx={{ backgroundColor: '#FD6F00', color: "white" }} variant="container">Hire Me</Button>
            </div>
            <div>
                {/* import reuseable component */}
                <ImgDesigne muamir={muamir} />

                <div className="flex justify-center gap-3 mt-2">
                    <FaFacebook className="size-6"></FaFacebook>
                    <FaTwitter className="size-6" />
                    <FaInstagram className="size-6" />
                    <FaLinkedin className="size-6" />

                </div>
            </div>
        </div>
    );
};

export default Intro;