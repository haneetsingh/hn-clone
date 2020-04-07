
import React from 'react';
import { render } from '@testing-library/react';
import Index from '../pages/index';

test('renders more link', () => {
  const { getByText } = render(<Index />);
  const linkElement = getByText(
    /More/
  );
  expect(linkElement).toBeInTheDocument();
});