import axios from "axios";

export function requestGetJobs(title) {
  return axios.request({
    method: "get",
    url: `http://localhost:3001/jobs`,
    headers: {Authorization: `Bearer ${localStorage.getItem("Token")}`},
    data: title,
  });
}
