import actionTypes from '../actionTypes';
import { getLocalStorageTokens } from '../../utils/tokensHelper';
import { UserDataReducerTypes } from '../utils/StoreTypes';

export interface ActionType {
  type: String;
  payload: any;
}

const { email, accessToken } = getLocalStorageTokens();

const initialState: UserDataReducerTypes = {
  userData: {
    email,
    accessToken
  },
  loginSpinner: false
};

function userData(state = initialState, action: ActionType) {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.USER_REQUEST: {
      return {
        ...state,
        loginSpinner: true
      };
    }
    case actionTypes.USER_SUCCESS: {
      return {
        ...state,
        userData: payload,
        loginSpinner: false
      };
    }
    case actionTypes.USER_FAILURE: {
      return {
        ...state,
        loginSpinner: false
      };
    }
    case actionTypes.CREATE_BOOKMARK_REQUEST: {
      return {
        ...state,
        userData: payload,
        loginSpinner: true
      };
    }

    case actionTypes.CREATE_BOOKMARK_SUCCESS: {
      return {
        ...state,
        loginSpinner: false
      };
    }

    case actionTypes.CREATE_BOOKMARK_FAILURE: {
      return {
        ...state,
        loginSpinner: false
      };
    }
    case actionTypes.CREATE_FOLDER_REQUEST: {
      return {
        ...state,
        userData: payload
      };
    }

    case actionTypes.CREATE_FOLDER_SUCCESS: {
      return {
        ...state
      };
    }

    case actionTypes.CREATE_FOLDER_FAILURE: {
      return {
        ...state
      };
    }

    case actionTypes.ACCESS_FOLDERS_REQUEST: {
      return {
        ...state,
        userData: payload
      };
    }

    case actionTypes.ACCESS_FOLDERS_SUCCESS: {
      return {
        ...state
      };
    }

    case actionTypes.ACCESS_FOLDERS_FAILURE: {
      return {
        ...state
      };
    }

    case actionTypes.LOGOUT:
      return initialState;

    case actionTypes.SIGNUP_REQUEST: {
      return {
        ...state,
        loginSpinner: true
      };
    }
    case actionTypes.SIGNUP_SUCCESS: {
      return {
        ...state,
        userData: payload,
        loginSpinner: false
      };
    }
    case actionTypes.SIGNUP_FAILURE: {
      return {
        ...state,
        loginSpinner: false
      };
    }

    default:
      return { ...state };
  }
}

export default userData;
