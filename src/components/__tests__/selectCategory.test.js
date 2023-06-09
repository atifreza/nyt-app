import React from 'react';
import { render } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import SelectCategory from '../SelectCategory';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('SelectCategory', () => {
  const mockedDispatch = jest.fn();
  useDispatch.mockReturnValue(mockedDispatch);

  test('should display the correct number of options', () => {
    const { getAllByRole } = render(<SelectCategory category="world" />);
    const options = getAllByRole('option');

    expect(options).toHaveLength(2);
  });
});
