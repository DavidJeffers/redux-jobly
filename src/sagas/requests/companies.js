import axios from "axios";

export function requestGetCompanies(title) {
  return axios.request({
    method: "get",
    url: `http://localhost:3001/companies`,
    headers: {Authorization: `Bearer ${localStorage.getItem("Token")}`},
    data: title,
  });
}
