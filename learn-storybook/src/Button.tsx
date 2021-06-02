import React, {ReactNode} from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  &.small {
    width: 50px;
  }
  &.medium {
    width: 100px;
  }
  &.large {
    width: 150px;
  }
`

export type ButtonProps = {
  children : ReactNode,
  className : 'small' | 'medium' | 'large',
  isDisabled? : boolean
}

export default function Button ({children,isDisabled=false,className}:ButtonProps) {
  return <ButtonStyle className={className} disabled={isDisabled}>{children}</ButtonStyle>
}


