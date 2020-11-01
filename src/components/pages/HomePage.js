import React, { useState } from "react";
import sasukeVsNaruto from "../../images/SasukevsNaruto.png";
import "../../style/index.css";

const Home = () => {
  const [card, setCard] = useState({});
  const [title, setTitle] = useState({});
  const [image, setImage] = useState({});
  const [descrition, setDescrition] = useState({});

  //Moving Animation Event
  const moveAnimation = (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 12;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 12;
    setCard({ transform: `rotateY(${xAxis}deg) rotateX(${yAxis}deg)` });
  };
  //Animate In
  const animateIn = (e) => {
    setCard({ transition: "none" });
    //Popout
    setTitle({ transform: "translateZ(150px)" });
    setImage({ transform: "translateZ(200px)" });
    setDescrition({ transform: "translateZ(100px)" });
  };

  //Animate out
  const animateOut = (e) => {
    setCard({
      transition: "all 0.5s ease",
      transform: `rotateY(0deg) rotateX(0deg)`,
    });
    //Popin
    setTitle({ transform: "translateZ(0px)" });
    setImage({ transform: "translateZ(0px)" });
    setDescrition({ transform: "translateZ(0px)" });
  };

  return (
    <div
      className="container"
      onMouseMove={moveAnimation}
      onMouseEnter={animateIn}
      onMouseLeave={animateOut}
    >
      <div className="card" style={card}>
        <div className="image">
          <div className="circle"></div>
          <img src={sasukeVsNaruto} alt="Sasuke v. Naruto" style={image} />
        </div>
        <div className="info">
          <h1 className="title" style={title}>
            Sasuke Vs. Naruto
          </h1>
          <p className="description" style={descrition}>
            Sasuke, despite going in with an intent to kill and having the
            Tailed Beasts at his aid, failed to defeat Naruto, who won him with
            his ideals in the end.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
