import { takeLatest, delay, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import actionTypes from '../actionTypes';
import { requestUserSuccess, requestUserFailure } from '../actions/userActions';
import {
  setLocalStorageTokens,
  clearLocalStorage
} from '../../utils/tokensHelper';
import { HOME_ROUTE, LOGIN_ROUTE } from '../../utils/routesConstants';
import { navigateTo } from '../../utils/history';

interface FetchUserActionType {
  type: String;
  payload: {
    username: string;
    password: string;
  };
}

interface CreateBookmarkAction {
  type: String;
  payload: {
    url: string;
    folder: string;
  };
}
function* fetchUserAsync(action: FetchUserActionType) {
  try {
    const {
      payload: { username, password }
    } = action;

    console.log({ username, password });

    // Do api call here

    const data = {
      username: username,
      accessToken: 'access-token-from-server',
      refreshToken: 'refresh-token-from-server'
    };

    setLocalStorageTokens({
      username: data.username,
      accessToken: data.accessToken,
      refreshToken: data.refreshToken
    });

    navigateTo(HOME_ROUTE);

    yield put(
      requestUserSuccess(data.username, data.accessToken, data.refreshToken)
    );

    toast.success('Logged In Successfully');
  } catch (error) {
    console.log(error);
    yield put(requestUserFailure());
  }
}
export function* createbookmark(action: CreateBookmarkAction) {
  try {
    const {
      payload: { url, folder }
    } = action;

    console.log({ url, folder });
    const response = yield fetch(
      'https://bookmarks-app-server.herokuapp.com/bookmark',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTMzYjY2LWZiMTAtNDkxMC1hNDRhLTZjYWIwZjU2ZTYyZCIsImVtYWlsIjoidGVzdDFAZW1haWwuY29tIiwiZXhwIjoxNjM0OTY4NDQwLCJpYXQiOjE2Mjk3ODQ0NDB9.C4w_VXqaFLeab3eATiP-TxIPGjSMBJfFyAFxzyBYqqo'}`
        },
        body: JSON.stringify(action.payload)
      }
    );
    yield put(requestUserSuccess('a', 'b', 'c'));
  } catch (error) {
    console.log(error);

    yield put(requestUserFailure());
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
  takeLatest(actionTypes.CREATE_BOOKMARK_REQUEST, createbookmark)
];
