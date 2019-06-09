import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle, STContainer, STRow, STColumn, STBadge, STButton, STButtonGroup, STInput, STInputGroup, STInputGroupText, STForm, STLabel,
  STTextarea, STSelect, STItem, STOptionsWrapper, STCheckbox, STRadio, STTable, STDropdown,
  STDropdownMenu, STDropdownItem, STDropdownButton } from './index';

import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live';

const docStyle = {
  whiteSpace: 'pre-wrap',
  border: '1px solid lightgray',
  padding: '8px',
  background: '#f3f3f3'
};

const spaceUtilClassesDocs = `Sample:
      <Label className="marb-0"> // Sets margin-bottom to 0px;
      <Label className="marb-sm-0"> // Sets margin-bottom to 0px only on specific breakpoint;

Usage:
      - <property><sides>-<breakpoint>-<amount>

Property:
      mar - margin
      pad - padding

Breakpoint:
      Refer to layout docs for breakpoint

Sides:
      t - top
      b - bottom
      l - left
      r - right
      y - top and bottom
      x - left and right
      leave as blank - all

Amount:
      0 - 5 
      Which values are multiples of 8
`;

const testAlignUtilClassesDocs = `Sample:
      <td className="text-right"> // Sets text-align to right;

Usage:
      - text-<position>

Position:
      - right, left, center or justify`;

const scope = { STContainer, STRow, STColumn, STBadge, STButton, STButtonGroup, STInput, STInputGroup, STInputGroupText, STForm, STLabel,
  STTextarea, STSelect, STItem, STOptionsWrapper, STCheckbox, STRadio, STTable, STDropdown,
  STDropdownMenu, STDropdownItem, STDropdownButton };

function Styled() {
  return (
    <>
      <STContainer>
        <STRow><h2>STLayout</h2></STRow>
      </STContainer>
    </>
  )
}

ReactDOM.render(<><GlobalStyle /><Styled /></>, document.getElementById('index'))