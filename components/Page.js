import React, { Component } from "react";
import Head from "./Head";
import Navbar from "./Navbar";
import Footer from "./Footer";

class Page extends Component {
  render() {
    return (
      <React.Fragment>
        <Head />
        <Navbar />
        {this.props.children}
        <Footer />
      </React.Fragment>
    );
  }
}

export default Page;
