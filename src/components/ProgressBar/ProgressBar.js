/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    height: 8 + 'px',
    borderRadius: 4 + 'px',
    padding: 0
  },
  medium: {
    height: 12 + 'px',
    borderRadius: 4 + 'px',
    padding: 0
  },
  large: {
    height: 24 + 'px',
    borderRadius: 8 + 'px',
    padding: 4 + 'px'
  }
}

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return (
    <Wrapper 
      role="progressbar"
      aria-valuenow={value}
      style={{
        '--borderRadius': styles.borderRadius,
        '--padding': styles.padding,
      }}> 
      <VisuallyHidden>{value}</VisuallyHidden>
      <ProgressWrapper style={{'--borderRadius': styles.borderRadius}}>
        <Progress 
          style={{
              '--width': value + '%',
              '--height': styles.height,
            }}
            value={value}>
        </Progress>
      </ProgressWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--borderRadius);
  padding: var(--padding);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray15};
`
  
  const ProgressWrapper = styled.div`
  overflow: hidden;
  border-radius: var(--borderRadius);
`

const Progress = styled.div`
  background-color: ${COLORS.primary};
  width: var(--width);
  height: var(--height);
  border-radius: 4px 0 0 4px;
`


export default ProgressBar;
