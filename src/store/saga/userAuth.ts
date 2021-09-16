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
  requestAccessFolderDataSuccess,
  requestAccessFolderDataFailure
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
  payload: {
    id: string | undefined;
  };
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

const getFolderData = (id) => {
  console.log('id', id);
  const APIObj = {
    endPoint: `/folder-bookmarks?folderId=${id}`,
    authenticationRequired: true,
    method: 'GET'
  };
  return ApiService.callApi(APIObj);
};

export function* getFolderdata(action: getFolderdatas) {
  console.log('action.payload.id', action);
  try {
    var raw = JSON.stringify(action.payload);

    const result1 = yield getFolderData(action.payload.id);
    delete result1.responseStatus;
    console.log('result', result1);
    yield put(
      requestAccessFolderDataSuccess({
        folderId: action.payload.id,
        folderData: result1
      })
    );
  } catch (error) {
    console.log(error);
    yield put(requestAccessFolderDataFailure());
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
  takeEvery(actionTypes.ACCESS_FOLDERDATA_REQUEST, getFolderdata),
  takeLatest(actionTypes.SIGNUP_REQUEST, signup)
];
