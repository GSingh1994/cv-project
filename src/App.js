import "./App.scss";
import Form from "./Components/Form";

import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Form />
      </div>
    );
  }
}

export default App;
