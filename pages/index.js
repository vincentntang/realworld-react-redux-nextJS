import React from "react";
import Banner from "../components/Home/Banner";
import Tags from "../components/Home/Tags";
import Articles from "../components/Home/Articles";
import MainView from "../components/Home/MainView";

const Home = props => (
  <div className="home-page">
    <Banner />
    <div className="container page">
      <div className="row">
        <div className="col-md-9">
          <MainView />
          <Articles />
        </div>

        <div className="col-md-3">
          <div className="sidebar">
            <p>Popular Tags</p>
            <Tags />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
