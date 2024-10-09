/* eslint-disable react/prop-types */

const SectionHeader = ({title,description}) => {
    return (
        <div>
            <h1 className="text-5xl text-center font-bold">{title}</h1>
            <p className="text-lg text-center w-[50%] mx-auto">{description}</p>
        </div>
    );
};

export default SectionHeader;