import React, {useRef, useEffect, useState} from 'react';
import styled, { createGlobalStyle } from 'styled-components';

/*  ==================================== 
    VARIABLES
    ====================================  */

const pointSixteen = 16;
const pointEight = 8;

const bgColor = {
  primary: '#0d47a1',
  secondary: '#4B515D',
  success: '#1B5E20',
  danger: '#CC0000',
  warning: '#FF8800',
}

const lightGrey = '#d0d0d0';

const setSize = (size) => {
  if (size === 'xs') return 28;
  if (size === 'sm') return 32;
  else if (size === 'lg') return 48;
  else return 40;
}

const setFontSize = (size) => {
  if (size === 'xs') return .8;
  if (size === 'sm') return .9;
  else if (size === 'lg') return 1.4;
  else return 1;
}

/*  ==================================== 
    GLOBAL
    ====================================  */

const setSpaceUtil = (className, property) => {
  let styleStr = ``;

  for (var i = 0; i <= 5; i++) {
    styleStr += `
      .${className}-${i} {
        ${property}: ${i * pointEight}px !important;
      }
      
      // XS BREAKPOINT
      .${className}-xs-${i} {
        @media (max-width: 575px){
        ${property}: ${i * pointEight}px !important;
        }
      }

      // SM BREAKPOINT
      .${className}-sm-${i} {
        @media (min-width: 576px) and (max-width: 767px){
        ${property}: ${i * pointEight}px !important;
        }
      }
    
      // MD BREAKPOINT
      .${className}-md-${i} {
        @media (min-width: 768px) and (max-width: 991px) {
        ${property}: ${i * pointEight}px !important;
        }
      }
    
      // LG BREAKPOINT
      .${className}-lg-${i} {
        @media (min-width: 992px) and (max-width: 1199px) {
        ${property}: ${i * pointEight}px !important;
        }
      }
    
      // XL BREAKPOINT
      .${className}-xl-${i} {
        @media (min-width: 1200px) {
        ${property}: ${i * pointEight}px !important;
        }
      }
    `;
  }
  return styleStr;
}

const setAlignUtil = (val) => {
  let styleStr = ``;

  for (var i = 0; i <= val.length - 1; i++) {
    styleStr += `
      .text-${val[i]} {
        text-align: ${val[i]} !important;
      }
    `;
  }
  return styleStr;
}

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Roboto;
    src: url("../public/fonts/Roboto-Light.woff?v=2.137") format("woff"), url("../public/fonts/Roboto-Light.woff?v=2.137") format("woff");
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: Roboto;
    src: url("../public/fonts/Roboto-Regular.woff?v=2.137") format("woff"), url("../public/fonts/Roboto-Regular.woff?v=2.137") format("woff");
    font-weight: 400;
    font-style: normal;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    margin: 0px;
  }

  *, ::after {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
  }

  hr {
    border: 0;
    border-top: 1px solid ${lightGrey};
  }

  ${setSpaceUtil('mar', 'margin')}
  ${setSpaceUtil('mart', 'margin-top')}
  ${setSpaceUtil('marb', 'margin-bottom')}
  ${setSpaceUtil('marl', 'margin-left')}
  ${setSpaceUtil('marr', 'margin-right')}
  ${setSpaceUtil('mary', 'margin-top')}
  ${setSpaceUtil('mary', 'margin-bottom')}
  ${setSpaceUtil('marx', 'margin-left')}
  ${setSpaceUtil('marx', 'margin-right')}

  ${setSpaceUtil('pad', 'padding')}
  ${setSpaceUtil('padt', 'padding-top')}
  ${setSpaceUtil('padb', 'padding-bottom')}
  ${setSpaceUtil('padr', 'padding-right')}
  ${setSpaceUtil('padl', 'padding-left')}
  ${setSpaceUtil('pady', 'padding-top')}
  ${setSpaceUtil('pady', 'padding-bottom')}
  ${setSpaceUtil('padx', 'padding-left')}
  ${setSpaceUtil('padx', 'padding-right')}

  ${setAlignUtil(['left', 'right', 'center', 'justify'])}

  .table-responsive {
    overflow-x: auto !important;
  }
`

/*  ==================================== 
    LAYOUT
    ====================================  */

export const STContainer = styled.div`
  width: 100%;
  margin-top: ${pointSixteen}px;
  padding: 0px ${pointSixteen}px 0px ${pointSixteen}px;
  
`;

const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px -${({spacing}) => spacing / 2 || pointEight}px ${pointSixteen}px -${({spacing}) => spacing / 2 || pointEight}px;
  // border: 1px solid;

  & > * {
    margin: 0px ${({spacing}) => spacing / 2 || pointEight}px ${({spacing}) => spacing || pointSixteen}px ${({spacing}) => spacing / 2 || pointEight}px;
  }
`;

class RowComponent extends React.PureComponent {
  render() {
    const childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { spacing: this.props.spacing })
    );

    return (
      <StyledRow {...this.props}>
        {childrenWithProps}
      </StyledRow>
    )
  }
}

export const STRow = styled(RowComponent)``;

const columnFlexMixin = (size, spacing) => {
  const gridSize = Array.isArray(size) ? size[0] : size;
  const offsetSize = Array.isArray(size) ? size[1] : 0;

  return `
    flex-basis: calc(${(100 / (12 / gridSize) || 100)}% - ${spacing || pointSixteen}px);
    min-width: calc(${(100 / (12 / gridSize) || 100)}% - ${spacing || pointSixteen}px);
    margin-left: calc(${((100 / 12) * offsetSize)}% + ${offsetSize && ((spacing || pointSixteen) / 2)  || ''}px) !important;

    &.label {
      &.label-top {
        padding-top: ${(100 / (12 / gridSize) || 100) === 100 ? 0 : '.5'}em;
      }
      margin-bottom: ${(100 / (12 / gridSize) || 100) === 100 ? 0 : pointSixteen}px;
    }
  `
}

export const STColumn = styled.div`
  // border: 1px solid;
  display: ${({align}) => align ? 'flex' : 'initial'};
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: ${({align}) => {
    if (align === 'center') return 'center'  
    else if (align === 'right') return 'flex-end'  
    else return 'flex-start'  
  }};
  text-align: ${({align}) => {
    if (align === 'center') return 'center'  
    else if (align === 'right') return 'right'  
    else return 'left'  
  }};

  flex-grow: 0;
  flex-shrink: 0;
  ${({xs, spacing}) => columnFlexMixin(xs, spacing)}

  // SM BREAKPOINT
  @media (min-width: 576px) and (max-width: 767px){
    ${({sm, xs, spacing}) => columnFlexMixin(sm || xs, spacing)}
  }

  // MD BREAKPOINT
  @media (min-width: 768px) and (max-width: 991px) {
    ${({md, sm, xs, spacing}) => columnFlexMixin(md || sm || xs, spacing)}
  }

  // LG BREAKPOINT
  @media (min-width: 992px) and (max-width: 1199px) {
    ${({lg, md, sm, xs, spacing}) => columnFlexMixin(lg || md || sm || xs, spacing)}
  }

  // XL BREAKPOINT
  @media (min-width: 1200px) {
    ${({xl, lg, md, sm, xs, spacing}) => columnFlexMixin(xl || lg || md || sm || xs, spacing)}
  }

  & > ${STRow} ${STCardList} {
    margin-bottom: -16px;
  }

  & > p {
    width: 100%;
  }
`;


/*  ==================================== 
    BADGES
    ====================================  */

export const STBadge = styled.span`
  padding: .2em .5em;
  background-color: ${({tone}) => bgColor[tone || 'primary']};
  border-radius: 50px;
  color: white;
  font-weight: 500;
`;

/*  ==================================== 
    BUTTONS
    ====================================  */

const lightenDarkenColor = (col, amt) => {
  var usePound = false;

  if (col[0] == "#") {
    col = col.slice(1);
    usePound = true;
  }

  var num = parseInt(col, 16);
  var r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  var b = ((num >> 8) & 0x00FF) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  var g = (num & 0x0000FF) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}

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

/*  ==================================== 
    BUTTON GROUPS
    ====================================  */

export const STButtonGroup = styled.div`
  align-self: flex-start;

  & ${STButton} {
    margin: 0px;
    border-radius: 0px;
    margin-right: -1px;

    :first-child {
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }
    
    :last-child {
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }
  }
`;


/*  ==================================== 
    CARDS
    ====================================  */

export const STCardList = styled(STRow)``;

export const STCard = styled(STColumn)`
  border: 1px solid ${lightGrey};
  border-radius: 3px;
  flex-direction: column;
  align-content: initial;
  justify-content: initial;

  & ${STButton} {
    :last-child {
      margin-right: 0px;
    }
  }
`;

export const STCardImage = styled.div`
  height: ${({height}) => height ? height + 'px' : 'auto' };
  overflow: hidden;
  position: relative;
  background: ${lightGrey};
  
  & img {
    position:absolute;
    left: -100%;
    right: -100%;
    top: -100%;
    bottom: -100%;
    margin: auto;
    width: 100%;
  }
`;

export const STCardBody = styled.div`
  padding: ${pointSixteen}px;
`;

export const STCardFooter = styled.div`
  padding: ${pointSixteen}px;
  padding-top: 0px;
`;

/*  ==================================== 
    INPUTS
    ====================================  */

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

/*  ==================================== 
    TEXTAREA
    ====================================  */

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

/*  ==================================== 
    SELECT
    ====================================  */

export const STSelect = styled.select`
  border: 1px solid ${({error}) => error ? bgColor['danger'] : lightGrey};
  border-radius: 3px;
  width: 100%;
  height: ${({size}) => setSize(size)}px;
  padding: 0px 8px;
  font-size: ${({size}) => setFontSize(size)}em;
  font-weight: 300;
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

export const STItem = styled.option``;


/*  ==================================== 
    CHECKBOX / RADIO
    ====================================  */

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
      border: 1px solid ${bgColor['primary']};

      :after {
        display: block;
        border: solid ${bgColor['primary']};
        border-width: 0 3px 3px 0;
      }
    }

    &[type=radio] {
      :checked ~ .checkmark {
        border: 8px solid ${bgColor['primary']};
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

/*  ==================================== 
    INPUT GROUPS
    ====================================  */

export const STInputGroup = styled.div`
  display: flex;

  & > * {
    margin-right: -1px;
    border-radius: 0px;

    :focus {
      z-index: 3;
    }
  }

  & > input {
    flex-grow: 1;
    flex-shrink: 1; 
    min-width: 0;
  }

  & > :first-child {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }
  
  & > :last-child {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
`;

export const STInputGroupText = styled.div`
  border: 1px solid ${lightGrey};
  display: flex;
  align-items: center;
  padding: 0px 8px;
  background-color: ${lightGrey};
  z-index: 2;
  flex: 0 0 auto;
`;


/*  ==================================== 
    Form
    ====================================  */

export const STForm = styled(STRow).attrs(() => ({ as: 'form'}))`
  display: flex;
  flex-wrap: wrap;
  margin: 0px -${({spacing}) => spacing / 2 || pointEight}px ${pointSixteen}px -${({spacing}) => spacing / 2 || pointEight}px;

  & > ${STColumn} {
    margin: 0px ${({spacing}) => spacing / 2 || pointEight}px ${({spacing}) => spacing || pointSixteen}px ${({spacing}) => spacing / 2 || pointEight}px;

  }

  & > ${STColumn} ${STButton} {
    :last-child {
      margin-right: 0px;
    }
  }
`;

export const STLabel = styled(STColumn).attrs(({top}) => ({ className: top ? 'label label-top' : 'label' }))`
  font-size: 1rem;
  display: flex;
  align-content: ${({top}) => top ? 'flex-start' : 'center'};
  align-items: ${({top}) => top ? 'flex-start' : 'center'}; // For IE
  padding-top: ${({top}) => top ? '.5' : '0'}em;
`;


/*  ==================================== 
    Tables
    ====================================  */

export const STTable = styled.table`
  width: 100%;
  font-size: 1rem;
  border-collapse: collapse;

  & > thead {
    border-top: 2px solid  ${lightGrey};
    border-bottom: 2px solid  ${lightGrey};
  }

  & tr {
    height: 48px;

    & th {
      font-weight: 400;
    }
    
    & td {
      font-weight: 300;
      font-size: 1rem;
      
      & ${STButton} {
        :last-child {
          margin-right: 0px;
        }
      }
    }

    & > * {
      padding: ${pointEight}px ${pointSixteen}px
    }
  }

  & > tbody > tr {
    border-bottom: 1px solid ${lightGrey};

    :nth-child(odd) {
      background-color: ${lightenDarkenColor(lightGrey, 33)};
    }

    :hover {
      background-color: ${({hover}) => hover ? lightenDarkenColor(lightGrey, 25) : ''};
    }
  }
`;

/*  ==================================== 
    Dropdown
    ====================================  */

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
  border-radius: 3px;
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