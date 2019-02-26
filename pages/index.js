import React from "react";
import Banner from "../components/Home/Banner";
import Tags from "../components/Home/Tags";
import MainView from "../components/Home/MainView";
import ArticleList from "../components/ArticleList";

const Home = props => (
  <div className="home-page">
    <Banner />
    <div className="container page">
      <div className="row">
        <div className="col-md-9">
          <MainView />
          <ArticleList />
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
