import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper value={value} onChange={onChange}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.select`
  background-color: ${COLORS.transparentGray15};
  font-family: 'Roboto' 'sans-serif';
  font-size: 1rem;
  color: ${COLORS.gray700};
  width: min-content;

  &:focus {
    outline: default;
  }

  &:hover {
    color: ${COLORS.black};
  }
`

export default Select;
