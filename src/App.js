import "./App.css";
import Header from "./Components/Header";

import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
