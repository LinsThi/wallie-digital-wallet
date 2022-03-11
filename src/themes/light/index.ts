import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

export default {
  Colors: {
    PRIMARY: '#24C16B',
    SECONDARY: '#0C381F',
    GREEN: '#66D59A',
    LIGHT_GREEN: '#E6FEF0',
    LIME: '#00BA63',
    EMERALD: '#2BC978',
    RED: '#FF4134',
    LIGHT_RED: '#FFF1F0',
    PURPLE: '#6B3CE9',
    LIGHT_PURPLE: '#F3EFFF',
    YELLOW: '#FFC664',
    LIGHT_YELLOW: '#FFF9EC',
    BLACK: '#1E1F20',
    WHITE: '#FFFFFF',
    LIGHT_GRAY: '#FCFBFC',
    GRAY: '#C1C3C5',
    DARK_GRAY: '#C3C6C7',
    TRANSPARENT: 'transparent',
  },

  FontSizesProps: {
    FONT: 14,
    LARGE_TITLE: 50,
    H1: 30,
    H2: 22,
    H3: 20,
    H4: 18,
    BODY1: 30,
    BODY2: 20,
    BODY3: 16,
    BODY4: 14,
    BODY5: 12,
  },

  Sizes: {
    BASE: 8,
    RADIUS: 30,
    PADDING_10: 10,
    PADDING_12: 12,
    WIDTH: width,
    HEIGHT: height,
  },
};
