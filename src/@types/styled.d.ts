import 'styled-components';

type ColorProps = {
  PRIMARY: string;
  SECONDARY: string;
  GREEN: string;
  LIGHT_GREEN: string;
  LIME: string;
  EMERALD: string;
  RED: string;
  LIGHT_RED: string;
  PURPLE: string;
  LIGHT_PURPLE: string;
  YELLOW: string;
  LIGHT_YELLOW: string;
  BLACK: string;
  WHITE: string;
  LIGHT_GRAY: string;
  GRAY: string;
  DARK_GRAY: string;
  TRANSPARENT: string;
};

type FontSizeProps = {
  FONT: number;
  LARGE_TITLE: number;
  H1: number;
  H2: number;
  H3: number;
  H4: number;
  BODY1: number;
  BODY2: number;
  BODY3: number;
  BODY4: number;
  BODY5: number;
};

type SizeProps = {
  BASE: number;
  RADIUS: number;
  PADDING_10: number;
  PADDING_12: number;
  WIDTH: number;
  HEIGHT: number;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    Colors: ColorProps;
    FontSizesProps: FontSizeProps;
    Sizes: SizeProps;
  }
}
