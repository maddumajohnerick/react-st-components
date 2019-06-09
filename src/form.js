import styled from 'styled-components';

import { pointSixteen, pointEight} from './variables';
import { STRow, STColumn } from './layout';
import { STButton } from './button';

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