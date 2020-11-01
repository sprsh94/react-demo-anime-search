import React, { useEffect, useState } from "react";
import ResultCard from "./pages/cards/ResultCard";

const AnimeSearch = ({ type, searchTerm }) => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    search();
  }, [searchTerm]);

  const search = async () => {
    const response = await fetch(
      `/search/prefix.json?type=${type}&keyword=${searchTerm}`
    );
    const data = await response.json();
    setCard(data.categories[0].items);
    console.log(data.categories[0].items);
  };

  return (
    <React.Fragment>
      {card.map((item) => (
        <ResultCard
          key={item.id}
          name={item.name}
          image={item.image_url}
          details={item.payload}
          type={type}
        />
      ))}
    </React.Fragment>
  );
};

export default AnimeSearch;
