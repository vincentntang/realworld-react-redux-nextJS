import React, { Component } from 'react';
import Head from "./Head";
import Navbar from "./Navbar";
import Footer from "./Footer"

class Page extends Component {
  render() {
    return (
      <div>
        <Head/>
        <Navbar/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default Page;