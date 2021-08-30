import { takeLatest, delay, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import actionTypes from '../actionTypes';
import {
  requestUserSuccess,
  requestUserFailure,
  requestUserSignupSuccess,
  requestUserSignupFailure
} from '../actions/userActions';
import {
  setLocalStorageTokens,
  clearLocalStorage
} from '../../utils/tokensHelper';
import { HOME_ROUTE, LOGIN_ROUTE } from '../../utils/routesConstants';
import { navigateTo } from '../../utils/history';
import { result } from 'lodash';
import * as ApiService from '../../services/apiService';
import { act } from '@testing-library/react';
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
