import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';

import * as Sty from './styles';

export function Home() {
  return (
    <Sty.Container>
      <StatusBar backgroundColor="#fff" />
      <Text>HomeScreen</Text>
    </Sty.Container>
  );
}
