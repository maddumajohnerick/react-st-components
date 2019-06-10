import styled from 'styled-components';

import { setColor } from './variables';

export const STBadge = styled.span`
  padding: .2em .5em;
  background-color: ${({tone, theme}) => setColor(tone, theme.tones)};
  border-radius: 50px;
  color: white;
  font-weight: 500;
`;