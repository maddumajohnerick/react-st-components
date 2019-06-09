import styled from 'styled-components';

import { lightGrey } from './variables';

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