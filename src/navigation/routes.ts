import { Route } from './types.ts';

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
