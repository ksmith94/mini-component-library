import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const VALUES = {
  newest: {
    width: 'fit-content'
  },
  price: {
    width: 100 + 'px',
  },
  curated: {
    width: 120 + 'px'
  }
}

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  const styles = VALUES[value];

  return ( 
    <Wrapper value={value} onChange={onChange} style={{'--width': styles.width}}>
      {children}
      <Icon id='chevron-down'>
      </Icon>
    </Wrapper>
  );
};

const Wrapper = styled.select`
  background-color: ${COLORS.transparentGray15};
  font-family: 'Roboto' 'sans-serif';
  font-size: 1rem;
  color: ${COLORS.gray700};
  width: var(--width);
  border-radius: 8px;
  padding: 12px 18px 12px 16px;

  &:focus {
    outline: default;
  }

  &:hover {
    color: ${COLORS.black};
  }
`

export default Select;
