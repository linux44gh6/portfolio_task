
const Service = ({img,title,description}) => {
    return (
        <div className="w-[20%]">
            <img src={img} alt="" />
            <h1 className="text-3xl font-bold">{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default Service;