import './App.css';
import {createGlobalStyle} from "styled-components";
import TestTemplate from "./components/TestTemplate";
import Home from "./pages/Home";
import {Route, Switch} from "react-router-dom";
import About from "./pages/About";
import QuestionList from "./pages/QuestionList";
import React from "react";
import Result from "./pages/Result";
import {TestProvider} from "./components/TestContext";


function App() {
  return (
      <TestProvider>
          <GlobalStyle/>
          <TestTemplate>
              <Route path="/" exact={true} component={Home} />
              <Switch>
                  <Route path="/question" component={QuestionList}/>
                  <Route path="/about" component={About} />
                  <Route path="/result" component={Result}/>
              </Switch>
          </TestTemplate>
      </TestProvider>
  );
}

export default App;


const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    text-align: center;
    background: #f4ebe4;
  }
`;