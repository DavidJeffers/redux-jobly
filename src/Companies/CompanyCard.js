import React from "react";
import {Link} from "react-router-dom";
import "./companyCard.css";

/** Creates Company card
 *
 * prop: company
 *
 * Companies -> Company
 */

function CompanyCard({company}) {
  return (
    <Link id="link" to={`/companies/${company.handle}`}>
      <div className="CompanyCard">
        <h4 id="link">{company.name}</h4>
        <img src={company.logoUrl} alt=""></img>
        <p id="link">{company.description}</p>
        <span style={{padding: "5px"}} />
      </div>
    </Link>
  );
}

export default CompanyCard;
