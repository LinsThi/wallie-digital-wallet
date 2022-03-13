import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState, createRef } from 'react';
import { ThemeContext } from 'styled-components/native';

import { Coutries } from '~/components/Countries';
import { Header } from '~/components/Header';
import { Input } from '~/components/Input';
import { InputPhone } from '~/components/InputPhone';

import logo from '~/assets/images/wallie-logo.png';

import * as Sty from './styles';

export function SignUp() {
  const { Colors } = useContext(ThemeContext);
  const navigation = useNavigation();
  const bottomSheetRef = createRef();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <LinearGradient colors={[Colors.LIME, Colors.EMERALD]} style={{ flex: 1 }}>
      <StatusBar backgroundColor={Colors.LIME} style="light" />
      <Header />
      <Sty.Container>
        <Sty.ContainerLogo>
          <Sty.ImageLogo source={logo} resizeMode="contain" />
        </Sty.ContainerLogo>

        <Sty.ContainerInput>
          <Input placeholder="Enter Full Name" label="Full Name" />

          <InputPhone actionButton={() => bottomSheetRef.current.show()} />

          <Input
            placeholder="Enter Password"
            label="Password"
            secureTextEntry={!showPassword}
            iconRight={showPassword ? 'disableEye' : 'eye'}
            iconActionRight={() => setShowPassword(prev => !prev)}
          />
        </Sty.ContainerInput>

        <Sty.Button onPress={() => navigation.navigate('HomeTab')}>
          <Sty.TextButton>Continue</Sty.TextButton>
        </Sty.Button>
      </Sty.Container>
      <Coutries ref={bottomSheetRef} />
    </LinearGradient>
  );
}
