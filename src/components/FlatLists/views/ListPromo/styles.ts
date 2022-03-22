import styled from 'styled-components/native';

export const ButtonPromo = styled.TouchableOpacity`
  margin: ${({ theme }) => theme.Sizes.BASE}px 0px;
  width: ${({ theme }) => theme.Sizes.WIDTH / 2.5}px;
`;

export const ContainerPromo = styled.View`
  height: 80px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const ContainerInfo = styled.View`
  padding: ${({ theme }) => theme.Sizes.PADDING_10}px;
`;

export const ImagePromo = styled.Image`
  width: 100%;
  height: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const TitlePromo = styled.Text`
  font-weight: bold;
  font-size: ${({ theme }) => theme.FontSizesProps.H4}px;
`;

export const DescriptionPromo = styled.Text`
  font-size: ${({ theme }) => theme.FontSizesProps.BODY4}px;
  color: ${({ theme }) => theme.Colors.GRAY};
`;

export const FlatListPromo = styled.FlatList`
  margin-bottom: 80px;
`;
