import React, {useRef, useEffect, useState} from 'react';
import styled from 'styled-components';

import { pointEight, lightGrey, lightenDarkenColor } from './variables';
import { STButton } from './button';

const StyledDropdownButton = styled(STButton).attrs(() => ({ as: 'div'}))`
  cursor: pointer;
  display: flex;
  align-items: center;

  :after {
    display: inline-block;
    margin-left: .5em;
    vertical-align: .255em;
    content: "";
    border-top: .3em solid;
    border-right: .3em solid transparent;
    border-bottom: 0;
    border-left: .3em solid transparent;
  }
`;

export const STDropdownButton = (props) => {
  const [focus, setFocus] = useState(false);
  const btnRef = useRef(null);

  useEffect(() => {
    window.addEventListener("click", closeDropdown);
    return ( () => {
        window.removeEventListener("click", closeDropdown);
    });
  }, [])

  const closeDropdown = (e) => {
    btnRef.current !== e.target && setFocus(false);
  };

  return (
    <StyledDropdownButton onClick={() => {
      setFocus(!focus)
    }} className={focus && 'focused'} ref={btnRef} {...props}>
      {props.children}
    </StyledDropdownButton>
  )
}

const StyledDropdownMenu = styled.div`
  position: absolute;
  border-radius: ${({theme}) => theme.flat ? 0 : 3}px;
  border: 1px solid ${lightGrey};
  min-width: 100%;
  background-color: white;
  z-index: -1;
  will-change: top;
  visibility: hidden;
`;

export const STDropdownMenu = ({drop, children}) => {
  const dropRef = useRef(null);
  const [inView,setInView] = useState(false);
  const [height,setHeight] = useState(0);
  
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    setInView(isInView());
    return ( () => {
        window.removeEventListener("scroll", scrollHandler);
    });
  }, [])

  const isInView = () => {
    if (dropRef.current) {
      const menu = dropRef.current.getBoundingClientRect();
      const button = dropRef.current.offsetParent.getBoundingClientRect();
      height === 0 && setHeight(menu.height);

      return button.bottom + menu.height <= window.innerHeight;
    }
    return false;
  };

  const scrollHandler = () => {
    setInView(() => {
      return isInView();
    });
  };

  return (
    <StyledDropdownMenu drop={drop}
      style={{
        top: inView ? '' : `-${height}px`,
      }}
      ref={dropRef}>
      {children}
    </StyledDropdownMenu>
  )
}

export const STDropdownItem = styled.div`
  cursor: pointer;
  padding: ${pointEight / 2}px ${pointEight}px;
  white-space: nowrap;

  :hover {
    background-color: ${lightenDarkenColor(lightGrey, 25)};
  }
`;

export const STDropdown = styled.div`
  display: inline-block;
  position: relative;

  div:first-child {
    margin-right: 0px;

    &.focused ~ ${StyledDropdownMenu} {
      z-index: 3;
      visibility: visible;
    }
  }
`;