import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.section`
  background-color: white;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  >ol{
  display: flex;
    >li{
      background-color: #ddd;
      border-radius: 16px;
      margin: 12px 0 8px 16px;
      padding: 2px 1em;
      text-align: center;
      font-size: 14px;
    }
  }
  >button{
    margin: 12px 0 8px 16px;
    color: #666;
    background: none;
    border: none;
    border-bottom: 1px solid #666;
    padding: 1px 2px;
  }
`;

const TagsSection: React.FunctionComponent = () => {
  return (
    <Wrapper>
      <ol>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ol>
      <button>新增标签</button>
    </Wrapper>
  )
};


export {TagsSection};