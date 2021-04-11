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
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  render() {
    // const { name } = this.state;

    return (
      <form className="Form">
        <Header handleChange={this.handleChange} />
        <Experience handleChange={this.handleChange} />
      </form>
    );
  }
}

export default Form;
