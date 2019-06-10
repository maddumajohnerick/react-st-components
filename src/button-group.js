import styled from 'styled-components';

import { STButton } from './button';

export const STButtonGroup = styled.div`
  align-self: flex-start;

  & ${STButton} {
    margin: 0px;
    border-radius: 0px;
    margin-right: -1px;

    :first-child {
      border-top-left-radius: ${({theme}) => theme.flat ? 0 : 3}px;
      border-bottom-left-radius: ${({theme}) => theme.flat ? 0 : 3}px;
    }
    
    :last-child {
      border-top-right-radius: ${({theme}) => theme.flat ? 0 : 3}px;
      border-bottom-right-radius: ${({theme}) => theme.flat ? 0 : 3}px;
    }
  }
`;