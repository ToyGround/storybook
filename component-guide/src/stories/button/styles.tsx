import tw from 'twin.macro';
import styled from '@emotion/styled';
import {ButtonPropsType} from './Button';

// export const Container = styled.button<ButtonPropsType>`
//   ${tw`bg-blue-500`}
// `;

export const Container = styled.button <ButtonPropsType>`
  ${tw`bg-blue-500`}
`;

export const Span = styled.span`
  font-weight: bold;
  color : aqua;
`
