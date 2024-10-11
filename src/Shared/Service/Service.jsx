
const Service = ({img,title,description}) => {
    return (
        <div className="w-full md:w-[20%] lg:w-[20%]">
            <img src={img} alt="" />
            <h1 className="text-3xl font-bold">{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default Service;