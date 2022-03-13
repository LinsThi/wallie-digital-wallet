import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';

import back from '~/assets/icons/back.png';

import * as Sty from './styles';

export function Header() {
  const { Colors } = useContext(ThemeContext);

  return (
    <Sty.Container>
      <Sty.ButtonHeader>
        <Sty.ImageButton source={back} style={{ tintColor: Colors.WHITE }} />
        <Sty.TextButton>Sign Up</Sty.TextButton>
      </Sty.ButtonHeader>
    </Sty.Container>
  );
}
