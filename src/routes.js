import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import Main from './pages/main';
import Product from './pages/product';

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
      <Stack.Screen
        name="Product"
        component={Product}
        options={({route}) => ({
          title: route.params.product.title,
          headerTitleAlign: 'center',
        })}
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
