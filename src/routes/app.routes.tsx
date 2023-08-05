import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import { Platform } from 'react-native';

import { useTheme } from 'native-base';

import { Favorites } from '@screens/Favorites';
import { AnimeList } from '@screens/AnimeList';
import { AnimeReleases } from '@screens/AnimeReleases';

import StarSvg from '@assets/svg/star.svg';
import ListAlt from '@assets/svg/listAlt.svg';

import CalendarMonthSvg from '@assets/svg/calendarMonth.svg';

type TAuthRoutes = {
  favorites: undefined;
  animeReleases: undefined;
  animeList: undefined;
};

export type AuthNavigatorRoutesProps = BottomTabNavigationProp<TAuthRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<TAuthRoutes>();

export function AppRoutes() {
  const { sizes } = useTheme();

  const iconSize = sizes[6];

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#FBD38D',
          height: Platform.OS === 'android' ? 'auto' : 76,
          paddingBottom: sizes[7],
          paddingTop: sizes[7],
        },
      }}
    >
      <Screen
        name="animeReleases"
        component={AnimeReleases}
        options={{
          tabBarIcon: ({ color }) => (
            <CalendarMonthSvg width={iconSize} height={iconSize} fill={color} />
          ),
        }}
      />

      <Screen
        name="favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ color }) => (
            <StarSvg width={iconSize} height={iconSize} fill={color} />
          ),
        }}
      />

      <Screen
        name="animeList"
        component={AnimeList}
        options={{
          tabBarIcon: ({ color }) => (
            <ListAlt width={iconSize} height={iconSize} fill={color} />
          ),
        }}
      />
    </Navigator>
  );
}
