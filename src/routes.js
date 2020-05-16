import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import Main from './pages/main';

function Routes() {
  return (
    <Stack.Navigator initialRouteName="Main" screenOptions={defaultStyles}>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          title: 'JSHunt',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}

let defaultStyles = {
  headerStyle: {
    backgroundColor: '#DA552F',
  },
  headerTintColor: '#fff',
};

export default Routes;
