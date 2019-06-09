import React from 'react';
import styled from 'styled-components';

import { pointSixteen, pointEight } from './variables';

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

  & > ${STRow} .st-card-list {
    margin-bottom: -16px;
  }

  & > p {
    width: 100%;
  }
`;