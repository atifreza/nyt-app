import { userLogin } from '../redux/actions/UserActions';

let refreshTokenIntervalId = null;

const clearRefreshTokenInterval = () => {
  if (refreshTokenIntervalId) {
    clearInterval(refreshTokenIntervalId);
    refreshTokenIntervalId = null;
  }
};

const tokenRefreshMiddleware = (store) => (next) => (action) => {
  next(action);

  if (action.type === 'LOGIN_SUCCESS') {
    // Get the initial access token and expires_in, userData, status value from the action payload
    const {expires_in, userData,status } = action.payload;

    clearRefreshTokenInterval();

    // Schedule token refresh every 1 minute
    refreshTokenIntervalId = setInterval(() => {
      store.dispatch(userLogin(userData,status));
    }, (expires_in - 60) * 1000); // Refresh 1 minute before the token expires

    // Save the intervalId in the store or wherever needed it for later cleanup
    store.dispatch({ type: 'SAVE_INTERVAL_ID', payload: refreshTokenIntervalId });
  }
  if (action.type === 'LOGOUT') {
    // Clear the refresh token interval when the user logs out
    clearRefreshTokenInterval();
  }
};

export default tokenRefreshMiddleware;
