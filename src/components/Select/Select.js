import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return ( 
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <SelectDisplay>
        {displayedValue}
      </SelectDisplay>
      <IconWrapper style={{'--size': 24 + 'px'}}>
        <Icon id='chevron-down' size={24} strokeWidth={1} />
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 2;
`

const SelectDisplay = styled.div`
  background-color: ${COLORS.transparentGray15};
  padding: 12px 52px 12px 16px;
  border-radius: 8px;
  color: ${COLORS.gray700};

  ${NativeSelect}:focus + & {
    outline: 2px dotted black;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  height: var(--size);
  width: var(--size);
  z-index: 1;
`

export default Select;
