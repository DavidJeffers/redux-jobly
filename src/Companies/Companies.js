import React, {useEffect, useState} from "react";
import CompanyCard from "./CompanyCard";
import Search from "../Common/Search";
import {useDispatch, useSelector} from "react-redux";
import {getCompanies} from "../reducers/Companies";
import "./companyCard.css";

/** Shows list of companies
 *
 * state: [{companies}] , formData, isLoading, message
 *
 * Companies ->  {CompanyCard, Search}
 */

function Companies() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();
  /** gets initial companies on mount */
  useEffect(
    function getInitialCompanies() {
      async function getAllCompanies(searchTerm) {
        try {
          dispatch(getCompanies(searchTerm || undefined));
          setMessage(null);
        } catch (err) {
          setMessage(err);
        }
      }
      getAllCompanies(searchTerm);
      setIsLoading(false);
    },
    [searchTerm, dispatch]
  );

  const companies = useSelector((state) => state.companies.companies);
  /** setSearchTerm state  */
  function changeSearchTerm(term) {
    setSearchTerm(term);
  }

  if (isLoading) return <h1>loading...</h1>;

  return (
    <div>
      <Search changeSearchTerm={changeSearchTerm} searchTerm={searchTerm} />
      <p className="error">{message}</p>
      <div className="CompanyList">
        {companies &&
          companies.map((company) => (
            <div key={company.handle}>
              <CompanyCard key={company.handle} company={company} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Companies;
