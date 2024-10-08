
const ImgDesigne = ({muamir}) => {
    return (
        <div className="relative w-[438px] h-[468px] rounded-full mx-auto">

 
        <img
           className="w-full h-full object-cover rounded-full absolute z-40 ps-1 pe-4 pb- overflow-hidden "
           src={muamir}
           alt="Person"
         />
         <div className="w-[420px] h-[420px] border-4 rounded-full border-orange-200 absolute top-12 left-1 left z-0 overflow-hidden">
        </div>
       
         <div className="absolute top-11 left-1/2 transform -translate-x-1/2 w-[374px] h-[73px] bg-orange-500 opacity-60 z-50"></div>
        
       </div>
    );
};

export default ImgDesigne;