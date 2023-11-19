import React from 'react';
import renderer from 'react-test-renderer';
import CustomTextInput from '@/components/common/textInput/TextInput';

test('renders CustomTextInput correctly', () => {
  const tree = renderer
    .create(
      <CustomTextInput
        text=""
        onChangeText={() => {}}
        type="cardnumber"
        customStyle={{}}
        testID="custom-input"
      />,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
