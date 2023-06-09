import UserReducer from '../../reducers/UserReducer';
import { SET_LOGGED_IN, SET_REGISTERED, LOGIN_SUCCESS, SAVE_INTERVAL_ID, LOGOUT } from '../../ConstantTypes';

describe('UserReducer', () => {
  test('should return the initial state', () => {
    const initialState = {
      isLoggedIn: false,
      isRegistered: false,
      access_token: null,
      expires_in: null,
      userData: {},
      status:'',
      intervalId: ''
    };

    const action = {};

    const newState = UserReducer(undefined, action);

    expect(newState).toEqual(initialState);
  });

  test('should handle SET_LOGGED_IN action', () => {
    const initialState = {
      isLoggedIn: false,
      isRegistered: false,
      access_token: null,
      expires_in: null,
      userData: {},
      status:'',
      intervalId: ''
    };

    const action = {
      type: SET_LOGGED_IN,
      payload: true
    };

    const newState = UserReducer(initialState, action);

    expect(newState.isLoggedIn).toBe(true);
    expect(newState.isRegistered).toBe(false);
  });

  test('should handle SET_REGISTERED action', () => {
    const initialState = {
      isLoggedIn: false,
      isRegistered: false,
      access_token: null,
      expires_in: null,
      userData: {},
      status:'',
      intervalId: ''
    };

    const action = {
      type: SET_REGISTERED,
      payload: true
    };

    const newState = UserReducer(initialState, action);

    expect(newState.isLoggedIn).toBe(false);
    expect(newState.isRegistered).toBe(true);
  });

  it("should handle LOGIN_SUCCESS action", () => {
    const initialState = {
      access_token: null,
      expires_in: null,
      userData: {},
      status: ''
    };
    const action = {
      type: LOGIN_SUCCESS,
      payload: {
        access_token: 'test_token',
        expires_in: 3600,
        loginStatus: { username: 'testuser' },
        status: 'login'
      }
    };
    const nextState = UserReducer(initialState, action);
    expect(nextState.access_token).toEqual('test_token');
    expect(nextState.expires_in).toEqual(3600);
    expect(nextState.userData).toEqual({ username: 'testuser' });
    expect(nextState.status).toEqual('login');
  });

  it("should handle SAVE_INTERVAL_ID action", () => {
    const initialState = {
      intervalId: ''
    };
    const action = {
      type: SAVE_INTERVAL_ID,
      payload: 12345
    };
    const nextState = UserReducer(initialState, action);
    expect(nextState.intervalId).toEqual(12345);
  });

  it("should handle LOGOUT action", () => {
    const initialState = {
      isLoggedIn: true,
      isRegistered: true,
      access_token: 'test_token',
      expires_in: 3600,
      userData: { username: 'testuser' },
      status: 'login',
      intervalId: 12345
    };
    const action = {
      type: LOGOUT
    };
    const nextState = UserReducer(initialState, action);
    expect(nextState).toEqual({
      isLoggedIn: false,
      isRegistered: false,
      access_token: null,
      expires_in: null,
      userData: {},
      status: '',
      intervalId: ''
    });
  });

  test('should return the current state for unknown action type', () => {
    const initialState = {
      isLoggedIn: false,
      isRegistered: false
    };

    const action = {
      type: 'UNKNOWN_ACTION',
      payload: true
    };

    const newState = UserReducer(initialState, action);

    expect(newState).toEqual(initialState);
  });
});
