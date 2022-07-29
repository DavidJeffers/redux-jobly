import {call, put} from "redux-saga/effects";
import {
  requestSetApplication,
  requestUnSetApplication,
} from "../requests/application";
import {requestGetUser} from "../requests/user";
import {setUser} from "../../reducers/User";

export function* handleSetApplication(action) {
  try {
    yield call(requestSetApplication, action.username, action.jobId);
    const response = yield call(requestGetUser, action.username);
    const {data} = response;
    yield put(setUser(data.user));
  } catch (error) {
    console.log(error);
  }
}

export function* handleUnSetApplication(action) {
  try {
    yield call(requestUnSetApplication, action.username, action.jobId);
    const response = yield call(requestGetUser, action.username);
    const {data} = response;
    yield put(setUser(data.user));
  } catch (error) {
    console.log(error);
  }
}
