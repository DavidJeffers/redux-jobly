import {call, put} from "redux-saga/effects";
import {setUser} from "../../reducers/User";
import {requestGetUser, requestUpdateUser} from "../requests/user";

export function* handleGetUser(action) {
  try {
    const response = yield call(requestGetUser, action.username);
    const {data} = response;
    yield put(setUser(data.user));
  } catch (error) {
    console.log(error);
  }
}

export function* handleUpdateUser(action) {
  try {
    const response = yield call(
      requestUpdateUser,
      action.username,
      action.data
    );
    const {data} = response;
    console.log(data);
    yield put(setUser(data.user));
  } catch (error) {
    console.log(error);
  }
}

export function* handleSignInUser(action) {
  try {
    const response = yield call(requestGetUser, action.username);
    const {data} = response;
    yield put(setUser(data.user));
  } catch (error) {
    console.log(error);
  }
}
