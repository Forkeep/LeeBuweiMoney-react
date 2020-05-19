import './index.scss';
import React from 'react';
import styled from 'styled-components';
import Nav from './components/Nav';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;



export default function BasicExample() {
  return (
    <Router>
      <Wrapper>
        <Main>
          <Switch>
            <Route path="/tags">
              <Tags/>
            </Route>
            <Route path="/money">
              <Money/>
            </Route>
            <Route path="/statistics">
              <Statistics/>
            </Route>
            <Redirect exact from='/' to='/money'/>
            <Route path="*">
              <NoMatch/>
            </Route>
          </Switch>
        </Main>
        <Nav/>
      </Wrapper>
    </Router>
  );
}

function Tags() {
  return (
    <div>
      <h2>标签</h2>
    </div>
  );
}

function Money() {
  return (
    <div>
      <h2>记账</h2>
    </div>
  );
}

function Statistics() {
  return (
    <div>
      <h2>统计</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      页面找不到404
    </div>
  );
}