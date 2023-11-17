import React from 'react';
import renderer from 'react-test-renderer';
import Header from '@/components/common/header/Header';

describe('<Header />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Header title="Test Header" isLeftIcon isRightIcon />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
