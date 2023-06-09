import axios from 'axios';
import { setLoading } from "../actions/TopStoriesActions"
import {
    SET_LOGGED_IN,
    SET_REGISTERED,
    LOGIN_SUCCESS,
    LOGOUT
} from "../ConstantTypes";


export const setLoggedIn = (isLogged) => (dispatch) => {
    dispatch({
        type: SET_LOGGED_IN,
        payload: isLogged,
    });
};

export const setRegister = (isRegistered) => (dispatch) => {
    dispatch({
        type: SET_REGISTERED,
        payload: isRegistered,
    });
};

export const loginSuccess = (access_token, expires_in, userData, loginStatus) => ({
    type: LOGIN_SUCCESS,
    payload: { access_token, expires_in, userData, status: loginStatus },
});

export const signOutUser = () => ({
    type: LOGOUT,
});



export const userLogin = (userData, status) => async (dispatch) => {
    dispatch(setLoading(true))
    try {

        let url = `http://localhost:8000/auth/${status}`
        const res = await axios.post(url, userData);
        if (res?.data?.access_token) {
            const { data: { access_token } } = res
            // Cookies.set('accessToken', access_token) 
            document.cookie = `accessToken=${access_token}; max-age=900; path=/;`;
            if (status === 'login') {
                dispatch(setLoggedIn(true));
                dispatch(loginSuccess(access_token, 900, userData, status));
            } else if (status === 'register') {
                dispatch(setRegister(true));
            }
        }
        dispatch(setLoading(false));
    } catch (error) {
        if (error) {
            console.log('error', error)
        }
        dispatch(setLoading(false))
    }
}

