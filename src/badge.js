import styled from 'styled-components';

import { bgColor } from './variables';

export const STBadge = styled.span`
  padding: .2em .5em;
  background-color: ${({tone}) => bgColor[tone || 'primary']};
  border-radius: 50px;
  color: white;
  font-weight: 500;
`;