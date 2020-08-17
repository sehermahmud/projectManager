import React from "react";
import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Theme from "../src/ui/Theme";
import Header from "../src/ui/Header";
import Footer from "../src/ui/Footer";

export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>Seher Development</title>
        </Head>
        <ThemeProvider theme={Theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Header />
          <Component {...pageProps}/>
        </ThemeProvider>
        <Footer />
      </React.Fragment>
    );
  }
}
