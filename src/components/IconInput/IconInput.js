import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    borderBottom: 1,
    fontSize: (14 / 16),
    iconSize: 16,
    iconBottom: 2,
    paddingLeft: 24,
    height: 24
  },
  large: {
    borderBottom: 2,
    fontSize: (18 / 16),
    iconSize: 24,
    iconBottom: 4,
    paddingLeft: 36,
    height: 24
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = STYLES[size];
  if(!styles) {
    throw new Error(`Unknown size passed to IconInput: ${size}`)
  }

  return (
  <Wrapper>
    <VisuallyHidden>{label}</VisuallyHidden>
    <SearchBar
      placeholder={placeholder}
      style={{
        '--width': width + 'px',
        '--borderBottom': styles.borderBottom + 'px',
        '--fontSize': styles.fontSize + 'rem',
        '--paddingLeft': styles.paddingLeft + 'px',
      }}
    >
    </SearchBar>
    <IconWrapper
      style={{
        '--size': styles.iconSize + 'px',
        '--bottom': styles.iconBottom + 'px',
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
  border-bottom: var(--borderBottom) solid ${COLORS.black};
  padding-left: var(--paddingLeft);
  width: var(--width);
  height: var(--height);
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
