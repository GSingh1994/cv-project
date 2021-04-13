import { ImMail4 } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";
import { TiLocationOutline } from "react-icons/ti";
const CvPage = ({
  name,
  website,
  address,
  email,
  employer,
  jobTitle,
  startJob,
  endJob,
}) => {
  return (
    <div className="CvPage">
      <div className="cv-header">
        <h1 className="name">{name}</h1>

        <div className="website">
          <AiFillGithub /> {website}
        </div>

        <div className="address">
          <TiLocationOutline />
          {address}
        </div>

        <div className="email">
          <ImMail4 />
          {email}
        </div>
      </div>

      <div className="cv-experience-section">
        <h1>Work Experience</h1>
        <div className="employer">{employer}</div>

        <div className="jobTitle">{jobTitle}</div>

        <div className="startJob">{startJob}</div>

        <div className="endJob">{endJob}</div>
      </div>
    </div>
  );
};

export default CvPage;
