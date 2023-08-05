import { StatusBar, ImageBackground } from 'react-native';

import {
  Text,
  Image,
  FlatList,
  VStack,
  HStack,
  Badge,
  View,
} from 'native-base';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import logo from '@assets/png/marca.png';
import bg from '@assets/png/fundo.png';
import notImage from '@assets/jpg/not-image.jpg';

import { data } from '../../utils/data';

export function AnimeReleases() {
  const { top } = useSafeAreaInsets();
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FBD38D" />

      <View width={'full'} height={'full'} pt={top}>
        <ImageBackground source={bg} resizeMode="cover">
          <FlatList
            ListHeaderComponent={
              <View alignItems={'center'} pb={'40px'} pt={'38px'}>
                <Image source={logo} alt="logo" />
              </View>
            }
            data={data}
            renderItem={({ index, item }) => (
              <VStack
                height={'260px'}
                bg={index % 2 == 0 ? '#FFF59D90' : '#FFFFF070'}
              >
                <Text
                  marginLeft={'40px'}
                  marginTop={'18px'}
                  marginBottom={'10px'}
                  fontSize={'20px'}
                  fontWeight={'bold'}
                  fontFamily={'skranji'}
                >
                  {item.name}
                </Text>
                <HStack>
                  <Image
                    source={item.banner ? { uri: item.banner } : notImage}
                    alt={`banner anime ${index}`}
                    width={'130px'}
                    height={'190px'}
                    marginLeft={'40px'}
                  />
                  <VStack marginLeft={'20px'} space={'8px'}>
                    <VStack space={'4px'}>
                      <HStack alignItems={'center'}>
                        <Text
                          fontSize={'16px'}
                          fontWeight={'700'}
                          lineHeight={'24'}
                          fontFamily={'lato'}
                          fontStyle={'normal'}
                        >
                          Gênero:{' '}
                        </Text>
                        <Badge
                          bg={'#3182CE'}
                          borderRadius={'6px'}
                          justifyContent={'center'}
                          alignItems={'center'}
                          _text={{
                            color: 'white',
                            fontFamily: 'lato',
                            fontWeight: '500',
                            fontSize: '12px',
                            fontStyle: 'normal',
                          }}
                        >
                          {item.genero[0]}
                        </Badge>
                      </HStack>
                      <HStack space={'7px'}>
                        {item.genero.slice(1).map((genero, key) => {
                          if (genero.length > 1) {
                            return (
                              <Badge
                                key={key}
                                bg={'#3182CE'}
                                borderRadius={'6px'}
                                fontSize={'12px'}
                                fontWeight={'500'}
                                justifyContent={'center'}
                                alignItems={'center'}
                                _text={{
                                  color: 'white',
                                  fontFamily: 'lato',
                                  fontWeight: '500',
                                  fontSize: '12px',
                                  fontStyle: 'normal',
                                }}
                              >
                                {genero}
                              </Badge>
                            );
                          } else {
                            return null;
                          }
                        })}
                      </HStack>
                    </VStack>
                    <View>
                      <Text
                        fontSize={'16px'}
                        fontWeight={'700'}
                        lineHeight={'24px'}
                        fontFamily={'lato'}
                        fontStyle={'normal'}
                      >
                        Onde assistir:
                      </Text>
                      <Text
                        fontSize={'16px'}
                        fontWeight={'400'}
                        lineHeight={'24px'}
                        fontFamily={'lato'}
                        fontStyle={'normal'}
                      >
                        {item.ondeAssistir}
                      </Text>
                    </View>
                    <Text
                      fontSize={'16px'}
                      fontWeight={'bold'}
                      lineHeight={'16px'}
                      fontFamily={'lato'}
                      fontStyle={'normal'}
                    >
                      Episódios:{' '}
                      <Text fontWeight={'normal'} fontStyle={'normal'}>
                        {item.episodios}
                      </Text>
                    </Text>
                    <Text
                      fontSize={'16px'}
                      fontWeight={'bold'}
                      lineHeight={'16'}
                      fontFamily={'lato'}
                      fontStyle={'normal'}
                    >
                      Estreia:{' '}
                      <Text
                        fontSize={'16px'}
                        fontWeight={'normal'}
                        lineHeight={'16'}
                        fontStyle={'normal'}
                      >
                        {item.estreia}
                      </Text>
                    </Text>
                    <Text
                      fontSize={'16px'}
                      fontWeight={'bold'}
                      lineHeight={'16'}
                      fontFamily={'lato'}
                      fontStyle={'normal'}
                    >
                      Temporadas:{' '}
                      <Text
                        fontSize={'16px'}
                        fontWeight={'normal'}
                        lineHeight={'16'}
                        fontStyle={'normal'}
                      >
                        {item.temporadas}
                      </Text>
                    </Text>
                  </VStack>
                </HStack>
              </VStack>
            )}
          />
        </ImageBackground>
      </View>
    </>
  );
}
