import React from "react";

const ArticlePreview = props => (
  <React.Fragment>
    <div className="article-preview">
      <div className="article-meta">
        <a href="profile.html">
          <img src="http://i.imgur.com/N4VcUeJ.jpg" />
        </a>
        <div className="info">
          <a href="" className="author">
            Albert Pai
          </a>
          <span className="date">January 20th</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart" /> 32
        </button>
      </div>
      <a href="" className="preview-link">
        <h1>
          The song you won't ever stop singing. No matter how hard you try.
        </h1>
        <p>This is the description for the post.</p>
        <span>Read more...</span>
      </a>
    </div>
    <div className="article-preview">
      <div className="article-meta">
        <a href="">
          <img src="http://i.imgur.com/N4VcUeJ.jpg" />
        </a>
        <div className="info">
          <a href="" className="author">
            Albert Pai
          </a>
          <span className="date">January 20th</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart" /> 32
        </button>
      </div>
      <a href="" className="preview-link">
        <h1>
          The song you won't ever stop singing. No matter how hard you try.
        </h1>
        <p>This is the description for the post.</p>
        <span>Read more...</span>
        <ul className="tag-list">
          <li className="tag-default tag-pill tag-outline">Music</li>
          <li className="tag-default tag-pill tag-outline">Song</li>
        </ul>
      </a>
    </div>
  </React.Fragment>
);

export default ArticlePreview;
