import { takeLatest, takeEvery, delay, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import actionTypes from '../actionTypes';
import {
  requestUserSuccess,
  requestUserFailure,
  requestUserSignupSuccess,
  requestUserSignupFailure,
  requestCreateFolderSuccess,
  requestCreateFolderFailure,
  requestAccessFolderSuccess,
  requestAccessFolderFailure,
  requestAccessBookmarkFailure,
  requestAccessBookmarkSuccess,
  requestAccessChildfolderSuccess,
  requestAccessChildfolderFailure,
  requestCreateBookmarkSuccess,
  requestCreateBookmarkFailure,
  requestAccessFolderDataSuccess
} from '../actions/userActions';
import {
  setLocalStorageTokens,
  clearLocalStorage
} from '../../utils/tokensHelper';
import { HOME_ROUTE, LOGIN_ROUTE } from '../../utils/routesConstants';
import { navigateTo } from '../../utils/history';
// import { result } from 'lodash';
import * as ApiService from '../../services/apiService';
// import { act } from '@testing-library/react';
interface FetchUserActionType {
  type: String;
  payload: {
    email: string;
    password: string;
  };
}

interface SingupUserAction {
  type: String;
  payload: {
    name: string;
    email: string;
    password: string;
  };
}

interface CreateFolderAction {
  type: String;
  payload: {
    name: string;
  };
}

interface CreateBookmarkAction {
  type: String;
  payload: {
    url: string;
    folder: string;
  };
}

interface getFolders {
  type: String;
  payload: {};
}

interface getFolderdatas {
  type: string;
  payload: {};
}
interface getChildfolder {
  type: string;
  payload: {
    id: string | undefined;
  };
}

interface getBookmarks {
  type: String;
  payload: {};
}

const fetchuserloginData = (raw) => {
  const APIObj = {
    endPoint: '/login',
    authenticationRequired: false,
    method: 'POST',
    body: raw
  };

  return ApiService.callApi(APIObj);
};
function* fetchUserAsync(action: FetchUserActionType) {
  try {
    var raw = JSON.stringify(action.payload);
    const result1 = yield fetchuserloginData(raw);
    setLocalStorageTokens({
      email: result1.email,
      accessToken: result1.token
    });
    yield put(requestUserSuccess(result1.email, result1.accessToken));

    toast.success('Logged In Successfully');
    navigateTo(HOME_ROUTE);
  } catch (error) {
    console.log(error);
    yield put(requestUserFailure());
  }
}

const fetchusersignupData = (raw) => {
  const APIObj = {
    endPoint: '/register',
    authenticationRequired: false,
    method: 'POST',
    body: raw
  };

  return ApiService.callApi(APIObj);
};
function* signup(action: SingupUserAction) {
  try {
    var raw = JSON.stringify(action.payload);

    const result1 = yield fetchusersignupData(raw);

    setLocalStorageTokens({
      email: result1.email,
      accessToken: result1.token
    });
    yield put(
      requestUserSignupSuccess(result1.name, result1.email, result1.password)
    );

    navigateTo(HOME_ROUTE);
    toast.success('Signed In Successfully');
  } catch (error) {
    console.log(error);
    yield put(requestUserSignupFailure());
  }
}

const createFolder = (raw) => {
  const APIObj = {
    endPoint: '/folder',
    authenticationRequired: true,
    method: 'POST',
    body: raw
  };

  return ApiService.callApi(APIObj);
};
export function* createfolder(action: CreateFolderAction) {
  try {
    var raw = JSON.stringify(action.payload);

    const result1 = yield createFolder(raw);

    yield put(requestCreateFolderSuccess(result1));
  } catch (error) {
    console.log(error);
    yield put(requestCreateFolderFailure());
  }
}

const createBookmark = (raw) => {
  const APIObj = {
    endPoint: '/bookmark',
    authenticationRequired: true,
    method: 'POST',
    body: raw
  };

  return ApiService.callApi(APIObj);
};

export function* createbookmark(action: CreateBookmarkAction) {
  try {
    var raw = JSON.stringify(action.payload);

    const result1 = yield createBookmark(raw);

    yield put(requestCreateBookmarkSuccess(result1.url, result1.folder));
  } catch (error) {
    console.log(error);
    yield put(requestCreateBookmarkFailure());
  }
}

// export function* createbookmark(action: CreateBookmarkAction) {
//   try {
//     const {
//       payload: { url, folder }
//     } = action;

//     console.log({ url, folder });
//     const response = yield fetch(
//       // process.env.REACT_APP_BACKEND_URL +'/bookmark'
//       'https://bookmarks-app-server.herokuapp.com/bookmark',
//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTMzYjY2LWZiMTAtNDkxMC1hNDRhLTZjYWIwZjU2ZTYyZCIsImVtYWlsIjoidGVzdDFAZW1haWwuY29tIiwiZXhwIjoxNjM0OTY4NDQwLCJpYXQiOjE2Mjk3ODQ0NDB9.C4w_VXqaFLeab3eATiP-TxIPGjSMBJfFyAFxzyBYqqo'}`
//         },
//         body: JSON.stringify(action.payload)
//       }
//     );
//     yield put(requestUserSuccess('a', 'b'));
//   } catch (error) {
//     console.log(error);

//     yield put(requestUserFailure());
//   }
// }

const getallFolder = (raw) => {
  const APIObj = {
    endPoint: '/folders',
    authenticationRequired: true,
    method: 'GET',
    body: raw
  };

  return ApiService.callApi(APIObj);
};
export function* getfolder(action: getFolders) {
  try {
    var raw = JSON.stringify(action.payload);

    const result1 = yield getallFolder(raw);

    yield put(requestAccessFolderSuccess(result1));
  } catch (error) {
    console.log(error);
    yield put(requestAccessFolderFailure());
  }
}

const getchildFolders = (id) => {
  const APIObj = {
    endPoint: `/folders?folderId=${id}`,
    authenticationRequired: true,
    method: 'GET'
  };

  return ApiService.callApi(APIObj);
};

export function* getchildfolder(action: getChildfolder) {
  try {
    var raw = JSON.stringify(action.payload);

    const result1 = yield getchildFolders(action.payload.id);

    yield put(requestAccessChildfolderSuccess(result1));
  } catch (error) {
    console.log(error);
    yield put(requestAccessChildfolderFailure());
  }
}

// export function* getchildfolder(action: getChildfolder) {
//   try {
//     const {} = action;

//     const response = yield fetch(
//       // process.env.REACT_APP_BACKEND_URL +'/bookmark'
//       `https://bookmarks-app-server.herokuapp.com/folders?folderId=${action.payload.id}`,
//       {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTMzYjY2LWZiMTAtNDkxMC1hNDRhLTZjYWIwZjU2ZTYyZCIsImVtYWlsIjoidGVzdDFAZW1haWwuY29tIiwiZXhwIjoxNjM0OTY4NDQwLCJpYXQiOjE2Mjk3ODQ0NDB9.C4w_VXqaFLeab3eATiP-TxIPGjSMBJfFyAFxzyBYqqo'}`
//         }
//       }
//     ).then((res) => res.json());
//     console.log('Api Response', response);
//     yield put(
//       requestAccessChildfolderSuccess({
//         node: response,
//         folderId: action.payload.id
//       })
//     );
//   } catch (error) {
//     console.log(error);

//     yield put(requestAccessChildfolderFailure());
//   }
// }

const getBookmark = (raw) => {
  const APIObj = {
    endPoint: '/folder-bookmarks',
    authenticationRequired: true,
    method: 'GET',
    body: raw
  };

  return ApiService.callApi(APIObj);
};

export function* getbookmark(action: getBookmarks) {
  try {
    var raw = JSON.stringify(action.payload);

    const result1 = yield getBookmark(raw);

    yield put(requestAccessBookmarkSuccess(result1));
  } catch (error) {
    console.log(error);
    yield put(requestAccessBookmarkFailure());
  }
}

// export function* getbookmark(action: getBookmarks) {
//   try {
//     const {} = action;

//     // console.log('getBoomarks');
//     const response = yield fetch(
//       // process.env.REACT_APP_BACKEND_URL +'/bookmark'
//       'https://bookmarks-app-server.herokuapp.com/folder-bookmarks',
//       {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTMzYjY2LWZiMTAtNDkxMC1hNDRhLTZjYWIwZjU2ZTYyZCIsImVtYWlsIjoidGVzdDFAZW1haWwuY29tIiwiZXhwIjoxNjM0OTY4NDQwLCJpYXQiOjE2Mjk3ODQ0NDB9.C4w_VXqaFLeab3eATiP-TxIPGjSMBJfFyAFxzyBYqqo'}`
//         },
//         body: JSON.stringify(action.payload)
//       }
//     ).then((res) => res.json());
//     // console.log('Api Response', response);
//     yield put(requestAccessBookmarkSuccess(response));
//   } catch (error) {
//     console.log(error);

//     yield put(requestAccessBookmarkFailure());
//   }
// }

const getFolderData = (id) => {
  const APIObj = {
    endPoint: `/folder-bookmarks?folderId=${id}`,
    authenticationRequired: true,
    method: 'GET'
  };
};

export function* getFolderdata(action: getFolderdatas) {
  try {
    var raw = JSON.stringify(action.payload);

    const result1 = yield getFolderData(action.payload);

    yield put(requestAccessFolderDataSuccess(result1));
  } catch (error) {
    console.log(error);
    yield put(requestAccessFolderFailure());
  }
}

export function* logout() {
  try {
    yield delay(1000); // This is to save multiple requests as saga offers debounce functionality out of the box

    // To understand debounce functionality Hit logout button multiple times withing 1 second and this console will be only printed once
    console.log('Logout Request');

    clearLocalStorage();

    navigateTo(LOGIN_ROUTE);

    toast.success('Logged Out Successfully');
  } catch (error) {
    console.log(error);
  }
}

export default [
  takeLatest(actionTypes.USER_REQUEST, fetchUserAsync),
  takeLatest(actionTypes.LOGOUT, logout),
  takeLatest(actionTypes.CREATE_FOLDER_REQUEST, createfolder),
  takeLatest(actionTypes.CREATE_BOOKMARK_REQUEST, createbookmark),
  takeLatest(actionTypes.ACCESS_FOLDERS_REQUEST, getfolder),
  takeEvery(actionTypes.ACCESS_CHILDFOLDER_REQUEST, getchildfolder),
  takeLatest(actionTypes.ACCESS_BOOKMARKS_REQUEST, getbookmark),
  takeLatest(actionTypes.SIGNUP_REQUEST, signup)
];
