import { NativeBaseProvider } from 'native-base';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { theme } from '@theme/index';

interface AppProviderProps {
  children?: React.ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>
    </SafeAreaProvider>
  );
}
