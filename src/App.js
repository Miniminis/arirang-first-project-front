import './App.css';
import {createGlobalStyle} from "styled-components";
import TestTemplate from "./components/TestTemplate";
import Home from "./pages/Home";
import {Route} from "react-router-dom";
import About from "./pages/About";
import TestProvider from "./components/TestProvider";
import Question from "./pages/Question";
import React from "react";
import Result from "./pages/Result";

const GlobalStyle = createGlobalStyle`
  body {
    background: #f4ebe4;
  }
`;

function App() {
  return (
      <TestProvider>
          <GlobalStyle/>
          <TestTemplate>
              <Route path="/" exact={true} component={Home} />
              <Route path="/about" component={About} />
              <Route path="/question" component={Question}/>
              <Route path="/result" component={Result}/>
          </TestTemplate>
      </TestProvider>
  );
}

export default App;
