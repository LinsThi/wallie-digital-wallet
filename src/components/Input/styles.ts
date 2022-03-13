import styled from 'styled-components/native';

export const Container = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.Colors.WHITE};
  margin-bottom: ${({ theme }) => theme.Sizes.PADDING_12 * 2}px;
`;

export const ContainerInput = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const LabelInput = styled.Text`
  color: ${({ theme }) => theme.Colors.WHITE};
`;

export const InputField = styled.TextInput`
  flex: 1;
  padding: ${({ theme }) => theme.Sizes.PADDING_10}px 0px;
  color: ${({ theme }) => theme.Colors.WHITE};
`;

export const ButtonLeft = styled.TouchableOpacity``;

export const ImageButton = styled.Image`
  width: 25px;
  height: 25px;
  margin-right: ${({ theme }) => theme.Sizes.PADDING_10}px;
`;
