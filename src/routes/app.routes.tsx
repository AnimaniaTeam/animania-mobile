import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';

import { Home } from '@screens/Home';

type TAuthRoutes = {
  home: undefined;
};

export type AuthNavigatorRoutesProps = StackNavigationProp<TAuthRoutes>;

const { Navigator, Screen } = createStackNavigator<TAuthRoutes>();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
    </Navigator>
  );
}
