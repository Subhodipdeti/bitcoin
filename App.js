import React from 'react';
import {AppContextProvider} from './src/Context/ctx';
import AppNavigation from './src/Navigation/AppNavigation';

export default () => (
  <AppContextProvider>
    <AppNavigation />
  </AppContextProvider>
);
