import React, {useEffect, useState} from "react";
import JobsList from "./JobsList";
import JoblyApi from "../api";
import {useSelector} from "react-redux";

/** list of applied to jobs
 *
 * state: jobs, isLoading
 *
 * context: currentUser
 */
function Applied() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const currentUser = useSelector((state) => state.user.user);

  /** get jobs from db, filter out jobs that match currentUser job ids */
  useEffect(
    function getJobs() {
      async function getJobsAxios() {
        try {
          const jobs = await JoblyApi.getJobs();
          const appliedJobs = jobs.filter((job) =>
            currentUser.applications.includes(job.id)
          );
          setJobs(appliedJobs);
          setIsLoading(false);
        } catch (err) {}
      }
      getJobsAxios();
    },
    [currentUser]
  );

  if (isLoading) return <h1>loading...</h1>;

  return (
    <div
      style={{
        marginTop: "1rem",
        display: "inline-block",
      }}
    >
      <div
        style={{
          backgroundColor: "whitesmoke",

          marginTop: "15px",
          marginBottom: "20px",
          borderRadius: "5px",
        }}
      >
        <h1>Applied to {currentUser.applications.length} jobs</h1>
      </div>
      <JobsList jobs={jobs} />
    </div>
  );
}

export default Applied;
