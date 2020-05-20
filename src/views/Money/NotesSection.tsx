import styled from 'styled-components';

const NotesSection = styled.section`
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
export {NotesSection}