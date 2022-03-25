import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const ContainerHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.Sizes.PADDING_10 * 3}px
    ${({ theme }) => theme.Sizes.PADDING_10 * 2}px;
`;

export const ContainerScan = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContainerPayments = styled.View`
  position: absolute;
  bottom: 0px;
  right: 0px;
  left: 0px;
  height: 220px;
  background-color: ${({ theme }) => theme.Colors.WHITE};
  border-top-left-radius: ${({ theme }) => theme.Sizes.RADIUS}px;
  border-top-right-radius: ${({ theme }) => theme.Sizes.RADIUS}px;
  padding: ${({ theme }) => theme.Sizes.PADDING_10 * 3}px;
`;

export const ContainerButtonsPayments = styled.View`
  flex-direction: row;
  padding: ${({ theme }) => theme.Sizes.PADDING_10 * 2}px 0px;
`;

export const ContainerButtonsIcons = styled.View`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.Sizes.RADIUS}px;
`;

export const ButtonClose = styled.TouchableOpacity``;

export const ButtonInfo = styled.TouchableOpacity`
  width: 45px;
  height: 45px;
  background: ${({ theme }) => theme.Colors.GREEN};
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.Sizes.RADIUS}px;
`;

export const ButtonMethodsPayment = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const ImageClose = styled.Image`
  width: 25px;
  height: 25px;
`;

export const ImageInfo = styled.Image`
  width: 25px;
  height: 25px;
`;

export const ImageScan = styled.Image`
  width: 250px;
  height: 300px;
  margin-top: -60%;
`;

export const ImagePayments = styled.Image`
  width: 25px;
  height: 25px;
`;

export const TextScreen = styled.Text`
  font-size: ${({ theme }) => theme.FontSizesProps.BODY3}px;
  color: ${({ theme }) => theme.Colors.WHITE};
`;

export const TextPaymentsSession = styled.Text`
  font-size: ${({ theme }) => theme.FontSizesProps.BODY2}px;
  font-weight: bold;
`;

export const TextPayments = styled.Text`
  font-size: ${({ theme }) => theme.FontSizesProps.BODY3}px;
  font-weight: bold;
`;
