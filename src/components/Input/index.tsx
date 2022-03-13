import React, { useContext } from 'react';
import { TextInputProps } from 'react-native';
import { ThemeContext } from 'styled-components/native';

import disableEye from '~/assets/icons/disableEye.png';
import eye from '~/assets/icons/eye.png';

import * as Sty from './styles';

interface InputProps extends TextInputProps {
  label: string;
  iconRight?: 'eye' | 'disableEye';
  iconActionRight?: () => void;
}

export function Input({
  label,
  iconRight,
  iconActionRight,
  ...rest
}: InputProps) {
  const { Colors } = useContext(ThemeContext);

  return (
    <Sty.Container>
      <Sty.LabelInput>{label}</Sty.LabelInput>

      <Sty.ContainerInput>
        <Sty.InputField {...rest} placeholderTextColor={Colors.WHITE} />
        {iconRight && (
          <Sty.ButtonLeft onPress={() => iconActionRight && iconActionRight()}>
            <Sty.ImageButton
              source={iconRight === 'eye' ? eye : disableEye}
              style={{ tintColor: Colors.WHITE }}
            />
          </Sty.ButtonLeft>
        )}
      </Sty.ContainerInput>
    </Sty.Container>
  );
}
