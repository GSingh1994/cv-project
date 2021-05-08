import "./App.scss";
import { useState } from "react";
import Header from "./Components/Header";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import CvPage from "./Components/CvPage";

const App = () => {
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
    <div className="App">
      <Header headerValues={headerValues} />
      <Experience experienceValues={experienceValues} />
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

export default App;
