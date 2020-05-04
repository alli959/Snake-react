import React from 'react';
import { render } from '@testing-library/react';
import Snake from './Snake';

test('renders learn react link', () => {
  const { getByText } = render(<Snake />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
