import React from 'react';
import styled from 'styled-components';

import { setColor, lightGrey, setSize, setFontSize } from './variables';

const StyledCheckRadioWrapper = styled.label`
  display: ${({inline}) => inline ? 'inline-flex' : 'flex'};
  position: relative;
  padding-left: 32px;
  margin-bottom: 0px;
  margin-right: 16px;
  height: ${({size}) => setSize(size)}px;
  cursor: pointer;
  font-size: ${({size}) => setFontSize(size)}rem;
  font-weight: 300;
  user-select: none;
  align-items: center;

  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    :checked ~ .checkmark {
      border: 1px solid ${({theme}) => setColor('primary', theme.tones)};

      :after {
        display: block;
        border: solid ${({theme}) => setColor('primary', theme.tones)};
        border-width: 0 3px 3px 0;
      }
    }

    &[type=radio] {
      :checked ~ .checkmark {
        border: 8px solid ${({theme}) => setColor('primary', theme.tones)};
      }

      ~ .checkmark {
        border-radius: 50px ;

        :after {
          content: "";
          display: none
        }
      }
    }
  }

  & .checkmark {
    position: absolute;
    top: ${({size}) => (setSize(size) - 18) / 2 }px;
    left: 0;
    height: 16px;
    width: 16px;
    border: 1px solid ${lightGrey};
    background: white;
    border-radius: 3px;
    transition: .2s; 

    :after {
      content: "";
      position: absolute;
      display: block;
      transition: .2s;

      left: 5px;
      top: 2px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      transform: rotate(45deg);
    }
  }

  :hover input:not(:checked) ~ .checkmark {
    background-color: #ececec;
  }
`;

export const STOptionsWrapper = (props) => (
  <StyledCheckRadioWrapper {...props}>
    {props.children}
    <span className="checkmark"></span>
  </StyledCheckRadioWrapper>
);

export const STCheckbox = styled.input.attrs(() => ({ type: 'checkbox' }))``;

export const STRadio = styled.input.attrs(() => ({ type: 'radio' }))``;