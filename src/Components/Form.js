import { useState } from "react";
import Header from "./Header";
import Experience from "./Experience";
import Education from "./Education";
import CvPage from "./CvPage";

const Form = () => {
  const [headerState, setheaderState] = useState([]);
  const headerValues = (values) => {
    setheaderState({ ...values });
  };

  const [expState, setExpState] = useState([]);
  const experienceValues = (values) => {
    setExpState(values);
  };

  const [eduState, setEduState] = useState([]);
  const educationValues = (values) => {
    setEduState(values);
  };

  return (
    <div className="Form">
      <div className="nes-container with-title">
        <span className="title">Personal details</span>
        <Header headerValues={headerValues} />
      </div>

      <div className="nes-container with-title">
        <span className="title">Work Experience</span>
        <Experience experienceValues={experienceValues} />
      </div>

      <div className="nes-container with-title">
        <span className="title">Education</span>
        <Education educationValues={educationValues} />
      </div>

      <div>
        <CvPage
          headerState={headerState}
          expState={expState}
          eduState={eduState}
        />
      </div>
    </div>
  );
};

export default Form;
