import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // DON'T MODIFY THIS TOKEN
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = {Authorization: `Bearer ${JoblyApi.token}`};
    const params = method === "get" ? data : {};

    try {
      return (await axios({url, method, data, params, headers})).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async getCompanies(name) {
    let res = await this.request(`companies`, {name});
    return res.companies;
  }

  static async getJobs(title) {
    let res = await this.request("jobs", {title});
    return res.jobs;
  }

  static async signUp(data) {
    let res = await this.request("auth/register", data, "post");
    return res.token;
  }
  static async signIn(data) {
    let res = await this.request("auth/token", data, "post");
    return res.token;
  }

  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  static async update(username, data) {
    let res = await this.request(`users/${username}`, data, "patch");
    return res.user;
  }

  static async apply(username, jobId) {
    let res = await this.request(`users/${username}/jobs/${jobId}`, {}, "post");
    return res.user;
  }

  static async unApply(username, jobId) {
    let res = await this.request(
      `users/${username}/jobs/${jobId}`,
      {},
      "delete"
    );
    return res;
  }
  // obviously, you'll add a lot here ...
}

export default JoblyApi;
