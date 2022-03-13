import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import CountryProvider from './hooks/country';
import { SignUp } from './screens/SignUp';
import light from './themes/light';

export default function App() {
  return (
    <ThemeProvider theme={light}>
      <CountryProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar style="light" />
          <SignUp />
        </SafeAreaView>
      </CountryProvider>
    </ThemeProvider>
  );
}
