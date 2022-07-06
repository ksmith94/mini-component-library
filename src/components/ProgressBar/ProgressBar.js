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
        '--height': styles.height,
        '--borderRadius': styles.borderRadius,
        '--padding': styles.padding,
      }}> 
      <ProgressWrapper style={{'--borderRadius': styles.borderRadius}}>
        <Progress 
          style={{
              '--width': value + '%',
              '--borderRadius': styles.borderRadius
            }}
            value={value}>
          <VisuallyHidden>{value}</VisuallyHidden>
        </Progress>
      </ProgressWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: var(--height);
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--borderRadius);
  padding: var(--padding);
  `
  
  const ProgressWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: var(--borderRadius);
`

const Progress = styled.div`
  background-color: ${COLORS.primary};
  width: var(--width);
  height: 100%;
`


export default ProgressBar;
