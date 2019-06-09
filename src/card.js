import styled from 'styled-components';

import { pointSixteen, lightGrey } from './variables';
import { STRow, STColumn } from './layout';
import { STButton } from './button';

export const STCardList = styled(STRow).attrs(() => ({classname: 'st-card-list'}))``;

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