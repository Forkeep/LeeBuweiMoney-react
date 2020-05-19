import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
//不使用import是因为防止TreeShaking
require('icons/money.svg');
require('icons/labels.svg');
require('icons/statistics.svg');


const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  >ul{
    display: flex;
    li{
      width: 33.3%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 4px 0;
      flex-direction: column;
      .icon{
        width: 1.6em;
        height: 1.6em;
      }
    }
  }
`;

const Nav = ()=>{
  return (
    <NavWrapper>
      <ul>
        <li>
          <svg className='icon' fill='' >
            <use xlinkHref='#labels' />
          </svg>
          <Link to="/tags">标签</Link>
        </li>
        <li>
          <svg className='icon' fill='' >
            <use xlinkHref='#money' />
          </svg>
          <Link to="/money">记账</Link>
        </li>
        <li>
          <svg className='icon' fill='' >
            <use xlinkHref='#statistics' />
          </svg>
          <Link to="/statistics">统计</Link>
        </li>
      </ul>
    </NavWrapper>
  )
};

export default Nav