import React, { Component } from "react";
import Experience from "./Experience";
import Header from "./Header";
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
      duties: [],
      totalExp: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.addExp = this.addExp.bind(this);
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
  render() {
    const { totalExp } = this.state;
    return (
      <div className="Form">
        <Header handleChange={this.handleChange} />

        <h2>Work Experience</h2>
        <div>{totalExp}</div>
        <button onClick={this.addExp}>Add</button>
      </div>
    );
  }
}

export default Form;
