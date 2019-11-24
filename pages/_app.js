import { Provider } from "react-redux";
import App from "next/app";
import React from "react";

import Page from "../components/Page";
import withReduxStore from "../lib/with-redux-store";

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        <Page>
          <Component {...pageProps} />
        </Page>
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
