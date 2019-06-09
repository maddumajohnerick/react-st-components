import styled from 'styled-components';

import { bgColor, lightGrey, setSize, setFontSize, lightenDarkenColor } from './variables';

export const STInput = styled.input`
  border: 1px solid ${({error}) => error ? bgColor['danger'] : lightGrey};
  border-radius: 3px;
  height: ${({size}) => setSize(size)}px;
  font-size: ${({size}) => setFontSize(size)}em;
  font-weight: 300;
  width: 100%;
  padding: 0px 8px;
  box-shadow: none;
  transition: .2s;

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({error}) => lightenDarkenColor(bgColor[error ? 'danger' : 'primary'], 110)};
  }

  :disabled{
    cursor: not-allowed;
    pointer-events: auto !important;
    background-color: #ececec;
  }
`;