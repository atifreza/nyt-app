import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogin } from "../../redux/actions/UserActions";
import store from '../../redux/Store';
import Login from '../Login';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

jest.mock('../../redux/actions/UserActions', () => ({
  userLogin: jest.fn(),
}));

describe('Login', () => {
  beforeEach(() => {
    useDispatch.mockClear();
    useNavigate.mockClear();
    userLogin.mockClear();
  });

  test('renders correctly', () => {
    useSelector.mockReturnValue({
        UserReducer: {
          isLoggedIn: false,
          isRegistered: false,
        },
      });
    
      render(
        <Provider store={store}>
          <Login />
        </Provider>
      );

    expect(screen.getByTestId ('email')).toBeInTheDocument();
    expect(screen.getByTestId('password')).toBeInTheDocument();
    expect(screen.getByText('Log In')).toBeInTheDocument();
    expect(screen.getByText('Register')).toBeInTheDocument();
  });

  test('handles login form submission', () => {
    const dispatchMock = jest.fn();
    const userLoginMock = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockImplementation((init) => [init, jest.fn()]);

    useDispatch.mockReturnValue(dispatchMock);
    useSelector.mockReturnValue({
        UserReducer: {
          isLoggedIn: true, // or true, depending on your test scenario
          // other properties in your UserReducer state
        },
      });
    useNavigate.mockReturnValue(jest.fn());

    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    const emailInput = screen.getByTestId('email');
    const passwordInput = screen.getByTestId('password');
    const submitButton = screen.getByText('Log In');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    expect(dispatchMock).toHaveBeenCalledWith(
      userLoginMock({ email: 'test@example.com', password: 'password123' }, 'login')
    );
  });

  test('handles register link click', () => {
    const useStateMock = jest.spyOn(React, 'useState');
    const setUserActionMock = jest.fn();
    useStateMock.mockImplementation((init) => [init, setUserActionMock]);


    useSelector.mockReturnValue({
        UserReducer: {
          isLoggedIn: false,
          isRegistered: true,
        },
      });

    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    const registerLink = screen.getByText('Register');

    fireEvent.click(registerLink);

  });
});
