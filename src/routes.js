import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import Main from './pages/main';

function Routes() {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Main" component={Main} options={{title: 'Início'}} />
    </Stack.Navigator>
  );
}

export default Routes;
