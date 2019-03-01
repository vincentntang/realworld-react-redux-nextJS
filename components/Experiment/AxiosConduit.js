import React from "react";
import axios from "axios";

// const API_ROOT = "https://conduit.productionready.io/api";

// export default axios.create({
//   baseURL: API_ROOT
// });

const root = axios.create({
  baseURL: "https://conduit.productionready.io/api"
});

export default class AxiosConduit extends React.Component {
  state = {
    articles: []
  };
  componentDidMount() {
    root.get(`/articles`).then(res => {
      console.log(res);
      // this.setState({ articles: res.data });
    });
  }

  render() {
    return (
      <ul>
        {this.state.articles.map(article => (
          <li key={article.id}>{article.name}</li>
        ))}
      </ul>
    );
  }
}
