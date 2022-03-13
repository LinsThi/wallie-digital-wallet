import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const ContainerLogo = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ContainerInput = styled.View`
  margin: 0px ${({ theme }) => theme.Sizes.PADDING_12 * 2}px
    ${({ theme }) => theme.Sizes.PADDING_12 * 2}px;
`;

export const ImageLogo = styled.Image`
  width: 200px;
  height: 200px;
`;

export const Button = styled.TouchableOpacity`
  height: ${({ theme }) => theme.FontSizesProps.BODY1 * 2}px;
  margin: 0px ${({ theme }) => theme.FontSizesProps.BODY1}px;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.Colors.BLACK};
  border-radius: ${({ theme }) => theme.Sizes.RADIUS}px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: ${({ theme }) => theme.FontSizesProps.H3}px;
`;
