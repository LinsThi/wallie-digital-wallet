import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Item = styled.View`
  padding: 10px 24px;
  flex-direction: row;
  align-items: center;
`;

export const ImageCountry = styled.Image`
  width: 50px;
  height: 50px;
`;

export const InfoCountry = styled.Text`
  font-size: ${({ theme }) => theme.FontSizesProps.BODY2}px;
  margin-left: ${({ theme }) => theme.Sizes.PADDING_12 * 2}px;
`;

export const ButtonCountry = styled.TouchableOpacity``;
