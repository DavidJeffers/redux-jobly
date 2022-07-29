import React, {useEffect, useState} from "react";
import JobsList from "../Jobs/JobsList";
import JoblyApi from "../api";
import {useParams} from "react-router-dom";
import "./companyDetail.css";

/**
 * Gets company details and list of jobs from company
 *
 * state: Company Details + Jobslist + isLoading
 */
function CompanyDetail() {
  const [company, setCompany] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const {handle} = useParams();

  /** gets company from API, setCompany state, on handle change */
  useEffect(
    function getCompany() {
      async function getCompanyAxios() {
        const company = await JoblyApi.getCompany(handle);
        setCompany(company);
        setIsLoading(false);
      }
      getCompanyAxios();
    },
    [handle]
  );
  console.log(company);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="company-detail-card">
      <div className="company-detail">
        <h3 style={{marginTop: "0px"}}>{company.name}</h3>
        <img style={{margin: "0px"}} src={company.logoUrl} alt=""></img>
        <h6 style={{marginBottom: "0px"}}>{company.description}</h6>
      </div>
      <h2>Jobs</h2>
      <JobsList jobs={company.jobs} />
    </div>
  );
}

export default CompanyDetail;
