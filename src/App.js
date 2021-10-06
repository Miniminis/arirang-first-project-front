import './App.css';
import {createGlobalStyle} from "styled-components";
import TestTemplate from "./components/TestTemplate";
import Home from "./pages/Home";
import {Route, Switch} from "react-router-dom";
import QuestionList from "./pages/QuestionList";
import React from "react";
import Result from "./pages/Result";
import {TestProvider} from "./components/TestContext";


function App() {

    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function(event) {
        window.history.go(1);
    };

    return (
      <TestProvider>
          <GlobalStyle/>
          <TestTemplate>
              <Switch>
                  <Route path="/" exact={true} component={Home} />
                  <Route path="/question" component={QuestionList}/>
                  <Route path="/result" component={(props) => <Result {...props} /> }/>
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
  
  a {
    text-decoration: none;
    color: black;
  }
  
`;