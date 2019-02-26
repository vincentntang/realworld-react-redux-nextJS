// A sample test file
import React from "react";
import { connect } from "react-redux";

const Test = props => <h2>Hello world</h2>;

function mapStateToProps(state) {
  const { count } = state;
  return { count };
}

export default connect(mapStateToProps)(Test);
