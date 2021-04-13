import "./App.scss";
import Form from "./Components/Form";
// import CvPage from "./Components/CvPage";

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
        {/* <CvPage /> */}
      </div>
    );
  }
}

export default App;
