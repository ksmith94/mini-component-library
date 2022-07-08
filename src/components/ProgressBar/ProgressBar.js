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
    height: 12,
    borderRadius: 4,
    padding: 0
  },
  large: {
    height: 24,
    borderRadius: 8,
    padding: 4
  }
}

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  if (!styles) {
    throw new Error(`Uknown size passed to progress bar: ${size}`)
  }
  return (
    <Wrapper 
      role="progressbar"
      aria-valuenow={value}
      style={{
        '--borderRadius': styles.borderRadius + 'px',
        '--padding': styles.padding + 'px',
      }}> 
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar 
          style={{
              '--width': value + '%',
              '--height': styles.height + 'px',
            }}
        >
        </Bar>
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--borderRadius);
  padding: var(--padding);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray15};
`
  
const BarWrapper = styled.div`
  overflow: hidden;
  border-radius: 4px;
`

const Bar = styled.div`
  background-color: ${COLORS.primary};
  width: var(--width);
  height: var(--height);
  border-radius: 4px 0 0 4px;
`


export default ProgressBar;
