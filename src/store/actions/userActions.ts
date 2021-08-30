import actionTypes from '../actionTypes';

console.log('actiontype', actionTypes);
export const requestUserRequest = (email: string, password: string) => {
  return {
    type: actionTypes.USER_REQUEST,
    payload: { email, password }
  };
};

export const requestCreateBookmark = (url: string, folder: string) => {
  return {
    type: actionTypes.CREATE_BOOKMARK_REQUEST,
    payload: { url, folder }
  };
};

// export const requestUserSuccess = (
//   username: string,
//   accessToken: string,
//   refreshToken: string
// ) => {
export const requestUserSuccess = (email: string, accessToken: string) => {
  return {
    type: actionTypes.USER_SUCCESS,
    payload: {
      email,
      accessToken
    }
  };
};

export const requestUserFailure = () => {
  return { type: actionTypes.USER_FAILURE, payload: {} };
};

export const startLogout = () => {
  return {
    type: actionTypes.LOGOUT
  };
};

export const requestUserSignup = (
  name: string,
  email: string,
  password: string
) => {
  return {
    type: actionTypes.SIGNUP_REQUEST,
    payload: { name, email, password }
  };
};

export const requestUserSignupSuccess = (
  name: string,
  email: string,
  password: string
) => {
  return {
    type: actionTypes.SIGNUP_SUCCESS,
    payload: { name, email, password }
  };
};

export const requestUserSignupFailure = () => {
  return { type: actionTypes.SIGNUP_FAILURE, payload: {} };
};
