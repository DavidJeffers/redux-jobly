import React from "react";
import "./search.css";

/** Search function, returns company or job
 *
 *props: search term, search (parent function)
 *
 * { Companies, JobPage } -> Search
 */
function Search({ changeSearchTerm, searchTerm }) {
  /** submits search term, calls parent function */
  function handleChange(evt) {
    changeSearchTerm(evt.target.value);
  }
  return (
    <form className="Search">
      <input
        className="searchBar"
        placeholder="Search"
        name="searchTerm"
        value={searchTerm}
        onChange={handleChange}
      ></input>

      <span style={{ padding: "5px" }} />
    </form>
  );
}

export default Search;
