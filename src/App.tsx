/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '@shopify/restyle';
import React from 'react';
import FlashMessage from 'react-native-flash-message';
import HomeNavigator from './navigators/Home/Navigator';
import theme from './utils/theme';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <HomeNavigator />
        </NavigationContainer>
      </ThemeProvider>
      <FlashMessage position="top" />
    </>
  );
};

export default App;
