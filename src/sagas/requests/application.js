import axios from "axios";

export function requestSetApplication(username, jobId) {
  return axios.request({
    method: "post",
    url: `http://localhost:3001/users/${username}/jobs/${jobId}`,
    headers: {Authorization: `Bearer ${localStorage.getItem("Token")}`},
  });
}
export function requestUnSetApplication(username, jobId) {
  return axios.request({
    method: "delete",
    url: `http://localhost:3001/users/${username}/jobs/${jobId}`,
    headers: {Authorization: `Bearer ${localStorage.getItem("Token")}`},
  });
}
