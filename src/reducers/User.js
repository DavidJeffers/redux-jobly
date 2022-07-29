export const GET_USER = "GET_USER";
export const UPDATE_USER = "UPDATE_USER";
const SET_USER = "SET_USER";

export const getUser = (username) => ({
  type: GET_USER,
  username,
});

export const updateUser = (username, data) => ({
  type: UPDATE_USER,
  username,
  data,
});

export const setUser = (user) => ({
  type: SET_USER,
  user,
});

const initialState = {
  user: undefined,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      const {user} = action;
      return {...state, user};
    default:
      return state;
  }
}
