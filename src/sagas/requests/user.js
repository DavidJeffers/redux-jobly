import axios from "axios";

export function requestGetUser(username) {
  return axios.request({
    method: "get",
    url: `http://localhost:3001/users/${username}`,
    headers: {Authorization: `Bearer ${localStorage.getItem("Token")}`},
  });
}
export function requestUpdateUser(username, data) {
  return axios.request({
    method: "patch",
    url: `http://localhost:3001/users/${username}`,
    headers: {Authorization: `Bearer ${localStorage.getItem("Token")}`},
    data: data,
  });
}
