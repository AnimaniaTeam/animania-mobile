import { extendTheme } from 'native-base';

export const theme = extendTheme({
  fontConfig: {
    SKRANJI: {
      400: {
        normal: 'Skranji_400Regular',
      },
      700: {
        normal: 'Skranji_700Bold',
      },
    },
    LATO: {
      300: {
        normal: 'Lato_300Light',
      },
      400: {
        normal: 'Lato_400Regular',
      },
      700: {
        normal: 'Lato_700Bold',
      },
    },
  },

  fonts: {
    skranji: 'SKRANJI',
    lato: 'LATO',
  },
});
