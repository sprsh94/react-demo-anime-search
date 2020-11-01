import { useContext } from "react";
import AnimeSearch from "../SearchAnime";
import { SearchContext } from "../contextProviders/SearchContext";

const Search = () => {
  const { searchQuery, searchType } = useContext(SearchContext);
  const query = searchQuery[0];
  const type = searchType[0];

  return (
      <div className="search-result">
        <AnimeSearch className="card" type={type} searchTerm={query} />
      </div>
  );
};

export default Search;
