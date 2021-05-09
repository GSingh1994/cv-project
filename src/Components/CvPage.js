import mailIcon from "../assets/mail.svg";
import gitHubIcon from "../assets/github.svg";
import locationIcon from "../assets/location.svg";
const uniqid = require("uniqid");

const CvPage = ({ headerState, expState, eduState }) => {
  return (
    <div className="CvPage">
      <div className="cv-header">
        <h1>{headerState.name}</h1>

        <div className="personal-info">
          <img src={gitHubIcon} alt="gitHub icon" /> {headerState.website}
        </div>

        <div className="personal-info">
          <img src={locationIcon} alt="location icon" />
          {headerState.address}
        </div>

        <div className="personal-info">
          <img src={mailIcon} alt="mail icon" />
          {headerState.email}
        </div>
      </div>

      <div className="cv-body">
        <div className="summary">{headerState.summary}</div>
        <h1>Work History</h1>
        {expState.map((exp) => (
          <div key={uniqid()} className="cv-experience">
            <div>
              <div>{exp.startJob} -</div>
              <div>{exp.endJob}</div>
            </div>

            <div>
              <div className="bold">{exp.employer}</div>
              <div>{exp.jobTitle}</div>
            </div>

            <div className="cv-location">
              <div>{exp.city},</div>
              <div>{exp.province}</div>
            </div>
          </div>
        ))}
        <h1>Education</h1>
        {eduState.map((edu) => (
          <div key={uniqid()} className="cv-education">
            <div>
              <div>{edu.startSchool}</div>
              <div>{edu.endSchool}</div>
            </div>

            <div>
              <div className="bold">{edu.school}</div>
              <div>{edu.degree}</div>
            </div>
            <div className="cv-location">
              <div>{edu.city},</div>
              <div>{edu.province}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CvPage;
{
  /* <div>Job duties:{exp.jobDuties}</div> */
}
