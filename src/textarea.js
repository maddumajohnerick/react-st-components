import styled from 'styled-components';

import { setColor, lightGrey, setFontSize, lightenDarkenColor } from './variables';

export const STTextarea = styled.textarea`
  border: 1px solid ${({error, theme}) => error ? setColor('danger', theme.tones) : lightGrey};
  border-radius: ${({theme}) => theme.flat ? 0 : 3}px;
  width: 100%;
  max-width: 100%;
  font-size: ${({size}) => setFontSize(size)}rem;
  line-height: ${({size}) => setFontSize(size) + .4}rem;
  font-weight: 300;
  padding: ${({size}) => setFontSize(size) / 2}em 8px;
  box-shadow: none;
  display: block;
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