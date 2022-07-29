import React from "react";
import {Link} from "react-router-dom";
import "./Homepage.css";
import {useSelector} from "react-redux";

/**  Landing page
 *
 * context: currentUser
 *
 */
function Homepage() {
  const currentUser = useSelector((state) => state.user.user);

  return (
    <div className="Homepage">
      <h1>Jobly</h1>
      <p>All the jobs in one, convenient place</p>

      {currentUser ? (
        <h3>Welcome back {currentUser.username}</h3>
      ) : (
        <>
          <button className="btn btn-secondary">
            <Link className="linkText" to="/signup">
              Sign Up
            </Link>
          </button>
          <button className="btn btn-secondary">
            <Link className="linkText" to="/signin">
              Sign In
            </Link>
          </button>
        </>
      )}
    </div>
  );
}

export default Homepage;
