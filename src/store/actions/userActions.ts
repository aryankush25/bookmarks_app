import actionTypes from '../actionTypes';

export const requestUserRequest = (email: string, password: string) => {
  return {
    type: actionTypes.USER_REQUEST,
    payload: { email, password }
  };
};

export const requestCreateBookmark = (url: string, folderId: any) => {
  return {
    type: actionTypes.CREATE_BOOKMARK_REQUEST,
    payload: { url, folderId }
  };
};
export const requestCreateBookmarkSuccess = (url: string, folderId: string) => {
  return {
    type: actionTypes.CREATE_BOOKMARK_SUCCESS,
    payload: { url, folderId }
  };
};

export const requestCreateBookmarkFailure = () => {
  return {
    type: actionTypes.CREATE_BOOKMARK_FAILURE,
    payload: {}
  };
};

export const requestDeleteBookmark = (bookmarkId: string) => {
  return {
    type: actionTypes.DELETE_BOOKMARK_REQUEST,
    payload: bookmarkId
  };
};

export const requestDeleteBookmarkSuccess = (bookmarks: any[]) => {
  return {
    type: actionTypes.DELETE_BOOKMARK_SUCCESS,
    payload: { bookmarks }
  };
};

export const requestDeleteBookmarkFailure = () => {
  return {
    type: actionTypes.DELETE_BOOKMARK_FAILURE
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

//Add sub-folder
export const requestAddSubFolder = (name: string, parentId: string) => {
  return {
    type: actionTypes.CREATE_SUBFOLDER_REQUEST,
    payload: { name, parentId }
  };
};

export const requestAddSubFolderSuccess = (name: string, parentId: string) => {
  return {
    type: actionTypes.CREATE_SUBFOLDER_SUCCESS,
    payload: { name, parentId }
  };
};

export const requestAddSubFolderFailure = () => {
  return {
    type: actionTypes.CREATE_SUBFOLDER_FAILURE,
    payload: {}
  };
};

export const requestRenameFolder = (name: string, folderId: string) => {
  return {
    type: actionTypes.CREATE_RENAME_REQUEST,
    payload: { name, folderId }
  };
};

export const requestRenameFolderSuccess = (name: string, folderId: string) => {
  return {
    type: actionTypes.CREATE_RENAME_SUCCESS,
    payload: { name, folderId }
  };
};

export const requestRenameFolderFailure = () => {
  return {
    type: actionTypes.CREATE_RENAME_FAILURE,
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

export const requestDeleteFolder = (folderId: string) => {
  return {
    type: actionTypes.DELETE_FOLDER_REQUEST,
    payload: folderId
  };
};

export const requestDeleteFolderSuccess = (folders: any[]) => {
  return {
    type: actionTypes.DELETE_FOLDER_SUCCESS,
    payload: { folders }
  };
};

export const requestDeleteFolderFailure = () => {
  return {
    type: actionTypes.DELETE_FOLDER_FAILURE
  };
};

export const requestAccessBookmarkDefault = () => {
  return {
    type: actionTypes.ACCESS_BOOKMARKS_REQUEST
  };
};

export const requestAccessBookmark = (id) => {
  return {
    type: actionTypes.ACCESS_FOLDERDATA_REQUEST,
    payload: { id }
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

export const requestAccessFolderData = (id) => {
  return {
    type: actionTypes.ACCESS_FOLDERDATA_REQUEST,
    payload: { id }
  };
};
//folderData:{"FolderId", folderData:{}}
export const requestAccessFolderDataSuccess = (folderData: {
  folderId: String;
  folderData: any;
}) => {
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
