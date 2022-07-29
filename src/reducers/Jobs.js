export const GET_JOBS = "GET_JOBS";
const SET_JOBS = "SET_JOBS";

export const getJobs = (title) => ({
  type: GET_JOBS,
  title,
});

export const setJobs = (jobs) => ({
  type: SET_JOBS,
  jobs,
});

const initialState = {
  jobs: undefined,
};

export default function jobsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_JOBS:
      const {jobs} = action;
      return {...state, jobs};
    default:
      return state;
  }
}
