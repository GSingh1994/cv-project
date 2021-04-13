import React, { Component } from "react";
import Header from "./Header";
import Experience from "./Experience";
import Education from "./Education";
import CvPage from "./CvPage";
const uniqid = require("uniqid");

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Gagandeep Singh",
      website: "gagansingh.dev",
      address: "123 st. mary's rd.",
      email: "singh.gagandeep0034@gmail.com",
      employer: "A&W Restaurant",
      jobTitle: "Supervisor",
      startJob: "2021-08",
      endJob: "2021-08",
      jobDuties: "",
      totalExp: [],
      startSchool: "",
      endSchool: "",
      totalSchool: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.addExp = this.addExp.bind(this);
    this.addSchool = this.addSchool.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  addExp() {
    let exp = () => (
      <Experience key={uniqid()} handleChange={this.handleChange} />
    );
    this.setState((preState) => ({
      totalExp: [...preState.totalExp, exp()],
    }));
  }
  addSchool() {
    let school = () => (
      <Education key={uniqid()} handleChange={this.handleChange} />
    );
    this.setState((preState) => ({
      totalSchool: [...preState.totalSchool, school()],
    }));
  }
  render() {
    const {
      name,
      website,
      address,
      email,
      employer,
      jobTitle,
      startJob,
      endJob,
      totalExp,
      totalSchool,
    } = this.state;
    return (
      <>
        <div className="Form">
          <h2 className="heading">Personal details</h2>
          <Header handleChange={this.handleChange} />

          <h2 className="heading">Work Experience</h2>
          <div>{totalExp}</div>
          <button onClick={this.addExp}>newJob</button>

          <h2 className="heading">Education</h2>
          <div>{totalSchool}</div>
          <button onClick={this.addSchool}>newSchool</button>
        </div>
        <div>
          <CvPage
            name={name}
            website={website}
            address={address}
            email={email}
            employer={employer}
            jobTitle={jobTitle}
            startJob={startJob}
            endJob={endJob}
          />
        </div>
      </>
    );
  }
}

export default Form;
