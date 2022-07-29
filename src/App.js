import React from "react";
import "./App.css";
import {BrowserRouter} from "react-router-dom";
import RoutesList from "./Routes/RoutesList";
import Navigation from "./Routes/Navigation";
import {useEffect, useState} from "react";
import JoblyApi from "./api";
import jwt_decode from "jwt-decode";
import {useDispatch} from "react-redux";
import {getUser, setUser} from "./reducers/User";

/** Jobyly App
 *
 * state: user, token
 *
 */
function App() {
  const [token, setToken] = useState(localStorage.getItem("Token"));
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  /** updates user state on mount, on token change */
  useEffect(
    function decodeToken() {
      async function getUserEffect() {
        if (token) {
          try {
            const {username} = jwt_decode(token);
            dispatch(getUser(username));
            setIsLoading(false);
            // setUser(user);
          } catch (err) {
            setIsLoading(false);
            // setUser(null);
            console.log(err);
          }
        } else {
          setIsLoading(false);
        }
      }
      getUserEffect();
    },
    [token, dispatch]
  );
  /** signup user, updates db */
  async function signUp(signUpData) {
    let token = await JoblyApi.signUp(signUpData);
    setToken(token);
    localStorage.setItem("Token", token);
  }

  /** sign in user, updates db */
  async function signIn(signInData) {
    let token = await JoblyApi.signIn(signInData);
    setToken(token);
    localStorage.setItem("Token", token);
  }

  /** logout user */
  function logout() {
    localStorage.removeItem("Token");
    dispatch(setUser(null));
    setToken(null);
    setIsLoading(false);
  }

  /** update user state, updates db */
  // async function updateUser(data) {
  //   await JoblyApi.update(user.username, data);
  //   // setUser((user) => ({
  //   //   ...user,
  //   //   data,
  //   // }));
  // }

  /** sets user state applications, updates db  */
  // async function setApps(jobId) {
  //   await JoblyApi.apply(user.username, jobId);
  // }

  // async function unApply(jobId) {
  //   console.log(jobId);
  //   await JoblyApi.unApply(user.username, jobId);

  //   let apps = user.applications.filter((job) => job !== jobId);

  //   // setUser((user) => ({
  //   //   ...user,
  //   //   applications: apps,
  //   // }));
  // }
  // function updateLocation(location) {
  //   setLocation(location);
  // }

  if (isLoading) return <h1>loading...</h1>;

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation logout={logout} />
        <RoutesList signUp={signUp} signIn={signIn} isLoading={isLoading} />
      </BrowserRouter>
    </div>
  );
}

export default App;
