import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBar';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('NavBar', () => {
  test('renders navbar with title', () => {
    useSelector.mockReturnValue({ isLoggedIn: true });
    render(<NavBar />);

    const title = screen.getByText('News York Times News');
    const signOutButton = screen.getByText('Sign Out');

    expect(title).toBeInTheDocument();
    expect(signOutButton).toBeInTheDocument();
  });

  test('dispatches setLoggedIn action and navigates on sign out', () => {
    useSelector.mockReturnValue({ isLoggedIn: true });
    const dispatchMock = jest.fn();
    const navigateMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);
    useNavigate.mockReturnValue(navigateMock);

    render(<NavBar />);

    const signOutButton = screen.getByText('Sign Out');
    fireEvent.click(signOutButton);
  });
});
