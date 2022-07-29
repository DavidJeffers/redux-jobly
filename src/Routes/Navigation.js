import React from "react";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import "./nav.css";

/** links for logged in/ logged out user
 *
 * prop: logout
 *
 * context: currentUser
 *
 */
function Navigation({logout}) {
  const currentUser = useSelector((state) => state.user.user);
  return (
    <div className="Nav">
      <div className="nav-left">
        <NavLink
          className={({isActive}) => (isActive ? "linkActive" : "link")}
          to="/"
        >
          Home
        </NavLink>
      </div>
      {currentUser ? (
        <>
          <input type="checkbox" id="hamburger-input" class="burger-shower" />
          <label id="hamburger-menu" for="hamburger-input">
            <nav id="sidebar-menu">
              <ul style={{listStyle: "none"}}>
                <li>
                  <NavLink
                    className={({isActive}) =>
                      isActive ? "linkActive" : "link"
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({isActive}) =>
                      isActive ? "linkActive" : "link"
                    }
                    to="/companies"
                  >
                    Companies
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({isActive}) =>
                      isActive ? "linkActive" : "link"
                    }
                    to="/jobs"
                  >
                    Jobs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({isActive}) =>
                      isActive ? "linkActive" : "link"
                    }
                    to="/appliedjobs"
                  >
                    Applied
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({isActive}) =>
                      isActive ? "linkActive" : "link"
                    }
                    to="/profileform"
                  >
                    Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({isActive}) =>
                      isActive ? "linkActive" : "link"
                    }
                    to="/"
                    onClick={logout}
                  >
                    Log Out {currentUser.username}
                  </NavLink>
                </li>
              </ul>
            </nav>
          </label>
          <div className="nav-right">
            <NavLink
              className={({isActive}) => (isActive ? "linkActive" : "link")}
              to="/companies"
            >
              Companies
            </NavLink>

            <NavLink
              className={({isActive}) => (isActive ? "linkActive" : "link")}
              to="/jobs"
            >
              Jobs
            </NavLink>

            <NavLink
              className={({isActive}) => (isActive ? "linkActive" : "link")}
              to="/appliedjobs"
            >
              Applied
            </NavLink>

            <NavLink
              className={({isActive}) => (isActive ? "linkActive" : "link")}
              to="/profileform"
            >
              Profile
            </NavLink>

            <NavLink
              className={({isActive}) => (isActive ? "linkActive" : "link")}
              to="/"
              onClick={logout}
            >
              Log Out {currentUser.username}
            </NavLink>
          </div>
        </>
      ) : (
        <div className="nav-right">
          <NavLink
            className={({isActive}) => (isActive ? "linkActive" : "link")}
            to="/signup"
          >
            Sign Up
          </NavLink>

          <NavLink
            className={({isActive}) => (isActive ? "linkActive" : "link")}
            to="/signin"
          >
            Sign In
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Navigation;
