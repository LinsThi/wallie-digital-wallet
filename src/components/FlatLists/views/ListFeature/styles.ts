import styled from 'styled-components/native';

export const ButtonFeature = styled.TouchableOpacity`
  width: 60px;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.Sizes.PADDING_10 * 3}px;
`;

export const ContainerItemFeature = styled.View`
  width: 100px;
  height: 100px;
`;

export const ContainerIcon = styled.View`
  width: 50px;
  height: 50px;
  border-radius: ${({ theme }) => theme.Sizes.RADIUS}px;
  justify-content: center;
  align-items: center;
`;

export const FeatureIcon = styled.Image`
  width: 20px;
  height: 20px;
`;

export const LabelFeature = styled.Text`
  font-weight: bold;
`;

export const FlatListFeature = styled.FlatList``;
