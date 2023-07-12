import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './app.routes';

// import { useTheme } from 'native-base';

export function Routes() {
  // const { colors } = useTheme();

  const theme = DefaultTheme;
  theme.colors.background = '#FFFFF0';

  return (
    <NavigationContainer theme={theme}>
      <AppRoutes />
    </NavigationContainer>
  );
}
