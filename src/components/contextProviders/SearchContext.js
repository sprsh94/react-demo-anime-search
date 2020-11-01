import React, { useState, createContext } from "react";

export const SearchContext = createContext();

export const SearchProvider = (props) => {
  const [query, setQuery] = useState("naurto");
  const [type, setType] = useState("anime");
  const [recentSearch, setRecentSearch] = useState([]);
  return (
    <SearchContext.Provider
      value={{
        searchQuery: [query, setQuery],
        searchType: [type, setType],
        recent: [recentSearch, setRecentSearch]
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};
