import types from '../constants/actionTypes';
import {call, put} from 'redux-saga/effects';
import {initSQL} from '~/models';
import {getLoginUser, validateIsFirstLaunch} from '~/helper/authHelpers';

const okInitial = (payload) => ({
  type: types.INITIAL_APP_SUCCESS,
  payload,
});

const errInitial = ({ message}) => ({
  type: types.INITIAL_APP_ERROR,
  payload: { message },
});

export function* initialAppSaga() {
  try {
    const isFirstLaunch = yield call(validateIsFirstLaunch);
    const loginUser = yield call(getLoginUser);
    const database = yield call(initSQL, isFirstLaunch);
    
    const resAction = true ? okInitial({database}) : errInitial();
    yield put({
      type: types.SET_LOGIN_USER,
      payload: loginUser,
    });

    yield put(resAction);
  } catch (error) {
    console.log('function*initialAppSaga -> error', error)
    const errorAction = errInitial(error);
    yield put(errorAction);
  }
}
