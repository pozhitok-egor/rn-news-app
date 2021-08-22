import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const COLORS = {
  // base colors
  primary: '#2B2B63',
  secondary: '#48BEFF',

  // colors
  white: '#ffffff',
  black: '#222222',

  primary_light: '#9393C7',
  light_gray: '#F5F5F5',
  red: '#EB5858',
  green: '#43C59E'
}

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 25,
  padding: 10,

  // fonts
  largeTitle: 32,
  h1: 28,
  h2: 20,
  h3: 16,
  h4: 14,
  body1: 25,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height
}

export const FONTS = {
  largeTitle: { fontFamily: 'BungeeShade-Regular', fontSize: SIZES.largeTitle},
  h1: { fontFamily: 'BalsamiqSans-Bold', fontSize: SIZES.h1},
  h2: { fontFamily: 'BalsamiqSans-Bold', fontSize: SIZES.h2},
  h3: { fontFamily: 'BalsamiqSans-Bold', fontSize: SIZES.h3},
  h4: { fontFamily: 'BalsamiqSans-Bold', fontSize: SIZES.h4},
  body1: { fontFamily: 'Roboto-Regular', fontSize: SIZES.body1},
  body2: { fontFamily: 'Roboto-Regular', fontSize: SIZES.body2},
  body3: { fontFamily: 'Roboto-Regular', fontSize: SIZES.body3},
  body4: { fontFamily: 'Roboto-Regular', fontSize: SIZES.body4},
  body5: { fontFamily: 'Roboto-Regular', fontSize: SIZES.body5}
}

const appTheme = { COLORS, SIZES, FONTS }

export default appTheme;
