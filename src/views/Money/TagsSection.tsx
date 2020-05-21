import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  background-color: white;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  >ol{
  display: flex;
  flex-wrap: wrap;
    >li{
      background-color: #ddd;
      border-radius: 16px;
      margin: 12px 0 8px 16px;
      padding: 2px 1em;
      text-align: center;
      font-size: 14px;
      &.selected{
        background-color: red;
      }
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
  const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const addTag = () => {
    const newTag = window.prompt('请输入新增的标签:');
    if (newTag !== null) {setTags([...tags, newTag]);}
  };
  const toggleTag = (tag: string) => {
    const index = selectedTags.indexOf(tag);
    if (index >= 0) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li key={tag}
              onClick={() => {toggleTag(tag);}}
              className={selectedTags.indexOf(tag) >= 0 ? 'selected' : ''}
          >{tag}</li>
        )}
      </ol>
      <button onClick={addTag}>新增标签</button>
    </Wrapper>
  );
};


export {TagsSection};