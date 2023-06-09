import React from 'react';
import { render, screen } from '@testing-library/react';
import PageNotFound from '../PageNotFound';

test('renders PageNotFound component', () => {
  render(<PageNotFound />);

  const imageElement = screen.getByAltText('Page Not Found');

  expect(imageElement).toBeInTheDocument();
});
