import styled from 'styled-components';

import { setColor, lightGrey, setSize, setFontSize, lightenDarkenColor } from './variables';

export const STSelect = styled.select`
  border: 1px solid ${({error, theme}) => error ? setColor('danger', theme.tones) : lightGrey};
  border-radius: 3px;
  width: 100%;
  height: ${({size}) => setSize(size)}px;
  padding: 0px 8px;
  font-size: ${({size}) => setFontSize(size)}em;
  font-weight: 300;
  transition: .2s;

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({error, theme}) => lightenDarkenColor(setColor(error ? 'danger' : 'primary', theme.tones), 110)};
  }

  :disabled{
    cursor: not-allowed;
    pointer-events: auto !important;
    background-color: #ececec;
  }
`;

export const STItem = styled.option``;