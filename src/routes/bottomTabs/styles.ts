import styled from 'styled-components/native';

type ContainerProps = {
  isSelected: boolean;
};

export const Container = styled.View<ContainerProps>`
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.Colors.EMERALD : 'transparent'};
  top: ${({ isSelected }) => (isSelected ? -40 : 0)}px;
  height: 50px;
  width: 50px;
  align-items: center;
  justify-content: ${({ isSelected }) =>
    isSelected ? 'center' : 'flex-start'};
  border-radius: 100px;
`;

export const IconBar = styled.Image`
  width: 25px;
  height: 25px;
`;
