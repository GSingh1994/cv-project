import "./App.scss";
import { useState, useEffect } from "react";
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

  //Check screen resize
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 1200;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
  }, [isMobile]);

  return (
    <div>
      <div className="nav">Easy CV</div>
      <div className={isMobile ? "container App" : "App"}>
        <div className="form">
          <Header headerValues={headerValues} />
          <Experience experienceValues={experienceValues} />
          <Education educationValues={educationValues} />
        </div>
        <div className="cv">
          <CvPage
            headerState={headerState}
            expState={expState}
            eduState={eduState}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
