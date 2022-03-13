import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;

export const ButtonHeader = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding-top: ${({ theme }) => theme.Sizes.PADDING_10 * 6}px;
  padding-left: ${({ theme }) => theme.Sizes.PADDING_10 * 2}px;
`;

export const ImageButton = styled.Image`
  height: 25px;
  width: 25px;
`;

export const TextButton = styled.Text`
  margin-left: 20px;
  color: ${({ theme }) => theme.Colors.WHITE};
  font-size: 20px;
`;
