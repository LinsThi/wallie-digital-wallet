import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: ${({ theme }) => theme.Sizes.PADDING_12 * 2}px;
`;

export const ContainerFields = styled.View`
  flex-direction: row;
`;

export const ContainerCountry = styled.View`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.Colors.WHITE};
`;

export const FieldName = styled.Text`
  color: ${({ theme }) => theme.Colors.WHITE};
`;

export const InputCountry = styled.TextInput`
  padding: ${({ theme }) => theme.Sizes.PADDING_10}px 5px;
  color: ${({ theme }) => theme.Colors.WHITE};
`;

export const InputPhone = styled.TextInput`
  flex: 1;
  margin-left: ${({ theme }) => theme.Sizes.PADDING_10}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.Colors.WHITE};
`;

export const ImageCountry = styled.Image`
  width: 25px;
  height: 25px;
  margin-left: ${({ theme }) => theme.Sizes.PADDING_10}px;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const ImageButton = styled.Image`
  width: 10px;
  height: 10px;
`;
