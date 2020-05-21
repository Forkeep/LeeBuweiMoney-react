import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import {TagsSection} from './Money/TagsSection';
import {NotesSection} from './Money/NotesSection';
import {TypeSection} from './Money/TypeSection';
import {NumberPadSection} from './Money/NumberPadSection';


const MyLayout = styled(Layout)`
  border: 1px solid red;
`;


function Money() {
  return (
    <MyLayout>
      <TagsSection/>
      <NotesSection/>
      <TypeSection/>
      <NumberPadSection/>
    </MyLayout>
  );
}

export default Money;