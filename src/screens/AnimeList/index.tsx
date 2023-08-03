import { StatusBar } from 'react-native';

import {
  Text,
  Image,
  // FlatList,
  // VStack,
  // HStack,
  // Badge,
  View,
} from 'native-base';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import logo from '@assets/png/marca.png';

export function AnimeList() {
  const { top } = useSafeAreaInsets();

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FBD38D" />

      <View width={'full'} pt={top} alignItems={'center'}>
        <Image source={logo} alt="logo" />
      </View>
      <Text textAlign={'center'}>Lista geral de animes</Text>
    </>
  );
}
