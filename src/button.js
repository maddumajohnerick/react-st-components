import styled from 'styled-components';
import { pointSixteen, pointEight, setColor, setSize, setFontSize, lightenDarkenColor } from './variables';

export const STButton = styled.button`
  min-height: ${({size}) => setSize(size) || 40}px;
  padding: ${pointEight}px ${({outline}) => pointSixteen - (outline ? .4 : 0)}px;
  background-color: ${({tone, outline, theme}) => outline ? 'white' : setColor(tone, theme.tones)};
  border: 1px solid ${({tone, theme}) => setColor(tone, theme.tones)};
  border-radius: ${({theme}) => theme.flat ? 0 : 3}px;
  color: ${({tone, outline, theme}) => !outline ? 'white' : setColor(tone, theme.tones)};
  font-size: ${({size}) => setFontSize(size)}rem;
  line-height: ${({size}) => setFontSize(size) || 1}rem;
  margin-right: ${pointEight}px;
  transition: .2s;
  font-weight: ${({outline}) => outline ? 400 : 300};
  position: relative;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;

  :not([disabled]):hover {
    background-color: ${({tone, outline, theme}) => outline ? setColor(tone, theme.tones) : lightenDarkenColor(setColor(tone, theme.tones), 30)};
    border: 1px solid ${({tone, outline, theme}) => outline ? lightenDarkenColor(setColor(tone, theme.tones), 0) : lightenDarkenColor(setColor(tone, theme.tones), 30)};
    color: white;
  }
  
  :not([disabled]):focus, &.focused {
    outline: none;
    background-color: ${({tone, outline, theme}) => outline ? 'transparent' : setColor(tone, theme.tones)};
    box-shadow: 0 0 0 0.2rem ${({tone, theme}) => lightenDarkenColor(setColor(tone, theme.tones), 110)};
    color: ${({tone, outline, theme}) => !outline ? 'white' : setColor(tone, theme.tones)};
    z-index: 3;
  }
  
  :disabled{
    cursor: not-allowed;

    :after {
      content: '';
      pointer-events: auto !important;
      position: absolute;
      height: calc(100% + 2px);
      width: calc(100% + 2px);
      top: -1px;
      left: -1px;
      border-radius: ${({theme}) => theme.flat ? 0 : 3}px;
      background-color: grey; 
      opacity: .4;
    }
  }
`;