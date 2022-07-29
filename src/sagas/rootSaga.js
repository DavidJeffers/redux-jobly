import {all, takeLatest} from "redux-saga/effects";
import {handleGetUser, handleUpdateUser} from "./handlers/user";
import {GET_USER, UPDATE_USER} from "../reducers/User";
import {GET_JOBS} from "../reducers/Jobs";
import {handleGetJobs} from "./handlers/jobs";
import {APPLY_JOB, UNAPPLY_JOB} from "../reducers/setApplications";
import {
  handleSetApplication,
  handleUnSetApplication,
} from "./handlers/application";
import {GET_COMPANIES} from "../reducers/Companies";
import {handleGetCompanies} from "./handlers/companies";

export function* watcherSaga() {
  yield all([
    takeLatest(GET_USER, handleGetUser),
    takeLatest(GET_JOBS, handleGetJobs),
    takeLatest(APPLY_JOB, handleSetApplication),
    takeLatest(UNAPPLY_JOB, handleUnSetApplication),
    takeLatest(GET_COMPANIES, handleGetCompanies),
    takeLatest(UPDATE_USER, handleUpdateUser),
  ]);
}
