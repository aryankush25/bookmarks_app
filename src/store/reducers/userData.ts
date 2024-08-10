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
  loginSpinner: false,
  folderSpinner: false,
  bookmarkLoader: false,
  folders: [],
  bookmarks: [],
  node: {},
  folderData: [],
  folderId: '',
  rename: ''
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

    case actionTypes.EDIT_BOOKMARK_REQUEST: {
      return {
        ...state,
        userData: payload
      };
    }

    case actionTypes.EDIT_BOOKMARK_SUCCESS: {
      return {
        ...state
      };
    }

    case actionTypes.EDIT_BOOKMARK_FAILURE: {
      return {
        ...state
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
        ...state,
        folder: action.payload
      };
    }

    case actionTypes.CREATE_FOLDER_FAILURE: {
      return {
        ...state
      };
    }

    case actionTypes.CREATE_SUBFOLDER_REQUEST: {
      return {
        ...state,
        userData: payload
      };
    }

    case actionTypes.CREATE_SUBFOLDER_SUCCESS: {
      return {
        ...state,
        subfolder: action.payload
      };
    }

    case actionTypes.CREATE_SUBFOLDER_FAILURE: {
      return {
        ...state
      };
    }

    case actionTypes.CREATE_RENAME_REQUEST: {
      return {
        ...state
      };
    }

    case actionTypes.CREATE_RENAME_SUCCESS: {
      return {
        ...state
      };
    }

    case actionTypes.CREATE_RENAME_FAILURE: {
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
        ...state,
        folders: action.payload.folders
      };
    }

    case actionTypes.ACCESS_FOLDERS_FAILURE: {
      return {
        ...state
      };
    }

    case actionTypes.ACCESS_BOOKMARKS_REQUEST: {
      return {
        ...state,
        userData: payload,
        bookmarkLoader: true
      };
    }

    case actionTypes.ACCESS_BOOKMARKS_SUCCESS: {
      return {
        ...state,
        bookmarks: action.payload.bookmarks,
        bookmarkLoader: false
      };
    }

    case actionTypes.ACCESS_BOOKMARKS_FAILURE: {
      return {
        ...state,
        bookmarkLoader: false
      };
    }

    case actionTypes.DELETE_BOOKMARK_REQUEST: {
      return {
        ...state,
        userData: payload
      };
    }

    case actionTypes.DELETE_BOOKMARK_SUCCESS: {
      return {
        ...state,
        bookmarks: state.bookmarks.filter(
          (bookmark) => bookmark !== action.payload
        )
      };
    }

    case actionTypes.DELETE_BOOKMARK_FAILURE: {
      return {
        ...state
      };
    }

    case actionTypes.ACCESS_CHILDFOLDER_REQUEST: {
      return {
        ...state,
        userData: payload,
        folderSpinner: true
      };
    }

    case actionTypes.ACCESS_CHILDFOLDER_SUCCESS: {
      return {
        ...state,
        node: {
          ...state.node,
          [action.payload.folderId]: action.payload.node //dynamic key-value generation
        },
        folderSpinner: false
      };
    }

    case actionTypes.ACCESS_CHILDFOLDER_FAILURE: {
      return {
        ...state,
        folderSpinner: false
      };
    }
    case actionTypes.ACCESS_FOLDERDATA_REQUEST: {
      return {
        ...state,
        userData: payload //id
      };
    }
    case actionTypes.ACCESS_FOLDERDATA_SUCCESS: {
      return {
        ...state,

        folderData: action.payload.folderData
      };
    }

    case actionTypes.ACCESS_FOLDERDATA_FAILURE: {
      return {
        ...state
      };
    }

    case actionTypes.DELETE_FOLDER_REQUEST: {
      return {
        ...state,
        userData: payload
      };
    }

    case actionTypes.DELETE_FOLDER_SUCCESS: {
      return {
        ...state,
        folders: state.folders.filter((folder) => folder !== action.payload)
      };
    }

    case actionTypes.DELETE_FOLDER_FAILURE: {
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
