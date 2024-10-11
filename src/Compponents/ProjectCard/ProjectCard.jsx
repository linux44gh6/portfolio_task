import project1_img1 from '../../assets/project1-img-1.png'
import project1_img2 from '../../assets/project1-img-2.png'
const ProjectCard = ({img1,img2,title,subTitle}) => {
    return (
        <div>
            <div className='relative bg-orange-200 w-[100%] h-[110vh] lg:h-[76.1vh] rounded-2xl'>
                <div className=''>
                <img className='h-[400px] translate-x-40' src={img1} alt="" />
                </div>
                <div className=' absolute top-16 left-9'>
                <img className='h-[400px]' src={img2} alt="" />
                </div>
            </div>
            <p className='text-xl text-primary mt-1'>{title}</p>
            <h1 className='text-2xl font-semibold'>{subTitle}</h1>
        </div>
    );
};

export default ProjectCard;