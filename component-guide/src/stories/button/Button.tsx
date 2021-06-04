import React, {ReactNode} from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import '../../styles/styles.css';

export type ButtonPropsType = {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  size?: 'small' | 'medium' | 'large' | 'full';
  kind?: 'contained' | 'outlined';
  disabled?: boolean;
  onClick?: () => void;
}

const Container = styled.button<ButtonPropsType>`
  ${tw`p-2 rounded-md flex justify-center items-center`}
  svg {
    ${tw`mr-1.5`}
  }

  ${props => {
    const {size} = props;

    switch (size) {
      case 'small' :
        return tw`w-1/3`;
      case 'medium' :
        return tw`w-1/2`;
      case 'large' :
        return tw`w-2/3`;
      case 'full' :
        return tw`w-full`;
    }
  }}
`;

export default function Button(
  {
    children,
    icon,
    size = 'full',
    kind = 'contained',
    ...props
  }: ButtonPropsType) {

  return (
    <Container
      className={kind === 'contained' ? 'btn-kind-default' : 'btn-kind-outlined'}
      size={size}
      {...props}
    >
      {icon}
      {children}
    </Container>
  );
}

