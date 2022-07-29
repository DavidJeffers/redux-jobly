import {call, put} from "redux-saga/effects";
import {setJobs} from "../../reducers/Jobs";
import {requestGetJobs} from "../requests/jobs";

export function* handleGetJobs(action) {
  try {
    const response = yield call(requestGetJobs, action.title);
    const {data} = response;
    yield put(setJobs(data.jobs));
  } catch (error) {
    console.log(error);
  }
}
