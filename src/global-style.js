import { createGlobalStyle, ThemeProvider } from 'styled-components';

import RobotoLight from './fonts/Roboto-Light.woff';
import RobotoRegular from './fonts/Roboto-Regular.woff';

import { pointEight, lightGrey } from './variables';

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

export const STThemeProvider = ThemeProvider;

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Roboto;
    src: url(${RobotoLight}) format("woff");
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: Roboto;
    src: url(${RobotoRegular}) format("woff");
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