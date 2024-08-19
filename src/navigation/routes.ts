import { ExtractRouteParams, Route } from './types.ts';

export const routes: Route[] = [
  {
    name: 'Home',
    component: () => import('../screens/HomeScreen'),
    options: { title: 'Home' },
  },
  {
    name: 'About',
    component: () => import('../screens/AboutScreen'),
    options: { title: 'About' },
  },
];

export type RootStackParamList = ExtractRouteParams<typeof routes[number]>;
