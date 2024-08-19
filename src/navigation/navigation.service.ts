import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(
  name: string,
  params?: any
) {
  // @ts-ignore
  return navigationRef.navigate(name, params ?? {});
}
