import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#DA552F" />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  );
}

export default App;
