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
export const requestCreateBookmarkSuccess = (url: string, folder: string) => {
  return {
    type: actionTypes.CREATE_BOOKMARK_SUCCESS,
    payload: { url, folder }
  };
};

export const requestCreateBookmarkFailure = () => {
  return {
    type: actionTypes.CREATE_BOOKMARK_FAILURE,
    payload: {}
  };
};
export const requestCreateFolder = (name: string) => {
  return {
    type: actionTypes.CREATE_FOLDER_REQUEST,
    payload: { name }
  };
};

export const requestCreateFolderSuccess = (name: string) => {
  return {
    type: actionTypes.CREATE_FOLDER_SUCCESS,
    payload: { name }
  };
};

export const requestCreateFolderFailure = () => {
  return {
    type: actionTypes.CREATE_FOLDER_FAILURE,
    payload: {}
  };
};

export const requestAccessFolder = () => {
  return {
    type: actionTypes.ACCESS_FOLDERS_REQUEST
  };
};

export const requestAccessFolderSuccess = (folders: any[]) => {
  return {
    type: actionTypes.ACCESS_FOLDERS_SUCCESS,
    payload: { folders }
  };
};

export const requestAccessFolderFailure = () => {
  return {
    type: actionTypes.ACCESS_FOLDERS_FAILURE,
    payload: {}
  };
};

export const requestAccessBookmark = () => {
  return {
    type: actionTypes.ACCESS_BOOKMARKS_REQUEST
  };
};

export const requestAccessBookmarkSuccess = (bookmarks: any[]) => {
  return {
    type: actionTypes.ACCESS_BOOKMARKS_SUCCESS,
    payload: { bookmarks }
  };
};

export const requestAccessBookmarkFailure = () => {
  return {
    type: actionTypes.ACCESS_BOOKMARKS_FAILURE,
    payload: {}
  };
};
export const requestAccessChildfolder = (node) => {
  return {
    type: actionTypes.ACCESS_CHILDFOLDER_REQUEST,
    payload: node
  };
};

export const requestAccessChildfolderSuccess = (node: {
  node: any;
  folderId: String;
}) => {
  // console.log('insideNode', node);
  return {
    type: actionTypes.ACCESS_CHILDFOLDER_SUCCESS,
    payload: { node: node.node, folderId: node.folderId }
  };
};
export const requestAccessChildfolderFailure = () => {
  return {
    type: actionTypes.ACCESS_CHILDFOLDER_FAILURE
  };
};

export const requestAccessFolderData = (folderData) => {
  return {
    type: actionTypes.ACCESS_FOLDERDATA_REQUEST,
    payload: { folderData }
  };
};

export const requestAccessFolderDataSuccess = (folderData: {
  folderId: String;
  folderData: any;
}) => {
  console.log('insideFolderData', folderData);
  return {
    type: actionTypes.ACCESS_FOLDERDATA_SUCCESS,
    payload: {
      folderData: folderData.folderData,
      folderId: folderData.folderId
    }
  };
};

export const requestAccessFolderDataFailure = () => {
  return {
    type: actionTypes.ACCESS_FOLDERDATA_FAILURE
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
