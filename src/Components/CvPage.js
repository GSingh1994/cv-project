import { ImMail4 } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";
import { TiLocationOutline } from "react-icons/ti";
const uniqid = require("uniqid");

const CvPage = ({ headerState, expState, eduState }) => {
  return (
    <div className="CvPage">
      <div className="cv-header">
        <h1 className="name">{headerState.name}</h1>

        <div className="website">
          <AiFillGithub /> {headerState.website}
        </div>

        <div className="address">
          <TiLocationOutline />
          {headerState.address}
        </div>

        <div className="email">
          <ImMail4 />
          {headerState.email}
        </div>
      </div>

      {expState.map((exp) => (
        <div key={uniqid()} className="cv-experience-section">
          <h1>Work Experience</h1>
          <div className="employer"> employer: {exp.employer}</div>

          <div className="jobTitle">jobTitle: {exp.jobTitle}</div>

          <div className="startJob">startJob: {exp.startJob}</div>

          <div className="endJob">endJob: {exp.endJob}</div>
          <div>Job duties:{exp.jobDuties}</div>
        </div>
      ))}
      {eduState.map((edu) => (
        <div key={uniqid()} className="cv-experience-section">
          <h1>Education</h1>
          <div> School: {edu.school}</div>

          <div>Degree: {edu.degree}</div>

          <div>Start date: {edu.startSchool}</div>

          <div>End date: {edu.endSchool}</div>
        </div>
      ))}
    </div>
  );
};

export default CvPage;
