import React from "react";
import TestSample from "../components/Experiment/TestSample";
import { connect } from "react-redux";

const Test = props => (
  <div>
    <TestSample />
    Hello world
  </div>
);

export default connect()(Test);
