import styled from 'styled-components';
import { NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';



const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  >ul{
    display: flex;
    li{
      width: 33.3%;
      a{
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
      .selected{
        color:red;
        .icon{
          fill:red;
        }
      }
    }
  }
`;

const Nav = ()=>{
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags" activeClassName='selected'>
            <Icon name={'labels'}/>
            标签
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName='selected'>
            <Icon name={'money'}/>
            记账
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName='selected'>
            <Icon name={'statistics'}/>
            统计
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  )
};

export default Nav