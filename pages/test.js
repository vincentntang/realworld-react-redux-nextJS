import React from "react";
import TestSample from "../components/Experiment/TestSample";
import { connect } from "react-redux";

class Test extends React.Component {
  render() {
    return (
      <h1>
        <TestSample />
        Random text
      </h1>
    );
  }
}

export default connect()(Test);
