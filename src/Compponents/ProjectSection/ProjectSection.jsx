import SectionHeader from "../../Shared/imgeDesinge/SectionHeader/SectionHeader";
import CustomTabs from "../TabPanel/TabPanel";

const ProjectSection = () => {
    return (
        <div className="mt-20 px-4">
            <SectionHeader
            title={"My Projects"}
            description={"Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus"}
            />

          <div className="mt-10">
          <CustomTabs/>
          </div>
        </div>
    );
};

export default ProjectSection;