import styled from 'styled-components';
import { pointSixteen, pointEight, bgColor, setSize, setFontSize, lightenDarkenColor } from './variables';

export const STButton = styled.button`
  min-height: ${({size}) => setSize(size) || 40}px;
  padding: ${pointEight}px ${({outline}) => pointSixteen - (outline ? .4 : 0)}px;
  background-color: ${({tone, outline}) => outline ? 'white' : bgColor[tone || 'primary']};
  border: 1px solid ${({tone}) => bgColor[tone || 'primary']};
  border-radius: 3px;
  color: ${({tone, outline}) => !outline ? 'white' : bgColor[tone || 'primary']};
  font-size: ${({size}) => setFontSize(size)}rem;
  line-height: ${({size}) => setFontSize(size) || 1}rem;
  margin-right: ${pointEight}px;
  transition: .2s;
  font-weight: ${({outline}) => outline ? 400 : 300};
  position: relative;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;

  :not([disabled]):hover {
    background-color: ${({tone, outline}) => outline ? bgColor[tone || 'primary'] : lightenDarkenColor(bgColor[tone || 'primary'], 30)};
    border: 1px solid ${({tone, outline}) => outline ? lightenDarkenColor(bgColor[tone || 'primary'], 0) : lightenDarkenColor(bgColor[tone || 'primary'], 30)};
    color: white;
  }
  
  :not([disabled]):focus, &.focused {
    outline: none;
    background-color: ${({tone, outline}) => outline ? 'transparent' : bgColor[tone || 'primary']};
    box-shadow: 0 0 0 0.2rem ${({tone}) => lightenDarkenColor(bgColor[tone || 'primary'], 110)};
    color: ${({tone, outline}) => !outline ? 'white' : bgColor[tone || 'primary']};
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
      border-radius: 3px;
      background-color: grey; 
      opacity: .4;
    }
  }
`;