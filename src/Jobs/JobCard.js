import React, {useState} from "react";
import "./jobCard.css";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {postApplication, deleteApplication} from "../reducers/setApplications";
import _ from "underscore";
/**
 * displays job card
 *
 * props job
 *
 * state message
 *
 * context: UserContext
 *
 *
 */
function JobCard({job}) {
  // const {currentUser, setApplications, unApply} = useContext(UserContext);
  const currentUser = useSelector((state) => state.user.user, _.isEqual);
  const dispatch = useDispatch();

  const [message, setMessage] = useState(null);

  /** setApplication state with id, and show message */
  function handleApply(evt) {
    evt.preventDefault();
    try {
      dispatch(postApplication(currentUser.username, job.id));
      // setApplications(job.id);
    } catch (err) {
      setMessage(err);
      return;
    }
    setMessage("Applied successfully");
    const timeId = setTimeout(() => {
      // After 5 seconds set the show value to null
      setMessage(null);
    }, 2350);

    return () => {
      clearTimeout(timeId);
    };
  }

  function handleUnApply(evt) {
    evt.preventDefault();

    try {
      dispatch(deleteApplication(currentUser.username, job.id));
    } catch (err) {
      setMessage(err);
      return;
    }
    setMessage("Un-Applied successfully");
    const timeId = setTimeout(() => {
      // After 5 seconds set the show value to null
      setMessage(null);
    }, 2350);

    return () => {
      clearTimeout(timeId);
    };
  }
  return (
    <div className="JobCard">
      <h3>{job.title}</h3>
      <h3>{job.companyName}</h3>
      <h4>salary: {job.salary}</h4>
      <h4>equity: {job.equity}</h4>
      {currentUser.applications.includes(job.id)
        ? !message && (
            <button className="buttonD" onClick={handleUnApply}>
              Un-Apply
            </button>
          )
        : !message && (
            <button className="button" onClick={handleApply}>
              Apply
            </button>
          )}
      <p>{message}</p>
    </div>
  );
}

export default JobCard;
