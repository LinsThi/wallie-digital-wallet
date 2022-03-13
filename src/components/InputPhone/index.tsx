import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';

import down from '~/assets/icons/down.png';
import { useCountry } from '~/hooks/country';

import * as Sty from './styles';

type InputPhoneProps = {
  actionButton: () => void;
};

export function InputPhone({ actionButton }: InputPhoneProps) {
  const { Colors } = useContext(ThemeContext);
  const { selectedCountry } = useCountry();

  return (
    <Sty.Container>
      <Sty.FieldName>Phone Number</Sty.FieldName>

      <Sty.ContainerFields>
        <Sty.ContainerCountry>
          <Sty.Button onPress={actionButton}>
            <Sty.ImageButton
              source={down}
              style={{ tintColor: Colors.WHITE }}
            />

            <Sty.ImageCountry
              source={{
                uri: selectedCountry.flag,
              }}
              resizeMode="contain"
            />
          </Sty.Button>

          <Sty.InputCountry
            placeholder={selectedCountry.info}
            placeholderTextColor={Colors.WHITE}
          />
        </Sty.ContainerCountry>

        <Sty.InputPhone
          placeholder="Enter phone"
          placeholderTextColor={Colors.WHITE}
        />
      </Sty.ContainerFields>
    </Sty.Container>
  );
}
