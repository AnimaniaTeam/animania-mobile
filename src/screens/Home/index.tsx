import { StatusBar } from 'react-native';

import { ScrollView, Text } from 'native-base';

import { SafeAreaView } from 'react-native-safe-area-context';

export function Home() {
  return (
    <SafeAreaView>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />

      <ScrollView
        w="full"
        h="full"
        backgroundColor={'#F1F1F1'}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 20,
          justifyContent: 'flex-start',
        }}
      >
        <Text>Olá Mundo!</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
