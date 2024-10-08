import { AppBar, Button, Tab, Tabs, Toolbar } from '@mui/material';
import headerIcon from '../../assets/Subtract.svg'
const NavBar = () => {
    return (
        <div className='mt-4'>
            <AppBar position='static' sx={{background:"white"}} elevation={0}>
                <Toolbar>
                    <img src={headerIcon} alt="" />
                    <h1 className=' ms-5 text-3xl text-gray-500'><span className='font-bold text-black'>M</span>umair</h1>
                    <Tabs sx={{marginLeft:"auto"}}>
                        <Tab sx={{color:"black"}} label="Home" />
                        <Tab sx={{color:"black"}} label="About Me" />
                        <Tab sx={{color:"black"}} label="Service" />
                        <Tab sx={{color:"black"}} label="Projects" />
                        <Tab sx={{color:"black"}} label="Testimonials" />
                        <Tab sx={{color:"black"}} label="Contact" />
                    </Tabs>
                    <Button sx={{background:'#FD6F00'}} variant='contain'>Downlaod CV</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;