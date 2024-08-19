import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './navigation.service.ts';
import { routes } from './routes.ts';
import { Route } from './types.ts';
import { withSuspend } from '../hoc';

const Stack = createNativeStackNavigator();

const createRoutes = (_routes: Route[]) => {
  return _routes.map((route) => (
    <Stack.Screen
      key={route.name}
      name={route.name}
      component={withSuspend(React.lazy(route.component))}
      options={route.options || {}}
    />
  ));
};

const MainNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        {createRoutes(routes)}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
