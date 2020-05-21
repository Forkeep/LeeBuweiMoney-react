import styled from 'styled-components';
import React, {useRef, useState} from 'react';

const Wrapper = styled.section`
  background-color: #f5f5f5;
  padding: 8px 20px;
  >label{
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    >span{
      font-size: 14px;
      flex-shrink: 0;
      color: #666;
    }
    >input{
      background-color: inherit;
      width: 100%;
      border: none;
      padding: 24px 8px;
    }
  }
`;


const NotesSection: React.FC = () => {
  const [note, setNote] = useState<string>('');
  const refInput = useRef<HTMLInputElement>(null);
  const freshNote = ()=>{
    if (refInput.current){
      setNote(refInput.current.value)
    }
  };

  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input type="text" placeholder='在这里添加备注'
               ref={refInput}
               defaultValue={note}
               onBlur={freshNote}
        />
      </label>
    </Wrapper>
  );
};
export {NotesSection};