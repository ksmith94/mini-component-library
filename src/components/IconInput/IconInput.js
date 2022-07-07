import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZE = {
  small: {
    width: 150 + 'px',
    borderBottom: 1 + 'px solid black',
    fontSize: 14 + 'px',
    iconSize: 16 + 'px',
    iconBottom: 2 + 'px',
    paddingLeft: 24 + 'px',
    iconWeight: 1 + 'px'
  },
  large: {
    width: 300 + 'px',
    borderBottom: 2 + 'px solid black',
    fontSize: 18 + 'px',
    iconSize: 24 + 'px',
    iconBottom: 4 + 'px',
    paddingLeft: 41 + 'px',
    iconWeight: 2 + 'px'
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = SIZE[size];

  return (
  <Wrapper>
    <VisuallyHidden>{label}</VisuallyHidden>
    <SearchBar
    placeholder={placeholder}
    style={{
      '--width': styles.width,
      '--borderBottom': styles.borderBottom,
      '--fontSize': styles.fontSize,
      '--paddingLeft': styles.paddingLeft
    }}
    >
    </SearchBar>
    <IconWrapper
    style={{
      '--size': styles.iconSize,
      '--bottom': styles.iconBottom,
      '--fontWeight': styles.iconWeight
      }}>
      <Icon id={icon} size={styles.iconSize} strokeWidth={styles.iconWeight} />
    </IconWrapper>
  </Wrapper>
  )
};

const Wrapper = styled.div`
  position: relative;
`
const SearchBar = styled.input`
  border: none;
  border-bottom: var(--borderBottom);
  padding-left: var(--paddingLeft);
  width: var(--width);
  font-size: var(--fontSize);
  font-weight: 700;
  color: ${COLORS.gray700};
  margin: 2px;
  
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: 2px;
  }

  &:hover {
    color: ${COLORS.black};
  }
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: var(--bottom);
  left: 0;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
  color: ${COLORS.gray700};
  font-weight: var(--fontWeight);

  ${SearchBar}:hover + & {
    color: ${COLORS.black};
  }
`

export default IconInput;
