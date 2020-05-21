import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.section`
  >.screen{
    padding: 20px 20px ;
    background-color: white;
    text-align: right;
    font-size: 32px;
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
                inset 0 5px 5px -5px rgba(0,0,0,0.25);
  }
  .pad{
    >button{
      width: 25%;
      font-size: 14px;
      height: 48px;
      border: none;
      float: left;
      &:nth-child(1){
        background:#f2f2f2;
      }
      &:nth-child(2),
      &:nth-child(5) {
        background:#E0E0E0;
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background:#D3D3D3;
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background:#C1C1C1;
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background:#B8B8B8;
      }
      &:nth-child(12) {
        background:#9A9A9A;
      }
      &:nth-child(14) {
        background:#A9A9A9;
      }
    }
    .ok{
    height: 96px;
    float: right;
    }
    .zero{
      width: 50%;
    }
    
     
  }
`;
const NumberPadSection: React.FunctionComponent = () => {
  return (
    <Wrapper>
      <div className='screen'>100</div>
      <div className='pad clearfix'>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className='ok'>OK</button>
        <button className='zero'>0</button>
        <button className='dot'>.</button>
      </div>
    </Wrapper>
  );
};


export {NumberPadSection};