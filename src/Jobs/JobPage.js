import React, {useState, useEffect} from "react";
import JobsList from "./JobsList";
import Search from "../Common/Search";
import {useDispatch, useSelector} from "react-redux";
import {getJobs} from "../reducers/Jobs";

/**
 * Fetches all jobs and displays job list
 *
 * state: jobs, isLoading, searchTerm
 */
function JobPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();

  /** gets jobs array from API, setJobs state, on searchTerm state change  */
  useEffect(
    function getJobsEffect() {
      async function getJobsAxios(searchTerm) {
        try {
          dispatch(getJobs(searchTerm || undefined));
          // const jobs = await JoblyApi.getJobs(searchTerm || undefined);
          setIsLoading(false);
          setMessage(null);
        } catch (err) {
          setMessage(err);
        }
      }
      getJobsAxios(searchTerm);
    },
    [searchTerm, dispatch]
  );
  const jobs = useSelector((state) => state.jobs.jobs);
  /**  update setStateTerm state */
  function changeSearchTerm(term) {
    setSearchTerm(term);
    console.log(term);
  }

  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <div>
        <Search changeSearchTerm={changeSearchTerm} searchTerm={searchTerm} />
        <p className="error">{message}</p>
      </div>
      {jobs ? <JobsList jobs={jobs} /> : <div> try again</div>}
    </div>
  );
}

export default JobPage;
