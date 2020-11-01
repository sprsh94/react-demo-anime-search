import React, { useState } from "react";
import AnimeCard from "./AnimeCard";
import MangaCard from "./MangaCard";
import style from "../../../style/ResultCard.module.css";

const ResultCard = ({ name, image, details, type }) => {
  const [toggle, settoggle] = useState(false);
  const cardInfo = { display: toggle ? "none" : "block" };
  const cardDetails = { display: toggle ? "block" : "none" };
  return (
    <div className={style.card} onClick={() => settoggle(!toggle)}>
      <h3 className={style.title}>{name}</h3>
      <div style={cardInfo}>
        <img className={style.image} src={image} alt="" />
      </div>
      <div style={cardDetails}>
        {type === "anime" ? (
          <AnimeCard
            aired={details.aired}
            type={details.media_type}
            start={details.start_year}
            status={details.status}
          />
        ) : (
          <MangaCard
            published={details.published}
            type={details.media_type}
            start={details.start_year}
            status={details.status}
          />
        )}
      </div>
    </div>
  );
};

export default ResultCard;
