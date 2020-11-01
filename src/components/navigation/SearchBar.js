import React, { useContext, useState } from "react";
import { withRouter } from "react-router-dom";
import { SearchContext } from "../contextProviders/SearchContext";

const SearchBar = ({ history }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { searchQuery, searchType, recent } = useContext(SearchContext);
  const setQuery = searchQuery[1];
  const [type, setType] = searchType;
  const [recentSearch, setRecentSearch] = recent;

  const updateSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  const updateType = (e) => {
    setType(e.target.value);
  };

  const runSearch = (e) => {
    e.preventDefault();
    if (searchTerm) {
      setQuery(searchTerm);
      setSearchTerm("");
      setRecentSearch([...recentSearch, searchTerm]);
      history.push("/search");
    } else {
      alert("Please enter some search text!");
    }
  };

  return (
    <form className="search-form" onSubmit={runSearch}>
      <select className="search-type" value={type} onChange={updateType}>
        <option value="anime">Anime</option>
        <option value="manga">Manga</option>
      </select>
      <input
        className="search-bar"
        type="text"
        value={searchTerm}
        onChange={updateSearchTerm}
      />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
};

export default withRouter(SearchBar);
