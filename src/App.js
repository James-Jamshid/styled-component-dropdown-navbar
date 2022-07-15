import React from "react";

import { useSelector } from "react-redux";
import { Route, Routes } from "react-router";

import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout/Layout";

import { GlobalStyles } from "./styles/globalStyles";
import { darkTheme, lightTheme } from "./styles/theme";

const App = () => {
  const { theme } = useSelector((state) => state.ui);
  const currentTheme = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />

      <>
        <Layout>
          <Routes>
            <Route exact path="/"></Route>
          </Routes>
        </Layout>
      </>
    </ThemeProvider>
  );
};

export default App;
