const AUTH = "AUTH";
const LOGOUT = "LOGOUT";
const REGISTER_SUCCESS = "REGISTER_SUCCESS";

const initialState = {
  isAuth: false,
  userToken: null,
};

export const authReducer = (state = initialState, action) => {  
  switch (action.type) {
    case AUTH:
        return { isAuth: true, userToken: action.userToken };
    case REGISTER_SUCCESS:
        return {... state, isAuth: true}
    case LOGOUT:
        return { isAuth: false, userToken: null };
    default: return state;
  }
};

// ACTION CREATORS
export const setAuth = (userToken) => ({ type: AUTH, userToken });
export const logout = () => ({ type: LOGOUT });
export const registerSuccess = () => ({ type: REGISTER_SUCCESS });
