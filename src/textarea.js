import styled from 'styled-components';

import { bgColor, lightGrey, setFontSize, lightenDarkenColor } from './variables';

export const STTextarea = styled.textarea`
  border: 1px solid ${({error}) => error ? bgColor['danger'] : lightGrey};
  border-radius: 3px;
  width: 100%;
  max-width: 100%;
  font-size: ${({size}) => setFontSize(size)}em;
  font-weight: 300;
  padding: ${({size}) => setFontSize(size) / 2}em 8px;
  box-shadow: none;
  display: block;
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