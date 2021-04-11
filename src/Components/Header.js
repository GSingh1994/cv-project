import React, { Component } from "react";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lastName: "",
      website: "",
      address: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  render() {
    // const { name, email } = this.state;

    return (
      <div className="header">
        <label htmlFor="name">Name:</label>
        <input name="name" onChange={this.handleChange} type="text" />

        <label htmlFor="website">Website:</label>
        <input name="website" onChange={this.handleChange} type="text" />

        <label htmlFor="address">address:</label>
        <input name="address" onChange={this.handleChange} type="text" />

        <label htmlFor="email">email:</label>
        <input type="email" name="email" onChange={this.handleChange} />
      </div>
    );
  }
}

export default Header;
