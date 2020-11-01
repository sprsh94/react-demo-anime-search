import React, { useContext } from "react";
import { SearchContext } from "../contextProviders/SearchContext";

const SideBar = () => {
  const { recent } = useContext(SearchContext);
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
