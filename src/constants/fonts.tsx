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

const fonts = {
  main: {
    FC_SUBJECT_REGULAR,
    FC_SUBJECT_BOLD,
  },
};

export default fonts;
