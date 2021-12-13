import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  padding-top: 12px;
  margin-bottom: 12px;
`;

export const ScrollPointer = styled.Text`
  color: #c4c4c4;
  margin: 3px;

  ${props =>
    props.isFocused &&
    css`
      color: #27AE60;
    `}
`;
