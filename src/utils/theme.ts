import {createTheme} from '@shopify/restyle';

const palette = {
  grayLight: '#EEEEEE',
  gray: '#E2E2E2',
  grayOpacity: '#E2E2E269',
  grayDarkest: '#1E1E1E',
  grayShadow: '#0040800A',
  grayBordered: '#DEDEDE',
  gray1: '#C1C7D0',
  grayShadow2: '#0101011C',

  blue: '#0C73EC',
  blueTransparent: '#0C73EC2E',
  blueLightest: '#e6f1fd',

  orange: '#FE732E',
  orangeLight: '#FFB5A1',

  blackTransparent: '#00000000',
  blackTransparent1: '#00000003',
  blackTransparent2: '#00000091',
  blackLight: '#1B1B1D',
  black: '#0B0B0B',
  black2: '#272727',
  pureBlack: '#000000',

  whiteTransparent: '#FFFFFF00',
  white: '#FFFFFF',
  whiteDark: '#F9F9F9',
  whiteDarkest: '#F1F1F1',

  red: '#f0000089',
  green: '#24B345',
};

const baseButtonStyles = {
  height: 60,
  borderRadius: 12,
  justifyContent: 'center',
};

const body = {
  // fontFamily: 'HK Grotesk Medium',
  fontSize: 16,
  lineHeight: 24,
};

const bodySmall = {
  // fontFamily: 'HK Grotesk',
  fontSize: 13,
  lineHeight: 18,
  color: 'grayDarkest',
};

const heading2 = {
  // fontFamily: 'HK Grotesk',
  fontWeight: 'bold',
  fontSize: 26,
  lineHeight: 29,
  color: 'grayDarkest',
};

const inputText = {
  // fontFamily: 'DM Sans',
  fontSize: 14,
  lineHeight: 18,
  color: 'grayDarkest',
};

const inputSmallLabel = {
  // fontFamily: 'HK Grotesk',
  fontSize: 12,
  lineHeight: 14,
  color: 'grayDarkest',
};

const buttonLabel = {
  // fontFamily: 'DM Sans - Semibold',
  fontSize: 19,
  lineHeight: 21,
  color: 'white',
  textAlign: 'center',
};

const theme = createTheme({
  colors: {
    primary: palette.blue,
    primaryTransparent: palette.blueTransparent,
    secondary: palette.orange,
    secondaryLight: palette.orangeLight,
    default: palette.whiteDark,
    transparentWhite: palette.whiteTransparent,
    transparent: palette.blackTransparent,
    transparentblack1: palette.blackTransparent1,
    transparentblack2: palette.blackTransparent2,
    white: palette.white,
    whiteDark: palette.whiteDark,
    whiteDarkest: palette.whiteDarkest,
    grayLight: palette.grayLight,
    gray: palette.gray,
    gray1: palette.gray1,
    grayOpacity: palette.grayOpacity,
    grayDarkest: palette.grayDarkest,
    grayShadow: palette.grayShadow,
    grayShadow2: palette.grayShadow2,
    grayBordered: palette.grayBordered,
    error: palette.red,
    success: palette.green,
    pureBlack: palette.pureBlack,
    black: palette.black2,
    blackLight: palette.blackLight,
    blueLightest: palette.blueLightest,
  },
  spacing: {
    none: 0,
    xs: 5,
    s: 9,
    sm: 12,
    m: 16,
    mm: 20,
    l: 24,
    xl: 30,
    xxl: 38,
    xxll: 40,
    xxll2: 45,
    xxxl: 58,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  buttonVariants: {
    primaryButton: {
      ...baseButtonStyles,
      backgroundColor: 'primary',
    },
    secondaryButton: {
      ...baseButtonStyles,
      backgroundColor: 'secondary',
    },
    defaultButton: {
      ...baseButtonStyles,
      backgroundColor: 'white',
    },
    successButton: {
      ...baseButtonStyles,
      backgroundColor: 'success',
    },
  },
  textVariants: {
    heading: {
      // fontFamily: 'HK Grotesk',
      fontWeight: 'bold',
      fontSize: 37,
      lineHeight: 40,
      color: 'white',
    },
    heading1: {
      // fontFamily: 'HK Grotesk',
      fontWeight: 'bold',
      fontSize: 32,
      lineHeight: 34,
      color: 'white',
    },
    heading2,
    heading2Light: {
      ...heading2,
      color: 'white',
    },
    heading3: {
      fontSize: 24,
      fontWeight: 'bold',
      lineHeight: 29,
      color: 'grayDarkest',
    },

    heading4: {
      fontSize: 22,
      fontWeight: 'bold',
      lineHeight: 34,
      color: 'white',
    },
    heading5: {
      fontSize: 20,
      fontWeight: '600',
      lineHeight: 24,
      color: 'pureBlack',
    },
    subHeading: {
      // fontFamily: 'HK Grotesk - SemiBold',
      fontWeight: '600',
      fontSize: 18,
      color: 'grayDarkest',
    },
    bodyLight: {
      ...body,
      color: 'white',
    },
    bodyDark: {
      ...body,
      color: 'grayDarkest',
    },
    bodySmall,
    bodySmallLight: {
      ...bodySmall,
      color: 'white',
    },
    buttonLabel,
    buttonLabelDark: {
      ...buttonLabel,
      color: 'grayDarkest',
    },
    inputSmallLabel,
    inputSmallLabelLight: {
      ...inputSmallLabel,
      color: 'white',
    },
    inputText,
    inputTextLight: {
      inputText,
      color: 'white',
    },
    smallText: {
      fontSize: 10,
      lineHeight: 14,
      color: 'grayDarkest',
      opacity: 0.83,
    },
    smallestText: {
      fontSize: 9,
      lineHeight: 11,
      color: 'white',
    },
  },
});

export type Theme = typeof theme;
export default theme;
