import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import createSagaMiddleware from "redux-saga";
import jobsReducer from "../reducers/Jobs";
import userReducer from "../reducers/User";
import {watcherSaga} from "../sagas/rootSaga";
import applicationReducer from "../reducers/setApplications";
import companiesReducer from "../reducers/Companies";

const reducer = combineReducers({
  user: userReducer,
  jobs: jobsReducer,
  applicationReducer,
  companies: companiesReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];
const composedEnhancer = compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(reducer, {}, composedEnhancer);

sagaMiddleware.run(watcherSaga);

export default store;
