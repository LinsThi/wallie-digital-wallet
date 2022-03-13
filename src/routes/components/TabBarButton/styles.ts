import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Container2 = styled.View`
  flex-direction: row;
  position: absolute;
  top: 0;
`;

export const Container3 = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.Colors.WHITE};
`;

export const Container4 = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.Colors.WHITE};
`;

export const Button = styled.TouchableOpacity`
  top: -22px;
  justify-content: center;
  align-items: center;
  width: 50px,
  height: 50px,
  border-radius: 25px,
  background-color: ${({ theme }) => theme.Colors.PRIMARY};
`;
