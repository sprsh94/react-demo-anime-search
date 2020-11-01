import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/AnimeSearch.png";
import SearchBar from "./SearchBar";

export const NavBar = (props) => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img className="logo" src={logo} alt="Anime Search" />
      </Link>
      <SearchBar />
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
};

export const NavItem = ({ item, path }) => {
  return (
    <li className="nav-item">
      <Link className="icon-button" to={path}>
        {item}
      </Link>
    </li>
  );
};
