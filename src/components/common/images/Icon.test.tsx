// Icons.test.js

import React from 'react';
import { render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import Icons from '@/components/common/images/Icons';

describe('Icons Component', () => {
  it('renders correctly', () => {
    const mockIcon = 'addIcon';
    const { getByTestId } = render(
      <Icons name={mockIcon} width={24} height={24} styles={{}} />,
    );

    const renderedIcon = getByTestId(`icon-${mockIcon}`);

    expect(renderedIcon).toBeTruthy();

    const tree = renderer
      .create(<Icons name={mockIcon} width={24} height={24} styles={{}} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
