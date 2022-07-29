const SET_APPLICATIONS = "SET_APPLICATIONS";

export const APPLY_JOB = "APPLY_JOB";
export const UNAPPLY_JOB = "UNAPPLY_JOB";

export const postApplication = (username, jobId) => ({
  type: APPLY_JOB,
  username,
  jobId,
});

export const deleteApplication = (username, jobId) => ({
  type: UNAPPLY_JOB,
  username,
  jobId,
});

// export const setApplication = (applied) => ({
//   type: SET_APPLICATIONS,
//   applied,
// });

const initialState = {
  applications: undefined,
};

export default function applicationReducer(state = initialState, action) {
  switch (action.type) {
    case SET_APPLICATIONS:
      const {applied} = action;
      return {...state, applications: state.jobs.jobs[applied]};
    default:
      return state;
  }
}
