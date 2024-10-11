import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import headerIcon from '../../assets/Subtract.svg'
const Footer = () => {
    return (
        <div className="mt-20">
            <footer className="footer footer-center text-base-content rounded p-10">
           <div className='flex gap-0'>
           <img className='size-10' src={headerIcon} alt="" />
           <h1 className=' ms-5 text-3xl text-gray-500'><span className='font-bold text-black'>M</span>umair</h1>
           </div>
  <nav className="grid grid-flow-col gap-4 font-semibold">
    <a className="link link-hover">Home</a>
    <a className="link link-hover">About Me</a>
    <a className="link link-hover">Service</a>
    <a className="link link-hover">Projects</a>
    <a className="link link-hover">Testimonials</a>
    <a className="link link-hover">Contact</a>
  </nav>
  <nav>
  <div className="flex justify-center gap-3 mt-2">
                    <FaFacebook className="size-4"></FaFacebook>
                    <FaTwitter className="size-4" />
                    <FaInstagram className="size-4" />
                    <FaLinkedin className="size-4" />

                </div>
  </nav>
  <aside className='bg-gray-600 w-full py-3'>
    <p className="font-semibold text-white "> © {new Date().getFullYear()} <span className="text-primary">Mumair</span> All Rights Reserved , Inc.</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;