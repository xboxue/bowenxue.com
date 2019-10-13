import App from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Nav } from "../components/Nav";
import { theme } from "../styles/theme";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }
`;

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <ThemeProvider theme={theme}>
          <>
            <Nav />
            <>
              <GlobalStyle />
              <Component {...pageProps} />
            </>
          </>
        </ThemeProvider>
      </>
    );
  }
}

export default MyApp;
