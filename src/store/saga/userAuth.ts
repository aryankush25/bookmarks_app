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

function* fetchUserAsync(action: FetchUserActionType) {
  try {
    const {
      payload: { email, password }
    } = action;

    console.log({ email, password });

    // Do api call here
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify(action.payload);

    var requestOptions: RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch('https://bookmarks-app-server.herokuapp.com/login', requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));

    const data = {
      username: email,
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

export function* signup(action: SingupUserAction) {
  try {
    const {
      payload: { name, email, password }
    } = action;

    console.log({ name, email, password });

    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    let raw = JSON.stringify(action.payload);

    let requestOptions: RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch('https://bookmarks-app-server.herokuapp.com/register', requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));

    toast.success('Signed Up Successfully');
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
  takeLatest(actionTypes.SIGNUP_REQUEST, signup)
];
