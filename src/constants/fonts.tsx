import { Platform } from 'react-native';

// FONT FAMILY
const FC_SUBJECT_REGULAR = Platform.select({
  ios: 'FC Subject [Non-commercial] Reg',
  android: 'FC-Subject-Regular',
});
const FC_SUBJECT_BOLD = Platform.select({
  ios: 'FC Subject [Non-commercial] Bd',
  android: 'FC-Subject-Bold',
});

// FONT WEIGHT
const FONT_WEIGHT_400 = '400';
const FONT_WEIGHT_500 = '500';
const FONT_WEIGHT_700 = '700';

const FONT_STYLE_NORMAL = 'normal';

// Heading constant size
const Heading1 = {
  fontSize: 18,
  fontStyle: FONT_STYLE_NORMAL,
  fontFamily: FC_SUBJECT_BOLD,
  fontWeight: FONT_WEIGHT_500,
  lineHeight: 25.2,
};

// H2
const Heading2 = {
  fontSize: 17,
  fontStyle: FONT_STYLE_NORMAL,
  fontFamily: FC_SUBJECT_BOLD,
  fontWeight: FONT_WEIGHT_700,
  lineHeight: 23.8,
};

// H3
const Heading3 = {
  fontSize: 16,
  fontStyle: FONT_STYLE_NORMAL,
  fontFamily: FC_SUBJECT_BOLD,
  fontWeight: FONT_WEIGHT_700,
  lineHeight: 22.4,
};

// H4
const Heading4 = {
  fontSize: 15,
  fontStyle: FONT_STYLE_NORMAL,
  fontFamily: FC_SUBJECT_BOLD,
  fontWeight: FONT_WEIGHT_500,
  lineHeight: 21,
};

// H5
const Heading5 = {
  fontSize: 13,
  fontStyle: FONT_STYLE_NORMAL,
  fontFamily: FC_SUBJECT_BOLD,
  fontWeight: FONT_WEIGHT_500,
  lineHeight: 22.4,
};

// H6
const Heading6 = {
  fontSize: 10,
  fontStyle: FONT_STYLE_NORMAL,
  fontFamily: FC_SUBJECT_BOLD,
  fontWeight: FONT_WEIGHT_500,
  lineHeight: 14,
};

// P1
const Paragraph1 = {
  fontSize: 18,
  fontStyle: FONT_STYLE_NORMAL,
  fontFamily: FC_SUBJECT_REGULAR,
  fontWeight: FONT_WEIGHT_400,
  lineHeight: 25.2,
};

// P2
const Paragraph2 = {
  fontSize: 16,
  fontStyle: FONT_STYLE_NORMAL,
  fontFamily: FC_SUBJECT_REGULAR,
  fontWeight: FONT_WEIGHT_500,
  lineHeight: 22.4,
};

const fonts = {
  heading: {
    Heading1,
    Heading2,
    Heading3,
    Heading4,
    Heading5,
    Heading6,
  },
  paragraph: {
    Paragraph1,
    Paragraph2,
  },
  main: {
    FC_SUBJECT_REGULAR,
    FC_SUBJECT_BOLD,
  },
};

export default fonts;
