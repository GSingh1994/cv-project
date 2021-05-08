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
      <h2 className="heading">Personal details</h2>
      <Header headerValues={headerValues} />
      <h2 className="heading">Work Experience</h2>
      <Experience experienceValues={experienceValues} />
      <div className="heading">Education</div>
      <Education educationValues={educationValues} />
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
