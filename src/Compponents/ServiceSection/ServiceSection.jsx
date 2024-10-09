import Service from "../../Shared/Service/Service";
import SectionHeader from "../../Shared/imgeDesinge/SectionHeader/SectionHeader";
import service1 from '../../assets/service-1.png'
import service2 from '../../assets/service-2.png'
import service3 from '../../assets/service-3.png'
import service4 from '../../assets/service-4.png'
const ServiceSection = () => {
    return (
        <div className="mt-20 px-4">
            <SectionHeader
            title={"Services"}
            description={"Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"}
            />

            <div className="flex justify-between mt-10">
            <Service
            img={service1}
            title={'UI/UX'}
            description={'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum'}
            />
            <Service
            img={service2}
            title={'Web Design'}
            description={'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum'}
            />
            <Service
            img={service3}
            title={'App Design'}
            description={'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum'}
            />
            <Service
            img={service4}
            title={'Graphic Design'}
            description={'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum'}
            />
            </div>
        </div>
    );
};

export default ServiceSection;