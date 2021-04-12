import React, { Component } from "react";
import Header from "./Header";
import Experience from "./Experience";
import Education from "./Education";
const uniqid = require("uniqid");

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lastName: "",
      website: "",
      address: "",
      employer: "",
      jobTitle: "",
      startJob: "",
      endJob: "",
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
    const { totalExp, totalSchool } = this.state;
    return (
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
    );
  }
}

export default Form;
