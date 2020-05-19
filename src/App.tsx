import './index.scss';
import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
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

const Nav = styled.nav`
  >ul{
    display: flex;
    li{
    width: 33.3%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 0;
    }
  }
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
        <Nav>
          <ul>
            <li>
              <Link to="/tags">标签</Link>
            </li>
            <li>
              <Link to="/money">记账</Link>
            </li>
            <li>
              <Link to="/statistics">统计</Link>
            </li>
          </ul>
        </Nav>
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