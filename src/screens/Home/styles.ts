import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background: ${({ theme }) => theme.Colors.WHITE};
  padding: ${({ theme }) => theme.Sizes.RADIUS}px
    ${({ theme }) => theme.Sizes.RADIUS / 2}px 10px;
`;

export const ContainerHeader = styled.View`
  padding-bottom: ${({ theme }) => theme.Sizes.PADDING_12 * 2}px;
`;

export const ContainerBanner = styled.View`
  height: 120px;
  margin-bottom: ${({ theme }) => theme.Sizes.PADDING_12 * 2}px;
`;

export const ContainerFeature = styled.View``;

export const ContainerPromo = styled.View``;

export const TextTitle = styled.Text`
  font-size: ${({ theme }) => theme.FontSizesProps.H1}px;
  font-weight: bold;
`;

export const TextName = styled.Text`
  font-size: ${({ theme }) => theme.FontSizesProps.H4}px;
  color: ${({ theme }) => theme.Colors.GRAY};
`;

export const Banner = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.Sizes.RADIUS}px;
`;

export const TextSession = styled.Text`
  font-weight: bold;
  font-size: 25px;
  padding-bottom: ${({ theme }) => theme.Sizes.PADDING_10 * 2}px;
`;
