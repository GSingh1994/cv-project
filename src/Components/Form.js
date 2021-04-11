import React, { Component } from "react";
import Experience from "./Experience";
import Header from "./Header";

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
      totalExp: 0,
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
    this.setState((state) => ({
      totalExp: (state.totalExp += 1),
    }));
  }
  render() {
    const { totalExp } = this.state;
    let element = [];
    for (let i = 0; i < totalExp; i++) {
      element.push(<Experience key={i} handleChange={this.handleChange} />);
    }
    return (
      <div className="Form">
        <Header handleChange={this.handleChange} />
        <h2>Work Experience</h2>
        <div>{element}</div>
        <button onClick={this.addExp}>Add</button>

        {/* <Experience handleChange={this.handleChange} /> */}
      </div>
    );
  }
}

export default Form;
