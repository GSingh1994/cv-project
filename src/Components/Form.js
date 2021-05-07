import { useState } from "react";
import Header from "./Header";
import Experience from "./Experience";
import Education from "./Education";
import CvPage from "./CvPage";
const uniqid = require("uniqid");

const intialInputs = {
  name: "",
  website: "",
  address: "",
  email: "",
  employer: "",
  jobTitle: "",
  startJob: "",
  endJob: "",
};

const Form = () => {
  const [values, setValues] = useState(intialInputs);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const addExperience = () => {
    console.log(exp);
  };

  const expElement = <Experience handleChange={handleChange} values={values} />;
  const [exp, setExp] = useState([expElement]);

  return (
    <div className="Form">
      <h2 className="heading">Personal details</h2>
      <Header handleChange={handleChange} values={values} />
      <h2 className="heading">Work Experience</h2>
      <Experience handleChange={handleChange} values={values} />;
      <button onClick={addExperience}>newJob</button>
      <div>
        <CvPage
          name={values.name}
          website={values.website}
          address={values.address}
          email={values.email}
          employer={values.employer}
          jobTitle={values.jobTitle}
          startJob={values.startJob}
          endJob={values.endJob}
        />
      </div>
    </div>
  );
};

export default Form;
