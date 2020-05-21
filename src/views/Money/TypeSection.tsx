import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.section`
  >ul{
    background-color: #c4c4c4;
    display: flex;
    >li{
      padding: 16px 0;
      width: 50%;
      text-align: center;
      font-size: 24px;
      position: relative;
      &.selected::after{
        content: '';
        position: absolute;
        width: 100%;
        height: 6px;
        background-color: #333;
        left: 0;
        bottom: 0;
      }
     }
    }
`;

const TypeSection: React.FC = () => {
  return (
    <Wrapper>
      <ul>
        <li className='selected'>支出</li>
        <li>收入</li>
      </ul>
    </Wrapper>
  );
};

export {TypeSection};