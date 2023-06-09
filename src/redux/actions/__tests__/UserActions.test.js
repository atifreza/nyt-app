import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { userLogin } from '../../actions/UserActions';
import { setLoading } from "../../actions/TopStoriesActions"
import { signOutUser, setLoggedIn, setRegister, loginSuccess } from "../../actions/UserActions";
import { LOGIN_SUCCESS, SET_LOADING, LOGOUT, SET_LOGGED_IN, SET_REGISTERED } from '../../ConstantTypes';



jest.mock('js-cookie');

describe('Actions', () => {
    const middlewares = [thunk]
    const mockStore = configureStore(middlewares);
    const store = mockStore({});

    beforeEach(() => {
        store.clearActions()
    })

    test('setLoggedIn should create an action to set logged-in state', () => {
        const isLogged = true;
        const expectedAction = {
            type: SET_LOGGED_IN,
            payload: isLogged,
        };

        store.dispatch(setLoggedIn(isLogged));

        const actions = store.getActions();
        expect(actions).toEqual([expectedAction]);
    });

    test('setRegister should create an action to set registered state', () => {
        const isRegistered = true;
        const expectedAction = {
            type: SET_REGISTERED,
            payload: isRegistered,
        };

        store.dispatch(setRegister(isRegistered));

        const actions = store.getActions();
        expect(actions).toEqual([expectedAction]);
    });

    test('loginSuccess should create an action', () => {
        const access_token = 'test';
        const expires_in = 90;
        const userData = {
            userName: 'test',
            password: 'test'
        };
        const status = 'login'
        const expectedAction = {
            type: LOGIN_SUCCESS,
            payload: { access_token, expires_in, userData, status },
        };

        store.dispatch(loginSuccess(access_token, expires_in, userData, status));

        const actions = store.getActions();
        expect(actions).toEqual([expectedAction]);
    });

    test('signOutUser', () => {
        const expectedAction = {
            type: LOGOUT,
        };

        store.dispatch(signOutUser());

        const actions = store.getActions();
        expect(actions).toEqual([expectedAction]);
    });

    it('dispatches the expected actions when login is successful', async () => {
        const dispatch = jest.fn();
        const userData = { username: 'testuser', password: 'testpassword' };
        const status = 'login';
    
        // Mock the axios post method
        jest.spyOn(axios, 'post').mockResolvedValue({
          data: {
            access_token: 'testAccessToken',
          },
        });
    
        await userLogin(userData, status)(dispatch);
      });
    
      it('dispatches the expected actions when login fails', async () => {
        const dispatch = jest.fn();
        const userData = { username: 'testuser', password: 'testpassword' };
        const status = 'login';
    
        // Mock the axios post method to throw an error
        const axiosPostSpy = jest.spyOn(axios, 'post');
        axiosPostSpy.mockRejectedValue(new Error('Login failed'));
    
        await userLogin(userData, status)(dispatch);
      });
});
