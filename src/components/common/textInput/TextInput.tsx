import React, { useState } from 'react';
import { Colors } from '@/constants';
import fonts from '@/constants/fonts';
import { mScale, scale } from '@/utils/Metrics';
import { StyleSheet, TextInput, View } from 'react-native';
import { Heading } from '@/components/common/typography';
import { Flex, WhiteSpace } from '@/components/layouts';
import Icons from '@/components/common/images/Icons';
import { formatCreditCardNumber, formatExpiryDate } from '@/utils/Regex';
import { TextInputProps } from '@/types/textinput';

const CustomTextInput = ({
  text,
  onChangeText,
  type,
  customStyle,
  testID,
}: TextInputProps) => {
  const [isFocused, setFocused] = useState(false);
  const labelMap = {
    cardnumber: 'ATM/Debit/Credit card number',
    cvv: 'CVV',
    expiry: 'Expiry date',
    cardholder: 'Name on Card',
  };

  const placeholderMap = {
    cardnumber: '0000 0000 0000 0000',
    cvv: '123',
    expiry: 'MM/YY',
    cardholder: 'Ty Lee',
  };

  const maxLengthMap = {
    cardnumber: 19,
    cvv: 3,
    expiry: 5,
    cardholder: 30,
  };

  const formatTextValue = () => {
    if (type === 'cardnumber') {
      return formatCreditCardNumber(text).formattedDisplay;
    } else if (type === 'expiry') {
      if (text.length > 2) {
        return formatExpiryDate(text).formattedDisplay;
      } else {
        return text;
      }
    } else {
      return text;
    }
  };

  const handleChangeText = (input: string) => {
    if (type === 'cardnumber') {
      const { numericInput } = formatCreditCardNumber(input);
      onChangeText(numericInput);
    } else if (type === 'expiry') {
      const { numericInput } = formatExpiryDate(input);
      onChangeText(numericInput);
    } else {
      onChangeText(input);
    }
  };

  return (
    <View style={{ ...styles.container, ...customStyle }}>
      <Heading type="Heading4" label={labelMap[type]} />
      <WhiteSpace size="8" />
      <TextInput
        testID={testID}
        onChangeText={handleChangeText}
        value={formatTextValue()}
        keyboardType={type === 'cardholder' ? 'default' : 'numeric'}
        placeholder={placeholderMap[type]}
        placeholderTextColor={Colors.default.mediumGray}
        style={{
          ...styles.input,
          borderColor: isFocused
            ? Colors.default.primary
            : Colors.default.lightGray,
        }}
        maxLength={maxLengthMap[type]}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        returnKeyType="done"
        keyboardAppearance="dark"
      />
      {type === 'cardnumber' && (
        <Flex fd="row" style={styles.cardIconStyles}>
          <Icons name="visaFilled" width={25} height={15} />
          <Icons
            name="mastercard"
            width={25}
            height={15}
            styles={{ marginHorizontal: scale(5) }}
          />
          <Icons name="jcb" width={25} height={15} />
        </Flex>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  input: {
    height: scale(56),
    borderRadius: scale(6),
    borderWidth: mScale(1.5),
    padding: scale(10),
    fontFamily: fonts.main.FC_SUBJECT_REGULAR,
    color: Colors.default.dark,
    fontSize: scale(16),
    fontWeight: '400',
    lineHeight: scale(0),
    paddingHorizontal: scale(16),
    paddingVertical: scale(17),
  },
  cardIconStyles: {
    position: 'absolute',
    right: scale(10),
    top: scale(50),
  },
});

export default CustomTextInput;
