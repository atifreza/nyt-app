import {
  SET_LOGGED_IN,
  SET_REGISTERED,
  LOGIN_SUCCESS,
  SAVE_INTERVAL_ID,
  LOGOUT
} from "../ConstantTypes";


const initialState = {
  isLoggedIn: false,
  isRegistered: false,
  access_token: null,
  expires_in: null,
  userData: {},
  status:'',
  intervalId: ''
};

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    case SET_REGISTERED:
      return {
        ...state,
        isRegistered: action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        access_token: action.payload.access_token,
        expires_in: action.payload.expires_in,
        userData: action.payload.loginStatus,
        status: action.payload.status
      };
      case SAVE_INTERVAL_ID:
        return {
          ...state,
          intervalId: action.payload,
        };
      case LOGOUT:
      // Reset state to initial values
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
