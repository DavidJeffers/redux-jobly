import React from "react";
import JobCard from "./JobCard";

/**
 * Takes in jobs and renders list of Job components
 *
 * props jobs
 */
function JobsList({jobs}) {
  return (
    <div className="JobList">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default JobsList;
