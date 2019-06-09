import styled from 'styled-components';

import { STButton } from './button';

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