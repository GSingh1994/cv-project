import { usePDF } from "@react-pdf/renderer";
import PdfCv from "./PdfCv";
import { useEffect } from "react";
import mailIcon from "../assets/mail.svg";
import gitHubIcon from "../assets/github.svg";
import locationIcon from "../assets/location.svg";
const uniqid = require("uniqid");

const CvPage = ({ headerState, expState, eduState, skillsState }) => {
  const [instance, updateInstance] = usePDF({
    document: (
      <PdfCv
        headerState={headerState}
        expState={expState}
        eduState={eduState}
        skillsState={skillsState}
      />
    ),
  });
  useEffect(() => {
    updateInstance();
  }, [headerState]);

  return (
    <div className="CvPage">
      <div className="mobile-nav">
        <button className="preview-btn">Preview</button>
        <a
          className="download-btn"
          href={instance.url}
          download={headerState.name}
        >
          <button>Download</button>
        </a>
      </div>

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
        <h1>Professinal Summary</h1>
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
              <div>{edu.startSchool} -</div>
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
        <h1>Skills</h1>
        <div className="cv-skills">
          {skillsState.map((skill) => (
            <ul key={uniqid()}>
              <li>{skill.skill}</li>
            </ul>
          ))}
        </div>
      </div>
      <div className="cv-footer">
        <div>{headerState.name}</div>
        <div>{headerState.email}</div>
        <div>1/1</div>
      </div>
    </div>
  );
};

export default CvPage;
