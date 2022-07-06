/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--height': 8 + 'px',
    '--borderRadius': 4 + 'px',
  },
  medium: {
    '--height': 12 + 'px',
    '--borderRadius': 4 + 'px',
  },
  large: {
    '--height': 24 + 'px',
    '--borderRadius': 8 + 'px',
    '--padding': 4 + 'px'
  }
}

const VALUES = {

}

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return (
    <Wrapper style={styles}>
      <Progress style={{'--width': value + '%'}} value={value}>{value}</Progress>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 370px;
  height: var(--height);
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--borderRadius);
  padding: var(--padding);
`

const Progress = styled(Wrapper)`
  background-color: ${COLORS.primary};
  width: var(--width);
  height: 100%;
  border-radius: ${p => {
    if(p.value > 98) {
      return ('8px')
    } else {
      return ('8px 0px 0px 8px')
    }
  }}
`


export default ProgressBar;
