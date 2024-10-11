import muhir2 from '../../assets/muahir2nd.png'
import ImgDesigne from '../../Shared/imgeDesinge/imgDesigne';
import ProgressBar from "@ramonak/react-progress-bar";
const AboutSection = () => {
    return (
        <div className='flex flex-col lg:flex-row items-center justify-between gap-10 mt-10 px-4'>
            <div>
        <ImgDesigne muamir={muhir2}/>
            </div>
            <div>
                <h1 className='text-5xl font-bold'>About Me </h1>
                <p className='text-lg'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
               <div className='space-y-5'>
               <h1 className='text-xl font-bold pb-1'>UX</h1>
                <ProgressBar bgColor='#FD6F00' completed={90} customLabel=' ' />
                <h1 className='text-xl font-bold pb-1'>Website design</h1>
                <ProgressBar bgColor='#FD6F00' completed={85} customLabel=' ' />
                <h1 className='text-xl font-bold pb-1'>App design</h1>
                <ProgressBar bgColor='#FD6F00' completed={90} customLabel=' ' />
                <h1 className='text-xl font-bold pb-1'>Graphic design</h1>
                <ProgressBar bgColor='#FD6F00' completed={80} customLabel=' ' />

              
               </div>
            </div>
        </div>
    );
};

export default AboutSection;