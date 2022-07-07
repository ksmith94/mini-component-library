import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZE = {
  small: {
    width: 150 + 'px',
    borderBottom: 1 + 'px solid black',
    fontSize: (14 / 16) + 'rem',
    iconSize: 16 + 'px',
    iconBottom: 2 + 'px',
    paddingLeft: 24 + 'px',
  },
  large: {
    width: 300 + 'px',
    borderBottom: 2 + 'px solid black',
    fontSize: (18 / 16) + 'rem',
    iconSize: 24 + 'px',
    iconBottom: 4 + 'px',
    paddingLeft: 36 + 'px',
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
      '--width': width + 'px',
      '--borderBottom': styles.borderBottom,
      '--fontSize': styles.fontSize,
      '--paddingLeft': styles.paddingLeft,
    }}
    >
    </SearchBar>
    <IconWrapper
    style={{
      '--size': styles.iconSize,
      '--bottom': styles.iconBottom,
      }}>
      <Icon id={icon} size={styles.iconSize} />
    </IconWrapper>
  </Wrapper>
  )
};

const Wrapper = styled.div`
  position: relative;
  color: ${COLORS.gray700};
`
const SearchBar = styled.input`
  border: none;
  border-bottom: var(--borderBottom);
  padding-left: var(--paddingLeft);
  width: var(--width);
  height: var(--paddingLeft);
  font-size: var(--fontSize);
  font-weight: 700;
  color: inherit;
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

  ${SearchBar}:hover + & {
    color: ${COLORS.black};
  }
`

export default IconInput;
