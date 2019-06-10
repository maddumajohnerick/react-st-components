import styled from 'styled-components';

import { setColor, lightGrey, setSize, setFontSize, lightenDarkenColor } from './variables';

export const STInput = styled.input`
  border: 1px solid ${({error, theme}) => error ? setColor('danger', theme.tones) : lightGrey};
  border-radius: ${({theme}) => theme.flat ? 0 : 3}px;
  height: ${({size}) => setSize(size)}px;
  font-size: ${({size}) => setFontSize(size)}rem;
  font-weight: 300;
  width: 100%;
  padding: 0px 8px;
  box-shadow: none;
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