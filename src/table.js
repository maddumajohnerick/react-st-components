import styled from 'styled-components';

import { pointSixteen, pointEight, lightGrey, lightenDarkenColor } from './variables';
import { STButton } from './button';

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