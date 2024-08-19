import React from 'react';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

export type Route = {
  name: string;
  component: () => Promise<{ default: React.ComponentType<any> }>;
  options?: NativeStackNavigationOptions;
};

export type ExtractRouteParams<T extends { name: string }> = {
  [K in T['name']]: undefined;
};
