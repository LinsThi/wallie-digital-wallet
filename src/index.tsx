import React from 'react';

import CountryProvider from './hooks/country';
import { RootStack } from './routes';

export default function App() {
  return (
    <CountryProvider>
      <RootStack />
    </CountryProvider>
  );
}
