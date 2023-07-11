import { StatusBar } from 'react-native';

import { VStack, Text } from 'native-base';

import { SafeAreaView } from 'react-native-safe-area-context';

export function Loading() {
  return (
    <SafeAreaView>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <VStack>
        <Text>Carregando...</Text>
      </VStack>
    </SafeAreaView>
  );
}
