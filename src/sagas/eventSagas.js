import {put, call, select} from 'redux-saga/effects';
import types from '~/constants/actionTypes';
import {
  createEventResult,
} from '~/apis/api';
import { parseISOString } from '~/helper/dateHelper';

const okCreate = (payload) => ({
  type: types.CREATE_EVENT_SUCCESS,
  payload,
});

const errCreate = ({message}) => {
  return {
    type: types.CREATE_EVENT_ERROR,
    payload: {
      message,
    },
  };
};

export function* createEventSaga({payload = {}}) {
  console.log("function*createEventSaga -> payload", payload)
  try {
    const {auth, setting} = yield select(({auth, setting}) => ({
      auth,
      setting,
    }));
    const database = setting.get('database');

    const customHeaders = {
      Authorization: `Bearer ${auth.get('token')}`,
    };

    const {result} = yield call(createEventResult, customHeaders, payload);
    console.log("function*createEventSaga -> result", result)
    
    yield database.events.insert({
      ...result.data,
      createAt: parseISOString(result.data.createAt),
      updateAt: parseISOString(result.data.updateAt),
      finalReviewAt: parseISOString(result.data.finalReviewAt),
      datingAt: parseISOString(result.data.datingAt),
    });
    yield put(okCreate());
  } catch (error) {
    const errorAction = errCreate(error);
    yield put(errorAction);
  }
}
