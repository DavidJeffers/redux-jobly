import {call, put} from "redux-saga/effects";
import {setCompanies} from "../../reducers/Companies";
import {requestGetCompanies} from "../requests/companies";

export function* handleGetCompanies(action) {
  try {
    const response = yield call(requestGetCompanies, action.title);
    const {data} = response;
    yield put(setCompanies(data.companies));
  } catch (error) {
    console.log(error);
  }
}
