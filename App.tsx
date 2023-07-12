import { AppProvider } from '@hooks/index';

import { Routes } from '@routes/index';

import { Loading } from '@components/Loading';

import { useFonts } from 'expo-font';
import {
  Skranji_400Regular,
  Skranji_700Bold,
} from '@expo-google-fonts/skranji';
import {
  Lato_300Light,
  Lato_400Regular,
  Lato_700Bold,
} from '@expo-google-fonts/lato';

export default function App() {
  const [fontsLoaded] = useFonts({
    Skranji_400Regular,
    Skranji_700Bold,
    Lato_300Light,
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return <AppProvider>{fontsLoaded ? <Routes /> : <Loading />}</AppProvider>;
}
