import React from "react";
import TestSample from "../components/Experiment/TestSample";
import { connect } from "react-redux";
import PersonList from "../components/Experiment/PersonList";
import AxiosConduit from "../components/Experiment/AxiosConduit";

class Test extends React.Component {
  render() {
    return (
      <h1>
        Random text
        <PersonList />
        <AxiosConduit />
      </h1>
    );
  }
}

export default connect()(Test);
