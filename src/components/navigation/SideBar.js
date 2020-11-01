import React, { useContext } from "react";
import { SearchContext } from "../contextProviders/SearchContext";

const SideBar = () => {
  const { searchQuery, searchType, recent } = useContext(SearchContext);
  const type = searchType[0];
  const recentSearch = recent[0];
  return (
    <div className="sideBar">
      <h2>Recent Search</h2>
      <ul>
        {recentSearch.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
